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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Controller = __webpack_require__(/*! ./model/Controller */ \"./src/model/Controller.js\");\n\nvar a = _interopRequireWildcard(_Controller);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/BaseController.js":
/*!*************************************!*\
  !*** ./src/model/BaseController.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.BaseController = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Cursor = __webpack_require__(/*! ./Cursor */ \"./src/model/Cursor.js\");\n\nvar _Text = __webpack_require__(/*! ./Text */ \"./src/model/Text.js\");\n\nvar _SaveCursor = __webpack_require__(/*! ./SaveCursor */ \"./src/model/SaveCursor.js\");\n\nvar _Insert = __webpack_require__(/*! ./Insert */ \"./src/model/Insert.js\");\n\nvar _Delete = __webpack_require__(/*! ./Delete */ \"./src/model/Delete.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BaseController = exports.BaseController = function () {\n  function BaseController(cursor, text) {\n    _classCallCheck(this, BaseController);\n\n    this.cursor = cursor;\n    this.text = text;\n  }\n\n  _createClass(BaseController, [{\n    key: 'left',\n    value: function left() {\n      if (!this._isInSelection() && this.cursor.head == 0) return;\n\n      if (this._isInSelection()) {\n        this.cursor.head = this.cursor.low;\n        this.cursor.tail = this.cursor.head;\n      } else {\n        this.cursor.head -= 1;\n        this.cursor.tail = this.cursor.head;\n      }\n    }\n  }, {\n    key: 'right',\n    value: function right() {\n      if (!this._isInSelection() && this.cursor.head == this.text.length) return;\n\n      if (this._isInSelection()) {\n        this.cursor.head = this.cursor.high;\n        this.cursor.tail = this.cursor.head;\n      } else {\n        this.cursor.head += 1;\n        this.cursor.tail = this.cursor.head;\n      }\n    }\n  }, {\n    key: 'up',\n    value: function up() {\n      var up = this._up();\n      this.cursor.head = up;\n      this.cursor.tail = up;\n    }\n  }, {\n    key: 'down',\n    value: function down() {\n      var down = this._down();\n      this.cursor.head = down;\n      this.cursor.tail = down;\n    }\n  }, {\n    key: 'selectLeft',\n    value: function selectLeft() {\n      if (this.cursor.head == 0) return;\n\n      this.cursor.head -= 1;\n    }\n  }, {\n    key: 'selectRight',\n    value: function selectRight() {\n      if (this.cursor.head == this.text.length) return;\n\n      this.cursor.head += 1;\n    }\n  }, {\n    key: 'selectUp',\n    value: function selectUp() {\n      var up = this._up();\n      this.cursor.head = up;\n    }\n  }, {\n    key: 'selectDown',\n    value: function selectDown() {\n      var down = this._down();\n      this.cursor.down = down;\n    }\n\n    //if selection delete low to high - 1\n    //else delete low - 1\n\n  }, {\n    key: 'backspace',\n    value: function backspace(memento) {\n      memento.add(new _SaveCursor.SaveCursor(this.cursor));\n\n      if (this._isInSelection()) {\n        memento.add(this._delete(this.cursor.low, this.cursor.high - 1));\n        this.cursor.head = this.cursor.low;\n        this.cursor.tail = this.cursor.head;\n      } else {\n        memento.add(this._delete(this.cursor.low - 1, this.cursor.low - 1));\n        this.cursor.head -= 1;\n        this.cursor.tail -= 1;\n      }\n    }\n  }, {\n    key: 'delete',\n    value: function _delete(memento) {\n      memento.add(new _SaveCursor.SaveCursor(this.cursor));\n\n      if (this._isInSelection()) {\n        memento.add(this._delete(this.cursor.low, this.cursor.high - 1));\n        this.cursor.head = this.cursor.low;\n        this.cursor.tail = this.cursor.head;\n      } else {\n        memento.add(this._delete(this.cursor.low, this.cursor.low));\n      }\n    }\n\n    //if selection\n\n  }, {\n    key: 'insert',\n    value: function insert(chars, memento) {\n      memento.add(new _SaveCursor.SaveCursor(this.cursor));\n\n      if (this._isInSelection()) {\n        memento.add(this._delete(this.cursor.low, this.cursor.high - 1));\n        this.cursor.head = this.cursor.low;\n        this.cursor.tail = this.cursor.head;\n      }\n\n      memento.add(this._insert(this.cursor.low, chars));\n      this.cursor.head += chars.length;\n      this.cursor.tail = this.cursor.head;\n    }\n  }, {\n    key: '_isInSelection',\n    value: function _isInSelection() {\n      return this.cursor.head != this.cursor.tail;\n    }\n  }, {\n    key: '_delete',\n    value: function _delete(from, to) {\n      return new _Delete.Delete(this.text, from, to).exec();\n    }\n  }, {\n    key: '_insert',\n    value: function _insert(from, chars) {\n      return new _Insert.Insert(this.text, from, chars).exec();\n    }\n\n    //TODO test\n\n  }, {\n    key: '_up',\n    value: function _up() {\n      var head = this.cursor.head,\n          pnl = this.text.getPrevNewLineIndex(head);\n      pnl = pnl == -1 ? 0 : pnl;\n\n      var ppnl = this.text.getPrevNewLineIndex(pnl);\n      ppnl = ppnl == -1 ? 0 : ppnl;\n\n      var newHead = ppnl + (head - pnl) <= pnl ? ppnl + (head - pnl) : pnl;\n\n      return newHead;\n    }\n\n    //TODO test\n\n  }, {\n    key: '_down',\n    value: function _down() {\n      var head = this.cursor.head,\n          pnl = this.text.getPrevNewLineIndex(head),\n          nnnl = this.text.getNextNewLineIndex(head),\n          nnl = this.text.getNextNewLineIndex(nnl);\n\n      pnl = pnl == -1 ? 0 : pnl;\n      nnl = nnl == -1 ? this.text.length : nnl;\n      nnnl = nnnl == -1 ? this.text.length : nnnl;\n\n      var newHead = nnl + (head - pnl) <= nnnl ? nnl + (head - pnl) : nnnl;\n\n      return newHead;\n    }\n  }, {\n    key: '_bottomLineIndex',\n    value: function _bottomLineIndex(i) {}\n  }]);\n\n  return BaseController;\n}();\n\n//# sourceURL=webpack:///./src/model/BaseController.js?");

