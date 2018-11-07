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
eval("\n\nvar _iterator = __webpack_require__(/*! ./iterator.spec */ \"./spec/iterator.spec.js\");\n\nvar x = _interopRequireWildcard(_iterator);\n\nvar _text = __webpack_require__(/*! ./text.spec */ \"./spec/text.spec.js\");\n\nvar y = _interopRequireWildcard(_text);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n//# sourceURL=webpack:///./spec/index.spec.js?");

/***/ }),

/***/ "./spec/iterator.spec.js":
/*!*******************************!*\
  !*** ./spec/iterator.spec.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Iterator = __webpack_require__(/*! ../src/model/Iterator */ \"./src/model/Iterator.js\");\n\ndescribe('#Iterator', function () {\n\n  it('#1, 2 and error', function () {\n    var it = new _Iterator.Iterator([1, 2]);\n\n    var i1 = it.next(),\n        i2 = it.next();\n\n    expect(i1.value).toBe(1);\n    expect(i2.value).toBe(2);\n    expect(i1.done).toBe(false);\n    expect(i2.done).toBe(true);\n\n    expect(it.next.bind(it)).toThrow();\n  });\n\n  it('#error when empty array and next attempt', function () {\n    var it = new _Iterator.Iterator([]);\n\n    expect(it.next.bind(it)).toThrow();\n  });\n\n  it('#from', function () {\n    var it = new _Iterator.Iterator([1, 2, 3]).from(1);\n\n    expect(it.next().value).toBe(2);\n    expect(it.next().value).toBe(3);\n    expect(it.next.bind(it)).toThrow();\n  });\n\n  it('#from and #to', function () {\n    var it = new _Iterator.Iterator([1, 2, 3, 4]).from(1).to(2);\n\n    expect(it.next().value).toBe(2);\n    expect(it.next().value).toBe(3);\n    expect(it.next.bind(it)).toThrow();\n  });\n\n  it('#from and #to where to == from', function () {\n    var it = new _Iterator.Iterator([1, 2, 3, 4]).from(1).to(1);\n\n    expect(it.next().value).toBe(2);\n    expect(it.next.bind(it)).toThrow();\n  });\n\n  it('#from and #to where from > to', function () {\n    var it = new _Iterator.Iterator([1, 2, 3, 4]).from(2).to(1);\n\n    expect(it.next.bind(it)).toThrow();\n  });\n});\n\n//# sourceURL=webpack:///./spec/iterator.spec.js?");

/***/ }),

