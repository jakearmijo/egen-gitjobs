webpackHotUpdate_N_E("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/jobs.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Jobs(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.title.search(value) != -1 || data.company.search(value) != -1;\n    });\n    setFilteredData(result);\n    value = '';\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    event.preventDefault();\n    console.log(\"🚀 ~ file: jobs.js ~ line 49 ~ handleSearchFullTime ~ event\", event);\n    var value = event.target.checked;\n    var result = [];\n\n    if (value === 'true') {\n      result = allJobs.filter(function (data) {\n        return data.type === 'Full Time';\n      });\n      setFilteredData(result);\n    } else {\n      setFilteredData(result);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"gitJobs - All Open Jobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 16\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Jobs, \"6x8RWSv8efSHMSlOx7FVfRxq96o=\");\n\n_c = Jobs;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\n\nvar _c;\n\n$RefreshReg$(_c, \"Jobs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9icy5qcz83ZTg3Il0sIm5hbWVzIjpbIkpvYnMiLCJhbGxKb2JzIiwidXNlU3RhdGUiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXJnZXQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJkYXRhIiwidGl0bGUiLCJzZWFyY2giLCJjb21wYW55IiwiaGFuZGxlU2VhcmNoTG9jYXRpb24iLCJsb2NhdGlvbiIsImhhbmRsZVNlYXJjaEZ1bGxUaW1lIiwiY29uc29sZSIsImxvZyIsImNoZWNrZWQiLCJ0eXBlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImVuc3VyZUFycmF5IiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFpQkEsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQ0QsT0FBRCxDQUR0QjtBQUFBLE1BQ2xCRSxZQURrQjtBQUFBLE1BQ0xDLGVBREs7O0FBSXpCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsS0FBekI7QUFDQSxRQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBQSxVQUFNLEdBQUdULE9BQU8sQ0FBQ1UsTUFBUixDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUNoQyxhQUFPQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk4sS0FBbEIsS0FBNEIsQ0FBQyxDQUE3QixJQUFrQ0ksSUFBSSxDQUFDRyxPQUFMLENBQWFELE1BQWIsQ0FBb0JOLEtB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QWZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQWxFUTVCLEk7O0tBQUFBLEk7O0FBb0VNQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2pvYnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2QmFyLCBKb2JUaWxlc01haW4sIFNlYXJjaEJhciB9IGZyb20gJy4uL0NvbXBvbmVudHMnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdAemVuZGVza2dhcmRlbi9yZWFjdC1ncmlkJztcbmltcG9ydCB7IGVuc3VyZUFycmF5IH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4gIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsSm9icyxcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gSm9icyh7IGFsbEpvYnMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShhbGxKb2JzKTtcbiAgXG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0ID0gYWxsSm9icy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLnRpdGxlLnNlYXJjaCh2YWx1ZSkgIT0gLTEgfHwgZGF0YS5jb21wYW55LnNlYXJjaCh2YWx1ZSkgIT0gLTE7XG4gICAgfSk7XG4gICAgc2V0RmlsdGVyZWREYXRhKHJlc3VsdCk7XG4gICAgdmFsdWUgPSAnJ1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEubG9jYXRpb24uc2VhcmNoKHZhbHVlKSAhPSAtMTtcbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaEZ1bGxUaW1lID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBqb2JzLmpzIH4gbGluZSA0OSB+IGhhbmRsZVNlYXJjaEZ1bGxUaW1lIH4gZXZlbnRcIiwgZXZlbnQpXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKHZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS50eXBlID09PSAnRnVsbCBUaW1lJztcbiAgICB9KTtcblxuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICAgIFxuICB9IGVsc2Uge1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5naXRKb2JzIC0gQWxsIE9wZW4gSm9iczwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZCYXIgLz5cbiAgICA8U2VhcmNoQmFyIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNofSBoYW5kbGVTZWFyY2hMb2NhdGlvbj17aGFuZGxlU2VhcmNoTG9jYXRpb259IGhhbmRsZVNlYXJjaEZ1bGxUaW1lPXtoYW5kbGVTZWFyY2hGdWxsVGltZX0vPlxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPFJvdyBjbGFzc05hbWU9J0FsbEpvYnNMaXN0aW5nJz5cbiAgICAgIDxKb2JUaWxlc01haW4gYWxsSm9icz17ZW5zdXJlQXJyYXkoZmlsdGVyZWREYXRhKX0vPlxuICAgICAgPC9Sb3c+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICBCYWNrIHRvPExpbmsgaHJlZj1cIi9cIj5Ib21lIFBhZ2UhPC9MaW5rPlxuICAgICAgPC9oMT5cbiAgICA8L21haW4+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICBCcm91Z2h0IHRvIHlvdSBieSBKYWtlIEFybWlqb3snICd9XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkpha2UgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpvYnNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/jobs.js\n");

/***/ })

})