/***/ }),

/***/ "./src/model/Controller.js":
/*!*********************************!*\
  !*** ./src/model/Controller.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Controller = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _BaseController2 = __webpack_require__(/*! ./BaseController */ \"./src/model/BaseController.js\");\n\nvar _UndoRedo = __webpack_require__(/*! ./UndoRedo */ \"./src/model/UndoRedo.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Controller = exports.Controller = function (_BaseController) {\n  _inherits(Controller, _BaseController);\n\n  function Controller(undoRedo, cursor, text) {\n    _classCallCheck(this, Controller);\n\n    var _this = _possibleConstructorReturn(this, (Controller.__proto__ || Object.getPrototypeOf(Controller)).call(this, cursor, text));\n\n    _this.undoRedo = undoRedo;\n    _this.clipboard = [];\n    return _this;\n  }\n\n  _createClass(Controller, [{\n    key: 'copy',\n    value: function copy() {\n      if (!this._isInSelection()) return;\n\n      var iterator = _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'text', this).iterator(this.cursor.low, this.cursor.high - 1);\n      this.clipboard = [];\n\n      while (true) {\n        var result = iterator.next();\n        this.clipboard.push(result.value);\n        if (result.done) break;\n      }\n    }\n  }, {\n    key: 'paste',\n    value: function paste() {\n      if (this.clipboard.length == 0) return;\n\n      this.insert(this.clipboard);\n    }\n  }, {\n    key: 'insert',\n    value: function insert(chars) {\n      var memento = this.undoRedo.startSession();\n      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'insert', this).call(this, chars, memento);\n      this.undoRedo.saveSession();\n    }\n  }, {\n    key: 'delete',\n    value: function _delete() {\n      if (!this._isInSelection() && this.cursor.head == this.text.length) return;\n\n      var memento = this.undoRedo.startSession();\n      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'delete', this).call(this, memento);\n      this.undoRedo.saveSession();\n    }\n  }, {\n    key: 'backspace',\n    value: function backspace() {\n      if (!this._isInSelection() && this.cursor.head == 0) return;\n\n      var memento = this.undoRedo.startSession();\n      _get(Controller.prototype.__proto__ || Object.getPrototypeOf(Controller.prototype), 'backspace', this).call(this, memento);\n      this.undoRedo.saveSession();\n    }\n  }, {\n    key: 'undo',\n    value: function undo() {\n      this.undoRedo.undo();\n    }\n  }, {\n    key: 'redo',\n    value: function redo() {\n      this.undoRedo.redo();\n    }\n  }, {\n    key: 'ctrlBackspace',\n    value: function ctrlBackspace() {\n      //later\n    }\n  }, {\n    key: 'ctrlDelete',\n    value: function ctrlDelete() {\n      //later\n    }\n  }]);\n\n  return Controller;\n}(_BaseController2.BaseController);\n\n//# sourceURL=webpack:///./src/model/Controller.js?");

