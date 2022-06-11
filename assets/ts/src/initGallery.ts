export default function() {
    const figuresEl = Array.from(document.querySelectorAll('.gallery-box figure.gallery-image')) as HTMLElement[];
    let currentGallery = [] as HTMLElement[];
    if (figuresEl.length < 2) return false;
    for (const figure of figuresEl) {
        const parentElement = figure.parentElement as HTMLElement;
        if (parentElement.classList.contains('gallery')) return false;
        if (!currentGallery.length) {
            /// First iteration
            currentGallery = [figure];
        } else if (figure.previousElementSibling === currentGallery[currentGallery.length - 1]) {
            /// Adjacent figures
            currentGallery.push(figure);
        } else if (currentGallery.length) {
            /// End gallery
            wrap(currentGallery);
            currentGallery = [figure];
        }
    }
    if (currentGallery.length > 0) {
        wrap(currentGallery);
    }

    function wrap(figures) {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'gallery';
    
        const parentNode = figures[0].parentNode,
            first = figures[0];
    
        parentNode.insertBefore(galleryContainer, first)
    
        for (const figure of figures) {
            galleryContainer.appendChild(figure);
        }
    }
}