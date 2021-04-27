webpackHotUpdate_N_E("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/jobs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Jobs(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var handleSearch = function handleSearch(event) {\n    var value = event.target.value;\n    var result = [];\n    console.log(value);\n    result = allJobs.filter(function (data) {\n      return data.title.search(value) != -1 || data.company.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    var value = event.target.value;\n    var result = [];\n    console.log(value);\n    result = allJobs.filter(function (data) {\n      return data.location.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    var value = event.target.value;\n    var result = [];\n    console.log(value);\n\n    if (value === 'on') {\n      result = allJobs.filter(function (data) {\n        return data.type === 'Full Time';\n      });\n      setFilteredData(result);\n    } else {\n      setFilteredData(result);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"gitJobs - All Open Jobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Jobs, \"6x8RWSv8efSHMSlOx7FVfRxq96o=\");\n\n_c = Jobs;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jobs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy5qcz83ZTg3Il0sIm5hbWVzIjpbIkpvYnMiLCJhbGxKb2JzIiwidXNlU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsImRhdGEiLCJ0aXRsZSIsInNlYXJjaCIsImNvbXBhbnkiLCJoYW5kbGVTZWFyY2hMb2NhdGlvbiIsImxvY2F0aW9uIiwiaGFuZGxlU2VhcmNoRnVsbFRpbWUiLCJ0eXBlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImVuc3VyZUFycmF5IiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkEsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQ0QsT0FBRCxDQUR0QjtBQUFBLE1BQ2xCRSxZQURrQjtBQUFBLE1BQ0xDLGVBREs7O0FBSXpCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QixRQUFJQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxLQUF6QjtBQUNBLFFBQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBQ0FFLFVBQU0sR0FBR1IsT0FBTyxDQUFDVyxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hDLGFBQU9BLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCUixLQUFsQixLQUE0QixDQUFDLENBQTdCLElBQWtDTSxJQUFJLENBQUNHLE9BQUwsQ0FBYUQsTUFBYixDQUFvQlIsS0FBcEIsS0FBOEIsQ0FBQyxD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QUFrRU1BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvam9icy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZCYXIsIEpvYlRpbGVzTWFpbiwgU2VhcmNoQmFyIH0gZnJvbSAnLi4vQ29tcG9uZW50cydcbmltcG9ydCB7IFJvdyB9IGZyb20gJ0B6ZW5kZXNrZ2FyZGVuL3JlYWN0LWdyaWQnO1xuaW1wb3J0IHsgZW5zdXJlQXJyYXkgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5cblxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qb2JzLmdpdGh1Yi5jb20vcG9zaXRpb25zLmpzb25cIilcbiAgY29uc3QgYWxsSm9icyA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxKb2JzLFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBKb2JzKHsgYWxsSm9icyB9KSB7XG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKGFsbEpvYnMpO1xuICBcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEudGl0bGUuc2VhcmNoKHZhbHVlKSAhPSAtMSB8fCBkYXRhLmNvbXBhbnkuc2VhcmNoKHZhbHVlKSAhPSAtMTtcbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaExvY2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgcmVzdWx0ID0gYWxsSm9icy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmxvY2F0aW9uLnNlYXJjaCh2YWx1ZSkgIT0gLTE7XG4gICAgfSk7XG4gICAgc2V0RmlsdGVyZWREYXRhKHJlc3VsdCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWFyY2hGdWxsVGltZSA9IChldmVudCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnb24nKSB7XG4gICAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEudHlwZSA9PT0gJ0Z1bGwgVGltZSc7XG4gICAgfSk7XG5cbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgICBcbiAgfSBlbHNlIHtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgfVxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Z2l0Sm9icyAtIEFsbCBPcGVuIEpvYnM8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8TmF2QmFyIC8+XG4gICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH0gaGFuZGxlU2VhcmNoTG9jYXRpb249e2hhbmRsZVNlYXJjaExvY2F0aW9ufSBoYW5kbGVTZWFyY2hGdWxsVGltZT17aGFuZGxlU2VhcmNoRnVsbFRpbWV9Lz5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPSdBbGxKb2JzTGlzdGluZyc+XG4gICAgICA8Sm9iVGlsZXNNYWluIGFsbEpvYnM9e2Vuc3VyZUFycmF5KGZpbHRlcmVkRGF0YSl9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQmFjayB0bzxMaW5rIGhyZWY9XCIvXCI+SG9tZSBQYWdlITwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgPC9tYWluPlxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgQnJvdWdodCB0byB5b3UgYnkgSmFrZSBBcm1pam97JyAnfVxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJKYWtlIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/jobs.js\n");

/***/ })

})