/***/ }),

/***/ "./src/model/Cursor.js":
/*!*****************************!*\
  !*** ./src/model/Cursor.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cursor = exports.Cursor = function () {\n  function Cursor() {\n    var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var tail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n    _classCallCheck(this, Cursor);\n\n    //head and tail pointers can span from [0, text.length]\n    this.head = head;\n    this.tail = tail;\n  }\n\n  _createClass(Cursor, [{\n    key: \"high\",\n    get: function get() {\n      return this.head > this.tail ? this.head : this.tail;\n    }\n  }, {\n    key: \"low\",\n    get: function get() {\n      return this.head > this.tail ? this.tail : this.head;\n    }\n  }]);\n\n  return Cursor;\n}();\n\n//# sourceURL=webpack:///./src/model/Cursor.js?");

/***/ }),

/***/ "./src/model/Delete.js":
/*!*****************************!*\
  !*** ./src/model/Delete.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SafeDelete = exports.Delete = undefined;\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Insert = __webpack_require__(/*! ./Insert */ \"./src/model/Insert.js\");\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Delete = exports.Delete = function () {\n  function Delete(text, from, to) {\n    _classCallCheck(this, Delete);\n\n    this.text = text;\n    this.from = from;\n    this.to = to;\n    this.chars = null;\n  }\n\n  _createClass(Delete, [{\n    key: 'revert',\n    value: function revert() {\n      return new _Insert.SafeInsert(this.text, this.from, this.chars).exec();\n    }\n  }, {\n    key: 'exec',\n    value: function exec() {\n      this.chars = this.text.delete(this.from, this.to);\n      return this;\n    }\n  }, {\n    key: 'getChars',\n    value: function getChars() {\n      return this.chars;\n    }\n  }]);\n\n  return Delete;\n}();\n\n//can't revert more than once\n//can't exec more than once\n//can't revert if exec not called\n\n\nvar SafeDelete = exports.SafeDelete = function (_Delete) {\n  _inherits(SafeDelete, _Delete);\n\n  function SafeDelete(text, from, to) {\n    _classCallCheck(this, SafeDelete);\n\n    var _this = _possibleConstructorReturn(this, (SafeDelete.__proto__ || Object.getPrototypeOf(SafeDelete)).call(this, text, from, to));\n\n    _this.reverted = false;\n    _this.execd = false;\n    return _this;\n  }\n\n  _createClass(SafeDelete, [{\n    key: 'revert',\n    value: function revert() {\n      if (this.reverted) throw new Error('Revert already called');\n\n      if (!this.execd) throw new Error('Exec has not been called');\n\n      this.reverted = true;\n      return _get(SafeDelete.prototype.__proto__ || Object.getPrototypeOf(SafeDelete.prototype), 'revert', this).call(this);\n    }\n  }, {\n    key: 'exec',\n    value: function exec() {\n      if (this.execd) throw new Error('Exec already called');\n\n      this.execd = true;\n      return _get(SafeDelete.prototype.__proto__ || Object.getPrototypeOf(SafeDelete.prototype), 'exec', this).call(this);\n    }\n  }]);\n\n  return SafeDelete;\n}(Delete);\n\n//# sourceURL=webpack:///./src/model/Delete.js?");

/***/ }),

