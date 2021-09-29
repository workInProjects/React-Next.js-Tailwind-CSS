"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geolib/es/getCenter */ \"./node_modules/geolib/es/getCenter.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/macintosh/my-project/components/Map.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Map(_ref) {\n  _s();\n\n  var serachResults = _ref.serachResults;\n  var coordinates = serachResults.map(function (result) {\n    return {\n      longitude: result[\"long\"],\n      latitude: result.lat\n    };\n  });\n  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState({\n    latitude: center.latitude,\n    longitude: center.longitude,\n    zoom: 11\n  }),\n      _React$useState2 = (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      viewport = _React$useState2[0],\n      setViewport = _React$useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, viewport), {}, {\n    width: \"100%\",\n    height: \"100%\",\n    mapStyle: \"mapbox://styles/tarasboxmap/cktx2tb8r1cv317uo4ujd5ve7\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoidGFyYXNib3htYXAiLCJhIjoiY2t0eDF0cHppMHB1dDJwcGpic2puM3BlNSJ9.DWiyxRkg97a5Ur1Ic9PXHA\",\n    onViewportChange: function onViewportChange(viewport) {\n      return setViewport(viewport);\n    }\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Map, \"AB8nrIbfdspZBsYbV3RgoSdxti4=\");\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ksR0FBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7QUFFeEIsTUFBTUMsV0FBVyxHQUFHRCxhQUFhLENBQUNFLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDL0NDLE1BQUFBLFNBQVMsRUFBR0QsTUFBTSxRQUQ2QjtBQUUvQ0UsTUFBQUEsUUFBUSxFQUFHRixNQUFNLENBQUNHO0FBRjZCLEtBQUw7QUFBQSxHQUF4QixDQUFwQjtBQUlGLE1BQU1DLE1BQU0sR0FBR1QsNERBQVMsQ0FBQ0csV0FBRCxDQUF4Qjs7QUFDQSx3QkFBZ0NKLDJDQUFBLENBQWU7QUFDN0NRLElBQUFBLFFBQVEsRUFBRUUsTUFBTSxDQUFDRixRQUQ0QjtBQUU3Q0QsSUFBQUEsU0FBUyxFQUFFRyxNQUFNLENBQUNILFNBRjJCO0FBRzdDSyxJQUFBQSxJQUFJLEVBQUU7QUFIdUMsR0FBZixDQUFoQztBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFLRSxzQkFDRSw4REFBQyxpREFBRCxrQ0FDTUQsUUFETjtBQUVFLFNBQUssRUFBQyxNQUZSO0FBR0UsVUFBTSxFQUFDLE1BSFQ7QUFJRSxZQUFRLEVBQUMsdURBSlg7QUFLRSx3QkFBb0IsRUFBRUUsZ0dBTHhCO0FBTUUsb0JBQWdCLEVBQUUsMEJBQUNGLFFBQUQ7QUFBQSxhQUFjQyxXQUFXLENBQUNELFFBQUQsQ0FBekI7QUFBQTtBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0F0QklYOztLQUFBQTtBQXdCVCwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC5qcz82NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcEdMLCB7TWFya30gZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRDZW50ZXIgZnJvbSAnZ2VvbGliL2VzL2dldENlbnRlcic7XG5cbmZ1bmN0aW9uIE1hcCh7c2VyYWNoUmVzdWx0c30pIHtcblxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZXJhY2hSZXN1bHRzLm1hcChyZXN1bHQgPT4gKHtcbiAgICAgICAgbG9uZ2l0dWRlIDogcmVzdWx0LmxvbmcgLFxuICAgICAgICBsYXRpdHVkZSA6IHJlc3VsdC5sYXQsIFxuICAgICAgfSkpO1xuICAgIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcylcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUsXG4gICAgICB6b29tOiAxMVxuICAgIH0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICBtYXBTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RhcmFzYm94bWFwL2NrdHgydGI4cjFjdjMxN3VvNHVqZDV2ZTcnXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3Byb2Nlc3MuZW52Lm1hcGJveF9rZXl9XG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZpZXdwb3J0KSA9PiBzZXRWaWV3cG9ydCh2aWV3cG9ydCl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG4iXSwibmFtZXMiOlsiUmVhY3RNYXBHTCIsIk1hcmsiLCJSZWFjdCIsImdldENlbnRlciIsIk1hcCIsInNlcmFjaFJlc3VsdHMiLCJjb29yZGluYXRlcyIsIm1hcCIsInJlc3VsdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwidXNlU3RhdGUiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInByb2Nlc3MiLCJlbnYiLCJtYXBib3hfa2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

});