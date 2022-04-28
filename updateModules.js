const fs = require('fs');

const modules = {
    'jump.js/dist/jump.js': './assets/modules/jump.js',
    'clipboard/dist/clipboard.js': './assets/modules/clipboard.js',
    'vanilla-lazyload/dist/lazyload.js': './assets/modules/lazyload.js',
    'medium-zoom/dist/medium-zoom.js': './assets/modules/medium-zoom.js',
    'swup/dist/swup.js': './assets/modules/swup.js',
    '@swup/fade-theme/dist/SwupFadeTheme.js': './assets/modules/SwupFadeTheme.js',
    '@swup/ga-plugin/dist/SwupGaPlugin.js': './assets/modules/SwupGaPlugin.js',
    '@swup/progress-plugin/dist/SwupProgressPlugin.js': './assets/modules/SwupProgressPlugin.js',
    '@swup/scripts-plugin/dist/SwupScriptsPlugin.js': './assets/modules/SwupScriptsPlugin.js',
    '@swup/slide-theme/dist/SwupSlideTheme.js': './assets/modules/SwupSlideTheme.js',
    'swup-morph-plugin/dist/SwupMorphPlugin.js': './assets/modules/SwupMorphPlugin.js',
    'flexsearch/dist/flexsearch.bundle.js': './assets/modules/flexsearch.js',
    'katex/dist/katex.js': './assets/modules/katex.js',
    'katex/dist/contrib/auto-render.js': './assets/modules/katex-render.js',
    'katex/dist/contrib/copy-tex.js': './assets/modules/katex-copy.js',
}

for (let index = 0; index < Object.keys(modules).length; index++) {
    const key = Object.keys(modules)[index];
    const value = modules[key];
    fs.copyFileSync(`node_modules/${key}`, `${value}`);
}
