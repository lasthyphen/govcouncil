webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Timer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Timer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Timer, _React$Component);

  var _super = _createSuper(Timer);

  function Timer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Timer);

    _this = _super.call(this, props);
    _this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // update every second
      this.interval = setInterval(function () {
        var date = _this2.calculateTimer(_this2.props.date);

        date ? _this2.setState(date) : _this2.stop();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "calculateTimer",
    value: function calculateTimer(endDate) {
      var diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000; // clear countdown when date is reached

      if (diff <= 0) return false;
      var timeLeft = {
        years: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
        millisec: 0
      }; // calculate time difference between now and expected date

      if (diff >= 365.25 * 86400) {
        // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }

      if (diff >= 86400) {
        // 24 * 60 * 60
        timeLeft.days = Math.floor(diff / 86400);
        diff -= timeLeft.days * 86400;
      }

      if (diff >= 3600) {
        // 60 * 60
        timeLeft.hours = Math.floor(diff / 3600);
        diff -= timeLeft.hours * 3600;
      }

      if (diff >= 60) {
        timeLeft.min = Math.floor(diff / 60);
        diff -= timeLeft.min * 60;
      }

      timeLeft.sec = diff;
      return timeLeft;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    }
  }, {
    key: "addLeadingZeros",
    value: function addLeadingZeros(value) {
      value = String(value);

      while (value.length < 2) {
        value = '0' + value;
      }

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var countDown = this.state;
      var hasDays = countDown.days > 0;
      return __jsx(Container, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, hasDays && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 15
        }
      }, this.addLeadingZeros(countDown.days)), " D")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, this.addLeadingZeros(countDown.hours)), " H")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }
      }, this.addLeadingZeros(countDown.min)), " M")), !hasDays && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 15
        }
      }, this.addLeadingZeros(countDown.sec)), " S")));
    }
  }]);

  return Timer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Timer__Container",
  componentId: "sc-1lkpnw2-0"
})(["position:relative;display:flex;margin:0 -10px;div{padding:0 10px;span{color:black;}}"]);

Timer.defaultProps = {
  date: new Date()
};
/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./components/assets/antlogo.svg":
false,

/***/ "./components/assets/lock.svg":
/*!************************************!*\
  !*** ./components/assets/lock.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE2IiBoZWlnaHQ9IjExNiIgdmlld0JveD0iMCAwIDExNiAxMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPGNpcmNsZSBjeD0iNTgiIGN5PSI1NCIgcj0iNTMiIGZpbGw9IndoaXRlIi8+CjwvZz4KPHBhdGggZD0iTTczIDQ2LjExM1Y0MC41QzczIDMyLjUwNSA2NS44MjIgMjYgNTcgMjZDNDguMTc4IDI2IDQxIDMyLjUwNSA0MSA0MC41VjQ2LjExM0MzNy41OTkgNDYuNjk5IDM1IDQ5LjY2MyAzNSA1My4yM1Y3Mi43NzJDMzUgNzYuNzU3IDM4LjI0MyA4MCA0Mi4yMjkgODBINzEuNzcxQzc1Ljc1NyA4MCA3OSA3Ni43NTcgNzkgNzIuNzcxVjUzLjIyOUM3OSA0OS42NjMgNzYuNDAxIDQ2LjY5OSA3MyA0Ni4xMTNaTTQzIDQwLjVDNDMgMzMuNjA3IDQ5LjI4IDI4IDU3IDI4QzY0LjcyIDI4IDcxIDMzLjYwNyA3MSA0MC41VjQ2SDQzVjQwLjVaTTc3IDcyLjc3MUM3NyA3NS42NTQgNzQuNjU0IDc4IDcxLjc3MSA3OEg0Mi4yMjlDMzkuMzQ2IDc4IDM3IDc1LjY1NCAzNyA3Mi43NzFWNTMuMjI5QzM3IDUwLjM0NiAzOS4zNDYgNDggNDIuMjI5IDQ4SDcxLjc3MUM3NC42NTQgNDggNzcgNTAuMzQ2IDc3IDUzLjIyOVY3Mi43NzFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik01NyA1NEM1NC43OTQgNTQgNTMgNTUuNzk0IDUzIDU4VjY0QzUzIDY2LjIwNiA1NC43OTQgNjggNTcgNjhDNTkuMjA2IDY4IDYxIDY2LjIwNiA2MSA2NFY1OEM2MSA1NS43OTQgNTkuMjA2IDU0IDU3IDU0Wk01OSA2NEM1OSA2NS4xMDMgNTguMTAzIDY2IDU3IDY2QzU1Ljg5NyA2NiA1NSA2NS4xMDMgNTUgNjRWNThDNTUgNTYuODk3IDU1Ljg5NyA1NiA1NyA1NkM1OC4xMDMgNTYgNTkgNTYuODk3IDU5IDU4VjY0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyKSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTE2IiBoZWlnaHQ9IjExNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMi41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjE1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ijk5LjY3NyIgeTE9Ii0xLjM5NDA3IiB4Mj0iMTkuNDAzNiIgeTI9IjQ3LjIzNzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGQjM2RCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjg4ODgiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iNjQuNzU5NSIgeTE9IjQ2Ljg5NzgiIHgyPSI0Ny44NTg0IiB5Mj0iNTQuMDc4NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZCMzZEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGODg4OCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./components/assets/orangelock.svg":
false,

/***/ "./components/converter/LockedConverter.js":
/*!*************************************************!*\
  !*** ./components/converter/LockedConverter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Timer */ "./components/Timer.js");
