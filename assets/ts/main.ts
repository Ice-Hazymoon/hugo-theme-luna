// import * as params from '@params';

import initConsoleStyle from './src/initConsoleStyle';
import initHugoEncrypt from './src/initHugoEncrypt';
import initPjax from './src/initPjax';
import initKatex from './src/initKatex';
import initLazyload from './src/initLazyload';
import initPangu from './src/initPangu';
import initBionicReading from './src/initBionicReading';
import initZoom from './src/initZoom';
import initGallery from './src/initGallery';
import initFooterTime from './src/initFooterTime';
import initBackTop from './src/initBackTop';
import initCodeBlockCopy from './src/initCodeBlockCopy';
import initClipboard from './src/initClipboard';
import initNightMode from './src/initNightMode';
import initToc from './src/initToc';
import initSearch from './src/initSearch';
import initActiveMenu from './src/initActiveMenu';

class Luna {
    private _zoom: any;
    private _jump: boolean;
    private _clipboard: any;
    private _lazyLoad: any;
    private _isBionic: boolean;
    private _renderKatex: any;
    private _updateZoom: any;
    private _noLazyload: any;
    
    initHugoEncrypt: any;
    initPjax: any;
    initKatex: any;
    initLazyload: any;
    initPangu: any;
    initBionicReading: any;
    initZoom: any;
    initGallery: any;
    initFooterTime: any;
    initBackTop: any;
    initCodeBlockCopy: any;
    initClipboard: any;
    initNightMode: any
    initToc: any;
    initSearch: any;
    initActiveMenu: any;
    constructor() {
        this.initHugoEncrypt = initHugoEncrypt.bind(this);
        this.initPjax = initPjax.bind(this);
        this.initKatex = initKatex.bind(this);
        this.initLazyload = initLazyload.bind(this);
        this.initPangu = initPangu.bind(this);
        this.initBionicReading = initBionicReading.bind(this);
        this.initZoom = initZoom.bind(this);
        this.initGallery = initGallery.bind(this);
        this.initFooterTime = initFooterTime.bind(this);
        this.initBackTop = initBackTop.bind(this);
        this.initCodeBlockCopy = initCodeBlockCopy.bind(this);
        this.initClipboard = initClipboard.bind(this);
        this.initNightMode = initNightMode.bind(this);
        this.initToc = initToc.bind(this);
        this.initSearch = initSearch.bind(this);
        this.initActiveMenu = initActiveMenu.bind(this);
    }
    init() {
        initConsoleStyle();
        this.initHugoEncrypt();
        this.initPjax();
        this.initKatex();
        this.initLazyload();
        this.initPangu();
        this.initBionicReading();
        this.initZoom();
        this.initGallery();
        this.initFooterTime();
        this.initBackTop();
        this.initCodeBlockCopy();
        this.initClipboard();
        this.initNightMode();
        this.initToc();
        this.initSearch()
        this.initActiveMenu();
    }
    renderPost() {
        this._renderKatex();
        this._lazyLoad.update();
        this._updateZoom();
        this.initGallery();
        this.initCodeBlockCopy();
        this.initClipboard();
        this.initToc();
        this.initPangu();
        this.initBionicReading();
    }
}

window.addEventListener('load', async () => {
    window.Luna = new Luna();
    window.Luna.init();
});
