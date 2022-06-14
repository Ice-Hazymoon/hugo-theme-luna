// https://github.com/Ice-Hazymoon/bionic-reading.user.js

const config = {
    autoBionic: window.__theme.bionicReading.autoBionic,
    skipLinks: window.__theme.bionicReading.skipLinks,
    excludeWords: ['is', 'and', 'as', 'if', 'the', 'of', 'to', 'be', 'for', 'this'].concat(window.__theme.bionicReading.excludeWords),
};

const excludeNodeNames = [
    'script', 'style', 'xmp',
    'input', 'textarea', 'select',
    'pre', 'code',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'b', 'strong',
    'svg', 'embed',
    'img', 'audio', 'video',
    'canvas',
].concat(window.__theme.bionicReading.excludeNodeNames);

const excludeClasses = [
    'highlight',
    'katex',
    'katex-display'
].concat(window.__theme.bionicReading.excludeClasses);

const linkRegex = /^https?:\/\//;
const excludeClassesRegexi = new RegExp(excludeClasses.join('|'), 'i');

const enCodeHTML = s => s.replace(/[\u00A0-\u9999<>\&]/g, w => '&#' + w.charCodeAt(0) + ';');

let gather = el => {
    let textEls = [] as HTMLElement[];
    el.childNodes.forEach(el => {
        if (el.isEnB) return;
        if (el.originEl) return;

        if (el.nodeType === 3) {
            textEls.push(el);
        } else if (el.childNodes) {
            const nodeName = el.nodeName.toLowerCase();
            if (excludeNodeNames.includes(nodeName)) return;
            if (config.skipLinks) {
                if (nodeName === 'a') {
                    if (linkRegex.test(el.textContent)) return;
                }
            }
            if (el.getAttribute) {
                if (el.getAttribute('class') && excludeClassesRegexi.test(el.getAttribute('class'))) return;

                // 跳过所有可编辑元素
                if (el.getAttribute('contentEditable') === 'true') return;
            }

            textEls = textEls.concat(gather(el))
        }
    })
    return textEls;
};

const engRegex = /[a-zA-Z][a-z]+/;
const engRegexg = new RegExp(engRegex, 'g');

const getHalfLength = word => {

    let halfLength;
    if (/ing$/.test(word)) {
        halfLength = word.length - 3;
    } else if (word.length < 5) {
        halfLength = Math.floor(word.length * 0.5);
    } else {
        halfLength = Math.ceil(word.length * 0.5);
    }
    return halfLength;
}

interface HTMLBionicElement extends HTMLElement {
    originEl: HTMLElement;
    replaceEl: HTMLElement;
    isEnB: boolean;
}

const replaceTextByEl = el => {
    const text = el.data;
    if (!engRegex.test(text)) return;

    if (!el.replaceEl) {
        const spanEl = document.createElement('bionic') as HTMLBionicElement;
        spanEl.isEnB = true;
        spanEl.innerHTML = enCodeHTML(text).replace(engRegexg, word => {
            if (config.excludeWords.length && config.excludeWords.includes(word)) return word;

            const halfLength = getHalfLength(word);
            return '<bbb>' + word.substr(0, halfLength) + '</bbb>' + word.substr(halfLength)
        })
        spanEl.originEl = el;
        el.replaceEl = spanEl;
    }

    el.after(el.replaceEl);
    el.remove();
};

const bionic = () => {
    const textEls = gather(document.querySelector('.article-content'));
    window.Luna._isBionic = true;
    textEls.forEach(replaceTextByEl);
}

const revoke = () => {
    const els = [...document.querySelectorAll('bionic')] as HTMLBionicElement[];
    els.forEach(el => {
        const { originEl } = el;
        if (!originEl) return;

        el.after(originEl);
        el.remove();
    })
    window.Luna._isBionic = false;
};

export default function() {
    this._isBionic = false;
    const bionicReadingEL = document.getElementById('bionicReading')
    if (window.__theme.bionicReading.enabled && bionicReadingEL) {
        if (config.autoBionic) {
            bionic();
        }
        bionicReadingEL.addEventListener('click', () => {
            if (this._isBionic) {
                bionicReadingEL.querySelector('svg').classList.remove('text-theme');
                revoke();
            } else {
                bionicReadingEL.querySelector('svg').classList.add('text-theme');
                bionic();
            }
        });
    }
}