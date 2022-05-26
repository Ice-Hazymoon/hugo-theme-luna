import * as params from '@params';
import jump from "jump.js";
import pangu from "pangu";
import mediumZoom from "medium-zoom";
import LazyLoad from "lazyload";
import ClipboardJS from "./modules/clipboard";
import renderToc from "./toc";
import bionicReading from "./bionic-reading";
// pjax
import Swup from 'swup';
import SwupFadeTheme from 'swupFadeTheme';
import SwupProgressPlugin from 'swupProgressPlugin';
import SwupGaPlugin from 'swupGaPlugin';
import SwupScriptsPlugin from 'swupScriptsPlugin';
import SwupMorphPlugin from 'swupMorphPlugin';

declare global {
    interface Window {
        Luna: any;
        initSearch: any;
        rednerKatex: any;
        isBionic: boolean;
        __theme: {
            cdn: string,
            pjax: boolean,
            imageZoom: boolean,
            lazyload: boolean,
            backtop: boolean,
            pangu: boolean,
            bionicReading: boolean,
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
                copySuccess: string,
                copyFailed: string,
                copyCode: string,
                searchLoadFailure: string,
                searchInput: string,
                searchResults: Function,
                untitled: string,
            },
            creatTime: VarDate
        }
    }
}

class Luna {
    _LazyLoad: any;
    zoom: any;
    swup: any;
    jump: boolean;
    private clipboard: any;
    constructor() {
    }
    async init() {
        this.initPjax();

        this.initLazyload();

        this.initZoom();

        this.hugoEncrypt();

        this.initKatex();

        this.initActiveMenu();

        this.initSearch()

        this.initGallery();

        this.initCodeBlockCopy();

        this.initClipboard();

        this.initFooterTime();

        this.initBackTop();

        this.initNightMode();

        renderToc();

        this.pangu();

        this.initBionicReading();
    }
    initPjax() {
        if (!window.__theme.pjax) return false;
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
        
        this.swup = swup;
        
        swup.on('pageView', async function(n) {
            await window.Luna.hugoEncrypt();
            window.Luna.initSearch();
            window.Luna.initActiveMenu();
    
            window.Luna.renderPost();
        
            if (!n && document.getElementById('back-top')) {
                document.getElementById('back-top').click();
            }
        });
    }

    renderPost() {
        if (window.rednerKatex) window.rednerKatex();
        this._LazyLoad.update();
        this.updateZoom();
        this.initGallery();
        this.initCodeBlockCopy();
        this.initClipboard();
        renderToc();
        this.pangu();
        this.initBionicReading();
    }

    pangu() {
        if (window.__theme.pangu) {
            pangu.spacingElementById('swup');
        }
    }

    initBionicReading() {
        window.isBionic = false;
        if (window.__theme.bionicReading && document.getElementById('bionicReading')) {
            document.getElementById('bionicReading').addEventListener('click', () => {
                if (window.isBionic) {
                    bionicReading.revoke();
                } else {
                    bionicReading.bionic();
                }
            });
        }
    }

    initZoom() {
        if (window.__theme.imageZoom) {
            if (!window.__theme.lazyload) {
                this.noLazyload(false);
            }
            this.zoom = mediumZoom('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)', {
                background: 'var(--color-zoom-bg)',
            });
        }
    }

    initLazyload() {
        if (window.__theme.lazyload) {
            this._LazyLoad = new LazyLoad({
                elements_selector: '[data-lazyload]',
                class_loading: 'lazy-loading',
                class_error: 'lazy-error',
                class_loaded: 'lazy-loaded',
                unobserve_entered: true,
                callback_loaded: (el) => {
                    if (window.__theme.imageZoom) {
                        setTimeout(() => {
                            if (el.hasAttribute('data-zoomable')) {
                                el.setAttribute('src', el.currentSrc || el.getAttribute('src'));
                                el.removeAttribute('srcset');
                                this.zoom.attach(el)
                            }
                        }, 500);
                    }
                },
                callback_error: (el) => {
                    const errorImageURL = window.__theme.assets.error_svg;
                    el.setAttribute("src", errorImageURL);
                    el.setAttribute("srcset", errorImageURL);
                    if (el.previousSibling.tagName === 'SOURCE') {
                        el.previousSibling.setAttribute("src", errorImageURL);
                        el.previousSibling.setAttribute("srcset", errorImageURL);
                    }
                }
            })
        } else {
            this._LazyLoad = {
                update: () => {
                    if (window.__theme.imageZoom) {
                        this.noLazyload(true);
                    }
                }
            }
        }
    }

