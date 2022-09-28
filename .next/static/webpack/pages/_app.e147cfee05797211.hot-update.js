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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _restaurantList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurantList */ \"./components/restaurantList.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($id: ID!) {\\n    restaurant(id: $id) {\\n      id\\n      name\\n      dishes {\\n        id\\n        name\\n        description\\n        price\\n        image {\\n          url\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dishes(param) {\n    var restId = param.restId;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), restaurantID = ref[0], setRestaurantID = ref[1];\n    var addItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).addItem;\n    var GET_RESTAURANT_DISHES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(GET_RESTAURANT_DISHES, {\n        variables: {\n            id: restId\n        }\n    }), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Spinner, {\n        color: \"secondary\",\n        className: \"m-5\",\n        children: \" Loading... \"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 37,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 38,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 39,\n        columnNumber: 21\n    }, this);\n    var restaurant = data.restaurant;\n    if (restId > 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: restaurant.dishes.map(function(res) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                style: {\n                                    height: \"auto\",\n                                    width: \"100px\"\n                                },\n                                src: \"http://localhost:1337\".concat(res.image.url)\n                            }, void 0, false, {\n                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: res.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            style: {\n                                fontSize: \".8rem\"\n                            },\n                            children: res.description\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: res.price\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                style: {\n                                    fontSize: \".8rem\"\n                                },\n                                color: \"dark\",\n                                onClick: function() {\n                                    return addItem(res);\n                                },\n                                children: \" + \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, \"res.dish.id\", true, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {}, void 0, false, {\n            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n            lineNumber: 75,\n            columnNumber: 18\n        }, this);\n    }\n}\n_s(Dishes, \"kF4kkaGbCGX1cmdSeS2Gw9G7FxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Dishes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dishes);\nvar _c;\n$RefreshReg$(_c, \"Dishes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rpc2hlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ087QUFDRjtBQUNSO0FBR0w7QUFDaUI7QUFDOUMsU0FBU1MsTUFBTSxDQUFDLEtBQVEsRUFBQztRQUFULE1BQU8sR0FBUCxLQUFRLENBQVBDLE1BQU07OztJQUNyQixJQUF3Q1AsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTNDUSxZQUFZLEdBQXFCUixHQUFVLEdBQS9CLEVBQUVTLGVBQWUsR0FBSVQsR0FBVSxHQUFkO0lBQ3BDLElBQU0sT0FBUSxHQUFJQyxpREFBVSxDQUFDQyxnREFBVSxDQUFDLENBQWpDUSxPQUFPO0lBRWhCLElBQU1DLHFCQUFxQixHQUFHYixtREFBRyxtQkFnQmhDO0lBRUMsSUFBTWMsTUFBTSxHQUFHZixzREFBUyxFQUFFO0lBRTFCLElBQWlDRSxJQUUvQixHQUYrQkEsd0RBQVEsQ0FBQ1kscUJBQXFCLEVBQUU7UUFDL0RFLFNBQVMsRUFBRTtZQUFFQyxFQUFFLEVBQUVQLE1BQU07U0FBQztLQUN6QixDQUFDLEVBRk1RLE9BQU8sR0FBa0JoQixJQUUvQixDQUZNZ0IsT0FBTyxFQUFFQyxLQUFLLEdBQVdqQixJQUUvQixDQUZlaUIsS0FBSyxFQUFFQyxJQUFJLEdBQUtsQixJQUUvQixDQUZzQmtCLElBQUk7SUFJNUIsSUFBSUYsT0FBTyxFQUFFLHFCQUFPLDhEQUFDWCwrQ0FBTztRQUFDYyxLQUFLLEVBQUMsV0FBVztRQUFDQyxTQUFTLEVBQUMsS0FBSztrQkFBQyxjQUFZOzs7OztZQUFVLENBQUM7SUFDdEYsSUFBSUgsS0FBSyxFQUFFLHFCQUFPLDhEQUFDSSxHQUFDO2tCQUFDLFlBQVU7Ozs7O1lBQUksQ0FBQztJQUNwQyxJQUFJLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csR0FBQztrQkFBQyxXQUFTOzs7OztZQUFJLENBQUM7SUFFbkMsSUFBSUMsVUFBVSxHQUFHSixJQUFJLENBQUNJLFVBQVU7SUFFaEMsSUFBSWQsTUFBTSxHQUFHLENBQUMsRUFBQztRQUViLHFCQUNFO3NCQUNMYyxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEdBQUc7cUNBQ25CLDhEQUFDQyxJQUFFOztzQ0FDRCw4REFBQ0MsSUFBRTtzQ0FDRCw0RUFBQ0MsS0FBRztnQ0FBQ0MsS0FBSyxFQUFFO29DQUFFQyxNQUFNLEVBQUUsTUFBTTtvQ0FBRUMsS0FBSyxFQUFFLE9BQU87aUNBQUU7Z0NBQ2hEQyxHQUFHLEVBQUUsdUJBQXNCLENBQWdCLE9BQWRQLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDQyxHQUFHLENBQUU7Ozs7O3FDQUFROzs7OztpQ0FDL0M7c0NBQ0wsOERBQUNQLElBQUU7c0NBQ0FGLEdBQUcsQ0FBQ1UsSUFBSTs7Ozs7aUNBQ047c0NBQ0wsOERBQUNSLElBQUU7NEJBQUNFLEtBQUssRUFBRTtnQ0FBRU8sUUFBUSxFQUFDLE9BQU87NkJBQUM7c0NBQzNCWCxHQUFHLENBQUNZLFdBQVc7Ozs7O2lDQUNiO3NDQUNMLDhEQUFDVixJQUFFO3NDQUNBRixHQUFHLENBQUNhLEtBQUs7Ozs7O2lDQUNQO3NDQUNMLDhEQUFDWCxJQUFFO3NDQUNELDRFQUFDdkIsOENBQU07Z0NBQ0x5QixLQUFLLEVBQUU7b0NBQUVPLFFBQVEsRUFBQyxPQUFPO2lDQUFDO2dDQUMxQmpCLEtBQUssRUFBQyxNQUFNO2dDQUNab0IsT0FBTyxFQUFJOzJDQUFLNUIsT0FBTyxDQUFDYyxHQUFHLENBQUM7aUNBQUE7MENBQzdCLEtBQUc7Ozs7O3FDQUFTOzs7OztpQ0FDVjs7bUJBcEJDLGFBQWE7Ozs7eUJBcUJoQjthQUNOLENBQUM7eUJBQ0csQ0FFRjtJQUFBLE9BQ0c7UUFDRixxQkFBTyw4REFBQ0MsSUFBRTs7OztnQkFBTTtJQUNsQixDQUFDO0FBRUwsQ0FBQztHQXJFSW5CLE1BQU07O1FBc0JFVCxrREFBUztRQUVTRSxvREFBUTs7O0FBeEJsQ08sS0FBQUEsTUFBTTtBQXNFWCwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rpc2hlcy5qcz85ZGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHtncWwsdXNlUXVlcnl9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiXG5pbXBvcnQge1xuICBCdXR0b24sXG4gIFNwaW5uZXJ9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4vcmVzdGF1cmFudExpc3RcIjtcbmZ1bmN0aW9uIERpc2hlcyh7cmVzdElkfSl7XG4gIGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IHthZGRJdGVtfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuY29uc3QgR0VUX1JFU1RBVVJBTlRfRElTSEVTID0gZ3FsYFxuICBxdWVyeSgkaWQ6IElEISkge1xuICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRpc2hlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgIHZhcmlhYmxlczogeyBpZDogcmVzdElkfSxcbiAgfSk7XG5cbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cIm0tNVwiPiBMb2FkaW5nLi4uIDwvU3Bpbm5lcj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuXG4gIGlmIChyZXN0SWQgPiAwKXtcblxuICAgIHJldHVybiAoXG4gICAgICA8Plxue3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgICAgIDx0ciBrZXk9XCJyZXMuZGlzaC5pZFwiPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgaGVpZ2h0OiBcImF1dG9cIiwgd2lkdGg6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfT48L2ltZz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIHtyZXMubmFtZX1cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17eyBmb250U2l6ZTpcIi44cmVtXCJ9fT5cbiAgICAgICAgICAgIHtyZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICB7cmVzLnByaWNlfVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6XCIuOHJlbVwifX1cbiAgICAgICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgb25DbGljayA9IHsoKT0+IGFkZEl0ZW0ocmVzKX1cbiAgICAgICAgICAgID4gKyA8L0J1dHRvbj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgKSl9XG4gICAgICAgIDwvPlxuXG4gICAgICAgICl9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuIDx0cj48L3RyPlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBleHBvcnQgZGVmYXVsdCBEaXNoZXMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiQnV0dG9uIiwiU3Bpbm5lciIsIlJlc3RhdXJhbnRMaXN0IiwiRGlzaGVzIiwicmVzdElkIiwicmVzdGF1cmFudElEIiwic2V0UmVzdGF1cmFudElEIiwiYWRkSXRlbSIsIkdFVF9SRVNUQVVSQU5UX0RJU0hFUyIsInJvdXRlciIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNvbG9yIiwiY2xhc3NOYW1lIiwicCIsInJlc3RhdXJhbnQiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJ0ciIsInRoIiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImltYWdlIiwidXJsIiwibmFtZSIsImZvbnRTaXplIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dishes.js\n"));

/***/ })

});