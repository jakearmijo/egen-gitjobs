webpackHotUpdate_N_E("pages/jobs/[id]",{

/***/ "./Components/SearchBar.js":
/*!*********************************!*\
  !*** ./Components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/jake/CodingCentral/egen-gitjobs/Components/SearchBar.js\";\n\nfunction _templateObject() {\n  var data = Object(_Users_jake_CodingCentral_egen_gitjobs_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\nfont-weight: bold;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar LabelFullTime = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].label(_templateObject());\n_c = LabelFullTime;\nfunction SearchBar(_ref) {\n  var handleSearch = _ref.handleSearch,\n      handleSearchLocation = _ref.handleSearchLocation,\n      handleSearchFullTime = _ref.handleSearchFullTime;\n  var search = 'Search';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"searchBar\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"topnav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"search-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          action: \"filter\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"filter-search-company\",\n            type: \"text\",\n            placeholder: \"Filter by title, companies, expertise...\",\n            name: \"description\",\n            onChange: function onChange(event) {\n              return handleSearch(event);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"topnav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"search-container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n          action: \"filter\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"filter-search-location\",\n            type: \"text\",\n            placeholder: \"Filter by location...\",\n            name: \"locationsearch\",\n            onChange: function onChange(event) {\n              return handleSearchLocation(event);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"endnav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"search-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: \"filter-search-full-time\",\n          type: \"checkbox\",\n          onChange: function onChange(event) {\n            return handleSearchFullTime(event);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LabelFullTime, {\n          className: \"container\",\n          children: [\"Full-Time Only\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"checkmark\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components__WEBPACK_IMPORTED_MODULE_2__[\"ButtonTemplate\"], {\n      name: search\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n_c2 = SearchBar;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"LabelFullTime\");\n$RefreshReg$(_c2, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TZWFyY2hCYXIuanM/NWEzMiJdLCJuYW1lcyI6WyJMYWJlbEZ1bGxUaW1lIiwic3R5bGVkIiwibGFiZWwiLCJTZWFyY2hCYXIiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVTZWFyY2hMb2NhdGlvbiIsImhhbmRsZVNlYXJjaEZ1bGxUaW1lIiwic2VhcmNoIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEtBQVYsbUJBQW5CO0tBQU1GLGE7QUFJUyxTQUFTRyxTQUFULE9BQWlGO0FBQUEsTUFBNURDLFlBQTRELFFBQTVEQSxZQUE0RDtBQUFBLE1BQTlDQyxvQkFBOEMsUUFBOUNBLG9CQUE4QztBQUFBLE1BQXhCQyxvQkFBd0IsUUFBeEJBLG9CQUF3QjtBQUM5RixNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBQ0U7QUFBTSxnQkFBTSxFQUFDLFFBQWI7QUFBQSxpQ0FDRTtBQUFPLHFCQUFTLEVBQUMsdUJBQWpCO0FBQXdDLGdCQUFJLEVBQUMsTUFBN0M7QUFBb0QsdUJBQVcsRUFBQywwQ0FBaEU7QUFBMkcsZ0JBQUksRUFBQyxhQUFoSDtBQUE4SCxvQkFBUSxFQUFFLGtCQUFDQyxLQUFEO0FBQUEscUJBQVdKLFlBQVksQ0FBQ0ksS0FBRCxDQUF2QjtBQUFBO0FBQXhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSwrQkFDRTtBQUFNLGdCQUFNLEVBQUMsUUFBYjtBQUFBLGlDQUNFO0FBQU8scUJBQVMsRUFBQyx3QkFBakI7QUFBMEMsZ0JBQUksRUFBQyxNQUEvQztBQUFzRCx1QkFBVyxFQUFDLHVCQUFsRTtBQUEwRixnQkFBSSxFQUFDLGdCQUEvRjtBQUFnSCxvQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEscUJBQVdILG9CQUFvQixDQUFDRyxLQUFELENBQS9CO0FBQUE7QUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBZUU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBLGdDQUNFO0FBQU8sbUJBQVMsRUFBQyx5QkFBakI7QUFBMkMsY0FBSSxFQUFDLFVBQWhEO0FBQTJELGtCQUFRLEVBQUUsa0JBQUNBLEtBQUQ7QUFBQSxtQkFBV0Ysb0JBQW9CLENBQUNFLEtBQUQsQ0FBL0I7QUFBQTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUEscUVBQUMsYUFBRDtBQUFlLG1CQUFTLEVBQUMsV0FBekI7QUFBQSxvREFDRTtBQUFNLHFCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBdUJFLHFFQUFDLDBEQUFEO0FBQWdCLFVBQUksRUFBRUQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDtNQTlCdUJKLFMiLCJmaWxlIjoiLi9Db21wb25lbnRzL1NlYXJjaEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvblRlbXBsYXRlIH0gZnJvbSAnLi4vQ29tcG9uZW50cydcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IExhYmVsRnVsbFRpbWUgPSBzdHlsZWQubGFiZWxgXG5mb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEJhcih7IGhhbmRsZVNlYXJjaCwgaGFuZGxlU2VhcmNoTG9jYXRpb24sIGhhbmRsZVNlYXJjaEZ1bGxUaW1lLH0pIHtcbiAgY29uc3Qgc2VhcmNoID0gJ1NlYXJjaCdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2hCYXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiZmlsdGVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmaWx0ZXItc2VhcmNoLWNvbXBhbnkndHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSB0aXRsZSwgY29tcGFuaWVzLCBleHBlcnRpc2UuLi5cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVTZWFyY2goZXZlbnQpfSAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wbmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImZpbHRlclwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZmlsdGVyLXNlYXJjaC1sb2NhdGlvbicgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBsb2NhdGlvbi4uLlwiIG5hbWU9XCJsb2NhdGlvbnNlYXJjaFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZVNlYXJjaExvY2F0aW9uKGV2ZW50KX0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVuZG5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdmaWx0ZXItc2VhcmNoLWZ1bGwtdGltZScgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlU2VhcmNoRnVsbFRpbWUoZXZlbnQpfS8+XG4gICAgICAgIDxMYWJlbEZ1bGxUaW1lIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPkZ1bGwtVGltZSBPbmx5XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2ttYXJrXCI+PC9zcGFuPlxuICAgICAgICA8L0xhYmVsRnVsbFRpbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uVGVtcGxhdGUgbmFtZT17c2VhcmNofS8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/SearchBar.js\n");

/***/ })

})