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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! geolib/es/getCenter */ \"./node_modules/geolib/es/getCenter.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/macintosh/my-project/components/Map.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Map(_ref) {\n  _s();\n\n  var _this = this;\n\n  var searchResults = _ref.searchResults;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState({}),\n      _React$useState2 = (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      selectedLocation = _React$useState2[0],\n      setSelectedLocation = _React$useState2[1];\n\n  var coordinates = searchResults.map(function (result) {\n    return {\n      longitude: result[\"long\"],\n      latitude: result.lat\n    };\n  });\n  var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_4__.default)(coordinates);\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState({\n    width: \"100%\",\n    height: \"100%\",\n    latitude: center.latitude,\n    longitude: center.longitude,\n    zoom: 11\n  }),\n      _React$useState4 = (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),\n      viewport = _React$useState4[0],\n      setViewport = _React$useState4[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({\n    mapStyle: \"mapbox://styles/tarasboxmap/cku3yy62g0s5118o25sdh044r\",\n    mapboxApiAccessToken: \"pk.eyJ1IjoidGFyYXNib3htYXAiLCJhIjoiY2t0eDF0cHppMHB1dDJwcGpic2puM3BlNSJ9.DWiyxRkg97a5Ur1Ic9PXHA\"\n  }, viewport), {}, {\n    onViewportChange: function onViewportChange(nextViewport) {\n      return setViewport(nextViewport);\n    },\n    children: searchResults.map(function (result) {\n      var _jsxDEV2;\n\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, (_jsxDEV2 = {\n          latitude: result.lat,\n          longitude: result[\"long\"],\n          offsetLeft: -20\n        }, (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"offsetLeft\", -10), (0,_Users_macintosh_my_project_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, \"children\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          onClick: function onClick() {\n            return setSelectedLocation(result);\n          },\n          role: \"img\",\n          className: \"cursor-pointer text-2xl animate-bounce\",\n          \"aria-lable\": \"push-pin\",\n          children: \"\\uD83C\\uDFD8\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this)), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 15\n        }, _this), selectedLocation === result[\"long\"] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Popup, {\n          onClose: function onClose() {\n            return setSelectedLocation({});\n          },\n          closeOnClick: true,\n          latitude: result.lat,\n          longitude: result[\"long\"],\n          children: result.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }, _this) : false]\n      }, result[\"long\"], true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }, _this);\n    })\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Map, \"RGD1yD2z3WwzIWyN2d814siFPeU=\");\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssR0FBVCxPQUE4QjtBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7O0FBRTVCLHdCQUFnREgsMkNBQUEsQ0FBZSxFQUFmLENBQWhEO0FBQUE7QUFBQSxNQUFPSyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUksTUFBTUMsV0FBVyxHQUFHSixhQUFhLENBQUNLLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtBQUFBLFdBQUs7QUFDL0NDLE1BQUFBLFNBQVMsRUFBR0QsTUFBTSxRQUQ2QjtBQUUvQ0UsTUFBQUEsUUFBUSxFQUFHRixNQUFNLENBQUNHO0FBRjZCLEtBQUw7QUFBQSxHQUF4QixDQUFwQjtBQUlGLE1BQU1DLE1BQU0sR0FBR1osNERBQVMsQ0FBQ00sV0FBRCxDQUF4Qjs7QUFDQSx5QkFBZ0NQLDJDQUFBLENBQWU7QUFDN0NjLElBQUFBLEtBQUssRUFBQyxNQUR1QztBQUU3Q0MsSUFBQUEsTUFBTSxFQUFDLE1BRnNDO0FBRzdDSixJQUFBQSxRQUFRLEVBQUVFLE1BQU0sQ0FBQ0YsUUFINEI7QUFJN0NELElBQUFBLFNBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUoyQjtBQUs3Q00sSUFBQUEsSUFBSSxFQUFFO0FBTHVDLEdBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBT0Usc0JBQ0UsOERBQUMsaURBQUQ7QUFFRSxZQUFRLEVBQUMsdURBRlg7QUFHRSx3QkFBb0IsRUFBRUMsZ0dBQXNCRTtBQUg5QyxLQUlNSixRQUpOO0FBS0Usb0JBQWdCLEVBQUUsMEJBQUNLLFlBQUQ7QUFBQSxhQUFrQkosV0FBVyxDQUFDSSxZQUFELENBQTdCO0FBQUEsS0FMcEI7QUFBQSxjQU9LbkIsYUFBYSxDQUFDSyxHQUFkLENBQWtCLFVBQUFDLE1BQU07QUFBQTs7QUFBQSwwQkFDdkI7QUFBQSxnQ0FDQSw4REFBQyxnREFBRDtBQUNBLGtCQUFRLEVBQUVBLE1BQU0sQ0FBQ0csR0FEakI7QUFFQSxtQkFBUyxFQUFFSCxNQUFNLFFBRmpCO0FBR0Esb0JBQVUsRUFBRSxDQUFDO0FBSGIsOEpBSVksQ0FBQyxFQUpiLGlLQU1GO0FBQUcsaUJBQU8sRUFBRTtBQUFBLG1CQUFNSCxtQkFBbUIsQ0FBQ0csTUFBRCxDQUF6QjtBQUFBLFdBQVo7QUFDQSxjQUFJLEVBQUMsS0FETDtBQUdBLG1CQUFTLEVBQUMsd0NBSFY7QUFJQSx3QkFBVyxVQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsRUFjQ0osZ0JBQWdCLEtBQUtJLE1BQU0sUUFBM0IsZ0JBQ0MsOERBQUMsK0NBQUQ7QUFDQSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ILG1CQUFtQixDQUFDLEVBQUQsQ0FBekI7QUFBQSxXQURUO0FBRUEsc0JBQVksRUFBRSxJQUZkO0FBR0Esa0JBQVEsRUFBRUcsTUFBTSxDQUFDRyxHQUhqQjtBQUlBLG1CQUFTLEVBQUVILE1BQU0sUUFKakI7QUFBQSxvQkFLR0EsTUFBTSxDQUFDYztBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsR0FTQyxLQXZCRjtBQUFBLFNBQVVkLE1BQU0sUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLEtBQXhCO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQXZESVA7O0tBQUFBO0FBeURULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzPzY3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFwR0wsIHtNYXJrZXIsUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gJ2dlb2xpYi9lcy9nZXRDZW50ZXInO1xuXG5mdW5jdGlvbiBNYXAoe3NlYXJjaFJlc3VsdHN9KSB7XG5cbiAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gUmVhY3QudXNlU3RhdGUoe30pO1xuXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IHNlYXJjaFJlc3VsdHMubWFwKHJlc3VsdCA9PiAoe1xuICAgICAgICBsb25naXR1ZGUgOiByZXN1bHQubG9uZyAsXG4gICAgICAgIGxhdGl0dWRlIDogcmVzdWx0LmxhdCwgXG4gICAgICB9KSk7XG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGNvb3JkaW5hdGVzKVxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6XCIxMDAlXCIsXG4gICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlLFxuICAgICAgem9vbTogMTFcbiAgICB9KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdE1hcEdMXG4gICAgXG4gICAgICAgICAgbWFwU3R5bGU9J21hcGJveDovL3N0eWxlcy90YXJhc2JveG1hcC9ja3UzeXk2MmcwczUxMThvMjVzZGgwNDRyJ1xuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdwb3J0KSA9PiBzZXRWaWV3cG9ydChuZXh0Vmlld3BvcnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17cmVzdWx0Lmxvbmd9PlxuICAgICAgICAgICAgICA8TWFya2VyXG4gICAgICAgICAgICAgIGxhdGl0dWRlPXtyZXN1bHQubGF0fVxuICAgICAgICAgICAgICBsb25naXR1ZGU9e3Jlc3VsdC5sb25nfVxuICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XG4gICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0xMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMb2NhdGlvbihyZXN1bHQpfSBcbiAgICAgICAgICAgIHJvbGU9J2ltZydcbiAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgdGV4dC0yeGwgYW5pbWF0ZS1ib3VuY2UnXG4gICAgICAgICAgICBhcmlhLWxhYmxlPSdwdXNoLXBpbic+8J+PmDwvcD5cbiAgICAgICAgICAgICAgPC9NYXJrZXI+XG5cbiAgICAgICAgICAgICAge3NlbGVjdGVkTG9jYXRpb24gPT09IHJlc3VsdC5sb25nID8gKFxuICAgICAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlbGVjdGVkTG9jYXRpb24oe30pfVxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBsYXRpdHVkZT17cmVzdWx0LmxhdH1cbiAgICAgICAgICAgICAgICBsb25naXR1ZGU9e3Jlc3VsdC5sb25nfT5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0TWFwR0wiLCJNYXJrZXIiLCJQb3B1cCIsIlJlYWN0IiwiZ2V0Q2VudGVyIiwiTWFwIiwic2VhcmNoUmVzdWx0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJjb29yZGluYXRlcyIsIm1hcCIsInJlc3VsdCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInByb2Nlc3MiLCJlbnYiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdwb3J0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

});