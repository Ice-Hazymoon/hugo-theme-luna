// https://github.com/CaiJimmy/hugo-theme-stack/blob/master/assets/ts/scrollspy.ts

type IdToElementMap = { [key: string]: HTMLElement };

function buildIdToNavigationElementMap(navigation: NodeListOf<HTMLElement>): IdToElementMap {
    const sectionLinkRef: IdToElementMap = {};
    navigation.forEach((navigationElement: HTMLElement) => {
        const link = navigationElement.querySelector("a") as HTMLElement;
        const href = link.getAttribute("href") as string;
        if (href.startsWith("#")) {
            sectionLinkRef[href.slice(1)] = navigationElement;
        }
    });

    return sectionLinkRef;
}

function renderToc() {
    const Toc = document.getElementById('TableOfContents');

    const headers = Array.from(document.querySelectorAll('.article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]')) as HTMLElement[];

    let sectionsOffsets = [] as { id: string, offset: number }[];
    headers.forEach((header: HTMLElement) => { sectionsOffsets.push({ id: header.id, offset: header.offsetTop }) });
    sectionsOffsets.sort((a, b) => a.offset - b.offset);

    let navigation = document.querySelectorAll('#TableOfContents li') as NodeListOf<HTMLElement>;

    let idToNavigationElement: IdToElementMap = buildIdToNavigationElementMap(navigation);

    let activeSectionLink: HTMLElement;

    function scrollHandler() {
        const Toc = document.getElementById('TableOfContents');
        if (!Toc || window.innerWidth < 1536) {
            document.querySelectorAll('.toc-active').forEach(el => {
                el.classList.remove('toc-active')
            })
            document.removeEventListener('scroll', scrollHandler);
            return false;
        }

        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        let newActiveSection: HTMLElement | undefined;

        sectionsOffsets.forEach((section) => {
            if (scrollPosition >= section.offset - 20) {
                newActiveSection = document.getElementById(section.id) as HTMLElement;
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
                const a = newActiveSectionLink.querySelector('a');
                a.classList.add('toc-active');
                a?.focus();
            }
            activeSectionLink = newActiveSectionLink;
        }
    }

    if (Toc && window.innerWidth >= 1536) {
        document.addEventListener("scroll", scrollHandler);
        Toc.classList.add('toc-scroll');
    } else {
        document.removeEventListener('scroll', scrollHandler);
        Toc?.classList.remove('toc-scroll');
    }
}

export default renderToc;