/***/ "./spec/text.spec.js":
/*!***************************!*\
  !*** ./spec/text.spec.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Text = __webpack_require__(/*! ../src/model/Text */ \"./src/model/Text.js\");\n\ndescribe('Insert', function () {\n\n  it('inserting within bounds', function () {\n    var text = new _Text.Text();\n\n    text.insert(0, ['a', 'b', 'c']);\n\n    expect(text.length).toBe(3);\n  });\n\n  it('inserting beyond bounds', function () {\n    var text = new _Text.Text();\n    try {\n      text.insert(1, ['a', 'b', 'c']);\n      fail('text.insert expected to fail');\n    } catch (err) {\n      expect(text.length).toBe(0);\n    }\n  });\n\n  it('inserting below lower bound', function () {\n    var text = new _Text.Text();\n    try {\n      text.insert(-1, ['a', 'b', 'c']);\n      fail('text.insert expected to fail');\n    } catch (err) {\n      expect(text.length).toBe(0);\n    }\n  });\n\n  it('inserting in middle', function () {\n    var text = new _Text.Text();\n\n    text.insert(0, ['a', 'c']);\n    text.insert(1, ['b']);\n\n    expect(text.chars[0]).toBe('a');\n    expect(text.chars[1]).toBe('b');\n    expect(text.chars[2]).toBe('c');\n  });\n\n  it('inserting at end', function () {\n    var text = new _Text.Text();\n\n    text.insert(0, ['a', 'b']);\n    text.insert(2, ['c']);\n\n    expect(text.chars[0]).toBe('a');\n    expect(text.chars[1]).toBe('b');\n    expect(text.chars[2]).toBe('c');\n  });\n\n  it('inserting in begining', function () {\n    var text = new _Text.Text();\n\n    text.insert(0, ['b', 'c']);\n    text.insert(0, ['a']);\n\n    expect(text.chars[0]).toBe('a');\n    expect(text.chars[1]).toBe('b');\n    expect(text.chars[2]).toBe('c');\n  });\n});\n\ndescribe('Delete', function () {\n\n  it('deleting at very begining should throw error', function () {\n    var text = new _Text.Text();\n\n    try {\n      text.delete(0, 0);\n      fail('text.delete should have failed');\n    } catch (err) {\n      expect(text.length).toBe(0);\n    }\n  });\n\n  describe('successful deletes', function () {\n    var text = void 0;\n\n    beforeEach(function () {\n      text = new _Text.Text();\n      text.insert(0, ['a', 'b', 'c']);\n    });\n\n    it('deleting from 0 to 0', function () {\n      text.delete(0, 0);\n\n      expect(text.chars[0]).toBe('b');\n      expect(text.chars[1]).toBe('c');\n      expect(text.length).toBe(2);\n    });\n    it('deleting from 0 to 1', function () {\n      text.delete(0, 1);\n\n      expect(text.chars[0]).toBe('c');\n      expect(text.length).toBe(1);\n    });\n    it('deleting from 1 to 2', function () {\n      text.delete(1, 2);\n\n      expect(text.chars[0]).toBe('a');\n      expect(text.length).toBe(1);\n    });\n    it('deleting from 0 to 2', function () {\n      text.delete(0, 2);\n\n      expect(text.length).toBe(0);\n    });\n  });\n\n  describe('unsuccesfull deletes', function () {\n    var text = void 0;\n\n    beforeEach(function () {\n      text = new _Text.Text();\n      text.insert(0, ['a', 'b', 'c']);\n    });\n\n    it('from < 0 or to < 0. Index out of bounds', function () {\n      try {\n        text.delete(-1, -1);\n        fail('text.delete should have failed');\n      } catch (err) {\n        expect(text.length).toBe(3);\n      }\n    });\n\n    it('from >= length or to >= length. Index out of bounds', function () {\n      try {\n        text.delete(3, 3);\n        fail('text.delete should have failed');\n      } catch (err) {\n        expect(text.length).toBe(3);\n      }\n    });\n\n    it('from < to. IllegalArgument', function () {\n      try {\n        text.delete(2, 1);\n        fail('text.delete should have failed');\n      } catch (err) {\n        expect(text.length).toBe(3);\n      }\n    });\n  });\n});\n\ndescribe('getNextNewLineIndex', function () {\n  var text = new _Text.Text();\n  text.insert(0, ['\\n', 'b', '\\n', 'c', '\\n', 'd']);\n\n  it('next new line at 2', function () {\n    var i = text.getNextNewLineIndex(0);\n    expect(i).toBe(2);\n  });\n\n  it('next new line at 2 #2', function () {\n    var i = text.getNextNewLineIndex(1);\n    expect(i).toBe(2);\n  });\n\n  it('next new line at 4', function () {\n    var i = text.getNextNewLineIndex(2);\n    expect(i).toBe(4);\n  });\n\n  it('next new line at 4 #2', function () {\n    var i = text.getNextNewLineIndex(3);\n    expect(i).toBe(4);\n  });\n\n  it('next new line -1', function () {\n    var i = text.getNextNewLineIndex(4);\n    expect(i).toBe(-1);\n  });\n\n  it('next new line -1 #2', function () {\n    var i = text.getNextNewLineIndex(5);\n    expect(i).toBe(-1);\n  });\n\n  it('next new line. Index out of bounds #1', function () {\n    try {\n      var i = text.getNextNewLineIndex(-1);\n      fail('It should have thrown error');\n    } catch (err) {}\n  });\n\n  it('next new line. Index out of bounds #2', function () {\n    try {\n      var i = text.getNextNewLineIndex(6);\n      fail('It should have thrown error');\n    } catch (err) {}\n  });\n});\n\ndescribe('getPrevNewLineIndex', function () {\n  var text = new _Text.Text();\n  text.insert(0, ['\\n', 'b', '\\n', 'c', '\\n', 'd']);\n\n  it('prev new line at 0 #1', function () {\n    var i = text.getPrevNewLineIndex(1);\n    expect(i).toBe(0);\n  });\n\n  it('prev new line at 0 #2', function () {\n    var i = text.getPrevNewLineIndex(2);\n    expect(i).toBe(0);\n  });\n\n  it('prev new line at 2 #1', function () {\n    var i = text.getPrevNewLineIndex(3);\n    expect(i).toBe(2);\n  });\n\n  it('prev new line at 2 #2', function () {\n    var i = text.getPrevNewLineIndex(4);\n    expect(i).toBe(2);\n  });\n\n  it('prev new line at 4', function () {\n    var i = text.getPrevNewLineIndex(5);\n    expect(i).toBe(4);\n  });\n\n  it('prev new line -1', function () {\n    var i = text.getPrevNewLineIndex(0);\n    expect(i).toBe(-1);\n  });\n\n  it('prev new line. Index out of bounds #1', function () {\n    try {\n      var i = text.getPrevNewLineIndex(-1);\n      fail('It should have thrown error');\n    } catch (err) {}\n  });\n\n  it('prev new line. Index out of bounds #2', function () {\n    try {\n      var i = text.getPrevNewLineIndex(6);\n      fail('It should have thrown error');\n    } catch (err) {}\n  });\n});\n\n//# sourceURL=webpack:///./spec/text.spec.js?");

