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
/******/ 	return __webpack_require__(__webpack_require__.s = "./spec/index.spec.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./spec/index.spec.js":
/*!****************************!*\
  !*** ./spec/index.spec.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lineSpec = __webpack_require__(/*! ./line.spec.js */ \"./spec/line.spec.js\");\n\nvar x = _interopRequireWildcard(_lineSpec);\n\nvar _lineModuleSpec = __webpack_require__(/*! ./lineModule.spec.js */ \"./spec/lineModule.spec.js\");\n\nvar y = _interopRequireWildcard(_lineModuleSpec);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n//# sourceURL=webpack:///./spec/index.spec.js?");

/***/ }),

/***/ "./spec/line.spec.js":
/*!***************************!*\
  !*** ./spec/line.spec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _line = __webpack_require__(/*! ../src/virtual_dom/line.js */ \"./src/virtual_dom/line.js\");\n\nvar _line2 = _interopRequireDefault(_line);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndescribe(\"#line.js\", function () {\n\tvar line = void 0;\n\n\tbeforeEach(function () {\n\t\tline = new _line2.default();\n\t});\n\n\tit(\"should exist\", function () {\n\t\texpect(line).toBeDefined();\n\t});\n\n\tit(\"#getLastLetterIndex\", function () {\n\t\texpect(line.getLastLetterIndex()).toBe(0);\n\t\tline.line = [1, 2, 3];\n\t\texpect(line.getLastLetterIndex()).toBe(3);\n\t});\n\n\tit(\"#isEmpty\", function () {\n\t\texpect(line.isEmpty()).toBe(true);\n\n\t\tline.line = [1, 2];\n\t\texpect(line.isEmpty()).toBe(false);\n\t});\n\n\tit(\"#insertChar\", function () {\n\t\tline.insertChar(0, \"a\");\n\t\texpect(line.line[0]).toBe(\"a\");\n\n\t\tline.insertChar(0, \"b\");\n\t\texpect(line.line[0]).toBe(\"b\");\n\n\t\tline.insertChar(1, \"c\");\n\t\texpect(line.line[0]).toBe(\"b\");\n\t\texpect(line.line[1]).toBe(\"c\");\n\t\texpect(line.line[2]).toBe(\"a\");\n\n\t\tline.insertChar(3, \"d\");\n\t\texpect(line.line[3]).toBe(\"d\");\n\t\texpect(line.line[2]).toBe(\"a\");\n\t});\n\n\tit(\"#removeChar\", function () {\n\t\tline.line = [\"a\", \"b\"];\n\t\tline.removeChar(0);\n\t\texpect(line.line.length).toBe(2);\n\n\t\tline.removeChar(1);\n\t\texpect(line.line.length).toBe(1);\n\t\texpect(line.line[0]).toBe(\"b\");\n\n\t\tline.line = [\"a\", \"b\", \"c\"];\n\t\tline.removeChar(2);\n\t\texpect(line.line[0]).toBe(\"a\");\n\t\texpect(line.line[1]).toBe(\"c\");\n\t\texpect(line.line.length).toBe(2);\n\t});\n\n\tit(\"#split\", function () {\n\t\tline.line = [];\n\t\texpect(line.split(0)).toEqual([[], []]);\n\t\tline.line = [\"a\"];\n\t\texpect(line.split(0)).toEqual([[], [\"a\"]]);\n\t\texpect(line.split(1)).toEqual([[\"a\"], []]);\n\t\tline.line = [\"a\", \"b\"];\n\t\texpect(line.split(0)).toEqual([[], [\"a\", \"b\"]]);\n\t\texpect(line.split(1)).toEqual([[\"a\"], [\"b\"]]);\n\t\texpect(line.split(2)).toEqual([[\"a\", \"b\"], []]);\n\t\texpect(line.line).toEqual([\"a\", \"b\"]);\n\t});\n\n\tit(\"#setLine\", function () {\n\t\tline.line = [];\n\t\tline.setLine([\"a\", \"b\"]);\n\t\texpect(line.line).toEqual([\"a\", \"b\"]);\n\t});\n\n\tit(\"#append\", function () {\n\t\tline.line = [];\n\t\tline.append([\"a\", \"b\"]);\n\t\texpect(line.line).toEqual([\"a\", \"b\"]);\n\t\tline.append([]);\n\t\texpect(line.line).toEqual([\"a\", \"b\"]);\n\t\tline.append([\"c\"]);\n\t\texpect(line.line).toEqual([\"a\", \"b\", \"c\"]);\n\t});\n});\n\n//# sourceURL=webpack:///./spec/line.spec.js?");

/***/ }),

