declare global {
    interface Window {
        Luna: any;
        rednerKatex: any;
        __theme: {
            cdn: string,
            pjax: boolean,
            imageZoom: boolean,
            lazyload: boolean,
            backtop: boolean,
            pangu: boolean,
            bionicReading: {
                enabled: boolean,
                autoBionic: boolean,
                skipLinks: boolean,
                excludeWords: string[],
                excludeNodeNames: string[],
                excludeClasses: string[],
            },
            katex: boolean,
            search: boolean,
            isServer: boolean,
            $version: string,
            autoDarkMode: boolean,
            googleAnalytics: boolean,
            lang: string,
            hugoEncrypt: {
                wrongPasswordText: string,
                userStorage: any,
            },
            assets: {
                error_svg: string,
                search_svg: string,
            },
            i18n: {
                copy: {
                    success: string,
                    failed: string,
                    copyCode: string,
                }
                search: {
                    untitled: string,
                    loadFailure: string,
                    input: string,
                    results: Function,
                },
                darkMode: {
                    dark: string,
                    light: string
                }
            },
            creatTime: VarDate
        }
    }
}

export {};