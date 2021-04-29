webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n // export async function getStaticPaths(){\n//   const res = await fetch(\"https://jobs.github.com/positions.json\")\n//   const allJobs = await res.json()\n//   const paths = allJobs.results.map((job) => {\n//     return `/positions/${job.id}`\n//   })\n//   return {\n//     paths,\n//     fallback: false\n//   }\n// }\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    var value = event.target.value.toLowerCase();\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.title.toLowerCase().search(value) != -1 || data.company.toLowerCase().search(value) != -1;\n    });\n    setFilteredData(result);\n    value = '';\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    event.preventDefault();\n    var value = event.target.value.toLowerCase();\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.toLowerCase().search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    var value = event.target.checked;\n    var result = [];\n\n    if (value === false) {\n      result = allJobs;\n    } else {\n      result = allJobs.filter(function (data) {\n        return data.type === 'Full Time';\n      });\n    }\n\n    setFilteredData(result);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_8__[\"ThemeProvider\"], {\n    className: \"jobView\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"eGen - gitJobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"path/to/font-awesome/css/font-awesome.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"6x8RWSv8efSHMSlOx7FVfRxq96o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsSm9icyIsInVzZVN0YXRlIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJmaWx0ZXIiLCJkYXRhIiwidGl0bGUiLCJzZWFyY2giLCJjb21wYW55IiwiaGFuZGxlU2VhcmNoTG9jYXRpb24iLCJsb2NhdGlvbiIsImhhbmRsZVNlYXJjaEZ1bGxUaW1lIiwiY2hlY2tlZCIsInR5cGUiLCJzdHlsZXMiLCJtYWluIiwiZW5zdXJlQXJyYXkiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFhZSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDRCxPQUFELENBRFA7QUFBQSxNQUNqQ0UsWUFEaUM7QUFBQSxNQUNwQkMsZUFEb0I7O0FBR3hDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsS0FBYixDQUFtQkUsV0FBbkIsRUFBWjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLFVBQU0sR0FBR1YsT0FBTyxDQUFDVyxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hDLGFBQU9BLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFY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WUFURixlQWlCRTtBQUFRLGVBQVMsRUFBRVEsOERBQU0sQ0FBQ0csTUFBMUI7QUFBQSxrREFDa0MsR0FEbEMsZUFFSTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixXQUFHLEVBQUMsV0FBaEM7QUFBNEMsaUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0k7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E5RHVCMUIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkJhciwgSm9iVGlsZXNNYWluLCBTZWFyY2hCYXIgfSBmcm9tICcuLi9Db21wb25lbnRzJ1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnQHplbmRlc2tnYXJkZW4vcmVhY3QtZ3JpZCc7XG5pbXBvcnQgeyBlbnN1cmVBcnJheSB9IGZyb20gJy4uL2xpYi91dGlscydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCc7XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4vLyAgIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuLy8gICBjb25zdCBwYXRocyA9IGFsbEpvYnMucmVzdWx0cy5tYXAoKGpvYikgPT4ge1xuLy8gICAgIHJldHVybiBgL3Bvc2l0aW9ucy8ke2pvYi5pZH1gXG4vLyAgIH0pXG4gIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIHBhdGhzLFxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4gIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsSm9icyxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbEpvYnMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShhbGxKb2JzKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLnNlYXJjaCh2YWx1ZSkgIT0gLTEgfHwgZGF0YS5jb21wYW55LnRvTG93ZXJDYXNlKCkuc2VhcmNoKHZhbHVlKSAhPSAtMTtcbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgICB2YWx1ZSA9ICcnXG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0ID0gYWxsSm9icy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmxvY2F0aW9uLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHZhbHVlKSAhPSAtMTtcbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaEZ1bGxUaW1lID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgbGV0IHJlc3VsdCA9IFtdOyBcbiAgICBpZih2YWx1ZSA9PT0gZmFsc2Upe1xuICAgICAgcmVzdWx0ID0gYWxsSm9ic1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS50eXBlID09PSAnRnVsbCBUaW1lJztcbiAgICAgIH0pXG4gICAgfVxuICBcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgY2xhc3NOYW1lPSdqb2JWaWV3Jz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+ZUdlbiAtIGdpdEpvYnM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwicGF0aC90by9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPFNlYXJjaEJhciBoYW5kbGVTZWFyY2g9e2hhbmRsZVNlYXJjaH0gaGFuZGxlU2VhcmNoTG9jYXRpb249e2hhbmRsZVNlYXJjaExvY2F0aW9ufSBoYW5kbGVTZWFyY2hGdWxsVGltZT17aGFuZGxlU2VhcmNoRnVsbFRpbWV9Lz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPFJvdyBjbGFzc05hbWU9J0FsbEpvYnNMaXN0aW5nJz5cbiAgICAgIDxKb2JUaWxlc01haW4gYWxsSm9icz17ZW5zdXJlQXJyYXkoZmlsdGVyZWREYXRhKX0vPlxuICAgICAgPC9Sb3c+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICBCYWNrIHRvIDxMaW5rIGhyZWY9XCIvXCI+SG9tZSBQYWdlITwvTGluaz5cbiAgICAgIDwvaDE+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgQnJvdWdodCB0byB5b3UgYnkgSmFrZSBBcm1pam97JyAnfVxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkpha2UgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})