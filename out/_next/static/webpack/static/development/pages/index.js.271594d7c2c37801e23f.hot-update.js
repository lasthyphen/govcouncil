webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_microsite_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/utils */ "./lib/utils.js");
/* harmony import */ var lib_web3_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/web3-contracts */ "./lib/web3-contracts.js");
/* harmony import */ var lib_web3_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/web3-utils */ "./lib/web3-utils.js");
/* harmony import */ var _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/anj-token.svg */ "./components/assets/anj-token.svg");
/* harmony import */ var _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _converter_assets_ant_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./converter/assets/ant.svg */ "./components/converter/assets/ant.svg");
/* harmony import */ var _converter_assets_ant_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_converter_assets_ant_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_juror_total_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/juror-total.svg */ "./components/assets/juror-total.svg");
/* harmony import */ var _assets_juror_total_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_juror_total_svg__WEBPACK_IMPORTED_MODULE_10__);




var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var medium = function medium(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_4__["breakpoint"])('medium', css);
};

function formatAndSplitAmount(value) {
  var formatted = Object(lib_web3_utils__WEBPACK_IMPORTED_MODULE_7__["formatUnits"])(value, {
    replaceZeroBy: '0'
  });

  var _formatted$split = formatted.split('.'),
      _formatted$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_formatted$split, 2),
      whole = _formatted$split2[0],
      decimal = _formatted$split2[1]; // Round and keep the last two digits


  decimal = Math.round(parseInt((decimal || '0').slice(0, 4)) / 100);
  return [whole || '0', decimal ? String(decimal) : ''];
}

var Stats = function Stats() {
  var antStaked = Object(lib_web3_contracts__WEBPACK_IMPORTED_MODULE_6__["useAntStaked"])();

  var _useAnJurors = Object(lib_utils__WEBPACK_IMPORTED_MODULE_5__["useAnJurors"])(),
      _useAnJurors2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useAnJurors, 2),
      numOfjurors = _useAnJurors2[0],
      activeAnj = _useAnJurors2[1];

  var _formatAndSplitAmount = formatAndSplitAmount(antStaked),
      _formatAndSplitAmount2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_formatAndSplitAmount, 2),
      wholeAnt = _formatAndSplitAmount2[0],
      decimalAnt = _formatAndSplitAmount2[1];

  var _formatAndSplitAmount3 = formatAndSplitAmount(activeAnj),
      _formatAndSplitAmount4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_formatAndSplitAmount3, 2),
      wholeAnj = _formatAndSplitAmount4[0],
      decimalAnj = _formatAndSplitAmount4[1];

  var usdAnt = Object(lib_web3_utils__WEBPACK_IMPORTED_MODULE_7__["useTokenBalanceToUsd"])('LQ', 18, Object(lib_utils__WEBPACK_IMPORTED_MODULE_5__["bigNum"])(antStaked));
  var unratedAnj = Object(lib_utils__WEBPACK_IMPORTED_MODULE_5__["bigNum"])(activeAnj.toString()).div(100);
  var usdAnj = Object(lib_web3_utils__WEBPACK_IMPORTED_MODULE_7__["useTokenBalanceToUsd"])('DGC', 18, unratedAnj);
  return __jsx(StatsSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(StatsDiv, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    duration: 1200,
    delay: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(Stat, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(TokenImg, {
    src: _converter_assets_ant_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Likability Quotient"), __jsx(NumberWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "pink number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "1000", decimalAnt && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, ".", __jsx("span", {
    className: "decimal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 22
    }
  }, decimalAnt))), __jsx("h3", {
    className: "denomination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "HAL")), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "$".concat(usdAnt, " USD")))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    duration: 1200,
    delay: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(Stat, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(TokenImg, {
    src: _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Dijets Governance"), __jsx(NumberWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "pink number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "50,000", decimalAnj && __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, ".", __jsx("span", {
    className: "decimal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 22
    }
  }, decimalAnj))), __jsx("h3", {
    className: "denomination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "DGC")), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "$".concat(usdAnj, " USD")))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    duration: 1200,
    delay: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_StyledStat, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(TokenImg, {
    src: _assets_juror_total_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Council Members"), __jsx(NumberWrapper, {
    jurors: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "pink number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "6"), __jsx("h3", {
    className: "denomination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Individuals"))))));
};

var TokenImg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "Stats__TokenImg",
  componentId: "sc-19jobae-0"
})(["width:50px;height:56px;margin-bottom:24px;@media screen and (max-width:1024px){margin:auto;margin-bottom:24px;}"]);

var NumberWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Stats__NumberWrapper",
  componentId: "sc-19jobae-1"
})(["display:flex;flex-direction:row;margin-bottom:", ";@media screen and (max-width:1024px){margin:auto;text-align:center;}"], function (props) {
  return props.jurors ? '34px' : '';
});

var Stat = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Stats__Stat",
  componentId: "sc-19jobae-2"
})(["width:278px;min-height:191px;display:flex;flex-direction:column;h2{color:white;font-size:27px;}h3{color:white;font-size:20px;}.number{font-size:48px;}.decimal{padding-top:8px;font-size:36px;}.denomination{margin-left:8px;padding-top:19px;font-size:22px;color:#8a96a0;}.pink{font-weight:bold;letter-spacing:-0.45px;color:rgba(1,191,227);background:linear-gradient( to right,#ff7c7c 20%,#ffc58f 40%,#ffc58f 60%,#ff7c7c 80% );background-size:200% auto;background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;display:block;", ";}@media screen and (max-width:1024px){text-align:center;margin-bottom:32px;}"], medium('display: inline;'));

var _StyledStat = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Stat).withConfig({
  displayName: "Stats___StyledStat",
  componentId: "sc-19jobae-3"
})(["@media screen and (max-width:1024px){margin-bottom:114px;}"]);

var StatsSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "Stats__StatsSection",
  componentId: "sc-19jobae-4"
})(["position:relative;z-index:1;background:#1c1c1c;min-height:200px;"]);

var StatsDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Stats__StatsDiv",
  componentId: "sc-19jobae-5"
})(["width:80%;max-width:1180px;margin:auto;margin-bottom:120px;display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;@media screen and (max-width:1024px){display:grid;grid-template-columns:1fr;justify-items:center;margin:auto;}"]);

/* harmony default export */ __webpack_exports__["default"] = (Stats);

/***/ })

})
//# sourceMappingURL=index.js.271594d7c2c37801e23f.hot-update.js.map