/***/ }),

/***/ "./src/model/Iterator.js":
/*!*******************************!*\
  !*** ./src/model/Iterator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Iterator = exports.Iterator = function () {\n  function Iterator(arr) {\n    _classCallCheck(this, Iterator);\n\n    this.arr = arr;\n    this._from = 0;\n    this._to = this.arr.length - 1;\n  }\n\n  _createClass(Iterator, [{\n    key: 'from',\n    value: function from(i) {\n      this._from = i;\n      return this;\n    }\n  }, {\n    key: 'to',\n    value: function to(i) {\n      this._to = i;\n      return this;\n    }\n  }, {\n    key: 'next',\n    value: function next() {\n      if (this._from > this._to) throw new Error('Iterator cannot iterate further');\n\n      var toReturn = { value: this.arr[this._from], done: this._from == this._to };\n\n      this._from += 1;\n      return toReturn;\n    }\n  }]);\n\n  return Iterator;\n}();\n\n//# sourceURL=webpack:///./src/model/Iterator.js?");

/***/ }),

/***/ "./src/model/Text.js":
/*!***************************!*\
  !*** ./src/model/Text.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Text = exports.Text = function () {\n  function Text() {\n    _classCallCheck(this, Text);\n\n    this.chars = ['EOF']; //eof file always present at last\n  }\n\n  _createClass(Text, [{\n    key: 'insert',\n    value: function insert(from, chars) {\n      if (from > this.length || from < 0) throw new Error('IndexOutOfBound');\n\n      var prefix = this.chars.splice(0, from);\n      var suffix = this.chars;\n      this.chars = [].concat(_toConsumableArray(prefix), _toConsumableArray(chars), _toConsumableArray(suffix));\n    }\n\n    //deletes inclusive from [from, to]\n\n  }, {\n    key: 'delete',\n    value: function _delete(from, to) {\n      if (from >= this.length || to >= this.length || from < 0 || to < 0) {\n        throw new Error('IndexOutOfBound');\n      }\n\n      if (from > to) throw new Error('IllegalArgument');\n\n      return this.chars.splice(from, to - from + 1);\n    }\n  }, {\n    key: 'getNextNewLineIndex',\n    value: function getNextNewLineIndex(index) {\n      if (index < 0 || index >= this.length) throw new Error('IndexOutOfBound');\n\n      for (var i = index + 1; i < this.length; i++) {\n        if (this.chars[i] == '\\n') return i;\n      }\n      return -1;\n    }\n  }, {\n    key: 'getPrevNewLineIndex',\n    value: function getPrevNewLineIndex(index) {\n      if (index < 0 || index >= this.length) throw new Error('IndexOutOfBound');\n\n      for (var i = index - 1; i >= 0; i--) {\n        if (this.chars[i] == '\\n') return i;\n      }\n      return -1;\n    }\n  }, {\n    key: 'iterator',\n    value: function iterator() {\n      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;\n\n      return new Iterator(this.chars).from(i).to(to);\n    }\n  }, {\n    key: 'length',\n    get: function get() {\n      return this.chars.length - 1;\n    }\n  }]);\n\n  return Text;\n}();\n\n//# sourceURL=webpack:///./src/model/Text.js?");

/***/ })

/******/ });