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
  }, "Learn the basic action stages for councillors in Dijets Council")), __jsx(Process, {
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
  }, "You and two other councillors are drafted to adjudicate Bob and Alice\u2019s dispute, where the chance of being drafted is proportional to the amount of ANJ you have activated."))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
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
  }, "Since one of the councillors did not vote in favor of Alice - who won the final ruling - their activated ANJ will be distributed to you and the other juror who voted for Alice as a reward. This reward is in addition to the rewards earned from Subscription and Dispute Fees, all of which will automatically be added to your staked and activated ANJ balance."))))));
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

/***/ })

})
//# sourceMappingURL=index.js.60580fcf5441ddcf86d2.hot-update.js.map