    noLazyload(zoom: boolean) {
        const images = Array.from(document.querySelectorAll('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)')) as HTMLImageElement[];
        images.forEach(el => {
            el.setAttribute('src', el.currentSrc || el.getAttribute('src'));
            el.removeAttribute('srcset');
            if (zoom) this.zoom.attach(el);
        })
    }

    switchLanguage(url) {
        window.location.href = url;
    }
    
    // Toggle navigation in pjax mode
    initActiveMenu() {
        const activeMenu = document.querySelector('.link-exact-active')
        if (activeMenu) activeMenu.classList.remove('link-exact-active');
        const currentMenu = document.querySelector(`[data-active-link="${window.location.pathname.replace(/\/$/, '')}/"]`);
        if (currentMenu) currentMenu.classList.add('link-exact-active');
    }

    async initSearch() {
        const node = document.getElementById('search-input');
        if (!node) return false;
        if (!window.initSearch) {
            const script = document.createElement('script');
            script.src = `${window.__theme.cdn}${params.search}`;
            document.body.appendChild(script);
        }
    }

    // https://github.com/CaiJimmy/hugo-theme-stack/blob/master/assets/ts/gallery.ts
    initGallery() {
        const figuresEl = Array.from(document.querySelectorAll('.type-posts figure.gallery-image')) as HTMLElement[];
        let currentGallery = [];
        if (figuresEl.length < 2) return false;
        for (const figure of figuresEl) {
            if (figure.parentElement.classList.contains('gallery')) return false;
            if (!currentGallery.length) {
                /// First iteration
                currentGallery = [figure];
            } else if (figure.previousElementSibling.previousElementSibling === currentGallery[currentGallery.length - 1]) {
                /// Adjacent figures
                currentGallery.push(figure);
            } else if (currentGallery.length) {
                /// End gallery
                wrap(currentGallery);
                currentGallery = [figure];
            }
        }
        if (currentGallery.length > 0) {
            wrap(currentGallery);
        }
    
        function wrap(figures) {
            const galleryContainer = document.createElement('div');
            galleryContainer.className = 'gallery';
        
            const parentNode = figures[0].parentNode,
                first = figures[0];
        
            parentNode.insertBefore(galleryContainer, first)
        
            for (const figure of figures) {
                galleryContainer.appendChild(figure);
            }
        }
    }

    initFooterTime() {
        const el = document.getElementById('run-time');
        if (!el) return false;
        const runTimer = setInterval(() => {
            if (document.querySelector('.goog-te-banner-frame')) {
                el.remove();
                clearInterval(runTimer);
                return false;
            };
            const startDate = new Date(window.__theme.creatTime);
            const time = new Date();
            const diff = time.getTime() - startDate.getTime();
        
            const day = diff / (1000*60*60*24);
            const hour = 24 * parseFloat('0.' + day.toString().replace(/\d+\.(\d*)/, '$1'));
            const minute = 60 * parseFloat('0.' + hour.toString().replace(/\d+\.(\d*)/, '$1'));
            const second = 60 * parseFloat('0.' + minute.toString().replace(/\d+\.(\d*)/, '$1'));
            document.getElementById('run-time-d').innerText = (~~(day)).toString();
            document.getElementById('run-time-h').innerText = (~~(hour)).toString();
            document.getElementById('run-time-m').innerText = (~~(minute)).toString();
            document.getElementById('run-time-s').innerText = (~~(second)).toString();
        }, 1000);
    }

