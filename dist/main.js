/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/example */ \"./src/resources/example.js\");\n\r\n// import {multiplyBy2 as m2, squarePower as SP, divideBy2 as d2} from \"./resources/example\";\r\n// import MathCustom from \"./resources/example\"\r\n\r\n// function component() {\r\n//     const element = document.createElement('div');\r\n//\r\n//     // Lodash, currently included via a script, is required for this line to work\r\n//     // Lodash, now imported by this script\r\n//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n//\r\n//     return element;\r\n// }\r\n// document.body.appendChild(component());\r\n\r\nconst r = _resources_example__WEBPACK_IMPORTED_MODULE_0__.MathCustom.multiplyBy2(2)\r\nconst r1 = _resources_example__WEBPACK_IMPORTED_MODULE_0__.MathCustom.divideBy2(4);\r\nconst r2 = _resources_example__WEBPACK_IMPORTED_MODULE_0__.MathCustom.squarePower(4);\r\n\r\n\r\n\n\n//# sourceURL=webpack://Exerciser/./src/index.js?");

/***/ }),

/***/ "./src/resources/example.js":
/*!**********************************!*\
  !*** ./src/resources/example.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MathCustom\": () => (/* binding */ MathCustom)\n/* harmony export */ });\nclass MathCustom {\r\n    static multiplyBy2 = function (a) {\r\n        return a * 2;\r\n    }\r\n    static divideBy2 = (a) => a * 2;\r\n    static squarePower = (a) => a ** 2;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://Exerciser/./src/resources/example.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;