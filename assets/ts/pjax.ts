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
        }), new SwupFadeTheme(), new SwupProgressPlugin(), new SwupGaPlugin(), new SwupScriptsPlugin({
            optin: true,
            // head: false,
            // body: false
        })],
        animateHistoryBrowsing: true,
        linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    });
    
    window.Hazymoon.swup = swup;
    
    swup.on('pageView', async function(n) {
        await window.Hazymoon.hugoEncrypt();
        window.Hazymoon.initSearch();
        window.Hazymoon.initActiveMenu();

        window.Hazymoon.renderPost();

        window.Hazymoon.initComment();
    
        if (!n && document.getElementById('back-top')) {
            document.getElementById('back-top').click();
        }
    });
})