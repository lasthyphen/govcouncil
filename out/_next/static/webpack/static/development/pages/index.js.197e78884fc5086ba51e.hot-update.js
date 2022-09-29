webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Basics.js":
/*!******************************!*\
  !*** ./components/Basics.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var _assets_basics1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/basics1.svg */ "./components/assets/basics1.svg");
/* harmony import */ var _assets_basics1_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_basics1_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_basics2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/basics2.svg */ "./components/assets/basics2.svg");
/* harmony import */ var _assets_basics2_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_basics2_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_basics3_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/basics3.svg */ "./components/assets/basics3.svg");
/* harmony import */ var _assets_basics3_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_basics3_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_basics4_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/basics4.svg */ "./components/assets/basics4.svg");
/* harmony import */ var _assets_basics4_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_basics4_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_basics5_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/basics5.svg */ "./components/assets/basics5.svg");
/* harmony import */ var _assets_basics5_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_basics5_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_basics6_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/basics6.svg */ "./components/assets/basics6.svg");
/* harmony import */ var _assets_basics6_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_basics6_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_basics_l1_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/basics-l1.svg */ "./components/assets/basics-l1.svg");
/* harmony import */ var _assets_basics_l1_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l1_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_basics_l2_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/basics-l2.svg */ "./components/assets/basics-l2.svg");
/* harmony import */ var _assets_basics_l2_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l2_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_basics_l3_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/basics-l3.svg */ "./components/assets/basics-l3.svg");
/* harmony import */ var _assets_basics_l3_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l3_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_basics_l4_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/basics-l4.svg */ "./components/assets/basics-l4.svg");
/* harmony import */ var _assets_basics_l4_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l4_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_basics_l5_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/basics-l5.svg */ "./components/assets/basics-l5.svg");
/* harmony import */ var _assets_basics_l5_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l5_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_basics_l6_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/basics-l6.svg */ "./components/assets/basics-l6.svg");
/* harmony import */ var _assets_basics_l6_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_basics_l6_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_left_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/left.svg */ "./components/assets/left.svg");
/* harmony import */ var _assets_left_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_left_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/right.svg */ "./components/assets/right.svg");
/* harmony import */ var _assets_right_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_right_svg__WEBPACK_IMPORTED_MODULE_17__);


var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Basics.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















var large = function large(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__["breakpoint"])('large', css);
};

var Basics = function Basics() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      active = _useState[0],
      setActive = _useState[1];

  return __jsx(BasicsSection, {
    id: "how-it-works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "The basics of being a juror"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Learn the basic action stages for jurors in Dijets Council")), __jsx(Process, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(Buttons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: active === 1 ? 'active' : '',
    onClick: function onClick() {
      return setActive(1);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "1- DISPUTE IS RAISED"), __jsx("div", {
    className: active === 2 ? 'active' : '',
    onClick: function onClick() {
      return setActive(2);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "2- JURORS ARE SELECTED"), __jsx("div", {
    className: active === 3 ? 'active' : '',
    onClick: function onClick() {
      return setActive(3);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "3- JURORS REVIEW EVIDENCE"), __jsx("div", {
    className: active === 4 ? 'active' : '',
    onClick: function onClick() {
      return setActive(4);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "4- PRELIMINARY RULING"), __jsx("div", {
    className: active === 5 ? 'active' : '',
    onClick: function onClick() {
      return setActive(5);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "5- DISPUTE IS SETTLED"), __jsx("div", {
    className: active === 6 ? 'active' : '',
    onClick: function onClick() {
      return setActive(6);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "6- EARN REWARDS"))), __jsx(Images, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: active === 1 ? 'active' : '',
    src: _assets_basics_l1_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: active === 2 ? 'active' : '',
    src: _assets_basics_l2_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: active === 3 ? 'active' : '',
    src: _assets_basics_l3_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: active === 4 ? 'active' : '',
    src: _assets_basics_l4_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: active === 5 ? 'active' : '',
    src: _assets_basics_l5_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: active === 6 ? 'active' : '',
    src: _assets_basics_l6_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }))), __jsx(MobileProcess, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    nextIcon: __jsx("img", {
      src: _assets_right_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }),
    prevIcon: __jsx("img", {
      src: _assets_left_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics1_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, "1- DISPUTE IS RAISED"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "A company has two members, Bob and Alice. Bob submits a proposal to transfer company funds into his personal wallet. Alice disagrees and raises a dispute against the proposal in Aragon Court."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics2_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "2- JURORS ARE SELECTED"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "You and two other jurors are drafted to adjudicate Bob and Alice\u2019s dispute, where the chance of being drafted is proportional to the amount of ANJ you have activated."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics3_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "3- JURORS REVIEW EVIDENCE"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Bob claims the fund transfer is his yearly bonus, citing his good performance. Alice submits their employment agreement and historical payroll records that show Bob's bonus isn't due until next month."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics4_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, "4- PRELIMINARY RULING"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, "You and one other juror decide to vote in favor of Alice and one votes in favor of Bob. This means Alice has the majority required to win this ruling. All rulings at this stage are preliminary and can be appealed by the loser for additional fees."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics5_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "5- DISPUTE IS SETTLED"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, "Bob decides not to appeal the preliminary ruling making the final ruling in favor of Alice. Now all the adjudication rounds in the dispute can be settled and rewards allocated."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_basics6_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    className: "carousel-img",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "carousel-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "6- EARN REWARDS"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, "Since one of the jurors did not vote in favor of Alice - who won the final ruling - their activated ANJ will be distributed to you and the other juror who voted for Alice as a reward. This reward is in addition to the rewards earned from Subscription and Dispute Fees, all of which will automatically be added to your staked and activated ANJ balance."))))));
};

var BasicsSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Basics__BasicsSection",
  componentId: "ebjakd-0"
})(["background:white;padding:100px 15px 50px;", ";"], large('min-height: 850px;'));

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Basics__Container",
  componentId: "ebjakd-1"
})(["width:80%;margin:auto;text-align:center;p{font-weight:400;font-size:24px;line-height:34px;text-align:center;color:#8a96a0;margin:0 0 50px 0;}h3{font-style:normal;font-weight:600;font-size:37px;line-height:1;text-align:center;color:#1c1c1c;margin:0 0 10px 0;}"]);

