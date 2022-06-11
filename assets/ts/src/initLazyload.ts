import LazyLoad from "lazyload";

export default function() {
    if (window.__theme.lazyload) {
        this._lazyLoad = new LazyLoad({
            elements_selector: '[data-lazyload]',
            class_loading: 'lazy-loading',
            class_error: 'lazy-error',
            class_loaded: 'lazy-loaded',
            unobserve_entered: true,
            callback_loaded: (el) => {
                if (window.__theme.imageZoom) {
                    setTimeout(() => {
                        if (el.hasAttribute('data-zoomable')) {
                            el.setAttribute('src', el.currentSrc || el.getAttribute('src'));
                            el.removeAttribute('srcset');
                            this._zoom.attach(el)
                        }
                    }, 500);
                }
            },
            callback_error: (el) => {
                const errorImageURL = window.__theme.assets.error_svg;
                el.setAttribute("src", errorImageURL);
                el.setAttribute("srcset", errorImageURL);
                if (el.previousSibling.tagName === 'SOURCE') {
                    el.previousSibling.setAttribute("src", errorImageURL);
                    el.previousSibling.setAttribute("srcset", errorImageURL);
                }
            }
        })
    } else {
        this._noLazyload = (zoom: boolean) => {
            const images = Array.from(document.querySelectorAll('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)')) as HTMLImageElement[];
            images.forEach(el => {
                el.setAttribute('src', el.currentSrc || (el.getAttribute('src') as string));
                el.removeAttribute('srcset');
                if (zoom) this._zoom.attach(el);
            })
        }
        this._lazyLoad = {
            update: () => {
                if (window.__theme.imageZoom) {
                    this._noLazyload(true);
                }
            }
        }
    }
}