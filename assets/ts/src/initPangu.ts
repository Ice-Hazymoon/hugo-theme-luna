import pangu from "pangu";

export default function() {
    if (window.__theme.pangu) {
        pangu.spacingElementById('swup');
    }
}