/***/ "./spec/lineModule.spec.js":
/*!*********************************!*\
  !*** ./spec/lineModule.spec.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _lineModule = __webpack_require__(/*! ../src/virtual_dom/lineModule.js */ \"./src/virtual_dom/lineModule.js\");\n\nvar _lineModule2 = _interopRequireDefault(_lineModule);\n\nvar _line = __webpack_require__(/*! ../src/virtual_dom/line.js */ \"./src/virtual_dom/line.js\");\n\nvar _line2 = _interopRequireDefault(_line);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndescribe(\"lineModule\", function () {\n\n\tbeforeEach(function () {\n\t\t_lineModule2.default.head = new _line2.default();\n\t\t_lineModule2.default.lastLineIndex = 0;\n\t\t_lineModule2.default.head.line = ['h', 'e', 'a', 'd'];\n\t});\n\n\tdescribe(\"#addLine\", function () {\n\n\t\tit(\"add line right next\", function () {\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.head.next).not.toBe(null);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual([]);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t});\n\n\t\tit(\"add line before the first\", function () {\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t\t_lineModule2.default.addLine(0);\n\t\t\texpect(_lineModule2.default.head.next).not.toBe(null);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual([]);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t});\n\n\t\tit(\"add two lines consecutively\", function () {\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\t_lineModule2.default.head.next.line = ['n', 'e', 'x', 't'];\n\t\t\t_lineModule2.default.addLine(2);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual(['n', 'e', 'x', 't']);\n\t\t\texpect(_lineModule2.default.head.next.next.line).toEqual([]);\n\t\t\texpect(_lineModule2.default.head.next.next.next).toBe(null);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(2);\n\t\t});\n\n\t\tit(\"add two lines not consecutively\", function () {\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\t_lineModule2.default.head.next.line = ['n', 'e', 'x', 't'];\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual([]);\n\t\t\texpect(_lineModule2.default.head.next.next.line).toEqual(['n', 'e', 'x', 't']);\n\t\t\texpect(_lineModule2.default.head.next.next.next).toBe(null);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(2);\n\t\t});\n\t});\n\n\tdescribe(\"#removeLine\", function () {\n\n\t\tit(\"should remove nothing\", function () {\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t\t_lineModule2.default.removeLine(0);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t});\n\n\t\tit(\"should remove first line\", function () {\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual([]);\n\t\t\t_lineModule2.default.removeLine(0);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.line).toEqual([]);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t});\n\n\t\tit(\"should remove last line\", function () {\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual([]);\n\t\t\t_lineModule2.default.removeLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(0);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next).toBe(null);\n\t\t});\n\n\t\tit(\"should remove middle line\", function () {\n\t\t\t_lineModule2.default.addLine(1);\n\t\t\t_lineModule2.default.head.next.line = ['m', 'i', 'd'];\n\t\t\t_lineModule2.default.addLine(2);\n\t\t\t_lineModule2.default.head.next.next.line = ['e', 'n', 'd'];\n\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(2);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual(['m', 'i', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.next.line).toEqual(['e', 'n', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.next.next).toBe(null);\n\t\t\t_lineModule2.default.removeLine(1);\n\t\t\texpect(_lineModule2.default.lastLineIndex).toBe(1);\n\t\t\texpect(_lineModule2.default.head.line).toEqual(['h', 'e', 'a', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.line).toEqual(['e', 'n', 'd']);\n\t\t\texpect(_lineModule2.default.head.next.next).toBe(null);\n\t\t});\n\t});\n\n\tit(\"should get line\", function () {\n\t\t_lineModule2.default.addLine(1);\n\t\t_lineModule2.default.addLine(2);\n\t\t_lineModule2.default.head.next.line = ['o', 'n', 'e'];\n\t\t_lineModule2.default.head.next.next.line = ['t', 'w', 'o'];\n\n\t\texpect(_lineModule2.default.getLine(0).line).toEqual(['h', 'e', 'a', 'd']);\n\t\texpect(_lineModule2.default.getLine(1).line).toEqual(['o', 'n', 'e']);\n\t\texpect(_lineModule2.default.getLine(2).line).toEqual(['t', 'w', 'o']);\n\t});\n});\n\n//# sourceURL=webpack:///./spec/lineModule.spec.js?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar letter_width = 8.796;\nvar line_height = 20;\nvar block_size = 20;\nvar line_size = 100;\n\nexports.letter_width = letter_width;\nexports.line_height = line_height;\nexports.block_size = block_size;\nexports.line_size = line_size;\n\n//# sourceURL=webpack:///./src/globals.js?");

/***/ }),

