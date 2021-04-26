webpackHotUpdate_N_E("pages/jobs",{

/***/ "./Components/SingleJob.js":
/*!*********************************!*\
  !*** ./Components/SingleJob.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingleJob; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zendeskgarden/react-buttons */ \"./node_modules/@zendeskgarden/react-buttons/dist/index.esm.js\");\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/Components/SingleJob.js\";\n// import Image from 'next/image'\n\n\nfunction SingleJob(_ref) {\n  var _this = this;\n\n  var allJobs = _ref.allJobs;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    className: \"SingleJob\",\n    children: allJobs.map(function (job, idx) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_buttons__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        textAlign: \"center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: job.company_logo,\n          width: 25,\n          height: 25\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n          children: [job.created_at, \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"\\xB7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 34\n          }, _this), \" \", job.type]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: job.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n          children: job.company\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: job.location\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, _this)]\n      }, \"\".concat(job.created_at, \"-\").concat(job.title, \"-\").concat(job.company, \"-\").concat(idx), true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = SingleJob;\n\nvar _c;\n\n$RefreshReg$(_c, \"SingleJob\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaW5nbGVKb2IuanM/MWE5ZSJdLCJuYW1lcyI6WyJTaW5nbGVKb2IiLCJhbGxKb2JzIiwibWFwIiwiam9iIiwiaWR4IiwiY29tcGFueV9sb2dvIiwiY3JlYXRlZF9hdCIsInR5cGUiLCJ0aXRsZSIsImNvbXBhbnkiLCJsb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzdDLHNCQUNFLHFFQUFDLDZEQUFEO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSxjQUNHQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxHQUFELEVBQUtDLEdBQUwsRUFBYTtBQUN4QiwwQkFDRSxxRUFBQyxtRUFBRDtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUQsR0FBRyxDQUFDRSxZQUFkO0FBQTRCLGVBQUssRUFBRSxFQUFuQztBQUF1QyxnQkFBTSxFQUFFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLHFCQUFLRixHQUFHLENBQUNHLFVBQVQsb0JBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFyQixPQUEwQ0gsR0FBRyxDQUFDSSxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLG9CQUFLSixHQUFHLENBQUNLO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsb0JBQUtMLEdBQUcsQ0FBQ007QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBQSxpQ0FDRTtBQUFBLHNCQUNHTixHQUFHLENBQUNPO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQSxtQkFBbUNQLEdBQUcsQ0FBQ0csVUFBdkMsY0FBcURILEdBQUcsQ0FBQ0ssS0FBekQsY0FBa0VMLEdBQUcsQ0FBQ00sT0FBdEUsY0FBaUZMLEdBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELEtBZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7S0FwQnVCSixTIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9TaW5nbGVKb2IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IENvbCB9IGZyb20gJ0B6ZW5kZXNrZ2FyZGVuL3JlYWN0LWdyaWQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHplbmRlc2tnYXJkZW4vcmVhY3QtYnV0dG9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZUpvYih7IGFsbEpvYnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb2wgY2xhc3NOYW1lPSdTaW5nbGVKb2InPlxuICAgICAge2FsbEpvYnMubWFwKChqb2IsaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEJ1dHRvbiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBrZXk9e2Ake2pvYi5jcmVhdGVkX2F0fS0ke2pvYi50aXRsZX0tJHtqb2IuY29tcGFueX0tJHtpZHh9YH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17am9iLmNvbXBhbnlfbG9nb30gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxuICAgICAgICAgICAgPGg1Pntqb2IuY3JlYXRlZF9hdH0gPHNwYW4+JiMxODM7PC9zcGFuPiB7am9iLnR5cGV9PC9oNT5cbiAgICAgICAgICAgIDxoMz57am9iLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8aDU+e2pvYi5jb21wYW55fTwvaDU+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtqb2IubG9jYXRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvQ29sPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/SingleJob.js\n");

/***/ })

})