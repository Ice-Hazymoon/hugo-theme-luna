import FlexSearch from 'modules/flexsearch';

// 搜索插件
if (window.initSearch) {
    window.initSearch();
} else {
    window.initSearch = initSearch;
    window.initSearch();
}
if (window.Luna.swup) {
    window.Luna.swup.on('pageView', async function(n) {
        window.initSearch();
    })
}
async function initSearch() {
    const node = document.getElementById('search-input');
    if (!node) return false;

    let data;
    const searchIndexCache = sessionStorage.getItem(`searchIndex_${window.__theme.lang}`);
    
    if (searchIndexCache) {
        data = JSON.parse(searchIndexCache);
    } else {
        try {
            data = await fetch(`${window.__theme.cdn}${location.pathname.replace(/\/$/, '')}/index.json?v=${+new Date()}`).then(e => e.json());
            if (Array.isArray(data[0])) {
                data = data.map(item => {
                    return {
                        title: item[0],
                        date: item[1],
                        permalink: item[2],
                        content: item[3]
                    }
                })
            }
            sessionStorage.setItem(`searchIndex_${window.__theme.lang}`, JSON.stringify(data));
        } catch (error) {
            alert(window.__theme.i18n.searchLoadFailure);
            node.setAttribute('placeholder', window.__theme.i18n.searchLoadFailure);
            console.log(error);
            return false;
        }
    }
    node.setAttribute('placeholder', window.__theme.i18n.searchInput);
    node.removeAttribute('disabled');
    const index = new FlexSearch.Index({
        // cache: true,
        tokenize: "full"
    });
    data.forEach((item, i) => {
        index.add(i, `${item.title}-${item.content}`);
    })
    let cplock = false;
    node.addEventListener('compositionstart', () => cplock = true)
    node.addEventListener('compositionend', (event) => {
        cplock = false
        if (!cplock) {
            render((event.target as HTMLInputElement).value.trim())
        }
    })
    node.addEventListener('input', (event) => {
        if (!cplock) {
            render((event.target as HTMLInputElement).value.trim())
        }
    })
    function render(value) {
        const results = index.search(value).map(n => {
            return data[n]
        });
        if (value) {
            const html = `<div class="p-6 pb-0">
                <div class=" font-bold text-2xl border-b dark:border-darkBorder pb-4">
                    ${window.__theme.i18n.searchResults(results.length, value)}
                </div>
                ` + results.map(n => {
                    const Regex = new RegExp(`.{0,50}?(${value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})(.{0,50})?`, 'mig');
                    const ContentRegex = n.content.match(Regex)
                    const TitleRegex = n.title.match(Regex)
                    if (ContentRegex || TitleRegex) {
                        const titleHTML = TitleRegex ? TitleRegex[0].replace(new RegExp(value, 'mi'), x => {
                            return `<span class="text-theme">${x}</span>`
                        }) : n.title;
                        const contentHTML = ContentRegex ? ContentRegex[0].replace(new RegExp(value, 'mi'), x => {
                            return `<span class="text-theme">${x}</span>`
                        }) : n.content.slice(0, 50);
                        return `<a
                            href="${n.permalink}"
                            class="border-b dark:border-darkBorder py-4 block search-results-items"
                        >
                            <div class=" text-2xl mb-2 line-clamp-1 transition duration-300 ease-[ease]">${titleHTML || window.__theme.i18n.untitled}</div>
                            <div class=" mb-2 line-clamp-2">${contentHTML}...</div>
                            <div class=" text-xs flex items-center text-gray-500 dark:text-darkTextPlaceholder">
                                <i class="eva eva-clock-outline mr-1"></i>
                                <span>${n.date}</span>
                            </div>
                        </a>`
                    } else {
                        return ''
                    }
                }).join('') + `
            </div>`
            document.getElementById('search-image').classList.add('hidden');
            document.getElementById('search-results').innerHTML = html;
        } else {
            document.getElementById('search-image').classList.remove('hidden');
            document.getElementById('search-results').innerHTML = '';
        }
    }
}