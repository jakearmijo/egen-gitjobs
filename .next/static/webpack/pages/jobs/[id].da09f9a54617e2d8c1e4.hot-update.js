webpackHotUpdate_N_E("pages/jobs/[id]",{

/***/ "./Components/ButtonTemplate.js":
/*!**************************************!*\
  !*** ./Components/ButtonTemplate.js ***!
  \**************************************/
/*! exports provided: StyledButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zendeskgarden/react-buttons */ \"./node_modules/@zendeskgarden/react-buttons/dist/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/Components/ButtonTemplate.js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  color: purple;\\n  cursor: default;\\n  background-color: purple;\\n  border-color: purple';\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_5__[\"Button\"])(_templateObject());\n_c = StyledButton;\n\nvar ButtonTemplate = function ButtonTemplate(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n      textAlign: \"center\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledButton, {\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = ButtonTemplate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonTemplate);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledButton\");\n$RefreshReg$(_c2, \"ButtonTemplate\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9CdXR0b25UZW1wbGF0ZS5qcz84NjA0Il0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkJ1dHRvblRlbXBsYXRlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0MsbUVBQUQsQ0FBVCxtQkFBbEI7S0FBTUYsWTs7QUFRYixJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsc0JBQ3JCLHFFQUFDLDZEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFLHFFQUFDLFlBQUQ7QUFBQSxrQkFBZUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEcUI7QUFBQSxDQUF2Qjs7TUFBTUQsYztBQVFTQSw2RUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvQnV0dG9uVGVtcGxhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnQHplbmRlc2tnYXJkZW4vcmVhY3QtZ3JpZCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAemVuZGVza2dhcmRlbi9yZWFjdC1idXR0b25zJztcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXG4gIGNvbG9yOiBwdXJwbGU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICBib3JkZXItY29sb3I6IHB1cnBsZSc7XG5gO1xuXG5cbmNvbnN0IEJ1dHRvblRlbXBsYXRlID0gKHsgbmFtZSB9KSA9PiAoXG4gIDxSb3c+XG4gICAgPENvbCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIDxTdHlsZWRCdXR0b24+e25hbWV9PC9TdHlsZWRCdXR0b24+XG4gICAgPC9Db2w+XG4gIDwvUm93PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uVGVtcGxhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/ButtonTemplate.js\n");

/***/ })

})