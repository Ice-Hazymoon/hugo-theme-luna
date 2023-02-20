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

var _mergeHeadContents2 = __webpack_require__(3);

var _mergeHeadContents3 = _interopRequireDefault(_mergeHeadContents2);

var _updateLangAttribute = __webpack_require__(4);

var _updateLangAttribute2 = _interopRequireDefault(_updateLangAttribute);

var _waitForAssets = __webpack_require__(5);

var _waitForAssets2 = _interopRequireDefault(_waitForAssets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeadPlugin = function (_Plugin) {
	_inherits(HeadPlugin, _Plugin);

	function HeadPlugin() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, HeadPlugin);

		var _this = _possibleConstructorReturn(this, (HeadPlugin.__proto__ || Object.getPrototypeOf(HeadPlugin)).call(this));

		_this.name = 'HeadPlugin';
		_this.assetLoadPromises = [];

		_this.updateHead = function () {
			var newPageHtml = _this.swup.cache.getCurrentPage().originalContent;
			var newDocument = new DOMParser().parseFromString(newPageHtml, 'text/html');

			var _mergeHeadContents = (0, _mergeHeadContents3.default)(document.head, newDocument.head, { shouldPersist: _this.isPersistentTag }),
			    removed = _mergeHeadContents.removed,
			    added = _mergeHeadContents.added;

			var lang = (0, _updateLangAttribute2.default)(document.documentElement, newDocument.documentElement);

			_this.swup.log('Removed ' + removed.length + ' / added ' + added.length + ' tags in head');
			if (lang) {
				_this.swup.log('Updated lang attribute: ' + lang);
			}

			if (_this.options.awaitAssets) {
				_this.assetLoadPromises = (0, _waitForAssets2.default)(added, _this.options.timeout);
			} else {
				_this.assetLoadPromises = [];
			}

			newDocument.documentElement.innerHTML = '';
			newDocument = null;
		};

		_this.isPersistentTag = function (el) {
			var persistTags = _this.options.persistTags;

			if (typeof persistTags === 'function') {
				return persistTags(el);
			}
			if (typeof persistTags === 'string') {
				return el.matches(persistTags);
			}
			return Boolean(persistTags);
		};

		_this.options = _extends({
			persistTags: false,
			persistAssets: false,
			awaitAssets: false,
			timeout: 3000
		}, options);
		return _this;
	}

	_createClass(HeadPlugin, [{
		key: 'mount',
		value: function mount() {
			this.validateOptions();

			// Replace head contents right before content itself
			this.swup.on('willReplaceContent', this.updateHead);

			// Overwrite swup's replaceContent to let us defer until all assets are loaded
			if (this.options.awaitAssets) {
				this.originalSwupReplaceContent = this.swup.replaceContent.bind(this.swup);
				this.swup.replaceContent = this.replaceContentAfterAssetsLoaded.bind(this);
			}
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			this.swup.off('willReplaceContent', this.updateHead);

			if (this.originalSwupReplaceContent) {
				this.swup.replaceContent = this.originalSwupReplaceContent;
				this.originalSwupReplaceContent = null;
			}
		}
	}, {
		key: 'validateOptions',
		value: function validateOptions() {
			// options.persistAssets is a shortcut for:
			// options.persistTags with a default asset selector for scripts & styles
			if (this.options.persistAssets && !this.options.persistTags) {
				this.options.persistTags = 'link[rel=stylesheet], script[src], style';
			}

			// Make sure the swup version in use supports hooking into `replaceContent`
			if (this.options.awaitAssets && !this.swup.replaceContent) {
				this.options.awaitAssets = false;
				console.error('[Swup Head Plugin] Installed version of swup doesn\'t support awaitAssets option');
			}
		}
	}, {
		key: 'replaceContentAfterAssetsLoaded',
		value: function replaceContentAfterAssetsLoaded() {
			var _this2 = this;

			for (var _len = arguments.length, originalArgs = Array(_len), _key = 0; _key < _len; _key++) {
				originalArgs[_key] = arguments[_key];
			}

			if (this.assetLoadPromises.length) {
				this.swup.log('Waiting for ' + this.assetLoadPromises.length + ' assets to load');
				return new Promise(function (resolve) {
					Promise.all(_this2.assetLoadPromises).then(function () {
						_this2.assetLoadPromises = [];
						_this2.originalSwupReplaceContent.apply(_this2, originalArgs).then(resolve);
					});
				});
			} else {
				return this.originalSwupReplaceContent.apply(this, originalArgs);
			}
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mergeHeadContents;
function mergeHeadContents(currentHead, newHead) {
	var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	    _ref$shouldPersist = _ref.shouldPersist,
	    shouldPersist = _ref$shouldPersist === undefined ? function () {
		return false;
	} : _ref$shouldPersist;

	var themeActive = Boolean(document.querySelector('[data-swup-theme]'));

	var currentTags = Array.from(currentHead.children);
	var newChildren = Array.from(newHead.children);

	var addTags = getTagsToAdd(currentTags, newChildren, { themeActive: themeActive });
	var removeTags = getTagsToRemove(currentTags, newChildren);

	// Remove tags in reverse to keep indexes, keep persistant elements
	removeTags.reverse().filter(function (_ref2) {
		var el = _ref2.el;
		return shouldManageTag(el);
	}).filter(function (_ref3) {
		var el = _ref3.el;
		return !shouldPersist(el);
	}).forEach(function (_ref4) {
		var el = _ref4.el;
		return currentHead.removeChild(el);
	});

	// Insert tag *after* previous version of itself to preserve JS variable scope and CSS cascaade
	addTags.filter(function (_ref5) {
		var el = _ref5.el;
		return shouldManageTag(el);
	}).forEach(function (_ref6) {
		var el = _ref6.el,
		    index = _ref6.index;

		currentHead.insertBefore(el, currentHead.children[index + 1] || null);
	});

	return {
		removed: removeTags.map(function (_ref7) {
			var el = _ref7.el;
			return el;
		}),
		added: addTags.map(function (_ref8) {
			var el = _ref8.el;
			return el;
		})
	};
};

function getTagsToRemove(currentEls, newEls) {
	return currentEls.reduce(function (tags, el) {
		var isAmongNew = newEls.some(function (newEl) {
			return compareTags(el, newEl);
		});
		var isThemeTag = el.matches('[data-swup-theme]');
		if (!isAmongNew && !isThemeTag) {
			tags.push({ el: el });
		}
		return tags;
	}, []);
};

function getTagsToAdd(currentEls, newEls, _ref9) {
	var themeActive = _ref9.themeActive;

	return newEls.reduce(function (tags, el, i) {
		var isAmongCurrent = currentEls.some(function (currentEl) {
			return compareTags(el, currentEl);
		});
		if (!isAmongCurrent) {
			var index = themeActive ? i + 1 : i;
			tags.push({ el: el, index: index });
		}
		return tags;
	}, []);
};

function shouldManageTag(el) {
	return el.localName !== 'title'; // swup manages title itself
}

function compareTags(oldTag, newTag) {
	return oldTag.outerHTML === newTag.outerHTML;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = updateLangAttribute;
function updateLangAttribute(currentHtml, newHtml) {
	if (currentHtml.lang !== newHtml.lang) {
		currentHtml.lang = newHtml.lang;
		return currentHtml.lang;
	} else {
		return null;
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitForAssets;

var _waitForStylesheet = __webpack_require__(6);

var _waitForStylesheet2 = _interopRequireDefault(_waitForStylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function waitForAssets(elements) {
  var timeoutMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return elements.filter(function (el) {
    return el.matches('link[rel=stylesheet][href]');
  }).map(function (el) {
    return (0, _waitForStylesheet2.default)(el, timeoutMs);
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = waitForStylesheet;
function waitForStylesheet(element) {
  var timeoutMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var isLoaded = function isLoaded(_ref) {
    var href = _ref.href;

    return Array.from(document.styleSheets).map(function (_ref2) {
      var href = _ref2.href;
      return href;
    }).includes(href);
  };

  var whenLoaded = function whenLoaded(cb) {
    if (isLoaded(element)) {
      cb();
    } else {
      setTimeout(function () {
        return whenLoaded(cb);
      }, 10);
    }
  };

  return new Promise(function (resolve) {
    whenLoaded(resolve);
    if (timeoutMs > 0) {
      setTimeout(resolve, timeoutMs);
    }
  });
};

/***/ })
/******/ ]);
});