/***/ "./src/model/Insert.js":
/*!*****************************!*\
  !*** ./src/model/Insert.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SafeInsert = exports.Insert = undefined;\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //TODO test\n\n\nvar _Delete = __webpack_require__(/*! ./Delete */ \"./src/model/Delete.js\");\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Insert = exports.Insert = function () {\n  function Insert(text, from, chars) {\n    _classCallCheck(this, Insert);\n\n    this.text = text;\n    this.from = from;\n    this.to = this.from + chars.length - 1;\n    this.chars = chars;\n  }\n\n  _createClass(Insert, [{\n    key: 'revert',\n    value: function revert() {\n      return new _Delete.SafeDelete(this.text, this.from, this.to).exec();\n    }\n  }, {\n    key: 'exec',\n    value: function exec() {\n      this.text.insert(this.from, this.chars);\n      return this;\n    }\n  }]);\n\n  return Insert;\n}();\n\n//can't revert more than once\n//can't exec more than once\n//can't revert if exec not called\n\n\nvar SafeInsert = exports.SafeInsert = function (_Insert) {\n  _inherits(SafeInsert, _Insert);\n\n  function SafeInsert(text, from, chars) {\n    _classCallCheck(this, SafeInsert);\n\n    var _this = _possibleConstructorReturn(this, (SafeInsert.__proto__ || Object.getPrototypeOf(SafeInsert)).call(this, text, from, chars));\n\n    _this.reverted = false;\n    _this.execd = false;\n    return _this;\n  }\n\n  _createClass(SafeInsert, [{\n    key: 'revert',\n    value: function revert() {\n      if (this.reverted) throw new Error('Revert already called');\n\n      if (!this.execd) throw new Error('Exec has not been called');\n\n      this.reverted = true;\n      return _get(SafeInsert.prototype.__proto__ || Object.getPrototypeOf(SafeInsert.prototype), 'revert', this).call(this);\n    }\n  }, {\n    key: 'exec',\n    value: function exec() {\n      if (this.execd) throw new Error('Exec already called');\n\n      this.execd = true;\n      return _get(SafeInsert.prototype.__proto__ || Object.getPrototypeOf(SafeInsert.prototype), 'exec', this).call(this);\n    }\n  }]);\n\n  return SafeInsert;\n}(Insert);\n\n//# sourceURL=webpack:///./src/model/Insert.js?");

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

/***/ "./src/model/SaveCursor.js":
/*!*********************************!*\
  !*** ./src/model/SaveCursor.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SaveCursor = exports.SaveCursor = function () {\n  function SaveCursor(cursor) {\n    _classCallCheck(this, SaveCursor);\n\n    this.head = cursor.head;\n    this.tail = cursor.tail;\n    this.cursor = cursor;\n    this.reverted = false;\n  }\n\n  //saves the current cursor, then mutates the cursor,\n  //then returns the saved cursor\n\n\n  _createClass(SaveCursor, [{\n    key: 'revert',\n    value: function revert() {\n      if (this.reverted) throw new Error('Revert already called');\n\n      var revertCursor = new SaveCursor(this.cursor);\n\n      this.cursor.head = this.head;\n      this.cursor.tail = this.tail;\n\n      this.reverted = true;\n\n      return revertCursor;\n    }\n  }]);\n\n  return SaveCursor;\n}();\n\n//# sourceURL=webpack:///./src/model/SaveCursor.js?");

/***/ }),

/***/ "./src/model/Text.js":
/*!***************************!*\
  !*** ./src/model/Text.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Text = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Iterator = __webpack_require__(/*! ./Iterator */ \"./src/model/Iterator.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Text = exports.Text = function () {\n  function Text() {\n    _classCallCheck(this, Text);\n\n    this.chars = ['EOF']; //eof file always present at last\n  }\n\n  _createClass(Text, [{\n    key: 'insert',\n    value: function insert(from, chars) {\n      if (from > this.length || from < 0) throw new Error('IndexOutOfBound');\n\n      var prefix = this.chars.splice(0, from);\n      var suffix = this.chars;\n      this.chars = [].concat(_toConsumableArray(prefix), _toConsumableArray(chars), _toConsumableArray(suffix));\n    }\n\n    //deletes inclusive from [from, to]\n\n  }, {\n    key: 'delete',\n    value: function _delete(from, to) {\n      if (from >= this.length || to >= this.length || from < 0 || to < 0) {\n        throw new Error('IndexOutOfBound');\n      }\n\n      if (from > to) throw new Error('IllegalArgument');\n\n      return this.chars.splice(from, to - from + 1);\n    }\n  }, {\n    key: 'getNextNewLineIndex',\n    value: function getNextNewLineIndex(index) {\n      if (index < 0 || index > this.length) throw new Error('IndexOutOfBound');\n\n      for (var i = index + 1; i < this.length; i++) {\n        if (this.chars[i] == '\\n') return i;\n      }\n      return -1;\n    }\n  }, {\n    key: 'getPrevNewLineIndex',\n    value: function getPrevNewLineIndex(index) {\n      if (index < 0 || index > this.length) throw new Error('IndexOutOfBound');\n\n      for (var i = index - 1; i >= 0; i--) {\n        if (this.chars[i] == '\\n') return i;\n      }\n      return -1;\n    }\n  }, {\n    key: 'iterator',\n    value: function iterator() {\n      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.chars.length - 1;\n\n      return new _Iterator.Iterator(this.chars).from(from).to(to);\n    }\n  }, {\n    key: 'length',\n    get: function get() {\n      return this.chars.length - 1;\n    }\n  }]);\n\n  return Text;\n}();\n\n//# sourceURL=webpack:///./src/model/Text.js?");

