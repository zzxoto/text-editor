/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/rootTest.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/pubSub/index.js":
/*!********************************!*\
  !*** ./public/pubSub/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nexports.default = function () {\n\tthis.subscribers = [];\n\n\tthis.publish = function (type, payload) {\n\t\tfor (var i = 0; i < this.subscribers.length; i++) {\n\t\t\tif (this.subscribers[i].type === type) this.subscribers[i].callback(payload);\n\t\t}\n\t};\n\n\tthis.subscribe = function (type, callback) {\n\t\tthis.subscribers.push({ type: type, callback: callback });\n\t};\n};\n\n//# sourceURL=webpack:///./public/pubSub/index.js?");

/***/ }),

/***/ "./tests/rootTest.js":
/*!***************************!*\
  !*** ./tests/rootTest.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _tests = __webpack_require__(/*! ./tests.js */ \"./tests/tests.js\");\n\n(0, _tests.pubsub)();\n(0, _tests.scribbles)();\n\n//# sourceURL=webpack:///./tests/rootTest.js?");

/***/ }),

/***/ "./tests/tests.js":
/*!************************!*\
  !*** ./tests/tests.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.scribbles = exports.pubsub = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _pubSub = __webpack_require__(/*! ../public/pubSub */ \"./public/pubSub/index.js\");\n\nvar _pubSub2 = _interopRequireDefault(_pubSub);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import virtualDOM from '../public/virtualDOM';\n\nfunction pubsub() {\n\tvar a = function a(args) {\n\t\tconsole.log(args);\n\t};\n\tvar b = function b(args) {\n\t\tconsole.log(args);\n\t};\n\tvar pubsub = new _pubSub2.default();\n\n\tvar p = { x: 1 };\n\tp = _extends({}, p, pubsub);\n\tp.subscribe(a);\n\tp.subscribe(b);\n\tp.publish(\"hello world\");\n\t////\n\tconsole.log('pubSub test completed');\n}\n\n// function vDOM(){\n// \tvirtualDOM.insertChar(0, 1, \"a\");\n\n// }\n\nfunction scribbles() {}\n\nexports.pubsub = pubsub;\nexports.scribbles = scribbles;\n\n//# sourceURL=webpack:///./tests/tests.js?");

/***/ })

/******/ });