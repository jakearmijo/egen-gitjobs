webpackHotUpdate_N_E("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/jobs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Jobs(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.title.search(value) != -1 || data.company.search(value) != -1;\n    });\n    setFilteredData(result);\n    value = '';\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    event.preventDefault();\n    var value = event.target.checked;\n    console.log(\"🚀 ~ file: jobs.js ~ line 52 ~ handleSearchFullTime ~ value\", value);\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"gitJobs - All Open Jobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Jobs, \"6x8RWSv8efSHMSlOx7FVfRxq96o=\");\n\n_c = Jobs;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jobs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy5qcz83ZTg3Il0sIm5hbWVzIjpbIkpvYnMiLCJhbGxKb2JzIiwidXNlU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXJnZXQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJkYXRhIiwidGl0bGUiLCJzZWFyY2giLCJjb21wYW55IiwiaGFuZGxlU2VhcmNoTG9jYXRpb24iLCJsb2NhdGlvbiIsImhhbmRsZVNlYXJjaEZ1bGxUaW1lIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiZW5zdXJlQXJyYXkiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCQSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDRCxPQUFELENBRHRCO0FBQUEsTUFDbEJFLFlBRGtCO0FBQUEsTUFDTEMsZUFESzs7QUFJekIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCQSxTQUFLLENBQUNDLGNBQU47QUFDQSxRQUFJQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFhRCxLQUF6QjtBQUNBLFFBQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLFVBQU0sR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hDLGFBQU9BLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCTixLQUFsQixLQUE0QixDQUFDLENBQTdCLElBQWtDSSxJQUFJLENBQUNHLE9BQUwsQ0FBYUQsTUFBYixDQUFvQk4sS0FBcEIsS0FB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QTRETUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9qb2JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkJhciwgSm9iVGlsZXNNYWluLCBTZWFyY2hCYXIgfSBmcm9tICcuLi9Db21wb25lbnRzJ1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnQHplbmRlc2tnYXJkZW4vcmVhY3QtZ3JpZCc7XG5pbXBvcnQgeyBlbnN1cmVBcnJheSB9IGZyb20gJy4uL2xpYi91dGlscydcblxuXG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pvYnMuZ2l0aHViLmNvbS9wb3NpdGlvbnMuanNvblwiKVxuICBjb25zdCBhbGxKb2JzID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbEpvYnMsXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEpvYnMoeyBhbGxKb2JzIH0pIHtcbiAgY29uc3QgW2ZpbHRlcmVkRGF0YSxzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoYWxsSm9icyk7XG4gIFxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS50aXRsZS5zZWFyY2godmFsdWUpICE9IC0xIHx8IGRhdGEuY29tcGFueS5zZWFyY2godmFsdWUpICE9IC0xO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICAgIHZhbHVlID0gJydcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaExvY2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0ID0gYWxsSm9icy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmxvY2F0aW9uLnNlYXJjaCh2YWx1ZSkgIT0gLTE7XG4gICAgfSk7XG4gICAgc2V0RmlsdGVyZWREYXRhKHJlc3VsdCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWFyY2hGdWxsVGltZSA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBqb2JzLmpzIH4gbGluZSA1MiB+IGhhbmRsZVNlYXJjaEZ1bGxUaW1lIH4gdmFsdWVcIiwgdmFsdWUpXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5sb2NhdGlvbi5zZWFyY2godmFsdWUpICE9IC0xO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Z2l0Sm9icyAtIEFsbCBPcGVuIEpvYnM8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8TmF2QmFyIC8+XG4gICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH0gaGFuZGxlU2VhcmNoTG9jYXRpb249e2hhbmRsZVNlYXJjaExvY2F0aW9ufSBoYW5kbGVTZWFyY2hGdWxsVGltZT17aGFuZGxlU2VhcmNoRnVsbFRpbWV9Lz5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPSdBbGxKb2JzTGlzdGluZyc+XG4gICAgICA8Sm9iVGlsZXNNYWluIGFsbEpvYnM9e2Vuc3VyZUFycmF5KGZpbHRlcmVkRGF0YSl9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQmFjayB0bzxMaW5rIGhyZWY9XCIvXCI+SG9tZSBQYWdlITwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgPC9tYWluPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgQnJvdWdodCB0byB5b3UgYnkgSmFrZSBBcm1pam97JyAnfVxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJKYWtlIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/jobs.js\n");

/***/ })

})