const { boxShadow } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const path = require('path');
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    content: [
        path.join(__dirname, '/data/luna/icon.yaml'),
        path.join(__dirname, '/layouts/**/*.html'),
        path.join(__dirname, '/layouts/*.html'),
        path.join(__dirname, '/assets/**/*.ts'),
    ],
    safelist: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                theme: 'var(--theme)',
                text: 'var(--color-text)',
                transparent: 'transparent',
                darkBg: 'var(--color-dark-bg)',
                darkFg: 'var(--color-dark-fg)',
                darkBgAccent: 'var(--color-dark-bg-accent)',
                darkBorder: 'var(--color-dark-border)',
                darkText: 'var(--color-dark-text)',
                darkTextPlaceholder: 'var(--color-dark-text-placeholder)',
            },
            boxShadow: Object.assign(boxShadow, {
                custom:
                    '8px 14px 38px rgba(39, 44, 49, 0.06), 1px 3px 8px rgba(39, 44, 49, 0.03);',
                custom2: '-8px 14px 38px rgba(39, 44, 49, 0.06), -1px 3px 8px rgba(39, 44, 49, 0.03);'
            })
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        plugin(function({ addUtilities, addComponents, e, prefix, config }) {
            const obj = {};
            // obj[`.line-clamp-1`] = {
            //     'text-overflow': 'ellipsis',
            //     'white-space': 'nowrap',
            //     overflow: 'hidden'
            // };
            addUtilities(obj, {
                variants: ['responsive']
            });
        }),
    ]
}