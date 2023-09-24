// pjax
import Swup from 'swup';
import SwupFadeTheme from '../modules/swupFadeTheme';
import SwupProgressPlugin from '../modules/swupProgressPlugin';
import SwupGaPlugin from '../modules/swupGaPlugin';
import SwupScriptsPlugin from '../modules/swupScriptsPlugin';
import SwupMorphPlugin from '../modules/swupMorphPlugin';
import SwupHeadPlugin from '../modules/swupHeadPlugin';

export default function () {
    if (!window.__theme.pjax) return false;
    const swup = new Swup({
        cache: true,
        plugins: [
            new SwupMorphPlugin({
                containers: ['#i18nlist'],
            }),
            new SwupFadeTheme(),
            new SwupProgressPlugin(),
            new SwupScriptsPlugin({
                optin: true,
                // head: false,
                // body: false
            }),
            new SwupHeadPlugin({
                persistAssets: true,
            }),
        ].concat(window.__theme.googleAnalytics ? [new SwupGaPlugin() as any] : []) as any,
        animateHistoryBrowsing: true,
        linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    });

    this.swup = swup;

    swup.hooks.on('page:view', async function (n) {
        await window.Luna.initHugoEncrypt();
        window.Luna.initActiveMenu();
        window.Luna.renderPost();

        const backTopEl = document.getElementById('back-top');

        if (!n && backTopEl) {
            backTopEl.click();
        }
    });
}
