webpackHotUpdate_N_E("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/jobs.js\";\n\n\n\n\n\n\n\nfunction Jobs(_ref) {\n  var allJobs = _ref.allJobs;\n\n  var handleSearch = function handleSearch(event) {\n    var value = event.target.value.toLowerCase();\n    var result = [];\n    result = allJobs.filter(function (data) {\n      console.log(\"🚀 ~ file: jobs.js ~ line 29 ~ result=allJobs.filter ~ data\", data);\n      return data.title.search(value) != -1;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [console.log(\"🚀 ~ file: jobs.js ~ line 26 ~ Jobs ~ styles.container ===\", _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"gitJobs - All Open Jobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_4__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_4__[\"SearchBar\"], {\n      handleSearch: handleSearch\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_4__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_6__[\"ensureArray\"])(allJobs)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Jobs;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jobs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy5qcz83ZTg3Il0sIm5hbWVzIjpbIkpvYnMiLCJhbGxKb2JzIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInRvTG93ZXJDYXNlIiwicmVzdWx0IiwiZmlsdGVyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNlYXJjaCIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJlbnN1cmVBcnJheSIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkEsU0FBU0EsSUFBVCxPQUEyQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFFekIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFVO0FBQzdCLFFBQUlDLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFELEtBQWIsQ0FBbUJFLFdBQW5CLEVBQVo7QUFDQSxRQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBQSxVQUFNLEdBQUdOLE9BQU8sQ0FBQ08sTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUNoQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksNkRBQVosRUFBMkVGLElBQTNFO0FBQ0EsYUFBT0EsSUFBSSxDQUFDRyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JULEtBQWxCLEtBQTRCLENBQUMsQ0FBcEM7QUFDRCxLQUhRLENBQVQ7QUFJRCxHQVBEOztBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFVSw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLGVBQ0NMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDREQUFaLEVBQTBFRyw4REFBTSxDQUFDQyxTQUFqRixDQURELGVBRUEscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBTUEscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5BLGVBT0EscUVBQUMscURBQUQ7QUFBVyxrQkFBWSxFQUFFYjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEEsZUFRQTtBQUFNLGVBQVMsRUFBRVksOERBQU0sQ0FBQ0UsSUFBeEI7QUFBQSw4QkFDRSxxRUFBQyw2REFBRDtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDQSxxRUFBQyx3REFBRDtBQUFjLGlCQUFPLEVBQUVDLDhEQUFXLENBQUNoQixPQUFEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFJLGlCQUFTLEVBQUVhLDhEQUFNLENBQUNGLEtBQXRCO0FBQUEsMkNBQ1MscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSQSxlQWdCQTtBQUFRLGVBQVMsRUFBRUUsOERBQU0sQ0FBQ0ksTUFBMUI7QUFBQSxrREFDa0MsR0FEbEMsZUFFSTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixXQUFHLEVBQUMsV0FBaEM7QUFBNEMsaUJBQVMsRUFBRUosOERBQU0sQ0FBQ0s7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7S0FsQ1FuQixJOztBQW9DTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9qb2JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgTmF2QmFyLCBKb2JUaWxlc01haW4sIFNlYXJjaEJhciB9IGZyb20gJy4uL0NvbXBvbmVudHMnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdAemVuZGVza2dhcmRlbi9yZWFjdC1ncmlkJztcbmltcG9ydCB7IGVuc3VyZUFycmF5IH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4gIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsSm9icyxcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gSm9icyh7IGFsbEpvYnMgfSkge1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT57XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBqb2JzLmpzIH4gbGluZSAyOSB+IHJlc3VsdD1hbGxKb2JzLmZpbHRlciB+IGRhdGFcIiwgZGF0YSlcbiAgICAgIHJldHVybiBkYXRhLnRpdGxlLnNlYXJjaCh2YWx1ZSkgIT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICB7Y29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogam9icy5qcyB+IGxpbmUgMjYgfiBKb2JzIH4gc3R5bGVzLmNvbnRhaW5lciA9PT1cIiwgc3R5bGVzLmNvbnRhaW5lcil9XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Z2l0Sm9icyAtIEFsbCBPcGVuIEpvYnM8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8TmF2QmFyIC8+XG4gICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH0vPlxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPFJvdyBjbGFzc05hbWU9J0FsbEpvYnNMaXN0aW5nJz5cbiAgICAgIDxKb2JUaWxlc01haW4gYWxsSm9icz17ZW5zdXJlQXJyYXkoYWxsSm9icyl9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQmFjayB0bzxMaW5rIGhyZWY9XCIvXCI+SG9tZSBQYWdlITwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgPC9tYWluPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgQnJvdWdodCB0byB5b3UgYnkgSmFrZSBBcm1pam97JyAnfVxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJKYWtlIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/jobs.js\n");

/***/ })

})