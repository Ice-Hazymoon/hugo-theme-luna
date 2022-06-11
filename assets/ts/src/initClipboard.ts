import ClipboardJS from "../modules/clipboard";

export default function() {
    if (!document.querySelector('[data-clipboard-text]')) return false;
    if (this._clipboard) {
        this._clipboard.destroy();
    }
    this._clipboard = new ClipboardJS('[data-clipboard-text]');
    this._clipboard.on('success', function(e) {
        alert(window.__theme.i18n.copySuccess);
    })
    this._clipboard.on('error', function(e) {
        alert(window.__theme.i18n.copyFailed);
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
}