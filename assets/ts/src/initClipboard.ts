import ClipboardJS from "clipboard";

export default function() {
    if (!document.querySelector('[data-clipboard-text]')) return false;
    if (this._clipboard) {
        this._clipboard.destroy();
    }
    this._clipboard = new ClipboardJS('[data-clipboard-text]');
    this._clipboard.on('success', function(e) {
        // alert(window.__theme.i18n.copy.success);
        e.trigger.classList.remove('eva-clipboard-outline');
        e.trigger.classList.add('eva-checkmark-outline');
        setTimeout(() => {
            e.trigger.classList.remove('eva-checkmark-outline');
            e.trigger.classList.add('eva-clipboard-outline');
        }, 2000);
    })
    this._clipboard.on('error', function(e) {
        alert(window.__theme.i18n.copy.failed);
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
}