/* harmony import */ var _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/convert-module.png */ "./components/assets/convert-module.png");
/* harmony import */ var _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_convert_module_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_lock_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/lock.svg */ "./components/assets/lock.svg");
/* harmony import */ var _assets_lock_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_lock_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/convert-module-mobile.png */ "./components/assets/convert-module-mobile.png");
/* harmony import */ var _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_8__);


var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/converter/LockedConverter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  max-width: 90%;\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: linear-gradient(\n    to top,\n    #fff 0%,\n    #fff 83.5%,\n    #1c1c1c 83.5%,\n    #1c1c1c 100%\n  ) !important;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  a {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 328px;\n    background: #ffffff;\n    border: 2px solid rgba(212, 220, 227, 0.5);\n    box-sizing: border-box;\n    border-radius: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 20px 12px;\n    div {\n      padding-right: 10px;\n      ", ";\n    }\n    p {\n      font-family: 'FontRegular', sans-serif;\n      font-size: 18px;\n      line-height: 1.43;\n      display: flex;\n      align-items: center;\n      color: #8a96a0;\n      margin: 0;\n      padding-bottom: 8px;\n      ", ";\n    }\n    ", ";\n  }\n  a img {\n    max-width: 94px;\n    padding-right: 10px;\n    ", ";\n  }\n  .mobile {\n    display: inline;\n    ", ";\n  }\n  .medium {\n    display: none;\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var medium = function medium(css) {
  return Object(_lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__["breakpoint"])('medium', css);
};

var LockedConverter = function LockedConverter() {
  return __jsx(LockedConverterSection, {
    id: "get-anj",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(Content, {
    className: "medium",
    src: _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), __jsx(Content, {
    className: "mobile",
    src: _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx("a", {
    href: "#how-it-works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _assets_lock_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "The world's first digital jurisdiction opens in "), __jsx(_Timer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    date: _lib_utils__WEBPACK_IMPORTED_MODULE_4__["FIRST_TERM"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }))));
};

var LockedConverterSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), medium('padding-right: 28px;'), medium('font-size: 23px;'), medium('width: 376px;'), medium('padding-right: 16px;'), medium('display: none;'), medium('display: inline;'));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject2(), medium('max-width: calc(80% + 30px);'));
/* harmony default export */ __webpack_exports__["default"] = (LockedConverter);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.2df7e91b8dc8f9a448e5.hot-update.js.map