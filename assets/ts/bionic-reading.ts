// https://github.com/Ice-Hazymoon/bionic-reading.user.js

const excludeTagNames = [
    'script','style','xmp',
    'input','textarea','select',
    'pre','code',
    'h1','h2','h3','h4','h5','h6',
    'b','strong',
].map(a=>a.toUpperCase());

const excludeClasses = [
    'highlight',
    'katex-display'
]


window.isBionic = false;

const enCodeHTML = s=> s.replace(/[\u00A0-\u9999<>\&]/g,w=>'&#'+w.charCodeAt(0)+';');


let gather = el=>{
    let textEls = [];
    el.childNodes.forEach(el=>{
        if(el.isEnB) return;
        if(el.originEl) return;

        if(el.nodeType === 3){
            textEls.push(el);
        }else if(el.childNodes){
            if(excludeTagNames.includes(el.tagName)) return;
            if(excludeClasses.some(c=>el.classList.contains(c))) return;

            // Skip DIV Code Frame
            if(el.getAttribute && el.getAttribute('class') && el.getAttribute('class').includes('highlight')) return;
            
            textEls = textEls.concat(gather(el))
        }
    })
    return textEls;
};

const engRegex  = /[a-zA-Z][a-z]+/;
const engRegexg = /[a-zA-Z][a-z]+/g;
let replaceTextByEl = el=>{
    const text = el.data;
    if(!engRegex.test(text))return;

    if(!el.replaceEl){
        const spanEl = document.createElement('bionic');
        spanEl.isEnB = true;
        spanEl.innerHTML = enCodeHTML(text).replace(engRegexg,word=>{
            let halfLength;
            if(/ing$/.test(word)){
                halfLength = word.length - 3;
            }else if(word.length<5){
                halfLength = Math.floor(word.length/2);
            }else{
                halfLength = Math.ceil(word.length/2);
            }
    
            return '<bbb>'+word.substr(0,halfLength)+'</bbb>'+word.substr(halfLength)
        })
        spanEl.originEl = el;
        el.replaceEl = spanEl;
    }

    el.after(el.replaceEl);
    el.remove();
};

const bionic = () =>{
    const textEls = gather(document.querySelector('.article-content'));

    window.isBionic = true;

    textEls.forEach(replaceTextByEl);
}

const revoke = () =>{
    const els = [...document.querySelectorAll('bionic')] as HTMLElement[];

    els.forEach(el=>{
        const { originEl } = el;
        if(!originEl) return;

        el.after(originEl);
        el.remove();
    })

    window.isBionic = false;
};

export default {
    bionic,
    revoke
}