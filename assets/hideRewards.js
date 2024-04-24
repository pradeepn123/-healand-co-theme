/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./js/sections/hideRewards.js ***!
  \************************************/
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var interval = setInterval(() => {
    hideReward();
  }, 1000);
});
/******/ })()
;