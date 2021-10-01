self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Body1": function() { return /* binding */ Body1; },
/* harmony export */   "Body2": function() { return /* binding */ Body2; },
/* harmony export */   "Body3": function() { return /* binding */ Body3; },
/* harmony export */   "Nav": function() { return /* binding */ Nav; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavIcon": function() { return /* binding */ NavIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

 //container a div with these styles

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); //another grid area

var Body1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Body1",
  componentId: "sc-9w0vkp-1"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Body2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Body2",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Body3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Body3",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], function (props) {
  return props.theme.breakpoints.sm;
}); //Navigation. anchor tag with following styles

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__Nav",
  componentId: "sc-9w0vkp-4"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-5"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavIcon",
  componentId: "sc-9w0vkp-6"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-7"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkJvZHkxIiwiQm9keTIiLCJCb2R5MyIsIk5hdiIsIkNvbnRhY3REcm9wRG93biIsIm1kIiwiTmF2SWNvbiIsIklvSW9zQXJyb3dEcm9wZG93biIsImlzT3BlbiIsIlNvY2lhbEljb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ08sSUFBTUEsU0FBUyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSwrUUFRWCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FSVyxDQUFmLEMsQ0FpQlA7O0FBQ08sSUFBTUMsS0FBSyxHQUFHTCxxRUFBSDtBQUFBO0FBQUE7QUFBQSwySEFLUCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FMTyxDQUFYO0FBU0EsSUFBTUUsS0FBSyxHQUFHTixxRUFBSDtBQUFBO0FBQUE7QUFBQSxnSEFJUCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FKTyxDQUFYO0FBUUEsSUFBTUcsS0FBSyxHQUFHUCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxzSkFLUCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FMTyxDQUFYLEMsQ0FXUDs7QUFDTyxJQUFNSSxHQUFHLEdBQUdSLG1FQUFIO0FBQUE7QUFBQTtBQUFBLG9LQVVMLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVZLLENBQVQsQyxDQWVQOztBQUNPLElBQU1LLGVBQWUsR0FBR1Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsc1FBbUJqQixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FuQmlCLEVBc0JqQixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JPLEVBQW5DO0FBQUEsQ0F0QmlCLENBQXJCO0FBMkJBLElBQU1DLE9BQU8sR0FBR1gsMERBQU0sQ0FBQ1ksOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1S0FLUDtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsR0FBSCxHQUFTLEtBQWhDO0FBQUEsQ0FMTyxFQU1MO0FBQUEsTUFBR0EsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBaUJBLE1BQU0sR0FBRyxZQUFILEdBQWtCLFdBQXpDO0FBQUEsQ0FOSyxFQVlULFVBQUNaLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVpTLENBQWIsQyxDQW1CUDs7QUFFTyxJQUFNVSxXQUFXLEdBQUdkLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZDVjODY5ZTJlOTZmNTIzMjFjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vY29udGFpbmVyIGEgZGl2IHdpdGggdGhlc2Ugc3R5bGVzXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuYDtcblxuLy9hbm90aGVyIGdyaWQgYXJlYVxuZXhwb3J0IGNvbnN0IEJvZHkxID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQm9keTIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEJvZHkzID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA2O1xuICB9XG5gO1xuXG4vL05hdmlnYXRpb24uIGFuY2hvciB0YWcgd2l0aCBmb2xsb3dpbmcgc3R5bGVzXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLmFgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbi8vLyBEcm9wRG93biBDb250YWN0XG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMScgOiAnLjc1Jyl9O1xuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuYDtcblxuXG4vLyBTb2NpYWwgSWNvbnMgXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuY29sb3I6IHdoaXRlO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMmQ0NTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==