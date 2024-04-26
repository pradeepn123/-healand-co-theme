/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/custom-carousel.js":
/*!******************************************!*\
  !*** ./js/components/custom-carousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var _excluded = ["breakpoints"],
  _excluded2 = ["pagination", "navigation"],
  _excluded3 = ["navigation", "pagination", "progressPagination", "paginationType"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
  }
  connectedCallback() {
    this.initCarousel();
  }
  getCarouselSettings() {
    var readOnlyPaginationType = "dots";
    this.currentWidth = window.innerWidth;
    //default settings
    var defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    };
    var carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    var _this$carouselSetting = this.carouselSettings,
      {
        breakpoints
      } = _this$carouselSetting,
      otherSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting, _excluded);
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          } else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }
          var _this$breakpointSetti = this.breakpointSettings,
            {
              pagination,
              navigation
            } = _this$breakpointSetti,
            otherResponsiveSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$breakpointSetti, _excluded2);
          this.carouselSettings = _objectSpread(_objectSpread(_objectSpread({}, otherSettings), otherResponsiveSettings), {}, {
            pagination,
            navigation
          });
        }
      });
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      var _this$carouselSetting2 = this.carouselSettings,
        {
          navigation,
          pagination,
          progressPagination,
          paginationType = readOnlyPaginationType["dots"]
        } = _this$carouselSetting2,
        otherSwiperSettings = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$carouselSetting2, _excluded3);
      carouselSettings = _objectSpread({}, otherSwiperSettings);
      if (navigation) {
        var navigationNext = this.parent.querySelector('[data-navigation-next]');
        var navigationPrev = this.parent.querySelector('[data-navigation-prev]');
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev
          }
        });
      }
      if (pagination) {
        var swiperPagination = this.parent.querySelector('[data-pagination]');
        var _pagination = {
          el: swiperPagination,
          clickable: true
        };
        if (paginationType == "bars") {
          _pagination = {
            el: swiperPagination,
            clickable: true,
            type: 'custom',
            renderCustom: (swiper, current, total) => {
              var text = '';
              Array(total).fill().forEach((_, index) => {
                text += "<div class='swiper-pagination-bullet swiper-pagination--bar ".concat(index == current - 1 ? 'swiper-pagination-active' : '', " '>\n                    <div class=\"swiper-pagination__progress\"></div>\n                  </div>");
              });
              return text;
            }
          };
        }
        if (progressPagination) {
          _pagination = {
            el: swiperPagination,
            type: 'progressbar'
          };
        }
        carouselSettings = _objectSpread(_objectSpread({}, carouselSettings), {}, {
          pagination: _pagination
        });
      }
    }
    return carouselSettings;
  }
  initCarousel() {
    var _this$querySelector, _this$querySelector2;
    this.parent = this.closest('[data-parent]');
    this.carouselSettings = JSON.parse(((_this$querySelector = this.querySelector('[data-settings]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.innerHTML) || "{}");
    this.placeholders = (_this$querySelector2 = this.querySelector('[data-carousel-placeholder]')) === null || _this$querySelector2 === void 0 ? void 0 : _this$querySelector2.innerHTML;
    this.navigations = this.parent.querySelector('[data-navigations]');
    this.currentWidth = window.innerWidth;
    window.carousels = window.carousels || {};
    var swiperNavigationElements = "\n    <div data-navigation-next data-navigation  class=\"swiper-navigation swiper-navigation--next ".concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#2F4775\"/>\n        <path d=\"M18.9414 14.8237L24.7061 20.5884L18.9414 26.3531\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n    </svg>\n    </div>\n    <div data-navigation-prev data-navigation class=\"swiper-navigation swiper-navigation--prev ").concat(this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : '', " \">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n        <circle cx=\"21\" cy=\"21\" r=\"21\" fill=\"#2F4775\"/>\n        <path d=\"M22.7061 26.353L16.9413 20.5883L22.7061 14.8236\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"square\"/>\n      </svg>\n    </div>\n    ");
    this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    var carouselSettings = this.getCarouselSettings();
    var linkedSlider = window.carousels["".concat(this.carouselSettings.linked)];
    //get thumbs
    if (linkedSlider) {
      carouselSettings.thumbs = {
        swiper: linkedSlider
      };
    }
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.container, _objectSpread({
      on: {
        beforeInit: () => {
          var {
            navigation,
            pagination
          } = carouselSettings || {};
          debugger;
          if (!navigation) {
            this.parent.querySelectorAll('[data-navigation]').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          } else {
            this.parent.querySelector('.swiper-navigation--hide') && this.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
          if (!pagination) {
            this.parent.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          } else {
            this.parent.querySelector('.swiper-pagination--hide') && this.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: swiper => {
          var name = this.carouselSettings.name;
          if (name) {
            window.carousels = window.carousels || {};
            window.carousels["".concat(name)] = swiper;
          }
        }
      },
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Autoplay, swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Thumbs]
    }, carouselSettings));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCarousel);

/***/ }),

