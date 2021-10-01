self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
////////////////////////// PARTICLE ENGINE ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
var ParticleEngine = function () {
  "use strict";

  function ParticleEngine(canvas_id) {
    // enforces new
    if (!(this instanceof ParticleEngine)) {
      return new ParticleEngine(args);
    }

    var _ParticleEngine = this;

    this.canvas_id = canvas_id;
    this.stage = new createjs.Stage(canvas_id);
    this.totalWidth = this.canvasWidth = document.getElementById(canvas_id).width = document.getElementById(canvas_id).offsetWidth;
    this.totalHeight = this.canvasHeight = document.getElementById(canvas_id).height = document.getElementById(canvas_id).offsetHeight;
    this.compositeStyle = "lighter";
    this.particleSettings = [{
      id: "small",
      num: 300,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 3,
      alphamax: 0.4,
      areaHeight: 0.5,
      color: "#F0F0F0",
      fill: false
    }, {
      id: "medium",
      num: 100,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 8,
      alphamax: 0.3,
      areaHeight: 1,
      color: "#C0C0C0",
      fill: true
    }, {
      id: "large",
      num: 10,
      fromX: 0,
      toX: this.totalWidth,
      ballwidth: 30,
      alphamax: 0.2,
      areaHeight: 1,
      color: "#A0A0A0",
      fill: true
    }];
    this.particleArray = [];
    this.lights = [{
      ellipseWidth: 400,
      ellipseHeight: 100,
      alpha: 0.6,
      offsetX: 0,
      offsetY: 0,
      color: "#D0D0D0"
    }, {
      ellipseWidth: 350,
      ellipseHeight: 250,
      alpha: 0.3,
      offsetX: -50,
      offsetY: 0,
      color: "#B8B8B8"
    }, {
      ellipseWidth: 100,
      ellipseHeight: 80,
      alpha: 0.2,
      offsetX: 80,
      offsetY: -50,
      color: "#F8F8F8"
    }];
    this.stage.compositeOperation = _ParticleEngine.compositeStyle;

    function drawBgLight() {
      var light;
      var bounds;
      var blurFilter;

      for (var i = 0, len = _ParticleEngine.lights.length; i < len; i++) {
        light = new createjs.Shape();
        light.graphics.beginFill(_ParticleEngine.lights[i].color).drawEllipse(0, 0, _ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight);
        light.regX = _ParticleEngine.lights[i].ellipseWidth / 2;
        light.regY = _ParticleEngine.lights[i].ellipseHeight / 2;
        light.y = light.initY = _ParticleEngine.totalHeight / 2 + _ParticleEngine.lights[i].offsetY;
        light.x = light.initX = _ParticleEngine.totalWidth / 2 + _ParticleEngine.lights[i].offsetX;
        blurFilter = new createjs.BlurFilter(_ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight, 1);
        bounds = blurFilter.getBounds();
        light.filters = [blurFilter];
        light.cache(bounds.x - _ParticleEngine.lights[i].ellipseWidth / 2, bounds.y - _ParticleEngine.lights[i].ellipseHeight / 2, bounds.width * 2, bounds.height * 2);
        light.alpha = _ParticleEngine.lights[i].alpha;
        light.compositeOperation = "screen";

        _ParticleEngine.stage.addChildAt(light, 0);

        _ParticleEngine.lights[i].elem = light;
      }

      TweenMax.fromTo(_ParticleEngine.lights[0].elem, 10, {
        scaleX: 1.5,
        x: _ParticleEngine.lights[0].elem.initX,
        y: _ParticleEngine.lights[0].elem.initY
      }, {
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleX: 2,
        scaleY: 0.7
      });
      TweenMax.fromTo(_ParticleEngine.lights[1].elem, 12, {
        x: _ParticleEngine.lights[1].elem.initX,
        y: _ParticleEngine.lights[1].elem.initY
      }, {
        delay: 5,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleY: 2,
        scaleX: 2,
        y: _ParticleEngine.totalHeight / 2 - 50,
        x: _ParticleEngine.totalWidth / 2 + 100
      });
      TweenMax.fromTo(_ParticleEngine.lights[2].elem, 8, {
        x: _ParticleEngine.lights[2].elem.initX,
        y: _ParticleEngine.lights[2].elem.initY
      }, {
        delay: 2,
        yoyo: true,
        repeat: -1,
        ease: Power1.easeInOut,
        scaleY: 1.5,
        scaleX: 1.5,
        y: _ParticleEngine.totalHeight / 2,
        x: _ParticleEngine.totalWidth / 2 - 200
      });
    }

    var blurFilter;

    function drawParticles() {
      for (var i = 0, len = _ParticleEngine.particleSettings.length; i < len; i++) {
        var ball = _ParticleEngine.particleSettings[i];
        var circle;

        for (var s = 0; s < ball.num; s++) {
          circle = new createjs.Shape();

          if (ball.fill) {
            circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.ballwidth);
            blurFilter = new createjs.BlurFilter(ball.ballwidth / 2, ball.ballwidth / 2, 1);
            circle.filters = [blurFilter];
            var bounds = blurFilter.getBounds();
            circle.cache(-50 + bounds.x, -50 + bounds.y, 100 + bounds.width, 100 + bounds.height);
          } else {
            circle.graphics.beginStroke(ball.color).setStrokeStyle(1).drawCircle(0, 0, ball.ballwidth);
          }

          circle.alpha = range(0, 0.1);
          circle.alphaMax = ball.alphamax;
          circle.distance = ball.ballwidth * 2;
          circle.ballwidth = ball.ballwidth;
          circle.flag = ball.id;

          _ParticleEngine.applySettings(circle, ball.fromX, ball.toX, ball.areaHeight);

          circle.speed = range(2, 10);
          circle.y = circle.initY;
          circle.x = circle.initX;
          circle.scaleX = circle.scaleY = range(0.3, 1);

          _ParticleEngine.stage.addChild(circle);

          animateBall(circle);

          _ParticleEngine.particleArray.push(circle);
        }
      }
    }

    this.applySettings = function (circle, positionX, totalWidth, areaHeight) {
      circle.speed = range(1, 3);
      circle.initY = weightedRange(0, _ParticleEngine.totalHeight, 1, [_ParticleEngine.totalHeight * (2 - areaHeight / 2) / 4, _ParticleEngine.totalHeight * (2 + areaHeight / 2) / 4], 0.8);
      circle.initX = weightedRange(positionX, totalWidth, 1, [positionX + (totalWidth - positionX) / 4, positionX + (totalWidth - positionX) * 3 / 4], 0.6);
    };

    function animateBall(ball) {
      var scale = range(0.3, 1);
      var xpos = range(ball.initX - ball.distance, ball.initX + ball.distance);
      var ypos = range(ball.initY - ball.distance, ball.initY + ball.distance);
      var speed = ball.speed;
      TweenMax.to(ball, speed, {
        scaleX: scale,
        scaleY: scale,
        x: xpos,
        y: ypos,
        onComplete: animateBall,
        onCompleteParams: [ball],
        ease: Cubic.easeInOut
      });
      TweenMax.to(ball, speed / 2, {
        alpha: range(0.1, ball.alphaMax),
        onComplete: fadeout,
        onCompleteParams: [ball, speed]
      });
    }

    function fadeout(ball, speed) {
      ball.speed = range(2, 10);
      TweenMax.to(ball, speed / 2, {
        alpha: 0
      });
    }

    drawBgLight();
    drawParticles();
  }

  ParticleEngine.prototype.render = function () {
    this.stage.update();
  };

  ParticleEngine.prototype.resize = function () {
    this.totalWidth = this.canvasWidth = document.getElementById(this.canvas_id).width = document.getElementById(this.canvas_id).offsetWidth;
    this.totalHeight = this.canvasHeight = document.getElementById(this.canvas_id).height = document.getElementById(this.canvas_id).offsetHeight;
    this.render();

    for (var i = 0, length = this.particleArray.length; i < length; i++) {
      this.applySettings(this.particleArray[i], 0, this.totalWidth, this.particleArray[i].areaHeight);
    }

    for (var j = 0, len = this.lights.length; j < len; j++) {
      this.lights[j].elem.initY = this.totalHeight / 2 + this.lights[j].offsetY;
      this.lights[j].elem.initX = this.totalWidth / 2 + this.lights[j].offsetX;
      TweenMax.to(this.lights[j].elem, 0.5, {
        x: this.lights[j].elem.initX,
        y: this.lights[j].elem.initY
      });
    }
  };

  return ParticleEngine;
}(); ////////////////////////UTILS//////////////////////////////////////
//////////////////////////////////////////////////////////////////


