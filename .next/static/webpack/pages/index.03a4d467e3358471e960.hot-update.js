webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var _zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zendeskgarden/react-grid */ \"./node_modules/@zendeskgarden/react-grid/dist/index.esm.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/utils */ \"./lib/utils/index.js\");\n/* harmony import */ var _Components_Themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Themes */ \"./Components/Themes.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var allJobs = _ref.allJobs;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(allJobs),\n      filteredData = _useState[0],\n      setFilteredData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('light'),\n      theme = _useState2[0],\n      setTheme = _useState2[1];\n\n  var themeToggler = function themeToggler() {\n    console.log('excuse us as we work on changing themes');\n    theme === 'light' ? setTheme('dark') : setTheme('light');\n  };\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    var value = event.target.value.toLowerCase();\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.title.toLowerCase().search(value) != -1 || data.company.toLowerCase().search(value) != -1;\n    });\n    setFilteredData(result);\n    value = '';\n  };\n\n  var handleSearchLocation = function handleSearchLocation(event) {\n    event.preventDefault();\n    var value = event.target.value.toLowerCase();\n    var result = [];\n    result = allJobs.filter(function (data) {\n      return data.location.toLowerCase().search(value) != -1;\n    });\n    setFilteredData(result);\n  };\n\n  var handleSearchFullTime = function handleSearchFullTime(event) {\n    var value = event.target.checked;\n    var result = [];\n\n    if (value === false) {\n      result = allJobs;\n    } else {\n      result = allJobs.filter(function (data) {\n        return data.type === 'Full Time';\n      });\n    }\n\n    setFilteredData(result);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jobView\",\n    theme: theme === 'light' ? _Components_Themes__WEBPACK_IMPORTED_MODULE_8__[\"lightTheme\"] : _Components_Themes__WEBPACK_IMPORTED_MODULE_8__[\"darkTheme\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"eGen - gitJobs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"path/to/font-awesome/css/font-awesome.min.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"NavBar\"], {\n      themeToggler: themeToggler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"SearchBar\"], {\n      handleSearch: handleSearch,\n      handleSearchLocation: handleSearchLocation,\n      handleSearchFullTime: handleSearchFullTime\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_zendeskgarden_react_grid__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n        className: \"AllJobsListing\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_5__[\"JobTilesMain\"], {\n          allJobs: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[\"ensureArray\"])(filteredData)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n        children: [\"Back to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/\",\n          children: \"Home Page!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n      children: [\"Brought to you by Jake Armijo\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/images/logo.png\",\n        alt: \"Jake Logo\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"3VVs1Xg03qSQFSi7sWETtzChIc0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWxsSm9icyIsInVzZVN0YXRlIiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwidGhlbWUiLCJzZXRUaGVtZSIsInRoZW1lVG9nZ2xlciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImZpbHRlciIsImRhdGEiLCJ0aXRsZSIsInNlYXJjaCIsImNvbXBhbnkiLCJoYW5kbGVTZWFyY2hMb2NhdGlvbiIsImxvY2F0aW9uIiwiaGFuZGxlU2VhcmNoRnVsbFRpbWUiLCJjaGVja2VkIiwidHlwZSIsImxpZ2h0VGhlbWUiLCJkYXJrVGhlbWUiLCJzdHlsZXMiLCJtYWluIiwiZW5zdXJlQXJyYXkiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFlZSxTQUFTQSxJQUFULE9BQTJCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNEQyxzREFBUSxDQUFDRCxPQUFELENBRFA7QUFBQSxNQUNqQ0UsWUFEaUM7QUFBQSxNQUNwQkMsZUFEb0I7O0FBQUEsbUJBR2RGLHNEQUFRLENBQUMsT0FBRCxDQUhNO0FBQUEsTUFHakNHLEtBSGlDO0FBQUEsTUFHMUJDLFFBSDBCOztBQUl4QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBWjtBQUNBSixTQUFLLEtBQUssT0FBVixHQUFvQkMsUUFBUSxDQUFDLE1BQUQsQ0FBNUIsR0FBdUNBLFFBQVEsQ0FBQyxPQUFELENBQS9DO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSSxZQUFZ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REFBRDtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDQSxxRUFBQyx3REFBRDtBQUFjLGlCQUFPLEVBQUVDLDhEQUFXLENBQUM1QixZQUFEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFJLGlCQUFTLEVBQUUwQiw4REFBTSxDQUFDVixLQUF0QjtBQUFBLDRDQUNVLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFpQkU7QUFBUSxlQUFTLEVBQUVVLDhEQUFNLENBQUNHLE1BQTFCO0FBQUEsa0RBQ2tDLEdBRGxDLGVBRUk7QUFBSyxXQUFHLEVBQUMsa0JBQVQ7QUFBNEIsV0FBRyxFQUFDLFdBQWhDO0FBQTRDLGlCQUFTLEVBQUVILDhEQUFNLENBQUNJO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBcEV1QmpDLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZCYXIsIEpvYlRpbGVzTWFpbiwgU2VhcmNoQmFyIH0gZnJvbSAnLi4vQ29tcG9uZW50cydcbmltcG9ydCB7IFJvdyB9IGZyb20gJ0B6ZW5kZXNrZ2FyZGVuL3JlYWN0LWdyaWQnO1xuaW1wb3J0IHsgZW5zdXJlQXJyYXkgfSBmcm9tICcuLi9saWIvdXRpbHMnXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICcuLi9Db21wb25lbnRzL1RoZW1lcydcblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vam9icy5naXRodWIuY29tL3Bvc2l0aW9ucy5qc29uXCIpXG4gIGNvbnN0IGFsbEpvYnMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsSm9icyxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbEpvYnMgfSkge1xuICBjb25zdCBbZmlsdGVyZWREYXRhLHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShhbGxKb2JzKTtcblxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V4Y3VzZSB1cyBhcyB3ZSB3b3JrIG9uIGNoYW5naW5nIHRoZW1lcycpXG4gICAgdGhlbWUgPT09ICdsaWdodCcgPyBzZXRUaGVtZSgnZGFyaycpIDogc2V0VGhlbWUoJ2xpZ2h0JylcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0ID0gYWxsSm9icy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuc2VhcmNoKHZhbHVlKSAhPSAtMSB8fCBkYXRhLmNvbXBhbnkudG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUpICE9IC0xO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICAgIHZhbHVlID0gJydcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaExvY2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQgPSBhbGxKb2JzLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGEubG9jYXRpb24udG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUpICE9IC0xO1xuICAgIH0pO1xuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoRnVsbFRpbWUgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICBsZXQgcmVzdWx0ID0gW107IFxuICAgIGlmKHZhbHVlID09PSBmYWxzZSl7XG4gICAgICByZXN1bHQgPSBhbGxKb2JzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGFsbEpvYnMuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnR5cGUgPT09ICdGdWxsIFRpbWUnO1xuICAgICAgfSlcbiAgICB9XG4gIFxuICAgIHNldEZpbHRlcmVkRGF0YShyZXN1bHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nam9iVmlldycgdGhlbWU9e3RoZW1lID09PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmVHZW4gLSBnaXRKb2JzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInBhdGgvdG8vZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZCYXIgdGhlbWVUb2dnbGVyPXt0aGVtZVRvZ2dsZXJ9Lz5cbiAgICAgIDxTZWFyY2hCYXIgaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9IGhhbmRsZVNlYXJjaExvY2F0aW9uPXtoYW5kbGVTZWFyY2hMb2NhdGlvbn0gaGFuZGxlU2VhcmNoRnVsbFRpbWU9e2hhbmRsZVNlYXJjaEZ1bGxUaW1lfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPSdBbGxKb2JzTGlzdGluZyc+XG4gICAgICA8Sm9iVGlsZXNNYWluIGFsbEpvYnM9e2Vuc3VyZUFycmF5KGZpbHRlcmVkRGF0YSl9Lz5cbiAgICAgIDwvUm93PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQmFjayB0byA8TGluayBocmVmPVwiL1wiPkhvbWUgUGFnZSE8L0xpbms+XG4gICAgICA8L2gxPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIEJyb3VnaHQgdG8geW91IGJ5IEpha2UgQXJtaWpveycgJ31cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJKYWtlIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})