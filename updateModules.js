const fs = require('fs');
const path = require('path');

const js_modules_path = './assets/ts/modules/';
const css_modules_path = './assets/sass/modules/';
const static_path = './static/';

const modules = {
    'jump.js/dist/jump.js': `${js_modules_path}jump.js`,
    'clipboard/dist/clipboard.js': `${js_modules_path}clipboard.js`,
    'vanilla-lazyload/dist/lazyload.js': `${js_modules_path}lazyload.js`,
    'medium-zoom/dist/medium-zoom.js': `${js_modules_path}medium-zoom.js`,
    'swup/dist/swup.js': `${js_modules_path}swup.js`,
    '@swup/fade-theme/dist/SwupFadeTheme.js': `${js_modules_path}swupFadeTheme.js`,
    '@swup/ga-plugin/dist/SwupGaPlugin.js': `${js_modules_path}swupGaPlugin.js`,
    '@swup/progress-plugin/dist/SwupProgressPlugin.js': `${js_modules_path}swupProgressPlugin.js`,
    '@swup/scripts-plugin/dist/SwupScriptsPlugin.js': `${js_modules_path}swupScriptsPlugin.js`,
    '@swup/slide-theme/dist/SwupSlideTheme.js': `${js_modules_path}swupSlideTheme.js`,
    '@swup/head-plugin/dist/SwupHeadPlugin.js': `${js_modules_path}swupHeadPlugin.js`,
    'swup-morph-plugin/dist/SwupMorphPlugin.js': `${js_modules_path}swupMorphPlugin.js`,
    'flexsearch/dist/flexsearch.bundle.js': `${js_modules_path}flexsearch.js`,
    'katex/dist/katex.js': `${js_modules_path}katex.js`,
    'pangu/dist/browser/pangu.js': `${js_modules_path}pangu.js`,
    'katex/dist/katex.css': `${css_modules_path}katex.css`,
    'katex/dist/fonts': `${static_path}fonts`,
    'katex/dist/contrib/auto-render.js': `${js_modules_path}katex-render.js`,
    'katex/dist/contrib/copy-tex.js': `${js_modules_path}katex-copy.js`,
    'normalize.css/normalize.css': `${css_modules_path}normalize.css`,
    'eva-icons/style/eva-icons.css': `${css_modules_path}eva-icons.css`,
    'eva-icons/style/fonts': `${static_path}fonts`,
}

function copyFolderSync(from, to) {
    try {
        fs.mkdirSync(to);
    } catch (error) {}
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

for (let index = 0; index < Object.keys(modules).length; index++) {
    const key = Object.keys(modules)[index];
    const key_path = `node_modules/${key}`;
    const value = modules[key];
    const value_path = value;
    if (!fs.existsSync(key_path)) {
        console.log(`${key_path} not found`);
        continue;
    }
    
    const dir_path = path.join(value_path, '..');
    if (!fs.existsSync(dir_path)) {
        fs.mkdirSync(dir_path, { recursive: true });
    }
    if (fs.lstatSync(key_path).isDirectory() ) {
        // copy dir
        copyFolderSync(key_path, value_path);
    } else {
        // copy file
        fs.copyFileSync(key_path, value_path);
    }
}
