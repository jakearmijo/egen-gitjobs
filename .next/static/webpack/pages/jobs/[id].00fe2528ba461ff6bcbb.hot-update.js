webpackHotUpdate_N_E("pages/jobs/[id]",{

/***/ "./Components/ButtonTemplate.js":
/*!**************************************!*\
  !*** ./Components/ButtonTemplate.js ***!
  \**************************************/
/*! exports provided: StyledButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zendeskgarden/react-buttons */ \"./node_modules/@zendeskgarden/react-buttons/dist/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/Components/ButtonTemplate.js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: '#5865E0';\\n  cursor: default;\\n  background-color: '#5865E0';\\n  border-color: '#5865E0';\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar StyledButton = styled(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_4__[\"Button\"])(_templateObject());\n_c = StyledButton;\n\nvar ButtonTemplate = function ButtonTemplate(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledButton, {\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ButtonTemplate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonTemplate);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledButton\");\n$RefreshReg$(_c2, \"ButtonTemplate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9CdXR0b25UZW1wbGF0ZS5qcz84NjA0Il0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkJ1dHRvblRlbXBsYXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxtRUFBRCxDQUFULG1CQUFsQjtLQUFNRixZOztBQVFiLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxzQkFDckIscUVBQUMsNkRBQUQ7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UscUVBQUMsWUFBRDtBQUFBLGtCQUFlQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztNQUFNRCxjO0FBUVNBLDZFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9CdXR0b25UZW1wbGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ0B6ZW5kZXNrZ2FyZGVuL3JlYWN0LWdyaWQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHplbmRlc2tnYXJkZW4vcmVhY3QtYnV0dG9ucyc7XG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICBjb2xvcjogJyM1ODY1RTAnO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICcjNTg2NUUwJztcbiAgYm9yZGVyLWNvbG9yOiAnIzU4NjVFMCc7XG5gO1xuXG5cbmNvbnN0IEJ1dHRvblRlbXBsYXRlID0gKHsgbmFtZSB9KSA9PiAoXG4gIDxSb3c+XG4gICAgPENvbCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIDxTdHlsZWRCdXR0b24+e25hbWV9PC9TdHlsZWRCdXR0b24+XG4gICAgPC9Db2w+XG4gIDwvUm93PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uVGVtcGxhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/ButtonTemplate.js\n");

/***/ }),

/***/ "./Components/index.js":
/*!*****************************!*\
  !*** ./Components/index.js ***!
  \*****************************/
/*! exports provided: NavBar, SingleJob, JobTilesMain, Pagination, SearchBar, ButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ \"./Components/NavBar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NavBar\", function() { return _NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _SingleJob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleJob */ \"./Components/SingleJob.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SingleJob\", function() { return _SingleJob__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _JobTilesMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobTilesMain */ \"./Components/JobTilesMain.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JobTilesMain\", function() { return _JobTilesMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./Components/Pagination.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ \"./Components/SearchBar.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SearchBar\", function() { return _SearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _ButtonTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonTemplate */ \"./Components/ButtonTemplate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ButtonTemplate\", function() { return _ButtonTemplate__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9pbmRleC5qcz9lOGUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJmaWxlIjoiLi9Db21wb25lbnRzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tICcuL05hdkJhcidcbmltcG9ydCBTaW5nbGVKb2IgZnJvbSAnLi9TaW5nbGVKb2InXG5pbXBvcnQgSm9iVGlsZXNNYWluIGZyb20gJy4vSm9iVGlsZXNNYWluJ1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuL1NlYXJjaEJhcidcbmltcG9ydCBCdXR0b25UZW1wbGF0ZSBmcm9tICcuL0J1dHRvblRlbXBsYXRlJ1xuXG5cbmV4cG9ydCB7XG4gIE5hdkJhcixcbiAgU2luZ2xlSm9iLFxuICBKb2JUaWxlc01haW4sXG4gIFBhZ2luYXRpb24sXG4gIFNlYXJjaEJhcixcbiAgQnV0dG9uVGVtcGxhdGUsXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/index.js\n");

/***/ })

})