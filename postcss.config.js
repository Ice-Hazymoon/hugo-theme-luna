const path = require('path');

const isDev = process.env.HUGO_ENVIRONMENT !== 'production';

module.exports = {
    modules: true,
    plugins: !isDev ? {
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
                path.join(__dirname, '/data/luna/icon.yaml').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/layouts/**/*.html').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/layouts/*.html').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/assets/**/*.ts').split(path.sep).join(path.posix.sep),
            ],
            safelist: {
                // xx
                standard: [/scrollbar/, /sm|md|lg|xl|2xl|[0-9]{1,2}\.[0-9]{1,2}/, /\//, /h[1-6]|hover|dark|last|after|before/, 'a', 'blockquote', 'body', 'code', 'fieldset', 'figure', 'hr', 'html', 'img', 'kbd', 'ol', 'p', 'pre', 'strong', 'sup', 'table', 'ul'],
                // xx包括子项
                deep: [/skiptranslate/, /goog-te/, /katex/, /hugo-encrypt/, /medium-zoom/, /lazy/, /swup/, /eva/],
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
    }: {
        tailwindcss: {
            config: path.join(__dirname, '/tailwind.config.js'),
        },
        'postcss-easing-gradients': {},
    }
}