/***/ "./js/components/import-custom-elements.js":
/*!*************************************************!*\
  !*** ./js/components/import-custom-elements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/custom-carousel */ "./js/components/custom-carousel.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  customElements.define('custom-carousel', JsComponents_custom_carousel__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./js/sections/announcementBar.js":
/*!****************************************!*\
  !*** ./js/sections/announcementBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/AnnouncementBar.svelte */ "./js/components/svelte/AnnouncementBar.svelte");
 //wrapper that inject svelte into DOM
 //svelte component to load

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_AnnouncementBar_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'announcement-bar', '#announcement-bar-data');
});

/***/ }),

/***/ "./js/sections/bundleTabsSection.js":
/*!******************************************!*\
  !*** ./js/sections/bundleTabsSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/svelte-wrapper */ "./js/components/svelte-wrapper.js");
/* harmony import */ var SvelteComponents_BundleTabsSection_index_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! SvelteComponents/BundleTabsSection/index.svelte */ "./js/components/svelte/BundleTabsSection/index.svelte");
 //wrapper that inject svelte into DOM
 //svelte component to load

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,JsComponents_svelte_wrapper__WEBPACK_IMPORTED_MODULE_0__["default"])(SvelteComponents_BundleTabsSection_index_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], 'bundle-tabs-section', '#product-bundle-data');
});

/***/ }),

/***/ "./js/sections/global.js":
/*!*******************************!*\
  !*** ./js/sections/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _announcementBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcementBar */ "./js/sections/announcementBar.js");
/* harmony import */ var _bundleTabsSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundleTabsSection */ "./js/sections/bundleTabsSection.js");
/* harmony import */ var _hideRewards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hideRewards */ "./js/sections/hideRewards.js");
/* harmony import */ var JsComponents_import_custom_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/import-custom-elements */ "./js/components/import-custom-elements.js");
/* harmony import */ var _readmore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readmore */ "./js/sections/readmore.js");
/* harmony import */ var _readmore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_readmore__WEBPACK_IMPORTED_MODULE_4__);
//global imports here






//config lazyload to default settings

document.addEventListener('DOMContentLoaded', () => {
  (0,_announcementBar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_bundleTabsSection__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_hideRewards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,JsComponents_import_custom_elements__WEBPACK_IMPORTED_MODULE_3__["default"])();
  _readmore__WEBPACK_IMPORTED_MODULE_4___default()();
});

/***/ }),

/***/ "./js/sections/hideRewards.js":
/*!************************************!*\
  !*** ./js/sections/hideRewards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var hideReward = () => {
  var popup = document.querySelector('.needsclick');
  var reward = document.querySelector('#smile-ui-lite-container');
  var chatIcon = document.querySelector('#gorgias-chat-container');
  var cookies = document.querySelector('#pandectes-banner');
  var visibilityProps = [reward, chatIcon, cookies].filter(Boolean);
  var isPopupClosed = popup ? popup.classList.contains('undefined') : false;
  if (!popup || isPopupClosed) {
    visibilityProps.forEach(e => {
      e.style.opacity = '1';
    });
  } else {
    visibilityProps.forEach(e => {
      e.style.opacity = '0';
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var interval = setInterval(() => {
    hideReward();
  }, 1000);
});

/***/ }),

/***/ "./js/sections/readmore.js":
/*!*********************************!*\
  !*** ./js/sections/readmore.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
  var readMoreParentContent = document.querySelector("#show_more_prodDescription");
  var readMoreBTN = document.querySelector('#readMore_btn');
  var readLessContent = document.querySelector("#show_less_prodDescription");
  var readLessBTN = document.querySelector('#readLess_btn');
  readMoreBTN.addEventListener('click', () => {
    readMoreBTN.style.display = 'none';
    readMoreParentContent.style.display = 'none';
    readLessBTN.style.display = 'block';
    readLessContent.style.display = 'block';
  });
  readLessBTN.addEventListener('click', () => {
    readLessBTN.style.display = 'none';
    readLessContent.style.display = 'none';
    readMoreBTN.style.display = 'block';
    readMoreParentContent.style.display = 'block';
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./js/sections/global.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;