function range(min, max) {
  return min + (max - min) * Math.random();
}

function round(num, precision) {
  var decimal = Math.pow(10, precision);
  return Math.round(decimal * num) / decimal;
}

function weightedRange(to, from, decimalPlaces, weightedRange, weightStrength) {
  if (typeof from === "undefined" || from === null) {
    from = 0;
  }

  if (typeof decimalPlaces === "undefined" || decimalPlaces === null) {
    decimalPlaces = 0;
  }

  if (typeof weightedRange === "undefined" || weightedRange === null) {
    weightedRange = 0;
  }

  if (typeof weightStrength === "undefined" || weightStrength === null) {
    weightStrength = 0;
  }

  var ret;

  if (to == from) {
    return to;
  }

  if (weightedRange && Math.random() <= weightStrength) {
    ret = round(Math.random() * (weightedRange[1] - weightedRange[0]) + weightedRange[0], decimalPlaces);
  } else {
    ret = round(Math.random() * (to - from) + from, decimalPlaces);
  }

  return ret;
} ///////////////// RUN CODE //////////////////////////
//////////////////////////////////////////////////////


var particles;

(function () {
  particles = new ParticleEngine("projector");
  createjs.Ticker.addEventListener("tick", updateCanvas);
  window.addEventListener("resize", resizeCanvas, false);

  function updateCanvas() {
    particles.render();
  }

  function resizeCanvas() {
    particles.resize();
  }
})();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ephy\\Desktop\\portfolio_website-main\\src\\pages\\index.js",
    _this = undefined;










