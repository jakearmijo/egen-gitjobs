webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // export async function getStaticPaths(){\n//   const res = await fetch(\"https://jobs.github.com/positions.json\")\n//   const allJobs = await res.json()\n//   const paths = allJobs.results.map((job) => {\n//     return `/positions/${job.id}`\n//   })\n//   return {\n//     paths,\n//     fallback: false\n//   }\n// }\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.title.search(value) != -1 || data.company.search(value) != -1;\n    });\n    setFilteredData(result);\n    value = '';\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    event.preventDefault();\n    var value = event.target.value;\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    var value = event.target.checked;\n    var result = [];\n\n    if (value === false) {\n      result = allJobs;\n    } else {\n      result = allJobs.filter(function (data) {\n        return data.type === 'Full Time';\n      });\n    }\n\n    setFilteredData(result);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jobView\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"eGen - gitJobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"path/to/font-awesome/css/font-awesome.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"6x8RWSv8efSHMSlOx7FVfRxq96o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsSm9icyIsInVzZVN0YXRlIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFyZ2V0IiwicmVzdWx0IiwiZmlsdGVyIiwiZGF0YSIsInRpdGxlIiwic2VhcmNoIiwiY29tcGFueSIsImhhbmRsZVNlYXJjaExvY2F0aW9uIiwibG9jYXRpb24iLCJoYW5kbGVTZWFyY2hGdWxsVGltZSIsImNoZWNrZWQiLCJ0eXBlIiwic3R5bGVzIiwibWFpbiIsImVuc3VyZUFycmF5IiwiZm9vdGVyIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBYWUsU0FBU0EsSUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQ0QsT0FBRCxDQURQO0FBQUEsTUFDakNFLFlBRGlDO0FBQUEsTUFDcEJDLGVBRG9COztBQUd4QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFELEtBQXpCO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQUEsVUFBTSxHQUFHVCxPQUFPLENBQUNVLE1BQVIsQ0FBZSxVQUFDQyxJQUFELEVBQVU7QUFDaEMsYUFBT0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JOLEtBQWxCLEtBQTRCLENBQUMsQ0FBN0IsSUFBa0NJLElBQUksQ0FBQ0cs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QkFBUyxFQUFFSCw4REFBTSxDQUFDSTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQTlEdUJ6QixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2QmFyLCBKb2JUaWxlc01haW4sIFNlYXJjaEJhciB9IGZyb20gJy4uL0NvbXBvbmVudHMnXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdAemVuZGVza2dhcmRlbi9yZWFjdC1ncmlkJztcbmltcG9ydCB7IGVuc3VyZUFycmF5IH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4vLyAgIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuLy8gICBjb25zdCBwYXRocyA9IGFsbEpvYnMucmVzdWx0cy5tYXAoKGpvYikgPT4ge1xuLy8gICAgIHJldHVybiBgL3Bvc2l0aW9ucy8ke2pvYi5pZH1gXG4vLyAgIH0pXG4gIFxuLy8gICByZXR1cm4ge1xuLy8gICAgIHBhdGhzLFxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4gIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsSm9icyxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbEpvYnMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShhbGxKb2JzKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEudGl0bGUuc2VhcmNoKHZhbHVlKSAhPSAtMSB8fCBkYXRhLmNvbXBhbnkuc2VhcmNoKHZhbHVlKSAhPSAtMTtcbiAgICB9KTtcbiAgICBzZXRGaWx0ZXJlZERhdGEocmVzdWx0KTtcbiAgICB2YWx1ZSA9ICcnXG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5sb2NhdGlvbi5zZWFyY2godmFsdWUpICE9IC0xO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoRnVsbFRpbWUgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICBsZXQgcmVzdWx0ID0gW107IFxuICAgIGlmKHZhbHVlID09PSBmYWxzZSl7XG4gICAgICByZXN1bHQgPSBhbGxKb2JzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnR5cGUgPT09ICdGdWxsIFRpbWUnO1xuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nam9iVmlldyc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmVHZW4gLSBnaXRKb2JzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInBhdGgvdG8vZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxTZWFyY2hCYXIgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9IGhhbmRsZVNlYXJjaExvY2F0aW9uPXtoYW5kbGVTZWFyY2hMb2NhdGlvbn0gaGFuZGxlU2VhcmNoRnVsbFRpbWU9e2hhbmRsZVNlYXJjaEZ1bGxUaW1lfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPSdBbGxKb2JzTGlzdGluZyc+XG4gICAgICA8Sm9iVGlsZXNNYWluIGFsbEpvYnM9e2Vuc3VyZUFycmF5KGZpbHRlcmVkRGF0YSl9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQmFjayB0byA8TGluayBocmVmPVwiL1wiPkhvbWUgUGFnZSE8L0xpbms+XG4gICAgICA8L2gxPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIEJyb3VnaHQgdG8geW91IGJ5IEpha2UgQXJtaWpveycgJ31cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJKYWtlIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})