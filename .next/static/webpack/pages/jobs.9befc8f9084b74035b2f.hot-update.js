webpackHotUpdate_N_E("pages/jobs",{

/***/ "./Components/Pagination.js":
/*!**********************************!*\
  !*** ./Components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zendeskgarden/react-pagination */ \"./node_modules/@zendeskgarden/react-pagination/dist/index.esm.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/Components/Pagination.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Pagination(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n  console.log(\"🚀 ~ file: Pagination.js ~ line 5 ~ Pagination ~ allJobs\", allJobs);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      cursor = _useState[0],\n      setCursor = _useState[1];\n\n  var pages = [0, 1, 2, 3, 4];\n\n  var onFirst = function onFirst() {\n    return setCursor(0);\n  };\n\n  var onLast = function onLast() {\n    return setCursor(pages.length - 1);\n  };\n\n  var onNext = function onNext() {\n    if (cursor < pages.length - 1) {\n      setCursor(cursor + 1);\n    }\n  };\n\n  var onPrevious = function onPrevious() {\n    if (cursor > 0) {\n      setCursor(cursor - 1);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__[\"CursorPagination\"], {\n    \"aria-label\": \"Cursor pagination\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__[\"CursorPagination\"].First, {\n      onClick: onFirst,\n      disabled: cursor === 0,\n      children: \"First\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__[\"CursorPagination\"].Previous, {\n      onClick: onPrevious,\n      disabled: cursor === 0,\n      children: \"Previous\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__[\"CursorPagination\"].Next, {\n      onClick: onNext,\n      disabled: cursor === pages.length - 1,\n      children: \"Next\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_pagination__WEBPACK_IMPORTED_MODULE_2__[\"CursorPagination\"].Last, {\n      onClick: onLast,\n      disabled: cursor === pages.length - 1,\n      children: \"Last\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pagination, \"VgHizxdZPnK4HHiYhDKI3rEW2oU=\");\n\n_c = Pagination;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9QYWdpbmF0aW9uLmpzPzViMzEiXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsImFsbEpvYnMiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJjdXJzb3IiLCJzZXRDdXJzb3IiLCJwYWdlcyIsIm9uRmlyc3QiLCJvbkxhc3QiLCJsZW5ndGgiLCJvbk5leHQiLCJvblByZXZpb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsVUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQVZDLE9BQVUsUUFBVkEsT0FBVTtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksMERBQVosRUFBd0VGLE9BQXhFOztBQUQ2QyxrQkFFakJHLHNEQUFRLENBQUMsQ0FBRCxDQUZTO0FBQUEsTUFFdENDLE1BRnNDO0FBQUEsTUFFOUJDLFNBRjhCOztBQUk3QyxNQUFNQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFkOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTUYsU0FBUyxDQUFDLENBQUQsQ0FBZjtBQUFBLEdBQWhCOztBQUVBLE1BQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUgsU0FBUyxDQUFDQyxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUFoQixDQUFmO0FBQUEsR0FBZjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlOLE1BQU0sR0FBR0UsS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBNUIsRUFBK0I7QUFDN0JKLGVBQVMsQ0FBQ0QsTUFBTSxHQUFHLENBQVYsQ0FBVDtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlQLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2RDLGVBQVMsQ0FBQ0QsTUFBTSxHQUFHLENBQVYsQ0FBVDtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxzQkFDRSxxRUFBQyxnRkFBRDtBQUFrQixrQkFBVyxtQkFBN0I7QUFBQSw0QkFDRSxxRUFBQyxnRkFBRCxDQUFrQixLQUFsQjtBQUF3QixhQUFPLEVBQUVHLE9BQWpDO0FBQTBDLGNBQVEsRUFBRUgsTUFBTSxLQUFLLENBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQyxnRkFBRCxDQUFrQixRQUFsQjtBQUEyQixhQUFPLEVBQUVPLFVBQXBDO0FBQWdELGNBQVEsRUFBRVAsTUFBTSxLQUFLLENBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFPRSxxRUFBQyxnRkFBRCxDQUFrQixJQUFsQjtBQUF1QixhQUFPLEVBQUVNLE1BQWhDO0FBQXdDLGNBQVEsRUFBRU4sTUFBTSxLQUFLRSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBVUUscUVBQUMsZ0ZBQUQsQ0FBa0IsSUFBbEI7QUFBdUIsYUFBTyxFQUFFRCxNQUFoQztBQUF3QyxjQUFRLEVBQUVKLE1BQU0sS0FBS0UsS0FBSyxDQUFDRyxNQUFOLEdBQWUsQ0FBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0F0Q3VCVixVOztLQUFBQSxVO0FBc0N2QiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEN1cnNvclBhZ2luYXRpb24gfSBmcm9tICdAemVuZGVza2dhcmRlbi9yZWFjdC1wYWdpbmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IGFsbEpvYnMgfSl7XG4gIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IFBhZ2luYXRpb24uanMgfiBsaW5lIDUgfiBQYWdpbmF0aW9uIH4gYWxsSm9ic1wiLCBhbGxKb2JzKVxuICBjb25zdCBbY3Vyc29yLCBzZXRDdXJzb3JdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgcGFnZXMgPSBbMCwgMSwgMiwgMywgNF07XG5cbiAgY29uc3Qgb25GaXJzdCA9ICgpID0+IHNldEN1cnNvcigwKTtcblxuICBjb25zdCBvbkxhc3QgPSAoKSA9PiBzZXRDdXJzb3IocGFnZXMubGVuZ3RoIC0gMSk7XG5cbiAgY29uc3Qgb25OZXh0ID0gKCkgPT4ge1xuICAgIGlmIChjdXJzb3IgPCBwYWdlcy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRDdXJzb3IoY3Vyc29yICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnNvciA+IDApIHtcbiAgICAgIHNldEN1cnNvcihjdXJzb3IgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q3Vyc29yUGFnaW5hdGlvbiBhcmlhLWxhYmVsPVwiQ3Vyc29yIHBhZ2luYXRpb25cIj5cbiAgICAgIDxDdXJzb3JQYWdpbmF0aW9uLkZpcnN0IG9uQ2xpY2s9e29uRmlyc3R9IGRpc2FibGVkPXtjdXJzb3IgPT09IDB9PlxuICAgICAgICBGaXJzdFxuICAgICAgPC9DdXJzb3JQYWdpbmF0aW9uLkZpcnN0PlxuICAgICAgPEN1cnNvclBhZ2luYXRpb24uUHJldmlvdXMgb25DbGljaz17b25QcmV2aW91c30gZGlzYWJsZWQ9e2N1cnNvciA9PT0gMH0+XG4gICAgICAgIFByZXZpb3VzXG4gICAgICA8L0N1cnNvclBhZ2luYXRpb24uUHJldmlvdXM+XG4gICAgICA8Q3Vyc29yUGFnaW5hdGlvbi5OZXh0IG9uQ2xpY2s9e29uTmV4dH0gZGlzYWJsZWQ9e2N1cnNvciA9PT0gcGFnZXMubGVuZ3RoIC0gMX0+XG4gICAgICAgIE5leHRcbiAgICAgIDwvQ3Vyc29yUGFnaW5hdGlvbi5OZXh0PlxuICAgICAgPEN1cnNvclBhZ2luYXRpb24uTGFzdCBvbkNsaWNrPXtvbkxhc3R9IGRpc2FibGVkPXtjdXJzb3IgPT09IHBhZ2VzLmxlbmd0aCAtIDF9PlxuICAgICAgICBMYXN0XG4gICAgICA8L0N1cnNvclBhZ2luYXRpb24uTGFzdD5cbiAgICA8L0N1cnNvclBhZ2luYXRpb24+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Pagination.js\n");

/***/ })

})