var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFja2dyb291bmRBbmltYXRpb24vQmFja2dyb3VuZEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhcnRpY2xlRW5naW5lIiwiY2FudmFzX2lkIiwiYXJncyIsIl9QYXJ0aWNsZUVuZ2luZSIsInN0YWdlIiwiY3JlYXRlanMiLCJTdGFnZSIsInRvdGFsV2lkdGgiLCJjYW52YXNXaWR0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidG90YWxIZWlnaHQiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjb21wb3NpdGVTdHlsZSIsInBhcnRpY2xlU2V0dGluZ3MiLCJpZCIsIm51bSIsImZyb21YIiwidG9YIiwiYmFsbHdpZHRoIiwiYWxwaGFtYXgiLCJhcmVhSGVpZ2h0IiwiY29sb3IiLCJmaWxsIiwicGFydGljbGVBcnJheSIsImxpZ2h0cyIsImVsbGlwc2VXaWR0aCIsImVsbGlwc2VIZWlnaHQiLCJhbHBoYSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY29tcG9zaXRlT3BlcmF0aW9uIiwiZHJhd0JnTGlnaHQiLCJsaWdodCIsImJvdW5kcyIsImJsdXJGaWx0ZXIiLCJpIiwibGVuIiwibGVuZ3RoIiwiU2hhcGUiLCJncmFwaGljcyIsImJlZ2luRmlsbCIsImRyYXdFbGxpcHNlIiwicmVnWCIsInJlZ1kiLCJ5IiwiaW5pdFkiLCJ4IiwiaW5pdFgiLCJCbHVyRmlsdGVyIiwiZ2V0Qm91bmRzIiwiZmlsdGVycyIsImNhY2hlIiwiYWRkQ2hpbGRBdCIsImVsZW0iLCJUd2Vlbk1heCIsImZyb21UbyIsInNjYWxlWCIsInlveW8iLCJyZXBlYXQiLCJlYXNlIiwiUG93ZXIxIiwiZWFzZUluT3V0Iiwic2NhbGVZIiwiZGVsYXkiLCJkcmF3UGFydGljbGVzIiwiYmFsbCIsImNpcmNsZSIsInMiLCJkcmF3Q2lyY2xlIiwiYmVnaW5TdHJva2UiLCJzZXRTdHJva2VTdHlsZSIsInJhbmdlIiwiYWxwaGFNYXgiLCJkaXN0YW5jZSIsImZsYWciLCJhcHBseVNldHRpbmdzIiwic3BlZWQiLCJhZGRDaGlsZCIsImFuaW1hdGVCYWxsIiwicHVzaCIsInBvc2l0aW9uWCIsIndlaWdodGVkUmFuZ2UiLCJzY2FsZSIsInhwb3MiLCJ5cG9zIiwidG8iLCJvbkNvbXBsZXRlIiwib25Db21wbGV0ZVBhcmFtcyIsIkN1YmljIiwiZmFkZW91dCIsInByb3RvdHlwZSIsInJlbmRlciIsInVwZGF0ZSIsInJlc2l6ZSIsImoiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwicm91bmQiLCJwcmVjaXNpb24iLCJkZWNpbWFsIiwicG93IiwiZnJvbSIsImRlY2ltYWxQbGFjZXMiLCJ3ZWlnaHRTdHJlbmd0aCIsInJldCIsInBhcnRpY2xlcyIsIlRpY2tlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVDYW52YXMiLCJ3aW5kb3ciLCJyZXNpemVDYW52YXMiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsY0FBYyxHQUFJLFlBQVk7QUFDakM7O0FBRUEsV0FBU0EsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFDbEM7QUFDQSxRQUFJLEVBQUUsZ0JBQWdCRCxjQUFsQixDQUFKLEVBQXVDO0FBQ3RDLGFBQU8sSUFBSUEsY0FBSixDQUFtQkUsSUFBbkIsQ0FBUDtBQUNBOztBQUVELFFBQUlDLGVBQWUsR0FBRyxJQUF0Qjs7QUFFQSxTQUFLRixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxJQUFJQyxRQUFRLENBQUNDLEtBQWIsQ0FBbUJMLFNBQW5CLENBQWI7QUFDQSxTQUFLTSxVQUFMLEdBQWtCLEtBQUtDLFdBQUwsR0FBbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUNwQ1QsU0FEb0MsRUFFbkNVLEtBRm1DLEdBRTNCRixRQUFRLENB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a0NHLFlBQWxDLEVBQWdELEtBQWhEOztBQUVBLFdBQVNGLFlBQVQsR0FBd0I7QUFDdkJILGFBQVMsQ0FBQ2hCLE1BQVY7QUFDQTs7QUFFRCxXQUFTcUIsWUFBVCxHQUF3QjtBQUN2QkwsYUFBUyxDQUFDZCxNQUFWO0FBQ0E7QUFDRCxDQVpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW9CLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRSw4REFBQyw2REFBRDtBQUFTLFVBQUksTUFBYjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLDZGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FLDhEQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFLDhEQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBYkQ7O0tBQU1BLEk7QUFlTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTY0NWZiNDNlZjAzNmYyYmZhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUEFSVElDTEUgRU5HSU5FIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBQYXJ0aWNsZUVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGZ1bmN0aW9uIFBhcnRpY2xlRW5naW5lKGNhbnZhc19pZCkge1xuXHRcdC8vIGVuZm9yY2VzIG5ld1xuXHRcdGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXJ0aWNsZUVuZ2luZSkpIHtcblx0XHRcdHJldHVybiBuZXcgUGFydGljbGVFbmdpbmUoYXJncyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9QYXJ0aWNsZUVuZ2luZSA9IHRoaXM7XG5cblx0XHR0aGlzLmNhbnZhc19pZCA9IGNhbnZhc19pZDtcblx0XHR0aGlzLnN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGNhbnZhc19pZCk7XG5cdFx0dGhpcy50b3RhbFdpZHRoID0gdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0Y2FudmFzX2lkXG5cdFx0KS53aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc19pZCkub2Zmc2V0V2lkdGg7XG5cdFx0dGhpcy50b3RhbEhlaWdodCA9IHRoaXMuY2FudmFzSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdFx0XHRjYW52YXNfaWRcblx0XHQpLmhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc19pZCkub2Zmc2V0SGVpZ2h0O1xuXHRcdHRoaXMuY29tcG9zaXRlU3R5bGUgPSBcImxpZ2h0ZXJcIjtcblxuXHRcdHRoaXMucGFydGljbGVTZXR0aW5ncyA9IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IFwic21hbGxcIixcblx0XHRcdFx0bnVtOiAzMDAsXG5cdFx0XHRcdGZyb21YOiAwLFxuXHRcdFx0XHR0b1g6IHRoaXMudG90YWxXaWR0aCxcblx0XHRcdFx0YmFsbHdpZHRoOiAzLFxuXHRcdFx0XHRhbHBoYW1heDogMC40LFxuXHRcdFx0XHRhcmVhSGVpZ2h0OiAwLjUsXG5cdFx0XHRcdGNvbG9yOiBcIiNGMEYwRjBcIixcblx0XHRcdFx0ZmlsbDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBcIm1lZGl1bVwiLFxuXHRcdFx0XHRudW06IDEwMCxcblx0XHRcdFx0ZnJvbVg6IDAsXG5cdFx0XHRcdHRvWDogdGhpcy50b3RhbFdpZHRoLFxuXHRcdFx0XHRiYWxsd2lkdGg6IDgsXG5cdFx0XHRcdGFscGhhbWF4OiAwLjMsXG5cdFx0XHRcdGFyZWFIZWlnaHQ6IDEsXG5cdFx0XHRcdGNvbG9yOiBcIiNDMEMwQzBcIixcblx0XHRcdFx0ZmlsbDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6IFwibGFyZ2VcIixcblx0XHRcdFx0bnVtOiAxMCxcblx0XHRcdFx0ZnJvbVg6IDAsXG5cdFx0XHRcdHRvWDogdGhpcy50b3RhbFdpZHRoLFxuXHRcdFx0XHRiYWxsd2lkdGg6IDMwLFxuXHRcdFx0XHRhbHBoYW1heDogMC4yLFxuXHRcdFx0XHRhcmVhSGVpZ2h0OiAxLFxuXHRcdFx0XHRjb2xvcjogXCIjQTBBMEEwXCIsXG5cdFx0XHRcdGZpbGw6IHRydWVcblx0XHRcdH1cblx0XHRdO1xuXHRcdHRoaXMucGFydGljbGVBcnJheSA9IFtdO1xuXHRcdHRoaXMubGlnaHRzID0gW1xuXHRcdFx0e1xuXHRcdFx0XHRlbGxpcHNlV2lkdGg6IDQwMCxcblx0XHRcdFx0ZWxsaXBzZUhlaWdodDogMTAwLFxuXHRcdFx0XHRhbHBoYTogMC42LFxuXHRcdFx0XHRvZmZzZXRYOiAwLFxuXHRcdFx0XHRvZmZzZXRZOiAwLFxuXHRcdFx0XHRjb2xvcjogXCIjRDBEMEQwXCJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGVsbGlwc2VXaWR0aDogMzUwLFxuXHRcdFx0XHRlbGxpcHNlSGVpZ2h0OiAyNTAsXG5cdFx0XHRcdGFscGhhOiAwLjMsXG5cdFx0XHRcdG9mZnNldFg6IC01MCxcblx0XHRcdFx0b2Zmc2V0WTogMCxcblx0XHRcdFx0Y29sb3I6IFwiI0I4QjhCOFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRlbGxpcHNlV2lkdGg6IDEwMCxcblx0XHRcdFx0ZWxsaXBzZUhlaWdodDogODAsXG5cdFx0XHRcdGFscGhhOiAwLjIsXG5cdFx0XHRcdG9mZnNldFg6IDgwLFxuXHRcdFx0XHRvZmZzZXRZOiAtNTAsXG5cdFx0XHRcdGNvbG9yOiBcIiNGOEY4RjhcIlxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHR0aGlzLnN0YWdlLmNvbXBvc2l0ZU9wZXJhdGlvbiA9IF9QYXJ0aWNsZUVuZ2luZS5jb21wb3NpdGVTdHlsZTtcblxuXHRcdGZ1bmN0aW9uIGRyYXdCZ0xpZ2h0KCkge1xuXHRcdFx0dmFyIGxpZ2h0O1xuXHRcdFx0dmFyIGJvdW5kcztcblx0XHRcdHZhciBibHVyRmlsdGVyO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IF9QYXJ0aWNsZUVuZ2luZS5saWdodHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0bGlnaHQgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcblx0XHRcdFx0bGlnaHQuZ3JhcGhpY3Ncblx0XHRcdFx0XHQuYmVnaW5GaWxsKF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uY29sb3IpXG5cdFx0XHRcdFx0LmRyYXdFbGxpcHNlKFxuXHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VXaWR0aCxcblx0XHRcdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uZWxsaXBzZUhlaWdodFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGxpZ2h0LnJlZ1ggPSBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VXaWR0aCAvIDI7XG5cdFx0XHRcdGxpZ2h0LnJlZ1kgPSBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VIZWlnaHQgLyAyO1xuXHRcdFx0XHRsaWdodC55ID0gbGlnaHQuaW5pdFkgPVxuXHRcdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS50b3RhbEhlaWdodCAvIDIgKyBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLm9mZnNldFk7XG5cdFx0XHRcdGxpZ2h0LnggPSBsaWdodC5pbml0WCA9XG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLnRvdGFsV2lkdGggLyAyICsgX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5vZmZzZXRYO1xuXG5cdFx0XHRcdGJsdXJGaWx0ZXIgPSBuZXcgY3JlYXRlanMuQmx1ckZpbHRlcihcblx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VXaWR0aCxcblx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VIZWlnaHQsXG5cdFx0XHRcdFx0MVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRib3VuZHMgPSBibHVyRmlsdGVyLmdldEJvdW5kcygpO1xuXHRcdFx0XHRsaWdodC5maWx0ZXJzID0gW2JsdXJGaWx0ZXJdO1xuXHRcdFx0XHRsaWdodC5jYWNoZShcblx0XHRcdFx0XHRib3VuZHMueCAtIF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uZWxsaXBzZVdpZHRoIC8gMixcblx0XHRcdFx0XHRib3VuZHMueSAtIF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uZWxsaXBzZUhlaWdodCAvIDIsXG5cdFx0XHRcdFx0Ym91bmRzLndpZHRoICogMixcblx0XHRcdFx0XHRib3VuZHMuaGVpZ2h0ICogMlxuXHRcdFx0XHQpO1xuXHRcdFx0XHRsaWdodC5hbHBoYSA9IF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uYWxwaGE7XG5cblx0XHRcdFx0bGlnaHQuY29tcG9zaXRlT3BlcmF0aW9uID0gXCJzY3JlZW5cIjtcblx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLnN0YWdlLmFkZENoaWxkQXQobGlnaHQsIDApO1xuXG5cdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0uZWxlbSA9IGxpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHRUd2Vlbk1heC5mcm9tVG8oXG5cdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMF0uZWxlbSxcblx0XHRcdFx0MTAsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzY2FsZVg6IDEuNSxcblx0XHRcdFx0XHR4OiBfUGFydGljbGVFbmdpbmUubGlnaHRzWzBdLmVsZW0uaW5pdFgsXG5cdFx0XHRcdFx0eTogX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1swXS5lbGVtLmluaXRZXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHsgeW95bzogdHJ1ZSwgcmVwZWF0OiAtMSwgZWFzZTogUG93ZXIxLmVhc2VJbk91dCwgc2NhbGVYOiAyLCBzY2FsZVk6IDAuNyB9XG5cdFx0XHQpO1xuXHRcdFx0VHdlZW5NYXguZnJvbVRvKFxuXHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzWzFdLmVsZW0sXG5cdFx0XHRcdDEyLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eDogX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1sxXS5lbGVtLmluaXRYLFxuXHRcdFx0XHRcdHk6IF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMV0uZWxlbS5pbml0WVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGVsYXk6IDUsXG5cdFx0XHRcdFx0eW95bzogdHJ1ZSxcblx0XHRcdFx0XHRyZXBlYXQ6IC0xLFxuXHRcdFx0XHRcdGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsXG5cdFx0XHRcdFx0c2NhbGVZOiAyLFxuXHRcdFx0XHRcdHNjYWxlWDogMixcblx0XHRcdFx0XHR5OiBfUGFydGljbGVFbmdpbmUudG90YWxIZWlnaHQgLyAyIC0gNTAsXG5cdFx0XHRcdFx0eDogX1BhcnRpY2xlRW5naW5lLnRvdGFsV2lkdGggLyAyICsgMTAwXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRUd2Vlbk1heC5mcm9tVG8oXG5cdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMl0uZWxlbSxcblx0XHRcdFx0OCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHg6IF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMl0uZWxlbS5pbml0WCxcblx0XHRcdFx0XHR5OiBfUGFydGljbGVFbmdpbmUubGlnaHRzWzJdLmVsZW0uaW5pdFlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlbGF5OiAyLFxuXHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0cmVwZWF0OiAtMSxcblx0XHRcdFx0XHRlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxuXHRcdFx0XHRcdHNjYWxlWTogMS41LFxuXHRcdFx0XHRcdHNjYWxlWDogMS41LFxuXHRcdFx0XHRcdHk6IF9QYXJ0aWNsZUVuZ2luZS50b3RhbEhlaWdodCAvIDIsXG5cdFx0XHRcdFx0eDogX1BhcnRpY2xlRW5naW5lLnRvdGFsV2lkdGggLyAyIC0gMjAwXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dmFyIGJsdXJGaWx0ZXI7XG5cdFx0ZnVuY3Rpb24gZHJhd1BhcnRpY2xlcygpIHtcblx0XHRcdGZvciAoXG5cdFx0XHRcdHZhciBpID0gMCwgbGVuID0gX1BhcnRpY2xlRW5naW5lLnBhcnRpY2xlU2V0dGluZ3MubGVuZ3RoO1xuXHRcdFx0XHRpIDwgbGVuO1xuXHRcdFx0XHRpKytcblx0XHRcdCkge1xuXHRcdFx0XHR2YXIgYmFsbCA9IF9QYXJ0aWNsZUVuZ2luZS5wYXJ0aWNsZVNldHRpbmdzW2ldO1xuXG5cdFx0XHRcdHZhciBjaXJjbGU7XG5cdFx0XHRcdGZvciAodmFyIHMgPSAwOyBzIDwgYmFsbC5udW07IHMrKykge1xuXHRcdFx0XHRcdGNpcmNsZSA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuXHRcdFx0XHRcdGlmIChiYWxsLmZpbGwpIHtcblx0XHRcdFx0XHRcdGNpcmNsZS5ncmFwaGljcy5iZWdpbkZpbGwoYmFsbC5jb2xvcikuZHJhd0NpcmNsZSgwLCAwLCBiYWxsLmJhbGx3aWR0aCk7XG5cdFx0XHRcdFx0XHRibHVyRmlsdGVyID0gbmV3IGNyZWF0ZWpzLkJsdXJGaWx0ZXIoXG5cdFx0XHRcdFx0XHRcdGJhbGwuYmFsbHdpZHRoIC8gMixcblx0XHRcdFx0XHRcdFx0YmFsbC5iYWxsd2lkdGggLyAyLFxuXHRcdFx0XHRcdFx0XHQxXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y2lyY2xlLmZpbHRlcnMgPSBbYmx1ckZpbHRlcl07XG5cdFx0XHRcdFx0XHR2YXIgYm91bmRzID0gYmx1ckZpbHRlci5nZXRCb3VuZHMoKTtcblx0XHRcdFx0XHRcdGNpcmNsZS5jYWNoZShcblx0XHRcdFx0XHRcdFx0LTUwICsgYm91bmRzLngsXG5cdFx0XHRcdFx0XHRcdC01MCArIGJvdW5kcy55LFxuXHRcdFx0XHRcdFx0XHQxMDAgKyBib3VuZHMud2lkdGgsXG5cdFx0XHRcdFx0XHRcdDEwMCArIGJvdW5kcy5oZWlnaHRcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNpcmNsZS5ncmFwaGljc1xuXHRcdFx0XHRcdFx0XHQuYmVnaW5TdHJva2UoYmFsbC5jb2xvcilcblx0XHRcdFx0XHRcdFx0LnNldFN0cm9rZVN0eWxlKDEpXG5cdFx0XHRcdFx0XHRcdC5kcmF3Q2lyY2xlKDAsIDAsIGJhbGwuYmFsbHdpZHRoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjaXJjbGUuYWxwaGEgPSByYW5nZSgwLCAwLjEpO1xuXHRcdFx0XHRcdGNpcmNsZS5hbHBoYU1heCA9IGJhbGwuYWxwaGFtYXg7XG5cdFx0XHRcdFx0Y2lyY2xlLmRpc3RhbmNlID0gYmFsbC5iYWxsd2lkdGggKiAyO1xuXHRcdFx0XHRcdGNpcmNsZS5iYWxsd2lkdGggPSBiYWxsLmJhbGx3aWR0aDtcblx0XHRcdFx0XHRjaXJjbGUuZmxhZyA9IGJhbGwuaWQ7XG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLmFwcGx5U2V0dGluZ3MoXG5cdFx0XHRcdFx0XHRjaXJjbGUsXG5cdFx0XHRcdFx0XHRiYWxsLmZyb21YLFxuXHRcdFx0XHRcdFx0YmFsbC50b1gsXG5cdFx0XHRcdFx0XHRiYWxsLmFyZWFIZWlnaHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGNpcmNsZS5zcGVlZCA9IHJhbmdlKDIsIDEwKTtcblx0XHRcdFx0XHRjaXJjbGUueSA9IGNpcmNsZS5pbml0WTtcblx0XHRcdFx0XHRjaXJjbGUueCA9IGNpcmNsZS5pbml0WDtcblx0XHRcdFx0XHRjaXJjbGUuc2NhbGVYID0gY2lyY2xlLnNjYWxlWSA9IHJhbmdlKDAuMywgMSk7XG5cblx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUuc3RhZ2UuYWRkQ2hpbGQoY2lyY2xlKTtcblxuXHRcdFx0XHRcdGFuaW1hdGVCYWxsKGNpcmNsZSk7XG5cblx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUucGFydGljbGVBcnJheS5wdXNoKGNpcmNsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmFwcGx5U2V0dGluZ3MgPSBmdW5jdGlvbiAoY2lyY2xlLCBwb3NpdGlvblgsIHRvdGFsV2lkdGgsIGFyZWFIZWlnaHQpIHtcblx0XHRcdGNpcmNsZS5zcGVlZCA9IHJhbmdlKDEsIDMpO1xuXHRcdFx0Y2lyY2xlLmluaXRZID0gd2VpZ2h0ZWRSYW5nZShcblx0XHRcdFx0MCxcblx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLnRvdGFsSGVpZ2h0LFxuXHRcdFx0XHQxLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0KF9QYXJ0aWNsZUVuZ2luZS50b3RhbEhlaWdodCAqICgyIC0gYXJlYUhlaWdodCAvIDIpKSAvIDQsXG5cdFx0XHRcdFx0KF9QYXJ0aWNsZUVuZ2luZS50b3RhbEhlaWdodCAqICgyICsgYXJlYUhlaWdodCAvIDIpKSAvIDRcblx0XHRcdFx0XSxcblx0XHRcdFx0MC44XG5cdFx0XHQpO1xuXHRcdFx0Y2lyY2xlLmluaXRYID0gd2VpZ2h0ZWRSYW5nZShcblx0XHRcdFx0cG9zaXRpb25YLFxuXHRcdFx0XHR0b3RhbFdpZHRoLFxuXHRcdFx0XHQxLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0cG9zaXRpb25YICsgKHRvdGFsV2lkdGggLSBwb3NpdGlvblgpIC8gNCxcblx0XHRcdFx0XHRwb3NpdGlvblggKyAoKHRvdGFsV2lkdGggLSBwb3NpdGlvblgpICogMykgLyA0XG5cdFx0XHRcdF0sXG5cdFx0XHRcdDAuNlxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gYW5pbWF0ZUJhbGwoYmFsbCkge1xuXHRcdFx0dmFyIHNjYWxlID0gcmFuZ2UoMC4zLCAxKTtcblx0XHRcdHZhciB4cG9zID0gcmFuZ2UoYmFsbC5pbml0WCAtIGJhbGwuZGlzdGFuY2UsIGJhbGwuaW5pdFggKyBiYWxsLmRpc3RhbmNlKTtcblx0XHRcdHZhciB5cG9zID0gcmFuZ2UoYmFsbC5pbml0WSAtIGJhbGwuZGlzdGFuY2UsIGJhbGwuaW5pdFkgKyBiYWxsLmRpc3RhbmNlKTtcblx0XHRcdHZhciBzcGVlZCA9IGJhbGwuc3BlZWQ7XG5cdFx0XHRUd2Vlbk1heC50byhiYWxsLCBzcGVlZCwge1xuXHRcdFx0XHRzY2FsZVg6IHNjYWxlLFxuXHRcdFx0XHRzY2FsZVk6IHNjYWxlLFxuXHRcdFx0XHR4OiB4cG9zLFxuXHRcdFx0XHR5OiB5cG9zLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBhbmltYXRlQmFsbCxcblx0XHRcdFx0b25Db21wbGV0ZVBhcmFtczogW2JhbGxdLFxuXHRcdFx0XHRlYXNlOiBDdWJpYy5lYXNlSW5PdXRcblx0XHRcdH0pO1xuXHRcdFx0VHdlZW5NYXgudG8oYmFsbCwgc3BlZWQgLyAyLCB7XG5cdFx0XHRcdGFscGhhOiByYW5nZSgwLjEsIGJhbGwuYWxwaGFNYXgpLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiBmYWRlb3V0LFxuXHRcdFx0XHRvbkNvbXBsZXRlUGFyYW1zOiBbYmFsbCwgc3BlZWRdXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmYWRlb3V0KGJhbGwsIHNwZWVkKSB7XG5cdFx0XHRiYWxsLnNwZWVkID0gcmFuZ2UoMiwgMTApO1xuXHRcdFx0VHdlZW5NYXgudG8oYmFsbCwgc3BlZWQgLyAyLCB7IGFscGhhOiAwIH0pO1xuXHRcdH1cblxuXHRcdGRyYXdCZ0xpZ2h0KCk7XG5cdFx0ZHJhd1BhcnRpY2xlcygpO1xuXHR9XG5cblx0UGFydGljbGVFbmdpbmUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnN0YWdlLnVwZGF0ZSgpO1xuXHR9O1xuXG5cdFBhcnRpY2xlRW5naW5lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy50b3RhbFdpZHRoID0gdGhpcy5jYW52YXNXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0dGhpcy5jYW52YXNfaWRcblx0XHQpLndpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jYW52YXNfaWQpLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMudG90YWxIZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0dGhpcy5jYW52YXNfaWRcblx0XHQpLmhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY2FudmFzX2lkKS5vZmZzZXRIZWlnaHQ7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSB0aGlzLnBhcnRpY2xlQXJyYXkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMuYXBwbHlTZXR0aW5ncyhcblx0XHRcdFx0dGhpcy5wYXJ0aWNsZUFycmF5W2ldLFxuXHRcdFx0XHQwLFxuXHRcdFx0XHR0aGlzLnRvdGFsV2lkdGgsXG5cdFx0XHRcdHRoaXMucGFydGljbGVBcnJheVtpXS5hcmVhSGVpZ2h0XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGogPSAwLCBsZW4gPSB0aGlzLmxpZ2h0cy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuXHRcdFx0dGhpcy5saWdodHNbal0uZWxlbS5pbml0WSA9IHRoaXMudG90YWxIZWlnaHQgLyAyICsgdGhpcy5saWdodHNbal0ub2Zmc2V0WTtcblx0XHRcdHRoaXMubGlnaHRzW2pdLmVsZW0uaW5pdFggPSB0aGlzLnRvdGFsV2lkdGggLyAyICsgdGhpcy5saWdodHNbal0ub2Zmc2V0WDtcblx0XHRcdFR3ZWVuTWF4LnRvKHRoaXMubGlnaHRzW2pdLmVsZW0sIDAuNSwge1xuXHRcdFx0XHR4OiB0aGlzLmxpZ2h0c1tqXS5lbGVtLmluaXRYLFxuXHRcdFx0XHR5OiB0aGlzLmxpZ2h0c1tqXS5lbGVtLmluaXRZXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIFBhcnRpY2xlRW5naW5lO1xufSkoKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVVRJTFMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIE1hdGgucmFuZG9tKCk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kKG51bSwgcHJlY2lzaW9uKSB7XG5cdHZhciBkZWNpbWFsID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG5cdHJldHVybiBNYXRoLnJvdW5kKGRlY2ltYWwgKiBudW0pIC8gZGVjaW1hbDtcbn1cblxuZnVuY3Rpb24gd2VpZ2h0ZWRSYW5nZSh0bywgZnJvbSwgZGVjaW1hbFBsYWNlcywgd2VpZ2h0ZWRSYW5nZSwgd2VpZ2h0U3RyZW5ndGgpIHtcblx0aWYgKHR5cGVvZiBmcm9tID09PSBcInVuZGVmaW5lZFwiIHx8IGZyb20gPT09IG51bGwpIHtcblx0XHRmcm9tID0gMDtcblx0fVxuXHRpZiAodHlwZW9mIGRlY2ltYWxQbGFjZXMgPT09IFwidW5kZWZpbmVkXCIgfHwgZGVjaW1hbFBsYWNlcyA9PT0gbnVsbCkge1xuXHRcdGRlY2ltYWxQbGFjZXMgPSAwO1xuXHR9XG5cdGlmICh0eXBlb2Ygd2VpZ2h0ZWRSYW5nZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB3ZWlnaHRlZFJhbmdlID09PSBudWxsKSB7XG5cdFx0d2VpZ2h0ZWRSYW5nZSA9IDA7XG5cdH1cblx0aWYgKHR5cGVvZiB3ZWlnaHRTdHJlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIiB8fCB3ZWlnaHRTdHJlbmd0aCA9PT0gbnVsbCkge1xuXHRcdHdlaWdodFN0cmVuZ3RoID0gMDtcblx0fVxuXG5cdHZhciByZXQ7XG5cdGlmICh0byA9PSBmcm9tKSB7XG5cdFx0cmV0dXJuIHRvO1xuXHR9XG5cblx0aWYgKHdlaWdodGVkUmFuZ2UgJiYgTWF0aC5yYW5kb20oKSA8PSB3ZWlnaHRTdHJlbmd0aCkge1xuXHRcdHJldCA9IHJvdW5kKFxuXHRcdFx0TWF0aC5yYW5kb20oKSAqICh3ZWlnaHRlZFJhbmdlWzFdIC0gd2VpZ2h0ZWRSYW5nZVswXSkgKyB3ZWlnaHRlZFJhbmdlWzBdLFxuXHRcdFx0ZGVjaW1hbFBsYWNlc1xuXHRcdCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0ID0gcm91bmQoTWF0aC5yYW5kb20oKSAqICh0byAtIGZyb20pICsgZnJvbSwgZGVjaW1hbFBsYWNlcyk7XG5cdH1cblx0cmV0dXJuIHJldDtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8gUlVOIENPREUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgcGFydGljbGVzO1xuKGZ1bmN0aW9uICgpIHtcblx0cGFydGljbGVzID0gbmV3IFBhcnRpY2xlRW5naW5lKFwicHJvamVjdG9yXCIpO1xuXHRjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgdXBkYXRlQ2FudmFzKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQ2FudmFzKCkge1xuXHRcdHBhcnRpY2xlcy5yZW5kZXIoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcblx0XHRwYXJ0aWNsZXMucmVzaXplKCk7XG5cdH1cbn0pKCk7XG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XG5pbXBvcnQgQmdBbmltYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICcuLi9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFNlY3Rpb24gZ3JpZD5cbiAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgPEJnQW5pbWF0aW9uIC8+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8UHJvamVjdHMgLz5cbiAgICAgIDxUZWNobm9sb2dpZXMgLz5cbiAgICAgIDxUaW1lbGluZSAvPlxuICAgICAgPEFjb21wbGlzaG1lbnRzIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==