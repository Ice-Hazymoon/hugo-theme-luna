// https://github.com/CaiJimmy/hugo-theme-stack/blob/master/assets/ts/scrollspy.ts

type IdToElementMap = { [key: string]: HTMLElement };

function buildIdToNavigationElementMap(navigation: NodeListOf<Element>): IdToElementMap {
    const sectionLinkRef: IdToElementMap = {};
    navigation.forEach((navigationElement: HTMLElement) => {
        const link = navigationElement.querySelector("a");
        const href = link.getAttribute("href");
        if (href.startsWith("#")) {
            sectionLinkRef[href.slice(1)] = navigationElement;
        }
    });

    return sectionLinkRef;
}

function renderToc() {
    const Toc = document.getElementById('TableOfContents');

    const headers = Array.from(document.querySelectorAll('.article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]'));

    let sectionsOffsets = [];
    headers.forEach((header: HTMLElement) => { sectionsOffsets.push({ id: header.id, offset: header.offsetTop }) });
    sectionsOffsets.sort((a, b) => a.offset - b.offset);

    let navigation = document.querySelectorAll('#TableOfContents li');

    let idToNavigationElement: IdToElementMap = buildIdToNavigationElementMap(navigation);

    let activeSectionLink: Element;

    function scrollHandler() {
        const Toc = document.getElementById('TableOfContents');
        if (!Toc || window.innerWidth < 1536) {
            console.log('not')
            document.querySelectorAll('.toc-active').forEach(el => {
                console.log(el)
                el.classList.remove('toc-active')
            })
            document.removeEventListener('scroll', scrollHandler);
            return false;
        }

        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        let newActiveSection: HTMLElement | undefined;

        sectionsOffsets.forEach((section) => {
            if (scrollPosition >= section.offset - 20) {
                newActiveSection = document.getElementById(section.id);
            }
        });

        let newActiveSectionLink: HTMLElement | undefined
        if (newActiveSection) {
            newActiveSectionLink = idToNavigationElement[newActiveSection.id];
        }

        if (newActiveSection && !newActiveSectionLink) {
            console.debug("No link found for section", newActiveSection);
        } else if (newActiveSectionLink !== activeSectionLink) {
            if (activeSectionLink)
                activeSectionLink.querySelector('a').classList.remove('toc-active');
            if (newActiveSectionLink) {
                newActiveSectionLink.querySelector('a').classList.add('toc-active');
            }
            activeSectionLink = newActiveSectionLink;
        }
    }

    if (Toc && window.innerWidth >= 1536) {
        document.addEventListener("scroll", scrollHandler);
    } else {
        document.removeEventListener('scroll', scrollHandler)
    }
}

export default renderToc;
