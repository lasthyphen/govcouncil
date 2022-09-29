webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/converter/LockedConverter.js":
/*!*************************************************!*\
  !*** ./components/converter/LockedConverter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_microsite_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/convert-module.png */ "./components/assets/convert-module.png");
/* harmony import */ var _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_convert_module_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_antlogo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/antlogo.svg */ "./components/assets/antlogo.svg");
/* harmony import */ var _assets_antlogo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_antlogo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/anj-token.svg */ "./components/assets/anj-token.svg");
/* harmony import */ var _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_orangelock_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/orangelock.svg */ "./components/assets/orangelock.svg");
/* harmony import */ var _assets_orangelock_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_orangelock_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/convert-module-mobile.png */ "./components/assets/convert-module-mobile.png");
/* harmony import */ var _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_web3_contracts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/web3-contracts */ "./lib/web3-contracts.js");
/* harmony import */ var _lib_web3_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/web3-utils */ "./lib/web3-utils.js");





var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/converter/LockedConverter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var medium = function medium(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_2__["breakpoint"])('medium', css);
};

var LockedConverter = function LockedConverter() {
  var _useBondingCurvePrice = Object(_lib_web3_contracts__WEBPACK_IMPORTED_MODULE_8__["useBondingCurvePrice"])('1000000000000000000', false),
      price = _useBondingCurvePrice.price,
      loading = _useBondingCurvePrice.loading;

  return __jsx(LockedConverterSection, {
    id: "get-anj",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(Content, {
    className: "medium",
    src: _assets_convert_module_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx(Content, {
    className: "mobile",
    src: _assets_convert_module_mobile_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "lock",
    href: "#how-it-works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _assets_orangelock_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Lock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Council Member profiles will soon be", ' ', __jsx("a", {
    href: "https://dijets.io",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "uploaded"), ' ', "with their Wallet addresses. Feel free to visit the Governance Portal."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://dijets.io",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Learn more")), __jsx("p", {
    className: "pause-rate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "The currently paused exchange rate is: "), __jsx("div", {
    className: "exchange-rate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(RateNumber, {
    rate: "1.0000",
    token: "LQ",
    showSeparator: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(RateNumber, {
    rate: loading ? '0.014' : Object(_lib_web3_utils__WEBPACK_IMPORTED_MODULE_9__["formatUnits"])(price, {
      truncateToDecimalPlace: 4
    }),
    token: "DGC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  })))));
};

var _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("div").withConfig({
  displayName: "LockedConverter___StyledDiv",
  componentId: "limj1f-0"
})(["display:flex;padding-right:0px !important;.rate{font-size:24px;line-height:31px;padding-right:8px;}img{padding-right:8px;}.symbol{color:#8A96A0;font-size:20px;}.separator{font-size:20px;padding-right:8px;padding-left:8px;}"]);

var _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("span").withConfig({
  displayName: "LockedConverter___StyledSpan",
  componentId: "limj1f-1"
})(["margin-right:0px;padding-right:0 !important;"]);

var _StyledImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("img").withConfig({
  displayName: "LockedConverter___StyledImg",
  componentId: "limj1f-2"
})(["width:32px;height:32px;padding-bottom:8px;padding-right:0px !important;"]);

function RateNumber(_ref) {
  var rate = _ref.rate,
      token = _ref.token,
      showSeparator = _ref.showSeparator;
  return __jsx(_StyledDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_StyledSpan, {
    className: "rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, rate), __jsx(_StyledImg, {
    src: token === 'ANT' ? _assets_antlogo_svg__WEBPACK_IMPORTED_MODULE_4___default.a : _assets_anj_token_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Token logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("span", {
    className: "symbol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, token), showSeparator && __jsx("span", {
    className: "separator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, ":"));
}

var LockedConverterSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "LockedConverter__LockedConverterSection",
  componentId: "limj1f-3"
})(["background:linear-gradient( to top,#fff 0%,#fff 83.5%,#1c1c1c 83.5%,#1c1c1c 100% ) !important;height:auto;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;.lock{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;max-width:328px;background:#ffffff;border:2px solid rgba(212,220,227,0.5);box-sizing:border-box;border-radius:100px;display:flex;flex-direction:column;", " align-items:center;justify-content:flex-start;padding:20px 12px;div{padding-right:10px;", ";}p{font-family:'FontRegular',sans-serif;font-weight:'400';font-size:18px;line-height:1.43;align-items:center;color:black;margin:0;padding-bottom:8px;", ";}.exchange-rate{display:flex;justify-content:center;", "}.pause-rate{padding-top:8px;font-size:20px;color:#8a96a0;}a{color:#ff9683;}", ";}.lock img{max-width:94px;padding-right:10px;", ";}.mobile{display:inline;", ";}.medium{display:none;", ";}"], medium('flex-direction: row;'), medium('padding-right: 28px;'), medium('font-size: 23px;'), medium('justify-content: flex-start;'), medium('max-width: 724px;'), medium('padding-right: 16px;'), medium('display: none;'), medium('display: inline;'));

var Content = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "LockedConverter__Content",
  componentId: "limj1f-4"
})(["margin:0 auto;max-width:90%;", ";"], medium('max-width: calc(80% + 30px);'));

/* harmony default export */ __webpack_exports__["default"] = (LockedConverter);

/***/ })

})
//# sourceMappingURL=index.js.c84bccb5f52f325bb01c.hot-update.js.map