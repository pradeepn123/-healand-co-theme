/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./js/sections/readmore.js ***!
  \*********************************/
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var readMoreParentContent = document.querySelector("#show_more_prodDescription");
  var readMoreBTN = document.querySelector('#readMore_btn');
  var readLessContent = document.querySelector("#show_less_prodDescription");
  var readLessBTN = document.querySelector('#readLess_btn');
  readMoreBTN === null || readMoreBTN === void 0 || readMoreBTN.addEventListener('click', () => {
    readMoreBTN.style.display = 'none';
    readMoreParentContent.style.display = 'none';
    readLessBTN.style.display = 'block';
    readLessContent.style.display = 'block';
  });
  readLessBTN === null || readLessBTN === void 0 || readLessBTN.addEventListener('click', () => {
    readLessBTN.style.display = 'none';
    readLessContent.style.display = 'none';
    readMoreBTN.style.display = 'inline';
    readMoreParentContent.style.display = 'block';
  });
});
/******/ })()
;