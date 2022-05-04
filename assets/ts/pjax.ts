import Swup from 'modules/swup';
import SwupFadeTheme from 'modules/SwupFadeTheme';
import SwupProgressPlugin from 'modules/SwupProgressPlugin';
import SwupGaPlugin from 'modules/SwupGaPlugin';
import SwupScriptsPlugin from 'modules/SwupScriptsPlugin';
import SwupMorphPlugin from 'modules/SwupMorphPlugin';

window.addEventListener('load', () => {
    const swup = new Swup({
        cache: true,
        plugins: [new SwupMorphPlugin({
            containers: ['#i18nlist']
        }), new SwupFadeTheme(), new SwupProgressPlugin(), new SwupScriptsPlugin({
            optin: true,
            // head: false,
            // body: false
        })].concat(window.__theme.googleAnalytics ? [new SwupGaPlugin()] : []),
        animateHistoryBrowsing: true,
        linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    });
    
    window.Luna.swup = swup;
    
    swup.on('pageView', async function(n) {
        await window.Luna.hugoEncrypt();
        window.Luna.initSearch();
        window.Luna.initActiveMenu();

        window.Luna.renderPost();
    
        if (!n && document.getElementById('back-top')) {
            document.getElementById('back-top').click();
        }
    });
})