/***/ }),

/***/ "./src/model/UndoRedo.js":
/*!*******************************!*\
  !*** ./src/model/UndoRedo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.UndoRedo = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _UndoRedoSession = __webpack_require__(/*! ./UndoRedoSession */ \"./src/model/UndoRedoSession.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UndoRedo = exports.UndoRedo = function () {\n  function UndoRedo() {\n    _classCallCheck(this, UndoRedo);\n\n    this.undoSessions = [];\n    this.redoSessions = [];\n    this.currentSession = null;\n  }\n\n  //throws error if in middle of session\n\n\n  _createClass(UndoRedo, [{\n    key: 'clearUndoCache',\n    value: function clearUndoCache() {\n      this._throwIfInSession();\n\n      this.undoSessions = [];\n    }\n\n    //throws error if in middle of session\n\n  }, {\n    key: 'clearRedoCache',\n    value: function clearRedoCache() {\n      this._throwIfInSession();\n\n      this.redoSessions = [];\n    }\n\n    //throws error if in middle of session\n\n  }, {\n    key: 'undo',\n    value: function undo() {\n      this._throwIfInSession();\n\n      if (!this.undoSessions.length) return false;\n\n      this.redoSessions.push(this.undoSessions.pop().revert());\n      return true;\n    }\n\n    //throws error if in middle of session\n\n  }, {\n    key: 'redo',\n    value: function redo() {\n      this._throwIfInSession();\n\n      if (!this.redoSessions.length) return false;\n\n      this.undoSessions.push(this.redoSessions.pop().revert());\n      return true;\n    }\n\n    //returns UndoRedoSession\n    //throws error if in middle of session\n\n  }, {\n    key: 'startSession',\n    value: function startSession() {\n      this._throwIfInSession();\n\n      this.currentSession = new _UndoRedoSession.UndoRedoSession();\n      return this.currentSession;\n    }\n\n    //returns nothing\n    //throws error if not in middle of session\n\n  }, {\n    key: 'saveSession',\n    value: function saveSession() {\n      if (!this.inSession()) throw new Error('Session not started');\n\n      this.undoSessions.push(this.currentSession);\n      this.currentSession = null;\n    }\n\n    //returns current session or null if not in current session\n\n  }, {\n    key: 'getSession',\n    value: function getSession() {\n      return this.currentSession;\n    }\n\n    //returns true if in middle of session\n    //returns false otherwise\n\n  }, {\n    key: 'inSession',\n    value: function inSession() {\n      return this.currentSession !== null;\n    }\n  }, {\n    key: '_throwIfInSession',\n    value: function _throwIfInSession() {\n      if (this.inSession()) throw new Error('Session needs be saved before executing this operation');\n    }\n  }]);\n\n  return UndoRedo;\n}();\n\n//# sourceURL=webpack:///./src/model/UndoRedo.js?");

/***/ }),

/***/ "./src/model/UndoRedoSession.js":
/*!**************************************!*\
  !*** ./src/model/UndoRedoSession.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//TODO may need more work\nvar UndoRedoSession = exports.UndoRedoSession = function () {\n  function UndoRedoSession() {\n    _classCallCheck(this, UndoRedoSession);\n\n    this.session = []; //array of objects with revert methods\n    this.reverted = false;\n  }\n\n  //cannot add once revert is triggered\n\n\n  _createClass(UndoRedoSession, [{\n    key: 'add',\n    value: function add(arg) {\n      if (this.reverted) throw new Error('Already revert is triggered, so cannot add');\n\n      this.session.push(arg);\n      return this;\n    }\n\n    //maybe reverted multiple times\n\n  }, {\n    key: 'revert',\n    value: function revert() {\n      if (this.session.length == 0) throw new Error('Nothing added as session to revert.');\n\n      var session = [];\n\n      while (this.session.length > 0) {\n        session.push(this.session.pop().revert());\n      }\n\n      this.session = session;\n      this.reverted = true;\n      return this;\n    }\n  }]);\n\n  return UndoRedoSession;\n}();\n\n//# sourceURL=webpack:///./src/model/UndoRedoSession.js?");

/***/ })

/******/ });