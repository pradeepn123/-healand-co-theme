"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    var props = {};
    if (appTarget && !initialized) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec;
        props = json_6__WEBPACK_IMPORTED_MODULE_0___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });
      appTarget.dataset.initialized = true;
      return instance;
    }
  });
});

/***/ })

}]);