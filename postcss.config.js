const path = require('path');
const replaceVal = {};

replaceVal['themes/hugo-theme-luna/'] = '';
replaceVal['static/'] = '/';

const isDev = process.env.HUGO_ENVIRONMENT !== 'production';

module.exports = {
    modules: true,
    plugins: !isDev ? {
        'postcss-import': {
            path: [path.join(__dirname, '/node_modules')],
        },
        tailwindcss: {
            config: path.join(__dirname, '/tailwind.config.js'),
        },
        'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['html']
        },
        autoprefixer: {},
        'postcss-easing-gradients': {},
        'postcss-font-display': {
            display: 'swap',
            replace: false
        },
        '@fullhuman/postcss-purgecss': {
            content: [
                path.join(__dirname, '/data/luna/icon.yaml'),
                path.join(__dirname, '/layouts/**/*.html'),
                path.join(__dirname, '/layouts/*.html'),
                path.join(__dirname, '/assets/ts/*.ts'),
            ],
            safelist: {
                // xx
                standard: ['swup-progress-bar', /medium-zoom/, /lazy/, /scrollbar/, /sm|md|lg|xl|2xl|[0-9]{1,2}\.[0-9]{1,2}/, /\//, /h[1-6]|hover|dark|last|after|before/, 'a', 'blockquote', 'body', 'code', 'fieldset', 'figure', 'hr', 'html', 'img', 'kbd', 'ol', 'p', 'pre', 'strong', 'sup', 'table', 'ul'],
                // xx包括子项
                deep: [/goog-te-gadget/, /goog-te-banner-frame/, /katex/, /hugo-encrypt/, /skiptranslate/],
                // button.bg-xx.other-class
                greedy: []
            },
            keyframes: true,
            fontFace: false,
            variables: false,
            rejected: true,
        },
        cssnano: {
            preset: ['cssnano-preset-advanced', {
                discardComments: {
                    removeAll: true,
                }
            }]
        },
        'postcss-url': {
            url: 'copy',
            useHash: true,
            assetsPath: path.join(__dirname, '/static/assets'),
            hashOptions: {
                append: true
            }
        },
        'postcss-replace-values': {
            values: replaceVal
        }
    }: {
        'postcss-import': {
            path: [path.join(__dirname, '/node_modules')],
        },
        tailwindcss: {
            config: path.join(__dirname, '/tailwind.config.js'),
        },
        'postcss-pxtorem': {
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['html']
        },
        'postcss-easing-gradients': {},
        'postcss-font-display': {
            display: 'swap',
            replace: false
        },
        'postcss-url': {
            url: 'copy',
            useHash: true,
            assetsPath: path.join(__dirname, '/static/assets'),
            hashOptions: {
                append: true
            }
        },
        'postcss-replace-values': {
            values: replaceVal
        }
    }
}