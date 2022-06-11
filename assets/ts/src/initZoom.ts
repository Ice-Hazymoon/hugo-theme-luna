import mediumZoom from "medium-zoom";

export default function() {
    if (window.__theme.imageZoom) {
        if (!window.__theme.lazyload) {
            this._noLazyload(false);
        }
        this._zoom = mediumZoom('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)', {
            background: 'var(--color-zoom-bg)',
        });
    }
    this._updateZoom = () => {
        if (!window.__theme.imageZoom) return false;
        if (!window.__theme.lazyload) {
            this._noLazyload(true);
        }
        // this._zoom.detach();
        this._zoom.attach('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)');
    }
}