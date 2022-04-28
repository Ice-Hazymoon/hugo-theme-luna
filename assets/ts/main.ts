import * as params from '@params';
import jump from "modules/jump.js";
import mediumZoom from "modules/medium-zoom";
import LazyLoad from "modules/lazyload";
import ClipboardJS from "modules/clipboard";

declare global {
    interface Window {
        Hazymoon: any;
        initSearch: any;
        rednerKatex: any;
        CUSDIS: {
            initial: any,
            setTheme: any
        };
        __theme: {
            cdn: string,
            pjax: boolean,
            imageZoom: boolean,
            lazyload: boolean,
            isServer: boolean,
            $version: string,
            lang: string,
            hugoEncrypt: {
                wrongPasswordText: string,
                userStorage: any,
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

class Hazymoon {
    _LazyLoad: any;
    zoom: any;
    jump: boolean;
    private clipboard: any;
    constructor() {
        if (window.__theme.imageZoom) {
            this.zoom = mediumZoom('[data-zoomable]:not([data-lazyload])', {
                background: 'var(--color-zoom-bg)',
            });
        }
        this._LazyLoad = new LazyLoad({
            elements_selector: '[data-lazyload]',
            class_loading: 'lazy-loading',
            class_error: 'lazy-error',
            class_loaded: 'lazy-loaded',
            unobserve_entered: true,
            callback_loaded: (el) => {
                setTimeout(() => {
                    if (el.hasAttribute('data-zoomable')) {
                        el.setAttribute('data-zoom-src', el.currentSrc || el.getAttribute('src'));
                        this.zoom.attach(el)
                    }
                }, 500);
            },
            callback_error: (el) => {
                console.log(el);
                const errorImageURL = window.__theme.cdn + '/images/error.svg';
                el.setAttribute("src", errorImageURL);
                el.setAttribute("srcset", errorImageURL);
                el.removeAttribute('data-lazyload-blur');
            }
        })
    }
    async init() {
        // hugo encrypt
        this.hugoEncrypt();

        // lazyload
        this.updateLazyLoad();

        // katex
        this.initKatex();

        // 導航欄
        this.initActiveMenu();

        // 搜索插件
        this.initSearch()

        // 相冊插件
        this.initGallery();

        // 代码高亮插件
        this.initCodeBlockCopy();

        // 底部計時器
        this.initFooterTime();

        // 返回頂部
        this.initBackTop();

        // 夜间模式
        this.initNightMode();
    }
    renderPost() {
        if (window.rednerKatex) window.rednerKatex();
        this.updateLazyLoad();
        this._LazyLoad.update();
        this.updateZoom();
        this.initGallery();
        this.initCodeBlockCopy();
    }

    switchLanguage(url) {
        window.location.href = url;
    }

    // lazyload 插件
    updateLazyLoad() {
        const lazyload = Array.from(document.querySelectorAll('[data-lazyload]')) as HTMLElement[];
        for (const item of lazyload) {
            if (item.hasAttribute('src')) {
                item.setAttribute('data-lazyload-blur', "")
            }
        }
    }
    // pjax 菜单激活插件
    initActiveMenu() {
        const activeMenu = document.querySelector('.link-exact-active')
        if (activeMenu) activeMenu.classList.remove('link-exact-active');
        const currentMenu = document.querySelector(`[data-active-link="${window.location.pathname.replace(/\/$/, '')}/"]`);
        if (currentMenu) currentMenu.classList.add('link-exact-active');
    }
    // loadComment
    initComment() {
        if (window.CUSDIS) window.CUSDIS.initial();
    }
    // 搜索插件
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
    // 相册插件
    initGallery() {
        const figuresEl = Array.from(document.querySelectorAll('figure.gallery-image')) as HTMLElement[];
        let currentGallery = [];
        for (const figure of figuresEl) {
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
    // 底部计时器
    initFooterTime() {
        if (!document.getElementById('run-time')) return false;
        setInterval(() => {
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
    // 返回顶部
    initBackTop() {
        const el = <HTMLImageElement>document.getElementById('back-top');
        if (!el) return false;
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
    // 代码块复制
    initCodeBlockCopy() {
        const highlightList = Array.from(document.querySelectorAll('.highlight'));
        for (let index = 0; index < highlightList.length; index++) {
            const el = highlightList[index];
            if (el.querySelector('[data-clipboard-text]')) continue;
            const header = document.createElement('header');
            const codeEl = el.querySelector('pre code[data-lang]');
            const lang = codeEl.getAttribute('data-lang');
            const code = el.querySelector('table td:nth-child(2) pre').textContent;
    
            header.innerHTML = `<span>${lang}</span><i title="${window.__theme.i18n.copyCode}" class="eva eva-clipboard-outline"></i>`
            const btn = header.querySelector('i.eva');
            el.prepend(header);
            btn.setAttribute('data-clipboard-text', code);
        }

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
    // 夜间模式
    initNightMode() {
        const el = document.querySelector('.dark-mode-switch');
        const _i = el.querySelector('i');
    
        function setDarkMode(isDark) {
            if (isDark) {
                _i.classList.remove('eva-moon');
                _i.classList.add('eva-sun');
                document.documentElement.classList.add('dark');
                if ( window.CUSDIS) window.CUSDIS.setTheme('dark');
            } else {
                _i.classList.remove('eva-sun');
                _i.classList.add('eva-moon');
                document.documentElement.classList.remove('dark');
                if ( window.CUSDIS) window.CUSDIS.setTheme('light');
            }
        }
    
        setDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    
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
    // 文章加密
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
    // katex
    initKatex() {
        if (params.katex) {
            const script = document.createElement('script');
            script.src = `${window.__theme.cdn}${params.katex}`;
            document.body.appendChild(script);
            script.addEventListener('load', () => {
                window.rednerKatex();
            })
        }
    }
    // zoom
    updateZoom() {
        if (!window.__theme.imageZoom) return false;
        this.zoom.detach();
        this.zoom.attach('[data-zoomable]:not([data-lazyload])');
    }
    updateI18n() {}
}

window.addEventListener('load', async () => {
    window.Hazymoon = new Hazymoon();
    window.Hazymoon.init();
});
