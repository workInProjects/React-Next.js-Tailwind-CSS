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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geolib/es/getCenter */ \"./node_modules/geolib/es/getCenter.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/macintosh/my-project/components/Map.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Map(_ref) {\n  _s();\n\n  var _this = this;\n\n  var searchResults = _ref.searchResults;\n\n  var _useState = useState(),\n      _useState2 = (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),\n      selectedLocation = _useState2[0],\n      setSelectedLocation = _useState2[1];\n\n  var coordinates = searchResults.map(function (result) {\n    return {\n      longitude: result[\"long\"],\n      latitude: result.lat\n    };\n  });\n  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState({\n    width: \"100%\",\n    height: \"100%\",\n    latitude: center.latitude,\n    longitude: center.longitude,\n    zoom: 11\n  }),\n      _React$useState2 = (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      viewport = _React$useState2[0],\n      setViewport = _React$useState2[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({\n    mapStyle: \"mapbox://styles/tarasboxmap/cku3yy62g0s5118o25sdh044r\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoidGFyYXNib3htYXAiLCJhIjoiY2t0eDF0cHppMHB1dDJwcGpic2puM3BlNSJ9.DWiyxRkg97a5Ur1Ic9PXHA\"\n  }, viewport), {}, {\n    onViewportChange: function onViewportChange(nextViewport) {\n      return setViewport(nextViewport);\n    },\n    children: searchResults.map(function (result) {\n      var _jsxDEV2;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, (_jsxDEV2 = {\n          latitude: result.lat,\n          longitude: result[\"long\"],\n          offsetLeft: -20\n        }, (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"offsetLeft\", -10), (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"children\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          className: \"cursor-pointer text-2xl animate-bounce\",\n          children: \"\\uD83C\\uDFD8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }, _this)), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 15\n        }, _this)\n      }, result[\"long\"], false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }, _this);\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Map, \"snwvNvasbCuDM4FxQNk4pQxtW+Y=\");\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssR0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7O0FBQzVCLGtCQUFpREMsUUFBUSxFQUF6RDtBQUFBO0FBQUEsTUFBT0MsZ0JBQVA7QUFBQSxNQUEwQkMsbUJBQTFCOztBQUVJLE1BQU1DLFdBQVcsR0FBR0osYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQSxXQUFLO0FBQy9DQyxNQUFBQSxTQUFTLEVBQUdELE1BQU0sUUFENkI7QUFFL0NFLE1BQUFBLFFBQVEsRUFBR0YsTUFBTSxDQUFDRztBQUY2QixLQUFMO0FBQUEsR0FBeEIsQ0FBcEI7QUFJRixNQUFNQyxNQUFNLEdBQUdaLDREQUFTLENBQUNNLFdBQUQsQ0FBeEI7O0FBQ0Esd0JBQWdDUCwyQ0FBQSxDQUFlO0FBQzdDYyxJQUFBQSxLQUFLLEVBQUMsTUFEdUM7QUFFN0NDLElBQUFBLE1BQU0sRUFBQyxNQUZzQztBQUc3Q0osSUFBQUEsUUFBUSxFQUFFRSxNQUFNLENBQUNGLFFBSDRCO0FBSTdDRCxJQUFBQSxTQUFTLEVBQUVHLE1BQU0sQ0FBQ0gsU0FKMkI7QUFLN0NNLElBQUFBLElBQUksRUFBRTtBQUx1QyxHQUFmLENBQWhDO0FBQUE7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQU9FLHNCQUNFLDhEQUFDLGlEQUFEO0FBRUUsWUFBUSxFQUFDLHVEQUZYO0FBR0Usd0JBQW9CLEVBQUVDLGdHQUFzQkU7QUFIOUMsS0FJTUosUUFKTjtBQUtFLG9CQUFnQixFQUFFLDBCQUFDSyxZQUFEO0FBQUEsYUFBa0JKLFdBQVcsQ0FBQ0ksWUFBRCxDQUE3QjtBQUFBLEtBTHBCO0FBQUEsY0FPS25CLGFBQWEsQ0FBQ0ssR0FBZCxDQUFrQixVQUFBQyxNQUFNO0FBQUE7O0FBQUEsMEJBQ3ZCO0FBQUEsK0JBQ0EsOERBQUMsZ0RBQUQ7QUFDQSxrQkFBUSxFQUFFQSxNQUFNLENBQUNHLEdBRGpCO0FBRUEsbUJBQVMsRUFBRUgsTUFBTSxRQUZqQjtBQUdBLG9CQUFVLEVBQUUsQ0FBQztBQUhiLDhKQUlZLENBQUMsRUFKYixpS0FNRjtBQUFHLG1CQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFNBQVVBLE1BQU0sUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLEtBQXhCO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQXRDSVA7O0tBQUFBO0FBd0NULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzPzY3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFwR0wsIHtNYXJrZXIsUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gJ2dlb2xpYi9lcy9nZXRDZW50ZXInO1xuXG5mdW5jdGlvbiBNYXAoe3NlYXJjaFJlc3VsdHN9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZExvY2F0aW9uICwgc2V0U2VsZWN0ZWRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpXG5cbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gc2VhcmNoUmVzdWx0cy5tYXAocmVzdWx0ID0+ICh7XG4gICAgICAgIGxvbmdpdHVkZSA6IHJlc3VsdC5sb25nICxcbiAgICAgICAgbGF0aXR1ZGUgOiByZXN1bHQubGF0LCBcbiAgICAgIH0pKTtcbiAgICBjb25zdCBjZW50ZXIgPSBnZXRDZW50ZXIoY29vcmRpbmF0ZXMpXG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgIGhlaWdodDpcIjEwMCVcIixcbiAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUsXG4gICAgICBsb25naXR1ZGU6IGNlbnRlci5sb25naXR1ZGUsXG4gICAgICB6b29tOiAxMVxuICAgIH0pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0TWFwR0xcbiAgICBcbiAgICAgICAgICBtYXBTdHlsZT0nbWFwYm94Oi8vc3R5bGVzL3RhcmFzYm94bWFwL2NrdTN5eTYyZzBzNTExOG8yNXNkaDA0NHInXG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3Byb2Nlc3MuZW52Lm1hcGJveF9rZXl9XG4gICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtyZXN1bHQubG9uZ30+XG4gICAgICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU9e3Jlc3VsdC5sYXR9XG4gICAgICAgICAgICAgIGxvbmdpdHVkZT17cmVzdWx0Lmxvbmd9XG4gICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cbiAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17LTEwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIHRleHQtMnhsIGFuaW1hdGUtYm91bmNlJz7wn4+YPC9wPlxuICAgICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0TWFwR0wiLCJNYXJrZXIiLCJQb3B1cCIsIlJlYWN0IiwiZ2V0Q2VudGVyIiwiTWFwIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJjb29yZGluYXRlcyIsIm1hcCIsInJlc3VsdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInByb2Nlc3MiLCJlbnYiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdwb3J0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

});