    initBackTop() {
        const el = <HTMLImageElement>document.getElementById('back-top');
        if (!window.__theme.backtop) return false;
        window.addEventListener('scroll', () => {
            const scrollH = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) - document.documentElement.clientHeight - 150;
            const css = 157 - (~~(document.documentElement.scrollTop / scrollH * 100) * 1.57);
            if (css <= 0) el.classList.add('back-top-completed');
            else el.classList.remove('back-top-completed');

            const circle = el.querySelector('svg circle') as HTMLElement;
            circle.style.strokeDashoffset = css < 0 ? '0' : css.toString();
        })
    
        const _disabledMouseWheel = (e) => e.stopPropagation();
        function disabledMouseWheel(_) {
            if (_) {
                document.addEventListener('wheel', _disabledMouseWheel, {
                    passive: true
                });
                document.addEventListener('touchstart', _disabledMouseWheel, {
                    passive: true
                });
            } else {
                document.removeEventListener('wheel', _disabledMouseWheel);
                document.removeEventListener('touchstart', _disabledMouseWheel);
            }
        }
        el.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (this.jump) return false;
            this.jump = true;
            disabledMouseWheel(true);
            const easeInOut = (t, b, c, d) => {
                return t === d ? b + c : c * (-(2 ** ((-10 * t) / d)) + 1) + b;
            };
            jump(
                document.body,
                {
                    duration: 400,
                    offset: 0,
                    callback: () => {
                        this.jump = false;
                        disabledMouseWheel(false);
                    },
                    easing: easeInOut,
                    a11y: false
                }
            );
        }
        window.addEventListener(
            'scroll',
            () => {
                if (!el) return false;
                if (window.scrollY > 800) {
                    el.classList.add('x');
                } else {
                    el.classList.remove('x');
                }
            },
            {
                passive: true
            }
        );
    }

    initCodeBlockCopy() {
        const highlightList = Array.from(document.querySelectorAll('.highlight'));
        for (let index = 0; index < highlightList.length; index++) {
            const el = highlightList[index];
            if (el.querySelector('[data-clipboard-text]')) continue;
            const header = document.createElement('header');
            const codeEl = el.querySelector('pre code[data-lang]');
            const lang = codeEl.getAttribute('data-lang');
            const code = el.querySelector('table td:nth-child(2) pre').textContent;
    
            header.innerHTML = `<div><span></span> <span></span> <span></span> ${lang}</div><i title="${window.__theme.i18n.copyCode}" class="eva eva-clipboard-outline"></i>`
            const btn = header.querySelector('i.eva');
            el.prepend(header);
            btn.setAttribute('data-clipboard-text', code);
        }
    }

    initClipboard() {
        if (!document.querySelector('[data-clipboard-text]')) return false;
        if (this.clipboard) {
            this.clipboard.destroy();
        }
        this.clipboard = new ClipboardJS('[data-clipboard-text]');
        this.clipboard.on('success', function(e) {
            alert(window.__theme.i18n.copySuccess);
        })
        this.clipboard.on('error', function(e) {
            alert(window.__theme.i18n.copyFailed);
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    }

    initNightMode() {
        const el = document.querySelector('.dark-mode-switch');
        const _i = el.querySelector('i');
    
        function setDarkMode(isDark) {
            if (isDark) {
                _i.classList.remove('eva-moon');
                _i.classList.add('eva-sun');
                document.documentElement.classList.add('dark');
            } else {
                _i.classList.remove('eva-sun');
                _i.classList.add('eva-moon');
                document.documentElement.classList.remove('dark');
            }
        }
        
        if (window.__theme.autoDarkMode) {
            setDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
        } else {
            setDarkMode(localStorage.theme === 'dark');
        }
        
    
        el.addEventListener('click', () => {
            if (_i.classList.contains('eva-sun')) {
                localStorage.setItem('theme', 'light');
                setDarkMode(false);
            } else {
                localStorage.setItem('theme', 'dark');
                setDarkMode(true);
            }
        })
    }

    async hugoEncrypt() {
        const storageKey = location.pathname + "password";
        const encryption_blocks = Array.from(document.querySelectorAll("hugo-encrypt"));
        const userStorage = window.__theme.hugoEncrypt.userStorage;
        function deriveKey(passphrase, salt) {
            salt = salt || crypto.getRandomValues(new Uint8Array(8));
			return crypto.subtle
				.importKey("raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"])
				.then(key =>
					crypto.subtle.deriveKey(
						{ name: "PBKDF2", salt, iterations: 1000, hash: "SHA-256" },
						key,
						{ name: "AES-GCM", length: 256 },
						false,
						["encrypt", "decrypt"],
					),
				)
				.then(key => [key, salt]);
		}
        function decrypt(passphrase, saltIvCipherHex) {
			const [salt, iv, data] = saltIvCipherHex.split("-").map(hexStr => new Uint8Array(hexStr.match(/.{2}/g).map(h => parseInt(h, 16))));
			return deriveKey(passphrase, salt)
				.then(([key]) => crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data))
				.then(v => new TextDecoder("utf-8").decode(new Uint8Array(v)));
		}
		async function digestMessage(message) {
			const msgUint8 = new TextEncoder().encode(message);
			const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8);
			const hashArray = Array.from(new Uint8Array(hashBuffer));
			const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
			return hashHex;
		}

        async function hugoDecrypt(password, type, el, id) {
            const cipher = el.querySelector('cipher-text');
            try {
                const decrypted_text = await decrypt(password, cipher.innerText);
                const sha1_sum = await digestMessage(decrypted_text.replace(/\r?\n?[^\r\n]*$/, ""));
                if ( decrypted_text.includes(sha1_sum) ) {
                    el.querySelector(".hugo-encrypt-encryption-notice").remove();
                    cipher.outerHTML = decrypted_text;
                    userStorage.setItem(storageKey + id, password);
                    document.querySelector(`#r${id} .hugo-encrypt-sha1sum`).innerHTML = "Success: " + sha1_sum;
                    console.log(`Decryption successful. Storing password in ${userStorage}.`);
                }
            } catch (error) {
                if (type === "input") {
                    el.querySelector(".hugo-encrypt-input-response").innerHTML = window.__theme.hugoEncrypt.wrongPasswordText;
                    console.log(window.__theme.hugoEncrypt.wrongPasswordText, error);
                } else if (type === "storage") {
                    userStorage.removeItem(location.pathname + "password");
                    console.log("Password changed. Clearing userStorage.", error);
                }
            }
		};

        const hugoEncryptBlocks = Array.from(document.querySelectorAll('.hugo-encrypt-button')) as HTMLElement[];
        for (let index = 0; index < hugoEncryptBlocks.length; index++) {
            const block = hugoEncryptBlocks[index];
            block.addEventListener('click', async (e) => {
                const id = (e.target as HTMLElement).getAttribute('data-hugo-encrypt-id');
                const El = document.getElementById(`r${id}`);
                const password = (El.querySelector('.hugo-encrypt-input') as HTMLInputElement).value;
                await hugoDecrypt(password, 'input', El, id);
                this.renderPost();
            })
        }

        if (encryption_blocks.length) {
            for (const block of encryption_blocks) {
                const id = block.id.replace(/^r/, "");
                const password = userStorage.getItem(storageKey + id);
                if (password) {
                    await hugoDecrypt(password, "storage", block, id);
                    this.renderPost();
                }
			}
        }
    }

    initKatex() {
        if (params.katex) {
            const script = document.createElement('script');
            script.src = params.katex;
            document.body.appendChild(script);
            script.addEventListener('load', () => {
                window.rednerKatex();
            })
        }
    }

    updateZoom() {
        if (!window.__theme.imageZoom) return false;
        if (!window.__theme.lazyload) {
            this.noLazyload(true);
        }
        // this.zoom.detach();
        this.zoom.attach('[data-zoomable]:not([data-lazyload]):not(.medium-zoom-image)');
    }
}

window.addEventListener('load', async () => {
    window.Luna = new Luna();
    window.Luna.init();
});