/***/ "./src/virtual_dom/line.js":
/*!*********************************!*\
  !*** ./src/virtual_dom/line.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _globals = __webpack_require__(/*! ../globals.js */ \"./src/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/*\r\n*LinkedList whose data field is Array<String>\r\n*letterIndex is 0 for empty line WATCH OUT!!\r\n*/\nfunction LineFactory() {\n\tthis.line = [];\n\tthis.next = null;\n}\n\n/*\r\n\treturns True if line @param lineIndex is at least of size @param letterIndex\r\n*/\nLineFactory.prototype.getLastLetterIndex = function () {\n\treturn this.line.length;\n};\n\nLineFactory.prototype.isEmpty = function () {\n\treturn this.line.length <= 0;\n};\n\n/*\r\n\tinserts char at index letterIndex\r\n\tpops element from bottom of list if size of array is already full.\r\n*/\nLineFactory.prototype.insertChar = function (letterIndex, char) {\n\tthis.line.splice(letterIndex, 0, char);\n\tthis.line = [].concat(_toConsumableArray(this.line));\n};\n\n/*\r\n*When letterIndex = 0 removeRequest is for very begining of the line...\r\n in which case nothing is removed.\r\n*When letterIndex = 1 removeRequest is for first character\r\n*simply line.splice(1, 1) would remove second character\r\n*so line.splice(letterIndex - 1, 1) is necessary\r\n*/\nLineFactory.prototype.removeChar = function (letterIndex) {\n\tif (letterIndex > 0) {\n\t\tthis.line = [].concat(_toConsumableArray(this.line));\n\t\tthis.line.splice(letterIndex - 1, 1);\n\t}\n};\n\n/**\r\n *Splits the line at `letterIndex` and returns splitted array\r\n *example: this.line = [\"a\", \"b\"]\r\n *this.split(1);//[[\"a\"], [\"b\"]]\r\n */\nLineFactory.prototype.split = function (letterIndex) {\n\treturn [this.line.slice(0, letterIndex), this.line.slice(letterIndex, this.line.length)];\n};\n\nLineFactory.prototype.setLine = function (line) {\n\tthis.line = line;\n};\n\n/**\r\n*@param line, LineFactory object\r\n*/\nLineFactory.prototype.append = function (line) {\n\tthis.line = [].concat(_toConsumableArray(this.line), _toConsumableArray(line.line));\n\tconsole.log(this.line);\n\tconsole.log(line);\n};\n\nexports.default = LineFactory;\n\n//# sourceURL=webpack:///./src/virtual_dom/line.js?");

/***/ }),

/***/ "./src/virtual_dom/lineModule.js":
/*!***************************************!*\
  !*** ./src/virtual_dom/lineModule.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _globals = __webpack_require__(/*! ../globals.js */ \"./src/globals.js\");\n\nvar globals = _interopRequireWildcard(_globals);\n\nvar _line = __webpack_require__(/*! ./line.js */ \"./src/virtual_dom/line.js\");\n\nvar _line2 = _interopRequireDefault(_line);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction LineModule() {\n\tthis.head = new _line2.default();\n\tthis.lastLineIndex = 0;\n\n\t/*\r\n \tInserts new Line with arr @param{arr} at index @param`index`\r\n */\n\tthis.addLine = function (index) {\n\t\tthis.lastLineIndex++;\n\n\t\tvar newLine = new _line2.default();\n\n\t\tif (index == 0) {\n\t\t\tnewLine.next = this.head;\n\t\t\tthis.head = newLine;\n\t\t\treturn;\n\t\t}\n\n\t\tvar curr = this.head;\n\t\tvar prev = curr;\n\n\t\twhile (index > 0) {\n\t\t\tprev = curr;\n\t\t\tcurr = curr.next;\n\t\t\tindex--;\n\t\t}\n\n\t\tprev.next = newLine;\n\t\tnewLine.next = curr;\n\t};\n\n\t/*\r\n \tRemoves line at index index\r\n */\n\tthis.removeLine = function (index) {\n\t\tif (this.lastLineIndex == 0) return;\n\t\tthis.lastLineIndex--;\n\n\t\tif (index == 0) {\n\t\t\tthis.head = this.head.next;\n\t\t\treturn;\n\t\t}\n\n\t\tvar curr = this.head;\n\t\tvar prev = curr;\n\n\t\twhile (index > 0) {\n\t\t\tprev = curr;\n\t\t\tcurr = curr.next;\n\t\t\tindex--;\n\t\t}\n\n\t\tprev.next = curr.next;\n\t};\n\n\tthis.getLine = function (index) {\n\t\tif (index > this.lastLineIndex) throw \"getLine index out of bounds\";\n\t\tvar _head = this.head;\n\t\twhile (index > 0) {\n\t\t\t_head = _head.next;\n\t\t\tindex--;\n\t\t}\n\t\treturn _head;\n\t};\n\n\t/*\r\n \tSimulating map function on linked List\r\n */\n\tthis.map = function (callback) {\n\t\tvar _head = this.head;\n\t\tvar toReturn = [];\n\t\tvar index = 0;\n\n\t\twhile (_head) {\n\t\t\ttoReturn.push(callback(_head.line, index));\n\t\t\t_head = _head.next;\n\t\t\tindex++;\n\t\t}\n\t\treturn toReturn;\n\t};\n\n\tthis.print = function () {\n\t\tvar _head = this.head;\n\t\twhile (_head) {\n\t\t\tconsole.log(_head);\n\t\t\t_head = _head.next;\n\t\t}\n\t};\n}\n\nexports.default = new LineModule();\n\n//# sourceURL=webpack:///./src/virtual_dom/lineModule.js?");

/***/ })

/******/ });