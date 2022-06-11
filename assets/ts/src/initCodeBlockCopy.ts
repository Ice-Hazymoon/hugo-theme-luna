export default function() {
    const highlightList = Array.from(document.querySelectorAll('.highlight'));
    for (let index = 0; index < highlightList.length; index++) {
        const el = highlightList[index];
        if (el.querySelector('[data-clipboard-text]')) continue;
        const header = document.createElement('header');
        const codeEl = el.querySelector('pre code[data-lang]');
        const lang = codeEl.getAttribute('data-lang');
        const code = el.querySelector('table td:nth-child(2) pre').textContent;

        header.innerHTML = `<div><span></span> <span></span> <span></span> ${lang}</div><i title="${window.__theme.i18n.copyCode}" class="eva eva-clipboard-outline"></i>`
        const btn = header.querySelector('i.eva');
        el.prepend(header);
        btn.setAttribute('data-clipboard-text', code);
    }
}