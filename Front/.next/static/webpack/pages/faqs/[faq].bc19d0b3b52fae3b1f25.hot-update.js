/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faqs/[faq]",{

/***/ "./pages/faqs/faq_pages/Property.jsx":
/*!*******************************************!*\
  !*** ./pages/faqs/faq_pages/Property.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Store/context */ \"./Store/context.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/heoyumyeong/Desktop/STUDY/SHT/AllAboutSHT/Front/pages/faqs/faq_pages/Property.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Property = function Property() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Store_context__WEBPACK_IMPORTED_MODULE_4__.default),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var response, data;\n    return _Users_heoyumyeong_Desktop_STUDY_SHT_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('http://localhost:4000/faqs/property');\n\n          case 2:\n            response = _context.sent;\n            _context.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context.sent;\n            dispatch({\n              type: 'FAQ_GET',\n              payload: data\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  var PropertyList = state.FAQ.map(function (v) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: v.question\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n        children: v.answer\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this)]\n    }, v.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n      children: PropertyList\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Property, \"tMjQDhNvN1vDEz7QS76YEprP+qA=\");\n\n_c = Property;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\n\nvar _c;\n\n$RefreshReg$(_c, \"Property\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy9mYXFfcGFnZXMvUHJvcGVydHkuanN4PzJmYmIiXSwibmFtZXMiOlsiUHJvcGVydHkiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJQcm9wZXJ0eUxpc3QiLCJGQVEiLCJtYXAiLCJ2IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsb0JBRVNDLGlEQUFVLENBQUNDLG1EQUFELENBRm5CO0FBQUEsTUFFWEMsS0FGVyxlQUVYQSxLQUZXO0FBQUEsTUFFSkMsUUFGSSxlQUVKQSxRQUZJOztBQUluQkMsa0RBQVMsK1RBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLEtBQUssQ0FBQyxxQ0FBRCxDQUR0Qjs7QUFBQTtBQUNBQyxvQkFEQTtBQUFBO0FBQUEsbUJBRWFBLFFBQVEsQ0FBQ0MsSUFBVCxFQUZiOztBQUFBO0FBRUFDLGdCQUZBO0FBR05MLG9CQUFRLENBQUM7QUFBRU0sa0JBQUksRUFBRSxTQUFSO0FBQW1CQyxxQkFBTyxFQUFFRjtBQUE1QixhQUFELENBQVI7O0FBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUlOLEVBSk0sQ0FBVDtBQU1BLE1BQU1HLFlBQVksR0FBR1QsS0FBSyxDQUFDVSxHQUFOLENBQVVDLEdBQVYsQ0FBYyxVQUFDQyxDQUFELEVBQU87QUFDdEMsd0JBQ0k7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxDQUFDLENBQUNDO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBS0QsQ0FBQyxDQUFDRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBLE9BQVNGLENBQUMsQ0FBQ0csRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFNSCxHQVBvQixDQUFyQjtBQVNBLHNCQUNJO0FBQUEsMkJBRUk7QUFBQSxnQkFDS047QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREo7QUFTSCxDQTVCRDs7R0FBTVosUTs7S0FBQUEsUTtBQThCTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZhcXMvZmFxX3BhZ2VzL1Byb3BlcnR5LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uLy4uL1N0b3JlL2NvbnRleHQnXG5cbmNvbnN0IFByb3BlcnR5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpXG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZmFxcy9wcm9wZXJ0eScpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRkFRX0dFVCcsIHBheWxvYWQ6IGRhdGEgfSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IFByb3BlcnR5TGlzdCA9IHN0YXRlLkZBUS5tYXAoKHYpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9e3YuaWR9PlxuICAgICAgICAgICAgICAgIDx0ZD57di5xdWVzdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5hbnN3ZXJ9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cblxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtQcm9wZXJ0eUxpc3R9XG4gICAgICAgICAgICA8L3Rib2R5PlxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faqs/faq_pages/Property.jsx\n");

/***/ })

});