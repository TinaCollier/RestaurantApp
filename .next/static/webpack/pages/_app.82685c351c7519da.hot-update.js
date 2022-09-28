"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var _restaurantList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurantList */ \"./components/restaurantList.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($id: ID!) {\\n    restaurant(id: $id) {\\n      id\\n      name\\n      dishes {\\n        id\\n        name\\n        description\\n        price\\n        image {\\n          url\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dishes(param) {\n    var restId = param.restId;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), restaurantID = ref[0], setRestaurantID = ref[1];\n    var addItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).addItem;\n    var GET_RESTAURANT_DISHES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(GET_RESTAURANT_DISHES, {\n        variables: {\n            id: restId\n        }\n    }), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 43,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 44,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 45,\n        columnNumber: 21\n    }, this);\n    var restaurant = data.restaurant;\n    if (restId > 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: restaurant.dishes.map(function(res) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                style: {\n                                    height: 100,\n                                    width: \"100%\"\n                                },\n                                src: \"http://localhost:1337\".concat(res.image.url)\n                            }, void 0, false, {\n                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: res.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: res.description\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: res.price\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {}, void 0, false, {\n            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n            lineNumber: 74,\n            columnNumber: 18\n        }, this);\n    }\n}\n_s(Dishes, \"kF4kkaGbCGX1cmdSeS2Gw9G7FxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Dishes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dishes);\nvar _c;\n$RefreshReg$(_c, \"Dishes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc2hlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBcUM7QUFDTztBQUNGO0FBQ1I7QUFTVDtBQUNxQjtBQUM5QyxTQUFTZSxNQUFNLENBQUMsS0FBUSxFQUFDO1FBQVQsTUFBTyxHQUFQLEtBQVEsQ0FBUEMsTUFBTTs7O0lBQ3JCLElBQXdDYixHQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUFBM0NjLFlBQVksR0FBcUJkLEdBQVUsR0FBL0IsRUFBRWUsZUFBZSxHQUFJZixHQUFVLEdBQWQ7SUFDcEMsSUFBTSxPQUFRLEdBQUlDLGlEQUFVLENBQUNDLGdEQUFVLENBQUMsQ0FBakNjLE9BQU87SUFFaEIsSUFBTUMscUJBQXFCLEdBQUduQixtREFBRyxtQkFnQmhDO0lBRUMsSUFBTW9CLE1BQU0sR0FBR3JCLHNEQUFTLEVBQUU7SUFFMUIsSUFBaUNFLElBRS9CLEdBRitCQSx3REFBUSxDQUFDa0IscUJBQXFCLEVBQUU7UUFDL0RFLFNBQVMsRUFBRTtZQUFFQyxFQUFFLEVBQUVQLE1BQU07U0FBQztLQUN6QixDQUFDLEVBRk1RLE9BQU8sR0FBa0J0QixJQUUvQixDQUZNc0IsT0FBTyxFQUFFQyxLQUFLLEdBQVd2QixJQUUvQixDQUZldUIsS0FBSyxFQUFFQyxJQUFJLEdBQUt4QixJQUUvQixDQUZzQndCLElBQUk7SUFJNUIsSUFBSUYsT0FBTyxFQUFFLHFCQUFPLDhEQUFDRyxHQUFDO2tCQUFDLFlBQVU7Ozs7O1lBQUksQ0FBQztJQUN0QyxJQUFJRixLQUFLLEVBQUUscUJBQU8sOERBQUNFLEdBQUM7a0JBQUMsWUFBVTs7Ozs7WUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQ0QsSUFBSSxFQUFFLHFCQUFPLDhEQUFDQyxHQUFDO2tCQUFDLFdBQVM7Ozs7O1lBQUksQ0FBQztJQUVuQyxJQUFJQyxVQUFVLEdBQUdGLElBQUksQ0FBQ0UsVUFBVTtJQUVoQyxJQUFJWixNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBRWIscUJBQ0U7c0JBQ0xZLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRztxQ0FDbkIsOERBQUNDLElBQUU7O3NDQUNELDhEQUFDQyxJQUFFO3NDQUNELDRFQUFDQyxLQUFHO2dDQUFDQyxLQUFLLEVBQUU7b0NBQUVDLE1BQU0sRUFBRSxHQUFHO29DQUFFQyxLQUFLLEVBQUUsTUFBTTtpQ0FBRTtnQ0FDNUNDLEdBQUcsRUFBRSx1QkFBc0IsQ0FBZ0IsT0FBZFAsR0FBRyxDQUFDUSxLQUFLLENBQUNDLEdBQUcsQ0FBRTs7Ozs7cUNBQVE7Ozs7O2lDQUMvQztzQ0FDTCw4REFBQ1AsSUFBRTtzQ0FDQUYsR0FBRyxDQUFDVSxJQUFJOzs7OztpQ0FDTjtzQ0FDTCw4REFBQ1IsSUFBRTtzQ0FDQUYsR0FBRyxDQUFDVyxXQUFXOzs7OztpQ0FDYjtzQ0FDTCw4REFBQ1QsSUFBRTtzQ0FDQUYsR0FBRyxDQUFDWSxLQUFLOzs7OztpQ0FDUDs7Ozs7O3lCQUNGO2FBQ04sQ0FBQzt5QkFDRyxDQUVGO0lBQUEsT0FDRztRQUNGLHFCQUFPLDhEQUFDQyxJQUFFOzs7O2dCQUFNO0lBQ2xCLENBQUM7QUFFTCxDQUFDO0dBOURJN0IsTUFBTTs7UUFzQkVmLGtEQUFTO1FBRVNFLG9EQUFROzs7QUF4QmxDYSxLQUFBQSxNQUFNO0FBK0RYLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGlzaGVzLmpzPzlkZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gXCIuL3Jlc3RhdXJhbnRMaXN0XCI7XG5mdW5jdGlvbiBEaXNoZXMoe3Jlc3RJZH0pe1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7YWRkSXRlbX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuXG4gIGlmIChyZXN0SWQgPiAwKXtcblxuICAgIHJldHVybiAoXG4gICAgICA8Plxue3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7IGhlaWdodDogMTAwLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke3Jlcy5pbWFnZS51cmx9YH0+PC9pbWc+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICB7cmVzLm5hbWV9XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICB7cmVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAge3Jlcy5wcmljZX1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKSl9XG4gICAgICAgIDwvPlxuXG4gICAgICAgICl9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIDxoNT48L2g1PlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiQnV0dG9uIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEltZyIsIkNhcmRUZXh0IiwiQ2FyZFRpdGxlIiwiUm93IiwiQ29sIiwiUmVzdGF1cmFudExpc3QiLCJEaXNoZXMiLCJyZXN0SWQiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJhZGRJdGVtIiwiR0VUX1JFU1RBVVJBTlRfRElTSEVTIiwicm91dGVyIiwidmFyaWFibGVzIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicCIsInJlc3RhdXJhbnQiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJ0ciIsInRoIiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImltYWdlIiwidXJsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dishes.js\n"));

/***/ })

});