var Images = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Basics__Images",
  componentId: "ebjakd-2"
})(["position:relative;height:auto;width:calc(100% - 300px);margin:0 auto;img{position:absolute;right:0;opacity:0;transition:opacity 0.25s ease-in-out;}img.active{opacity:1;}"]);

var Process = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Basics__Process",
  componentId: "ebjakd-3"
})(["display:none;width:80%;margin:auto;", ";"], large('display: flex; justify-content: space-between;'));

var MobileProcess = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Basics__MobileProcess",
  componentId: "ebjakd-4"
})(["display:block;width:90%;margin:auto;", ";.carousel-control-next{justify-content:flex-end;}.carousel-control-prev{justify-content:flex-start;}.carousel-item{margin-left:7%;width:85%;}p{font-weight:400;font-size:18px;line-height:31px;text-align:center;color:#8a96a0;}h4{font-style:normal;font-weight:400;font-size:24px;margin-top:30px;line-height:34px;text-align:center;color:#1c1c1c;}"], large('display: none;'));

var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Basics__Buttons",
  componentId: "ebjakd-5"
})(["width:300px;padding:15px 0;div{font-weight:400;line-height:2;font-size:20px;color:#8a96a0;cursor:pointer;padding:4px 15px 0 15px;margin:15px 0;transition:all 0.25s ease-in-out;border-radius:6px;position:relative;z-index:1;background:linear-gradient(to bottom,white,white);}div.active{color:white;}div::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(193.3deg,#ffb36d 6.08%,#ff8888 93.18%);opacity:0;border-radius:6px;transition:opacity 0.25s;z-index:-1;}div.active::before{opacity:1;}"]);

/* harmony default export */ __webpack_exports__["default"] = (Basics);

/***/ }),

/***/ "./components/CourtGuides.js":
/*!***********************************!*\
  !*** ./components/CourtGuides.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_juror_guide_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/juror-guide.svg */ "./components/assets/juror-guide.svg");
/* harmony import */ var _assets_juror_guide_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_juror_guide_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_howto_anj_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/howto-anj.svg */ "./components/assets/howto-anj.svg");
/* harmony import */ var _assets_howto_anj_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_howto_anj_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_tech_breakdown_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/tech-breakdown.svg */ "./components/assets/tech-breakdown.svg");
/* harmony import */ var _assets_tech_breakdown_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_tech_breakdown_svg__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/CourtGuides.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var CourtGuides = function CourtGuides() {
  return __jsx(GuidesSection, {
    id: "learn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _assets_juror_guide_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Juror Dashboard User Guide"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Rewards & responsibilities,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), " Step by Step guide"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "https://help.aragon.org/article/41-aragon-court",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Read more"))), __jsx(Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _assets_howto_anj_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), ' ', __jsx("div", {
    className: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Juror Dispute Guide"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Learn more about app mining disputes in Dijets Council", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "https://blog.aragon.org/juror-dispute-guide-app-mining/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Read more"))), __jsx(Card, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _assets_tech_breakdown_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), ' ', __jsx("div", {
    className: "info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Technical Breakdown"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Deep technical dive on Dijets Council", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "https://blog.aragon.one/aragon-court-v1-technical-details/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Read more"))));
};

var Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "CourtGuides__Card",
  componentId: "sc-9izfzm-0"
})(["width:80%;max-width:350px;position:relative;height:392px;border-radius:8px;background:white;box-shadow:0px 4px 4px rgba(0,0,0,0.15);display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr;margin:8px 8px 8px 8px;img{grid-row-start:1;}.info{padding:24px 24px 24px 24px;grid-row-start:2;h2{font-weight:normal;font-size:27px;margin:0;}h3{color:#8a96a0;font-size:20px;margin:0;}a{font-size:20px;font-weight:medium;color:#ff9780;position:absolute;bottom:5%;}}"]);

var GuidesSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "CourtGuides__GuidesSection",
  componentId: "sc-9izfzm-1"
})(["padding:16px 0px 16px 0px;position:relative;z-index:1;background:#f9fafc;min-height:588px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;@media screen and (max-width:1024px){display:grid;grid-template-columns:1fr;justify-items:center;margin:auto;}"]);

/* harmony default export */ __webpack_exports__["default"] = (CourtGuides);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var _assets_hero_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/hero-background.svg */ "./components/assets/hero-background.svg");
/* harmony import */ var _assets_hero_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_hero_background_svg__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Hero.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var medium = function medium(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__["breakpoint"])('medium', css);
};

var large = function large(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_3__["breakpoint"])('large', css);
};

var Hero = function Hero() {
  return __jsx(HeroSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx(TextContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    duration: 1200,
    delay: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Meet Hal &", __jsx("span", {
    className: "mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "the"), ' '), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Dijets"), ' ', __jsx("span", {
    className: "pink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Governance Council")))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bottom: true,
    duration: 1200,
    delay: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Dijets Council handles subjective disputes that require the judgment of human jurors. These jurors stake a token called ANJ which allows them to be drafted into juries and earn fees for successfully adjudicating disputes."))));
};

var HeroSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Hero__HeroSection",
  componentId: "sc-1n1kpw4-0"
})(["position:relative;z-index:1;background:#1c1c1c;padding-top:64px;display:flex;align-items:center;justify-content:flex-start;position:relative;overflow:hidden;padding-bottom:0px;min-height:600px;background-image:url(", ");background-position:100% center;background-repeat:no-repeat;"], _assets_hero_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a);

var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Hero__TextContainer",
  componentId: "sc-1n1kpw4-1"
})(["width:80%;max-width:1180px;margin:auto;padding-top:40px;h1{font-family:'HKGrotesk';font-weight:800;font-size:50px;line-height:1;margin:0;text-align:left;letter-spacing:-0.447059px;color:#ffffff;", ";", ";}", ";@keyframes shine{to{background-position:200% center;}}.pink{color:rgba(1,191,227);background:linear-gradient( to right,#ff7c7c 20%,#ffc58f 40%,#ffc58f 60%,#ff7c7c 80% );background-size:200% auto;background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;display:block;", ";}h2{font-weight:400;font-size:20px;", ";line-height:1.58;text-align:left;color:white;max-width:750px;margin-top:20px;}span.mobile{display:inline;", ";}span.medium{display:none;", ";}"], medium('font-size: 76px;'), large('font-size: 86px;'), medium('padding-top: 0;'), medium('display: inline;'), medium('font-size: 24px;'), medium('display: none;'), medium('display: inline;'));

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Info.js":
/*!****************************!*\
  !*** ./components/Info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_microsite_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/microsite-logic */ "./lib/microsite-logic.js");
/* harmony import */ var _assets_info_background_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/info-background.svg */ "./components/assets/info-background.svg");
/* harmony import */ var _assets_info_background_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_info_background_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_anj_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/anj-logo.svg */ "./components/assets/anj-logo.svg");
/* harmony import */ var _assets_anj_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_anj_logo_svg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var large = function large(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_2__["breakpoint"])('large', css);
};

var medium = function medium(css) {
  return Object(lib_microsite_logic__WEBPACK_IMPORTED_MODULE_2__["breakpoint"])('medium', css);
};

