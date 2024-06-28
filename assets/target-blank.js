/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./js/sections/target-blank.js ***!
  \*************************************/
var tags = document.getElementsByClassName("targetblank_only-mobile");
for (var i = 0; i < tags.length; i++) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    tags[i].target = "_self";
  }
}
/******/ })()
;