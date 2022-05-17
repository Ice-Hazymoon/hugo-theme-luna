(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwupProgressPlugin"] = factory();
	else
		root["SwupProgressPlugin"] = factory();
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

var _ProgressBar = __webpack_require__(3);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwupProgressPlugin = function (_Plugin) {
	_inherits(SwupProgressPlugin, _Plugin);

	function SwupProgressPlugin(options) {
		_classCallCheck(this, SwupProgressPlugin);

		var _this = _possibleConstructorReturn(this, (SwupProgressPlugin.__proto__ || Object.getPrototypeOf(SwupProgressPlugin)).call(this));

		_this.name = 'SwupProgressPlugin';

		_this.startShowingProgress = function () {
			_this.progressBar.setValue(0);
			_this.showProgressBarAfterDelay();
		};

		_this.stopShowingProgress = function () {
			_this.progressBar.setValue(1);
			if (_this.options.hideImmediately) {
				_this.hideProgressBar();
			} else {
				_this.finishAnimationAndHideProgressBar();
			}
		};

		_this.showProgressBar = function () {
			if (_this.hideProgressBarTimeout != null) {
				window.clearTimeout(_this.hideProgressBarTimeout);
				delete _this.hideProgressBarTimeout;
			}
			_this.progressBar.show();
		};

		_this.showProgressBarAfterDelay = function () {
			_this.showProgressBarTimeout = window.setTimeout(_this.showProgressBar, _this.options.delay);
		};

		_this.hideProgressBar = function () {
			_this.progressBar.hide();
		};

		_this.finishAnimationAndHideProgressBar = function () {
			_this.hideProgressBarTimeout = window.setTimeout(_this.hideProgressBar, _this.options.transition);

			if (_this.showProgressBarTimeout != null) {
				window.clearTimeout(_this.showProgressBarTimeout);
				delete _this.showProgressBarTimeout;
			}
		};

		var defaultOptions = {
			className: 'swup-progress-bar',
			transition: 300,
			delay: 300,
			hideImmediately: true
		};

		_this.options = _extends({}, defaultOptions, options);

		_this.showProgressBarTimeout = null;
		_this.progressBar = new _ProgressBar2.default({
			className: _this.options.className,
			animationDuration: _this.options.transition
		});
		return _this;
	}

	_createClass(SwupProgressPlugin, [{
		key: 'mount',
		value: function mount() {
			this.swup.on('transitionStart', this.startShowingProgress);
			this.swup.on('contentReplaced', this.stopShowingProgress);
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			this.swup.off('transitionStart', this.startShowingProgress);
			this.swup.off('contentReplaced', this.stopShowingProgress);
		}
	}]);

	return SwupProgressPlugin;
}(_plugin2.default);

exports.default = SwupProgressPlugin;

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressBar = function () {
	function ProgressBar(_ref) {
		var _this = this;

		var _ref$className = _ref.className,
		    className = _ref$className === undefined ? null : _ref$className,
		    _ref$animationDuratio = _ref.animationDuration,
		    animationDuration = _ref$animationDuratio === undefined ? null : _ref$animationDuratio;

		_classCallCheck(this, ProgressBar);

		this.className = 'progress-bar';
		this.animationDuration = 300;
		this.minValue = 0.1;
		this.stylesheetElement = null;
		this.progressElement = null;
		this.hiding = false;
		this.trickleInterval = null;
		this.value = 0;
		this.visible = false;

		this.trickle = function () {
			var advance = Math.random() * 3 / 100;
			_this.setValue(_this.value + advance);
		};

		if (className !== null) {
			this.className = className;
		}
		if (animationDuration !== null) {
			this.animationDuration = animationDuration;
		}

		this.stylesheetElement = this.createStylesheetElement();
		this.progressElement = this.createProgressElement();
	} // ms


	_createClass(ProgressBar, [{
		key: 'show',
		value: function show() {
			if (!this.visible) {
				this.visible = true;
				this.installStylesheetElement();
				this.installProgressElement();
				this.startTrickling();
			}
		}
	}, {
		key: 'hide',
		value: function hide() {
			var _this2 = this;

			if (this.visible && !this.hiding) {
				this.hiding = true;
				this.fadeProgressElement(function () {
					_this2.uninstallProgressElement();
					_this2.stopTrickling();
					_this2.visible = false;
					_this2.hiding = false;
				});
			}
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			this.value = Math.max(this.minValue, value);
			this.refresh();
		}

		// Private

	}, {
		key: 'installStylesheetElement',
		value: function installStylesheetElement() {
			document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
		}
	}, {
		key: 'installProgressElement',
		value: function installProgressElement() {
			this.progressElement.style.width = '0';
			this.progressElement.style.opacity = '1';
			document.documentElement.insertBefore(this.progressElement, document.body);
			this.refresh();
		}
	}, {
		key: 'fadeProgressElement',
		value: function fadeProgressElement(callback) {
			this.progressElement.style.opacity = '0';
			setTimeout(callback, this.animationDuration * 1.5);
		}
	}, {
		key: 'uninstallProgressElement',
		value: function uninstallProgressElement() {
			if (this.progressElement.parentNode) {
				document.documentElement.removeChild(this.progressElement);
			}
		}
	}, {
		key: 'startTrickling',
		value: function startTrickling() {
			if (!this.trickleInterval) {
				this.trickleInterval = window.setInterval(this.trickle, this.animationDuration);
			}
		}
	}, {
		key: 'stopTrickling',
		value: function stopTrickling() {
			window.clearInterval(this.trickleInterval);
			delete this.trickleInterval;
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			var _this3 = this;

			requestAnimationFrame(function () {
				_this3.progressElement.style.width = 10 + _this3.value * 90 + '%';
			});
		}
	}, {
		key: 'createStylesheetElement',
		value: function createStylesheetElement() {
			var element = document.createElement('style');
			element.setAttribute('data-progressbar-styles', '');
			element.textContent = this.defaultCSS;
			return element;
		}
	}, {
		key: 'createProgressElement',
		value: function createProgressElement() {
			var element = document.createElement('div');
			element.className = this.className;
			return element;
		}
	}, {
		key: 'defaultCSS',
		get: function get() {
			return '\n    .' + this.className + ' {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background-color: black;\n        z-index: 9999;\n        transition:\n          width ' + this.animationDuration + 'ms ease-out,\n          opacity ' + this.animationDuration / 2 + 'ms ' + this.animationDuration / 2 + 'ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    ';
		}
	}]);

	return ProgressBar;
}();

exports.default = ProgressBar;

/***/ })
/******/ ]);
});