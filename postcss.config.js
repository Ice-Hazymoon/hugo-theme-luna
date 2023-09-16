const path = require('path');
const isDev = process.env.HUGO_ENVIRONMENT !== 'production';
module.exports = {
    modules: true,
    plugins: !isDev ? [
        require('tailwindcss')({
            config: path.join(__dirname, '/tailwind.config.js')
        }),
        require('postcss-pxtorem')({
            rootValue: 16,
            propList: ['*'],
            selectorBlackList: ['html']
        }),
        require('autoprefixer')({}),
        require('postcss-easing-gradients')({}),
        require('postcss-font-display')({
            display: 'swap',
            replace: false
        }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                path.join(__dirname, '/data/luna/icon.yaml').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/layouts/**/*.html').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/layouts/*.html').split(path.sep).join(path.posix.sep),
                path.join(__dirname, '/assets/**/*.ts').split(path.sep).join(path.posix.sep),
            ],
            safelist: {
                // xx
                standard: [/scrollbar/, /sm|md|lg|xl|2xl|[0-9]{1,2}\.[0-9]{1,2}/, /:/, /\//, /h[1-6]|hover|dark|last|after|before/, 'a', 'blockquote', 'body', 'code', 'fieldset', 'figure', 'hr', 'html', 'img', 'kbd', 'ol', 'p', 'pre', 'strong', 'sup', 'table', 'ul'],
                // xx包括子项
                deep: [/skiptranslate/, /goog-te/, /katex/, /hugo-encrypt/, /medium-zoom/, /lazy/, /swup/, /eva/],
                // button.bg-xx.other-class
                greedy: []
            },
            keyframes: true,
            fontFace: false,
            variables: false,
            rejected: true,
        }),
        require('cssnano')({
            preset: ['cssnano-preset-advanced', {
                discardComments: {
                    removeAll: true,
                }
            }]
        }),
    ] : [
        require('tailwindcss')({
            config: path.join(__dirname, '/tailwind.config.js')
        }),
        require('postcss-easing-gradients')({}),
    ]
}
