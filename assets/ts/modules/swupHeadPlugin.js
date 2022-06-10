(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwupHeadPlugin"] = factory();
	else
		root["SwupHeadPlugin"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupPlugin as window.SwupPlugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(2);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadPlugin = function (_Plugin) {
	_inherits(HeadPlugin, _Plugin);

	function HeadPlugin(options) {
		_classCallCheck(this, HeadPlugin);

		var _this = _possibleConstructorReturn(this, (HeadPlugin.__proto__ || Object.getPrototypeOf(HeadPlugin)).call(this));

		_this.name = 'HeadPlugin';
		_this.defaultOptions = {
			persistTags: false,
			persistAssets: false
		};

		_this.getHeadAndReplace = function () {
			var headChildren = _this.getHeadChildren();
			var nextHeadChildren = _this.getNextHeadChildren();

			_this.replaceTags(headChildren, nextHeadChildren);
		};

		_this.getHeadChildren = function () {
			return document.head.children;
		};

		_this.getNextHeadChildren = function () {
			var pageContent = _this.swup.cache.getCurrentPage().originalContent.replace('<head', '<div id="swupHead"').replace('</head>', '</div>');
			var element = document.createElement('div');
			element.innerHTML = pageContent;
			var children = element.querySelector('#swupHead').children;

			// cleanup
			element.innerHTML = '';
			element = null;

			return children;
		};

		_this.replaceTags = function (oldTags, newTags) {
			var head = document.head;
			var themeActive = Boolean(document.querySelector('[data-swup-theme]'));
			var addTags = _this.getTagsToAdd(oldTags, newTags, themeActive);
			var removeTags = _this.getTagsToRemove(oldTags, newTags, themeActive);

			removeTags.reverse().forEach(function (item) {
				head.removeChild(item.tag);
			});

			addTags.forEach(function (item) {
				head.insertBefore(item.tag, head.children[item.index]);
			});

			_this.swup.log('Removed ' + removeTags.length + ' / added ' + addTags.length + ' tags in head');
		};

		_this.compareTags = function (oldTag, newTag) {
			var oldTagContent = oldTag.outerHTML;
			var newTagContent = newTag.outerHTML;

			return oldTagContent === newTagContent;
		};

		_this.getTagsToRemove = function (oldTags, newTags) {
			var removeTags = [];

			for (var i = 0; i < oldTags.length; i++) {
				var foundAt = null;

				for (var j = 0; j < newTags.length; j++) {
					if (_this.compareTags(oldTags[i], newTags[j])) {
						foundAt = j;
						break;
					}
				}

				if (foundAt == null && oldTags[i].getAttribute('data-swup-theme') === null && !_this.isPersistentTag(oldTags[i])) {
					removeTags.push({ tag: oldTags[i] });
				}
			}

			return removeTags;
		};

		_this.getTagsToAdd = function (oldTags, newTags, themeActive) {
			var addTags = [];

			for (var i = 0; i < newTags.length; i++) {
				var foundAt = null;

				for (var j = 0; j < oldTags.length; j++) {
					if (_this.compareTags(oldTags[j], newTags[i])) {
						foundAt = j;
						break;
					}
				}

				if (foundAt == null) {
					addTags.push({ index: themeActive ? i + 1 : i, tag: newTags[i] });
				}
			}

			return addTags;
		};

		_this.isPersistentTag = function (item) {
			var persistTags = _this.options.persistTags;

			if (typeof persistTags === 'function') {
				return persistTags(item);
			}
			if (typeof persistTags === 'string') {
				return item.matches(persistTags);
			}
			return Boolean(persistTags);
		};

		_this.updateHtmlLangAttribute = function () {
			var html = document.documentElement;

			var newPage = new DOMParser().parseFromString(_this.swup.cache.getCurrentPage().originalContent, 'text/html');
			var newLang = newPage.documentElement.lang;

			if (html.lang !== newLang) {
				_this.swup.log('Updated lang attribute: ' + html.lang + ' > ' + newLang);
				html.lang = newLang;
			}
		};

		_this.options = _extends({}, _this.defaultOptions, options);

		// options.persistAssets is a shortcut to:
		// options.persistTags with a default asset selector for scripts & styles
		if (_this.options.persistAssets && !_this.options.persistTags) {
			_this.options.persistTags = 'link[rel=stylesheet], script[src], style';
		}
		return _this;
	}

	_createClass(HeadPlugin, [{
		key: 'mount',
		value: function mount() {
			this.swup.on('contentReplaced', this.getHeadAndReplace);
			this.swup.on('contentReplaced', this.updateHtmlLangAttribute);
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			this.swup.off('contentReplaced', this.getHeadAndReplace);
			this.swup.off('contentReplaced', this.updateHtmlLangAttribute);
		}
	}]);

	return HeadPlugin;
}(_plugin2.default);

exports.default = HeadPlugin;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);

        this.isSwupPlugin = true;
    }

    _createClass(Plugin, [{
        key: "mount",
        value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with plugin
        }
    }, {
        key: "unmount",
        value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with plugin is disabled
        }
    }, {
        key: "_beforeMount",
        value: function _beforeMount() {
            // here for any future hidden auto init
        }
    }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {}
        // here for any future hidden auto-cleanup


        // this is here so we can tell if plugin was created by extending this class

    }]);

    return Plugin;
}();

exports.default = Plugin;

/***/ })
/******/ ]);
});