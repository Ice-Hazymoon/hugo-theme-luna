export default async function() {
    const storageKey = location.pathname + "password";
    const encryption_blocks = Array.from(document.querySelectorAll("hugo-encrypt"));
    const userStorage = window.__theme.hugoEncrypt.userStorage;
    function deriveKey(passphrase, salt) {
        salt = salt || crypto.getRandomValues(new Uint8Array(8));
        return crypto.subtle
            .importKey("raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"])
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
    function decrypt(passphrase, saltIvCipherHex) {
        const [salt, iv, data] = saltIvCipherHex.split("-").map(hexStr => new Uint8Array(hexStr.match(/.{2}/g).map(h => parseInt(h, 16))));
        return deriveKey(passphrase, salt)
            .then(([key]) => crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data))
            .then(v => new TextDecoder("utf-8").decode(new Uint8Array(v)));
    }
    async function digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    async function hugoDecrypt(password, type, el, id) {
        const cipher = el.querySelector('cipher-text');
        try {
            const decrypted_text = await decrypt(password, cipher.innerText);
            const sha1_sum = await digestMessage(decrypted_text.replace(/\r?\n?[^\r\n]*$/, ""));
            if ( decrypted_text.includes(sha1_sum) ) {
                el.querySelector(".hugo-encrypt-encryption-notice").remove();
                cipher.outerHTML = decrypted_text;
                userStorage.setItem(storageKey + id, password);
                const sha1_sum_eL = document.querySelector(`#r${id} .hugo-encrypt-sha1sum`) as HTMLElement;
                sha1_sum_eL.innerHTML = "Success: " + sha1_sum;
                console.log(`Decryption successful. Storing password in ${userStorage}.`);
            }
        } catch (error) {
            if (type === "input") {
                el.querySelector(".hugo-encrypt-input-response").innerHTML = window.__theme.hugoEncrypt.wrongPasswordText;
                console.log(window.__theme.hugoEncrypt.wrongPasswordText, error);
            } else if (type === "storage") {
                userStorage.removeItem(location.pathname + "password");
                console.log("Password changed. Clearing userStorage.", error);
            }
        }
    };

    const hugoEncryptForms = Array.from(document.querySelectorAll('.hugo-encrypt-form')) as HTMLElement[];
    for (let index = 0; index < hugoEncryptForms.length; index++) {
        const button = hugoEncryptForms[index].querySelector('.hugo-encrypt-button') as HTMLElement;
        const input = hugoEncryptForms[index].querySelector('.hugo-encrypt-input') as HTMLInputElement;
        const id = button?.getAttribute('data-hugo-encrypt-id');
        const el = document.getElementById(`r${id}`) as HTMLElement;
        input.addEventListener('keyup', async (e) => {
            if (e.key === "Enter") {
                const password = input.value;
                await hugoDecrypt(password, 'input', el, id);
                this.renderPost();
            }
        })
        button.addEventListener('click', async (e) => {
            const password = input.value;
            await hugoDecrypt(password, 'input', el, id);
            this.renderPost();
        })
    }

    if (encryption_blocks.length) {
        for (const block of encryption_blocks) {
            const id = block.id.replace(/^r/, "");
            const password = userStorage.getItem(storageKey + id);
            if (password) {
                await hugoDecrypt(password, "storage", block, id);
                this.renderPost();
            }
        }
    }
}