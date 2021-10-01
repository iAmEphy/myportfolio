self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
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

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFja2dyb291bmRBbmltYXRpb24vQmFja2dyb3VuZEFuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJQYXJ0aWNsZUVuZ2luZSIsImNhbnZhc19pZCIsImFyZ3MiLCJfUGFydGljbGVFbmdpbmUiLCJzdGFnZSIsImNyZWF0ZWpzIiwiU3RhZ2UiLCJ0b3RhbFdpZHRoIiwiY2FudmFzV2lkdGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvdGFsSGVpZ2h0IiwiY2FudmFzSGVpZ2h0IiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY29tcG9zaXRlU3R5bGUiLCJwYXJ0aWNsZVNldHRpbmdzIiwiaWQiLCJudW0iLCJmcm9tWCIsInRvWCIsImJhbGx3aWR0aCIsImFscGhhbWF4IiwiYXJlYUhlaWdodCIsImNvbG9yIiwiZmlsbCIsInBhcnRpY2xlQXJyYXkiLCJsaWdodHMiLCJlbGxpcHNlV2lkdGgiLCJlbGxpcHNlSGVpZ2h0IiwiYWxwaGEiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImNvbXBvc2l0ZU9wZXJhdGlvbiIsImRyYXdCZ0xpZ2h0IiwibGlnaHQiLCJib3VuZHMiLCJibHVyRmlsdGVyIiwiaSIsImxlbiIsImxlbmd0aCIsIlNoYXBlIiwiZ3JhcGhpY3MiLCJiZWdpbkZpbGwiLCJkcmF3RWxsaXBzZSIsInJlZ1giLCJyZWdZIiwieSIsImluaXRZIiwieCIsImluaXRYIiwiQmx1ckZpbHRlciIsImdldEJvdW5kcyIsImZpbHRlcnMiLCJjYWNoZSIsImFkZENoaWxkQXQiLCJlbGVtIiwiVHdlZW5NYXgiLCJmcm9tVG8iLCJzY2FsZVgiLCJ5b3lvIiwicmVwZWF0IiwiZWFzZSIsIlBvd2VyMSIsImVhc2VJbk91dCIsInNjYWxlWSIsImRlbGF5IiwiZHJhd1BhcnRpY2xlcyIsImJhbGwiLCJjaXJjbGUiLCJzIiwiZHJhd0NpcmNsZSIsImJlZ2luU3Ryb2tlIiwic2V0U3Ryb2tlU3R5bGUiLCJyYW5nZSIsImFscGhhTWF4IiwiZGlzdGFuY2UiLCJmbGFnIiwiYXBwbHlTZXR0aW5ncyIsInNwZWVkIiwiYWRkQ2hpbGQiLCJhbmltYXRlQmFsbCIsInB1c2giLCJwb3NpdGlvblgiLCJ3ZWlnaHRlZFJhbmdlIiwic2NhbGUiLCJ4cG9zIiwieXBvcyIsInRvIiwib25Db21wbGV0ZSIsIm9uQ29tcGxldGVQYXJhbXMiLCJDdWJpYyIsImZhZGVvdXQiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJyZXNpemUiLCJqIiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSIsInJvdW5kIiwicHJlY2lzaW9uIiwiZGVjaW1hbCIsInBvdyIsImZyb20iLCJkZWNpbWFsUGxhY2VzIiwid2VpZ2h0U3RyZW5ndGgiLCJyZXQiLCJwYXJ0aWNsZXMiLCJUaWNrZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlQ2FudmFzIiwid2luZG93IiwicmVzaXplQ2FudmFzIiwiQmFja2dyb3VuZEFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUVBO0FBQ0E7O0FBRUEsSUFBSUEsY0FBYyxHQUFJLFlBQVk7QUFDakM7O0FBRUEsV0FBU0EsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUM7QUFDbEM7QUFDQSxRQUFJLEVBQUUsZ0JBQWdCRCxjQUFsQixDQUFKLEVBQXVDO0FBQ3RDLGFBQU8sSUFBSUEsY0FBSixDQUFtQkUsSUFBbkIsQ0FBUDtBQUNBOztBQUVELFFBQUlDLGVBQWUsR0FBRyxJQUF0Qjs7QUFFQSxTQUFLRixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxJQUFJQyxRQUFRLENBQUNDLEtBQWIsQ0FBbUJMLFNBQW5CLENBQWI7QUFDQSxTQUFLTSxVQUFMLEdBQWtCLEtBQUtDLFdBQUwsR0FBbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUNwQ1QsU0FEb0MsRUFFbkNVLEtBRm1DLEdBRTNCRixRQUFRLENBQUNDLGNBQVQsQ0FBd0JULFNB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QWhEOztBQUVBLFdBQVNGLFlBQVQsR0FBd0I7QUFDdkJILGFBQVMsQ0FBQ2hCLE1BQVY7QUFDQTs7QUFFRCxXQUFTcUIsWUFBVCxHQUF3QjtBQUN2QkwsYUFBUyxDQUFDZCxNQUFWO0FBQ0E7QUFDRCxDQVpEOztBQWVBLCtEQUFlb0IsbUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWQ4MDlhMjFmM2ZkZDNmNGQxMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBBUlRJQ0xFIEVOR0lORSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgUGFydGljbGVFbmdpbmUgPSAoZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRmdW5jdGlvbiBQYXJ0aWNsZUVuZ2luZShjYW52YXNfaWQpIHtcblx0XHQvLyBlbmZvcmNlcyBuZXdcblx0XHRpZiAoISh0aGlzIGluc3RhbmNlb2YgUGFydGljbGVFbmdpbmUpKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcnRpY2xlRW5naW5lKGFyZ3MpO1xuXHRcdH1cblxuXHRcdHZhciBfUGFydGljbGVFbmdpbmUgPSB0aGlzO1xuXG5cdFx0dGhpcy5jYW52YXNfaWQgPSBjYW52YXNfaWQ7XG5cdFx0dGhpcy5zdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShjYW52YXNfaWQpO1xuXHRcdHRoaXMudG90YWxXaWR0aCA9IHRoaXMuY2FudmFzV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdGNhbnZhc19pZFxuXHRcdCkud2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNfaWQpLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMudG90YWxIZWlnaHQgPSB0aGlzLmNhbnZhc0hlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHRcdFx0Y2FudmFzX2lkXG5cdFx0KS5oZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNfaWQpLm9mZnNldEhlaWdodDtcblx0XHR0aGlzLmNvbXBvc2l0ZVN0eWxlID0gXCJsaWdodGVyXCI7XG5cblx0XHR0aGlzLnBhcnRpY2xlU2V0dGluZ3MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBcInNtYWxsXCIsXG5cdFx0XHRcdG51bTogMzAwLFxuXHRcdFx0XHRmcm9tWDogMCxcblx0XHRcdFx0dG9YOiB0aGlzLnRvdGFsV2lkdGgsXG5cdFx0XHRcdGJhbGx3aWR0aDogMyxcblx0XHRcdFx0YWxwaGFtYXg6IDAuNCxcblx0XHRcdFx0YXJlYUhlaWdodDogMC41LFxuXHRcdFx0XHRjb2xvcjogXCIjRjBGMEYwXCIsXG5cdFx0XHRcdGZpbGw6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogXCJtZWRpdW1cIixcblx0XHRcdFx0bnVtOiAxMDAsXG5cdFx0XHRcdGZyb21YOiAwLFxuXHRcdFx0XHR0b1g6IHRoaXMudG90YWxXaWR0aCxcblx0XHRcdFx0YmFsbHdpZHRoOiA4LFxuXHRcdFx0XHRhbHBoYW1heDogMC4zLFxuXHRcdFx0XHRhcmVhSGVpZ2h0OiAxLFxuXHRcdFx0XHRjb2xvcjogXCIjQzBDMEMwXCIsXG5cdFx0XHRcdGZpbGw6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiBcImxhcmdlXCIsXG5cdFx0XHRcdG51bTogMTAsXG5cdFx0XHRcdGZyb21YOiAwLFxuXHRcdFx0XHR0b1g6IHRoaXMudG90YWxXaWR0aCxcblx0XHRcdFx0YmFsbHdpZHRoOiAzMCxcblx0XHRcdFx0YWxwaGFtYXg6IDAuMixcblx0XHRcdFx0YXJlYUhlaWdodDogMSxcblx0XHRcdFx0Y29sb3I6IFwiI0EwQTBBMFwiLFxuXHRcdFx0XHRmaWxsOiB0cnVlXG5cdFx0XHR9XG5cdFx0XTtcblx0XHR0aGlzLnBhcnRpY2xlQXJyYXkgPSBbXTtcblx0XHR0aGlzLmxpZ2h0cyA9IFtcblx0XHRcdHtcblx0XHRcdFx0ZWxsaXBzZVdpZHRoOiA0MDAsXG5cdFx0XHRcdGVsbGlwc2VIZWlnaHQ6IDEwMCxcblx0XHRcdFx0YWxwaGE6IDAuNixcblx0XHRcdFx0b2Zmc2V0WDogMCxcblx0XHRcdFx0b2Zmc2V0WTogMCxcblx0XHRcdFx0Y29sb3I6IFwiI0QwRDBEMFwiXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRlbGxpcHNlV2lkdGg6IDM1MCxcblx0XHRcdFx0ZWxsaXBzZUhlaWdodDogMjUwLFxuXHRcdFx0XHRhbHBoYTogMC4zLFxuXHRcdFx0XHRvZmZzZXRYOiAtNTAsXG5cdFx0XHRcdG9mZnNldFk6IDAsXG5cdFx0XHRcdGNvbG9yOiBcIiNCOEI4QjhcIlxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZWxsaXBzZVdpZHRoOiAxMDAsXG5cdFx0XHRcdGVsbGlwc2VIZWlnaHQ6IDgwLFxuXHRcdFx0XHRhbHBoYTogMC4yLFxuXHRcdFx0XHRvZmZzZXRYOiA4MCxcblx0XHRcdFx0b2Zmc2V0WTogLTUwLFxuXHRcdFx0XHRjb2xvcjogXCIjRjhGOEY4XCJcblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0dGhpcy5zdGFnZS5jb21wb3NpdGVPcGVyYXRpb24gPSBfUGFydGljbGVFbmdpbmUuY29tcG9zaXRlU3R5bGU7XG5cblx0XHRmdW5jdGlvbiBkcmF3QmdMaWdodCgpIHtcblx0XHRcdHZhciBsaWdodDtcblx0XHRcdHZhciBib3VuZHM7XG5cdFx0XHR2YXIgYmx1ckZpbHRlcjtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBfUGFydGljbGVFbmdpbmUubGlnaHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdGxpZ2h0ID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XG5cdFx0XHRcdGxpZ2h0LmdyYXBoaWNzXG5cdFx0XHRcdFx0LmJlZ2luRmlsbChfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmNvbG9yKVxuXHRcdFx0XHRcdC5kcmF3RWxsaXBzZShcblx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHQwLFxuXHRcdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5lbGxpcHNlV2lkdGgsXG5cdFx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VIZWlnaHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRsaWdodC5yZWdYID0gX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5lbGxpcHNlV2lkdGggLyAyO1xuXHRcdFx0XHRsaWdodC5yZWdZID0gX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5lbGxpcHNlSGVpZ2h0IC8gMjtcblx0XHRcdFx0bGlnaHQueSA9IGxpZ2h0LmluaXRZID1cblx0XHRcdFx0XHRfUGFydGljbGVFbmdpbmUudG90YWxIZWlnaHQgLyAyICsgX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5vZmZzZXRZO1xuXHRcdFx0XHRsaWdodC54ID0gbGlnaHQuaW5pdFggPVxuXHRcdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS50b3RhbFdpZHRoIC8gMiArIF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbaV0ub2Zmc2V0WDtcblxuXHRcdFx0XHRibHVyRmlsdGVyID0gbmV3IGNyZWF0ZWpzLkJsdXJGaWx0ZXIoXG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5lbGxpcHNlV2lkdGgsXG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLmxpZ2h0c1tpXS5lbGxpcHNlSGVpZ2h0LFxuXHRcdFx0XHRcdDFcblx0XHRcdFx0KTtcblx0XHRcdFx0Ym91bmRzID0gYmx1ckZpbHRlci5nZXRCb3VuZHMoKTtcblx0XHRcdFx0bGlnaHQuZmlsdGVycyA9IFtibHVyRmlsdGVyXTtcblx0XHRcdFx0bGlnaHQuY2FjaGUoXG5cdFx0XHRcdFx0Ym91bmRzLnggLSBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VXaWR0aCAvIDIsXG5cdFx0XHRcdFx0Ym91bmRzLnkgLSBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsbGlwc2VIZWlnaHQgLyAyLFxuXHRcdFx0XHRcdGJvdW5kcy53aWR0aCAqIDIsXG5cdFx0XHRcdFx0Ym91bmRzLmhlaWdodCAqIDJcblx0XHRcdFx0KTtcblx0XHRcdFx0bGlnaHQuYWxwaGEgPSBfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmFscGhhO1xuXG5cdFx0XHRcdGxpZ2h0LmNvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic2NyZWVuXCI7XG5cdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5zdGFnZS5hZGRDaGlsZEF0KGxpZ2h0LCAwKTtcblxuXHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzW2ldLmVsZW0gPSBsaWdodDtcblx0XHRcdH1cblxuXHRcdFx0VHdlZW5NYXguZnJvbVRvKFxuXHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzWzBdLmVsZW0sXG5cdFx0XHRcdDEwLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGVYOiAxLjUsXG5cdFx0XHRcdFx0eDogX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1swXS5lbGVtLmluaXRYLFxuXHRcdFx0XHRcdHk6IF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMF0uZWxlbS5pbml0WVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHlveW86IHRydWUsIHJlcGVhdDogLTEsIGVhc2U6IFBvd2VyMS5lYXNlSW5PdXQsIHNjYWxlWDogMiwgc2NhbGVZOiAwLjcgfVxuXHRcdFx0KTtcblx0XHRcdFR3ZWVuTWF4LmZyb21Ubyhcblx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLmxpZ2h0c1sxXS5lbGVtLFxuXHRcdFx0XHQxMixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHg6IF9QYXJ0aWNsZUVuZ2luZS5saWdodHNbMV0uZWxlbS5pbml0WCxcblx0XHRcdFx0XHR5OiBfUGFydGljbGVFbmdpbmUubGlnaHRzWzFdLmVsZW0uaW5pdFlcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlbGF5OiA1LFxuXHRcdFx0XHRcdHlveW86IHRydWUsXG5cdFx0XHRcdFx0cmVwZWF0OiAtMSxcblx0XHRcdFx0XHRlYXNlOiBQb3dlcjEuZWFzZUluT3V0LFxuXHRcdFx0XHRcdHNjYWxlWTogMixcblx0XHRcdFx0XHRzY2FsZVg6IDIsXG5cdFx0XHRcdFx0eTogX1BhcnRpY2xlRW5naW5lLnRvdGFsSGVpZ2h0IC8gMiAtIDUwLFxuXHRcdFx0XHRcdHg6IF9QYXJ0aWNsZUVuZ2luZS50b3RhbFdpZHRoIC8gMiArIDEwMFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0VHdlZW5NYXguZnJvbVRvKFxuXHRcdFx0XHRfUGFydGljbGVFbmdpbmUubGlnaHRzWzJdLmVsZW0sXG5cdFx0XHRcdDgsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR4OiBfUGFydGljbGVFbmdpbmUubGlnaHRzWzJdLmVsZW0uaW5pdFgsXG5cdFx0XHRcdFx0eTogX1BhcnRpY2xlRW5naW5lLmxpZ2h0c1syXS5lbGVtLmluaXRZXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkZWxheTogMixcblx0XHRcdFx0XHR5b3lvOiB0cnVlLFxuXHRcdFx0XHRcdHJlcGVhdDogLTEsXG5cdFx0XHRcdFx0ZWFzZTogUG93ZXIxLmVhc2VJbk91dCxcblx0XHRcdFx0XHRzY2FsZVk6IDEuNSxcblx0XHRcdFx0XHRzY2FsZVg6IDEuNSxcblx0XHRcdFx0XHR5OiBfUGFydGljbGVFbmdpbmUudG90YWxIZWlnaHQgLyAyLFxuXHRcdFx0XHRcdHg6IF9QYXJ0aWNsZUVuZ2luZS50b3RhbFdpZHRoIC8gMiAtIDIwMFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHZhciBibHVyRmlsdGVyO1xuXHRcdGZ1bmN0aW9uIGRyYXdQYXJ0aWNsZXMoKSB7XG5cdFx0XHRmb3IgKFxuXHRcdFx0XHR2YXIgaSA9IDAsIGxlbiA9IF9QYXJ0aWNsZUVuZ2luZS5wYXJ0aWNsZVNldHRpbmdzLmxlbmd0aDtcblx0XHRcdFx0aSA8IGxlbjtcblx0XHRcdFx0aSsrXG5cdFx0XHQpIHtcblx0XHRcdFx0dmFyIGJhbGwgPSBfUGFydGljbGVFbmdpbmUucGFydGljbGVTZXR0aW5nc1tpXTtcblxuXHRcdFx0XHR2YXIgY2lyY2xlO1xuXHRcdFx0XHRmb3IgKHZhciBzID0gMDsgcyA8IGJhbGwubnVtOyBzKyspIHtcblx0XHRcdFx0XHRjaXJjbGUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcblx0XHRcdFx0XHRpZiAoYmFsbC5maWxsKSB7XG5cdFx0XHRcdFx0XHRjaXJjbGUuZ3JhcGhpY3MuYmVnaW5GaWxsKGJhbGwuY29sb3IpLmRyYXdDaXJjbGUoMCwgMCwgYmFsbC5iYWxsd2lkdGgpO1xuXHRcdFx0XHRcdFx0Ymx1ckZpbHRlciA9IG5ldyBjcmVhdGVqcy5CbHVyRmlsdGVyKFxuXHRcdFx0XHRcdFx0XHRiYWxsLmJhbGx3aWR0aCAvIDIsXG5cdFx0XHRcdFx0XHRcdGJhbGwuYmFsbHdpZHRoIC8gMixcblx0XHRcdFx0XHRcdFx0MVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNpcmNsZS5maWx0ZXJzID0gW2JsdXJGaWx0ZXJdO1xuXHRcdFx0XHRcdFx0dmFyIGJvdW5kcyA9IGJsdXJGaWx0ZXIuZ2V0Qm91bmRzKCk7XG5cdFx0XHRcdFx0XHRjaXJjbGUuY2FjaGUoXG5cdFx0XHRcdFx0XHRcdC01MCArIGJvdW5kcy54LFxuXHRcdFx0XHRcdFx0XHQtNTAgKyBib3VuZHMueSxcblx0XHRcdFx0XHRcdFx0MTAwICsgYm91bmRzLndpZHRoLFxuXHRcdFx0XHRcdFx0XHQxMDAgKyBib3VuZHMuaGVpZ2h0XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjaXJjbGUuZ3JhcGhpY3Ncblx0XHRcdFx0XHRcdFx0LmJlZ2luU3Ryb2tlKGJhbGwuY29sb3IpXG5cdFx0XHRcdFx0XHRcdC5zZXRTdHJva2VTdHlsZSgxKVxuXHRcdFx0XHRcdFx0XHQuZHJhd0NpcmNsZSgwLCAwLCBiYWxsLmJhbGx3aWR0aCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2lyY2xlLmFscGhhID0gcmFuZ2UoMCwgMC4xKTtcblx0XHRcdFx0XHRjaXJjbGUuYWxwaGFNYXggPSBiYWxsLmFscGhhbWF4O1xuXHRcdFx0XHRcdGNpcmNsZS5kaXN0YW5jZSA9IGJhbGwuYmFsbHdpZHRoICogMjtcblx0XHRcdFx0XHRjaXJjbGUuYmFsbHdpZHRoID0gYmFsbC5iYWxsd2lkdGg7XG5cdFx0XHRcdFx0Y2lyY2xlLmZsYWcgPSBiYWxsLmlkO1xuXHRcdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS5hcHBseVNldHRpbmdzKFxuXHRcdFx0XHRcdFx0Y2lyY2xlLFxuXHRcdFx0XHRcdFx0YmFsbC5mcm9tWCxcblx0XHRcdFx0XHRcdGJhbGwudG9YLFxuXHRcdFx0XHRcdFx0YmFsbC5hcmVhSGVpZ2h0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjaXJjbGUuc3BlZWQgPSByYW5nZSgyLCAxMCk7XG5cdFx0XHRcdFx0Y2lyY2xlLnkgPSBjaXJjbGUuaW5pdFk7XG5cdFx0XHRcdFx0Y2lyY2xlLnggPSBjaXJjbGUuaW5pdFg7XG5cdFx0XHRcdFx0Y2lyY2xlLnNjYWxlWCA9IGNpcmNsZS5zY2FsZVkgPSByYW5nZSgwLjMsIDEpO1xuXG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLnN0YWdlLmFkZENoaWxkKGNpcmNsZSk7XG5cblx0XHRcdFx0XHRhbmltYXRlQmFsbChjaXJjbGUpO1xuXG5cdFx0XHRcdFx0X1BhcnRpY2xlRW5naW5lLnBhcnRpY2xlQXJyYXkucHVzaChjaXJjbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5hcHBseVNldHRpbmdzID0gZnVuY3Rpb24gKGNpcmNsZSwgcG9zaXRpb25YLCB0b3RhbFdpZHRoLCBhcmVhSGVpZ2h0KSB7XG5cdFx0XHRjaXJjbGUuc3BlZWQgPSByYW5nZSgxLCAzKTtcblx0XHRcdGNpcmNsZS5pbml0WSA9IHdlaWdodGVkUmFuZ2UoXG5cdFx0XHRcdDAsXG5cdFx0XHRcdF9QYXJ0aWNsZUVuZ2luZS50b3RhbEhlaWdodCxcblx0XHRcdFx0MSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdChfUGFydGljbGVFbmdpbmUudG90YWxIZWlnaHQgKiAoMiAtIGFyZWFIZWlnaHQgLyAyKSkgLyA0LFxuXHRcdFx0XHRcdChfUGFydGljbGVFbmdpbmUudG90YWxIZWlnaHQgKiAoMiArIGFyZWFIZWlnaHQgLyAyKSkgLyA0XG5cdFx0XHRcdF0sXG5cdFx0XHRcdDAuOFxuXHRcdFx0KTtcblx0XHRcdGNpcmNsZS5pbml0WCA9IHdlaWdodGVkUmFuZ2UoXG5cdFx0XHRcdHBvc2l0aW9uWCxcblx0XHRcdFx0dG90YWxXaWR0aCxcblx0XHRcdFx0MSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHBvc2l0aW9uWCArICh0b3RhbFdpZHRoIC0gcG9zaXRpb25YKSAvIDQsXG5cdFx0XHRcdFx0cG9zaXRpb25YICsgKCh0b3RhbFdpZHRoIC0gcG9zaXRpb25YKSAqIDMpIC8gNFxuXHRcdFx0XHRdLFxuXHRcdFx0XHQwLjZcblx0XHRcdCk7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGFuaW1hdGVCYWxsKGJhbGwpIHtcblx0XHRcdHZhciBzY2FsZSA9IHJhbmdlKDAuMywgMSk7XG5cdFx0XHR2YXIgeHBvcyA9IHJhbmdlKGJhbGwuaW5pdFggLSBiYWxsLmRpc3RhbmNlLCBiYWxsLmluaXRYICsgYmFsbC5kaXN0YW5jZSk7XG5cdFx0XHR2YXIgeXBvcyA9IHJhbmdlKGJhbGwuaW5pdFkgLSBiYWxsLmRpc3RhbmNlLCBiYWxsLmluaXRZICsgYmFsbC5kaXN0YW5jZSk7XG5cdFx0XHR2YXIgc3BlZWQgPSBiYWxsLnNwZWVkO1xuXHRcdFx0VHdlZW5NYXgudG8oYmFsbCwgc3BlZWQsIHtcblx0XHRcdFx0c2NhbGVYOiBzY2FsZSxcblx0XHRcdFx0c2NhbGVZOiBzY2FsZSxcblx0XHRcdFx0eDogeHBvcyxcblx0XHRcdFx0eTogeXBvcyxcblx0XHRcdFx0b25Db21wbGV0ZTogYW5pbWF0ZUJhbGwsXG5cdFx0XHRcdG9uQ29tcGxldGVQYXJhbXM6IFtiYWxsXSxcblx0XHRcdFx0ZWFzZTogQ3ViaWMuZWFzZUluT3V0XG5cdFx0XHR9KTtcblx0XHRcdFR3ZWVuTWF4LnRvKGJhbGwsIHNwZWVkIC8gMiwge1xuXHRcdFx0XHRhbHBoYTogcmFuZ2UoMC4xLCBiYWxsLmFscGhhTWF4KSxcblx0XHRcdFx0b25Db21wbGV0ZTogZmFkZW91dCxcblx0XHRcdFx0b25Db21wbGV0ZVBhcmFtczogW2JhbGwsIHNwZWVkXVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmFkZW91dChiYWxsLCBzcGVlZCkge1xuXHRcdFx0YmFsbC5zcGVlZCA9IHJhbmdlKDIsIDEwKTtcblx0XHRcdFR3ZWVuTWF4LnRvKGJhbGwsIHNwZWVkIC8gMiwgeyBhbHBoYTogMCB9KTtcblx0XHR9XG5cblx0XHRkcmF3QmdMaWdodCgpO1xuXHRcdGRyYXdQYXJ0aWNsZXMoKTtcblx0fVxuXG5cdFBhcnRpY2xlRW5naW5lLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5zdGFnZS51cGRhdGUoKTtcblx0fTtcblxuXHRQYXJ0aWNsZUVuZ2luZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMudG90YWxXaWR0aCA9IHRoaXMuY2FudmFzV2lkdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdHRoaXMuY2FudmFzX2lkXG5cdFx0KS53aWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY2FudmFzX2lkKS5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLnRvdGFsSGVpZ2h0ID0gdGhpcy5jYW52YXNIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0XHRcdHRoaXMuY2FudmFzX2lkXG5cdFx0KS5oZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNhbnZhc19pZCkub2Zmc2V0SGVpZ2h0O1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gdGhpcy5wYXJ0aWNsZUFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLmFwcGx5U2V0dGluZ3MoXG5cdFx0XHRcdHRoaXMucGFydGljbGVBcnJheVtpXSxcblx0XHRcdFx0MCxcblx0XHRcdFx0dGhpcy50b3RhbFdpZHRoLFxuXHRcdFx0XHR0aGlzLnBhcnRpY2xlQXJyYXlbaV0uYXJlYUhlaWdodFxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBqID0gMCwgbGVuID0gdGhpcy5saWdodHMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcblx0XHRcdHRoaXMubGlnaHRzW2pdLmVsZW0uaW5pdFkgPSB0aGlzLnRvdGFsSGVpZ2h0IC8gMiArIHRoaXMubGlnaHRzW2pdLm9mZnNldFk7XG5cdFx0XHR0aGlzLmxpZ2h0c1tqXS5lbGVtLmluaXRYID0gdGhpcy50b3RhbFdpZHRoIC8gMiArIHRoaXMubGlnaHRzW2pdLm9mZnNldFg7XG5cdFx0XHRUd2Vlbk1heC50byh0aGlzLmxpZ2h0c1tqXS5lbGVtLCAwLjUsIHtcblx0XHRcdFx0eDogdGhpcy5saWdodHNbal0uZWxlbS5pbml0WCxcblx0XHRcdFx0eTogdGhpcy5saWdodHNbal0uZWxlbS5pbml0WVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBQYXJ0aWNsZUVuZ2luZTtcbn0pKCk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1VUSUxTLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiByYW5nZShtaW4sIG1heCkge1xuXHRyZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiBNYXRoLnJhbmRvbSgpO1xufVxuXG5mdW5jdGlvbiByb3VuZChudW0sIHByZWNpc2lvbikge1xuXHR2YXIgZGVjaW1hbCA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuXHRyZXR1cm4gTWF0aC5yb3VuZChkZWNpbWFsICogbnVtKSAvIGRlY2ltYWw7XG59XG5cbmZ1bmN0aW9uIHdlaWdodGVkUmFuZ2UodG8sIGZyb20sIGRlY2ltYWxQbGFjZXMsIHdlaWdodGVkUmFuZ2UsIHdlaWdodFN0cmVuZ3RoKSB7XG5cdGlmICh0eXBlb2YgZnJvbSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBmcm9tID09PSBudWxsKSB7XG5cdFx0ZnJvbSA9IDA7XG5cdH1cblx0aWYgKHR5cGVvZiBkZWNpbWFsUGxhY2VzID09PSBcInVuZGVmaW5lZFwiIHx8IGRlY2ltYWxQbGFjZXMgPT09IG51bGwpIHtcblx0XHRkZWNpbWFsUGxhY2VzID0gMDtcblx0fVxuXHRpZiAodHlwZW9mIHdlaWdodGVkUmFuZ2UgPT09IFwidW5kZWZpbmVkXCIgfHwgd2VpZ2h0ZWRSYW5nZSA9PT0gbnVsbCkge1xuXHRcdHdlaWdodGVkUmFuZ2UgPSAwO1xuXHR9XG5cdGlmICh0eXBlb2Ygd2VpZ2h0U3RyZW5ndGggPT09IFwidW5kZWZpbmVkXCIgfHwgd2VpZ2h0U3RyZW5ndGggPT09IG51bGwpIHtcblx0XHR3ZWlnaHRTdHJlbmd0aCA9IDA7XG5cdH1cblxuXHR2YXIgcmV0O1xuXHRpZiAodG8gPT0gZnJvbSkge1xuXHRcdHJldHVybiB0bztcblx0fVxuXG5cdGlmICh3ZWlnaHRlZFJhbmdlICYmIE1hdGgucmFuZG9tKCkgPD0gd2VpZ2h0U3RyZW5ndGgpIHtcblx0XHRyZXQgPSByb3VuZChcblx0XHRcdE1hdGgucmFuZG9tKCkgKiAod2VpZ2h0ZWRSYW5nZVsxXSAtIHdlaWdodGVkUmFuZ2VbMF0pICsgd2VpZ2h0ZWRSYW5nZVswXSxcblx0XHRcdGRlY2ltYWxQbGFjZXNcblx0XHQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldCA9IHJvdW5kKE1hdGgucmFuZG9tKCkgKiAodG8gLSBmcm9tKSArIGZyb20sIGRlY2ltYWxQbGFjZXMpO1xuXHR9XG5cdHJldHVybiByZXQ7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vIFJVTiBDT0RFIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxudmFyIHBhcnRpY2xlcztcbihmdW5jdGlvbiAoKSB7XG5cdHBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZUVuZ2luZShcInByb2plY3RvclwiKTtcblx0Y3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHVwZGF0ZUNhbnZhcyk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUNhbnZhcygpIHtcblx0XHRwYXJ0aWNsZXMucmVuZGVyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG5cdFx0cGFydGljbGVzLnJlc2l6ZSgpO1xuXHR9XG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==