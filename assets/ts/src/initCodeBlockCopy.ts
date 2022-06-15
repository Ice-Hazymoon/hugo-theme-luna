export default function() {
    const highlightList = Array.from(document.querySelectorAll('.highlight'));
    for (let index = 0; index < highlightList.length; index++) {
        const el = highlightList[index];
        if (el.querySelector('[data-clipboard-text]')) continue;
        const header = document.createElement('header');
        const codeEl = el.querySelector('pre code[data-lang]') as HTMLElement;
        const lang = codeEl.getAttribute('data-lang');
        let code = el.querySelector('table td:nth-child(2) pre') as HTMLElement;
        if (!code) code = el.querySelector('pre') as HTMLElement;
        const codeText = code.textContent as string;

        header.innerHTML = `<div><span></span> <span></span> <span></span> ${lang}</div><i title="${window.__theme.i18n.copy.copyCode}" class="eva eva-clipboard-outline"></i>`
        const btn = header.querySelector('i.eva') as HTMLElement;
        el.prepend(header);
        btn.setAttribute('data-clipboard-text', codeText);
    }
}