function Info() {
  return __jsx(InfoSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(InfoWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(TextContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(TitleWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(Img, {
    src: _assets_anj_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: "pink header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Dijets Council has launched")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "As a juror, you can now access your ANJ by using the", ' ', __jsx("a", {
    className: "pink",
    href: "https://court.aragon.org/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "court dashboard."), ' ', "You can still check your active balance by connecting your wallet to the conversion module."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "ANJ is now available at a variable rate, based on supply and demand. Price discovery is automated by a", ' ', __jsx("a", {
    className: "pink",
    href: "https://help.aragon.org/article/44-how-to-get-anj-and-become-an-aragon-court-juror#bonding-curve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "bonding curve"), "."), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "You can visit the", ' ', __jsx("a", {
    className: "pink",
    href: "https://help.aragon.org/article/48-aragon-court-faq",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Dijets Council FAQ"), ' ', "for more information on frequent questions and answers on all Court related topics."))));
}

var InfoSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Info__InfoSection",
  componentId: "sc-1bwxxmo-0"
})(["background:linear-gradient(210.76deg,#fffaf1 -3.6%,#ffebeb 216.17%);"]);

var TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Info__TitleWrapper",
  componentId: "sc-1bwxxmo-1"
})(["width:100%;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;"]);

var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Info__TextContainer",
  componentId: "sc-1bwxxmo-2"
})(["width:80%;margin:auto;grid-column-start:2;h2{font-size:24px;line-height:1.58;}p{font-size:24px;line-height:1.58;color:#8a96a0;}.content{color:#8a96a0;}.header{font-weight:bold;text-transform:uppercase;line-height:1;margin:0;}a{display:inline;}.pink{color:rgba(1,191,227);background:linear-gradient( to right,#ff7c7c 20%,#ffc58f 40%,#ffc58f 60%,#ff7c7c 80% );background-size:200% auto;background-clip:text;text-fill-color:transparent;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shine 4s linear infinite;", ";}"], medium('display: inline;'));

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "Info__Img",
  componentId: "sc-1bwxxmo-3"
})(["width:50px;height:50px;margin-right:8px;"]);

var InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Info__InfoWrapper",
  componentId: "sc-1bwxxmo-4"
})(["position:relative;z-index:2;padding-top:50px;padding-bottom:32px;overflow:hidden;min-height:600px;", ""], large("\n  background-image: url(".concat(_assets_info_background_svg__WEBPACK_IMPORTED_MODULE_3___default.a, ");\n  background-repeat: no-repeat;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n  ")));

/* harmony default export */ __webpack_exports__["default"] = (Info);

/***/ }),

/***/ "./components/Subscribe.js":
/*!*********************************!*\
  !*** ./components/Subscribe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_subscribe_background_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/subscribe-background.svg */ "./components/assets/subscribe-background.svg");
/* harmony import */ var _assets_subscribe_background_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_subscribe_background_svg__WEBPACK_IMPORTED_MODULE_2__);


var _this = undefined,
    _jsxFileName = "/Users/saleemfareed/Downloads/anj.aragon.org-master/components/Subscribe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Subscribe = function Subscribe() {
  return __jsx(SubscribeSection, {
    id: "subscribe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Want to use Dijets Council for your organization?"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Prevent and resolve disputes more efficiently than traditional courts.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), " Leave your email and we'll be in touch!"), __jsx("form", {
    action: "https://aragon.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&id=9c51454655",
    method: "post",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    noValidate: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "email-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "email",
    name: "EMAIL",
    placeholder: "Enter Email Address",
    className: "required email",
    id: "mce-EMAIL",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-5000px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("input", {
    type: "text",
    name: "b_a590aa3843a54b079d48e6e18_e81a44c4bd",
    tabIndex: "-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "button-div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    name: "subscribe",
    id: "mc-embedded-subscribe",
    className: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Submit")))))));
};

var SubscribeSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Subscribe__SubscribeSection",
  componentId: "sc-1ket7zv-0"
})(["padding:50px 15px 100px 15px;z-index:3;min-height:463px;display:flex;align-items:center;justify-content:center;background:linear-gradient( 207.23deg,rgba(255,179,109) 6.08%,rgba(255,136,136) 93.18% );background-image:url(", ");background-position:center;background-size:cover;background-repeat:no-repeat;.email-field{display:inline-flex;::placeholder{color:#707291;font-weight:bold;}}input{height:auto;max-height:54px;width:404px;max-width:calc(80vw - 160px);padding:12px 20px 5px 20px;background:#ffffff;background-color:#ffffff;border-radius:8px 0 0 8px;border:solid white;outline:none;font-size:18px;}.button-div{height:54px;background:white;border-radius:0 8px 8px 0;width:150px;display:flex;align-items:center;justify-content:center;cursor:pointer;button{padding:12px 20px 5px 20px;background:linear-gradient( 207.23deg,rgba(255,179,109) 6.08%,rgba(255,136,136) 93.18% );opacity:0.4;border-radius:8px;border:solid 0 transparent;color:white;height:44px;width:140px;outline:none;font-size:18px;}button:hover{opacity:1;}}"], _assets_subscribe_background_svg__WEBPACK_IMPORTED_MODULE_2___default.a);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Subscribe__Container",
  componentId: "sc-1ket7zv-1"
})(["text-align:center;p{font-weight:400;text-align:center;margin:0 auto 30px auto;color:#ffffff;font-size:24px;line-height:34px;max-width:860px;}h3{font-weight:800;font-size:37px;line-height:38px;color:#ffffff;text-align:center;margin:50px auto 15px;display:block;}"]);

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ })

})
//# sourceMappingURL=index.js.197e78884fc5086ba51e.hot-update.js.map