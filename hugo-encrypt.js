const fs = require('fs');
const crypto = require('crypto').webcrypto;

// https://gist.github.com/Ice-Hazymoon/beebd0fb81c3a005f18d5ceee67da013
// https://github.com/Izumiko/hugo-encrypt/blob/master/hugo-encrypt.go
function deriveKey(passphrase, salt) {
    salt = salt || crypto.getRandomValues(new Uint8Array(8));
    return crypto.subtle
      .importKey("raw", str2buf(passphrase), "PBKDF2", false, ["deriveKey"])
      .then(key =>
        crypto.subtle.deriveKey(
          { name: "PBKDF2", salt, iterations: 1000, hash: "SHA-256" },
          key,
          { name: "AES-GCM", length: 256 },
          false,
          ["encrypt", "decrypt"],
        ),
      )
      .then(key => [key, salt]);
}

function str2buf(str) {
    return new TextEncoder("utf-8").encode(str);
}

function buf2hex(buffer) {
    return Array.prototype.slice
      .call(new Uint8Array(buffer))
      .map(x => [x >> 4, x & 15])
      .map(ab => ab.map(x => x.toString(16)).join(""))
      .join("");
  }

function encrypt(passphrase, plaintext) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const data = str2buf(plaintext);
    return deriveKey(passphrase).then(([key, salt]) =>
        crypto.subtle
            .encrypt({ name: "AES-GCM", iv }, key, data)
            .then(ciphertext => `${buf2hex(salt)}-${buf2hex(iv)}-${buf2hex(ciphertext)}`),
    );
}

function readFileList(dir, filelist = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const pathname = `${dir}/${file}`;
        if (fs.statSync(pathname).isDirectory()) {
            readFileList(pathname, filelist);
        } else {
            filelist.push(pathname);
        }
    });
    return filelist;
}

async function encryptPage(path) {
    const content = fs.readFileSync(path, 'utf8');
    const regex = /<cipher-text.+?data-content="?((?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?)"?.+?><\/cipher-text>/gm;
    const ciphers = content.match(regex);
    if (ciphers && ciphers.length) {
        for (let index = 0; index < ciphers.length; index++) {
            const cipher = ciphers[index];
            let cipherId = cipher.match(/data-cipher-id="?(.+?)"? /)[1].trim();

            console.log('Start encryption:', path, 'ID:', cipherId);
            const match = /<cipher-text.+?data-content="?((?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?)"?.+?><\/cipher-text>/gm.exec(cipher);
            const cipherText = match[1];
            let password = cipher.match(/data-password="?(.+?)"? /);
            // Skip empty passwords or encrypted pages
            if (password) {
                password = password[1].trim();
            } else {
                console.log('Password is empty or encrypted:', path, 'ID:', cipherId);
                continue;
            }
            const plainText = Buffer.from(cipherText, 'base64').toString('utf8');
            const sha1sum = buf2hex(await crypto.subtle.digest("SHA-1", str2buf(plainText)));
            const encryptThis = `${plainText}\n<div class='hugo-encrypt-sha1sum'>${sha1sum}</div>`
            const encrypted = await encrypt(password, encryptThis);
            const newContent = fs.readFileSync(path, 'utf8').replace(cipher, `<cipher-text class=hidden>${encrypted}</cipher-text>`);
            fs.writeFileSync(path, newContent, 'utf8');
            console.log('Encryption success:', path, 'ID:', cipherId);
        }
    }
}

async function main() {
    console.log('Start encrypting articles...');
    let publicPath = '../../public';
    if (!fs.existsSync(publicPath)) publicPath = './exampleSite/public';
    const fileList = readFileList(publicPath, []);
    const htmlList = fileList.filter(file => file.endsWith('.html'));
    for (let i = 0; i < htmlList.length; i++) {
        const path = htmlList[i];
        await encryptPage(path);
    }
}

main();
