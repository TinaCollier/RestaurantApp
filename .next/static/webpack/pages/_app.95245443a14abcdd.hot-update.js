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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ \"./components/context.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _restaurantList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurantList */ \"./components/restaurantList.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  query($id: ID!) {\\n    restaurant(id: $id) {\\n      id\\n      name\\n      dishes {\\n        id\\n        name\\n        description\\n        price\\n        image {\\n          url\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dishes(param) {\n    var restId = param.restId;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), restaurantID = ref[0], setRestaurantID = ref[1];\n    var addItem = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).addItem;\n    var GET_RESTAURANT_DISHES = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject());\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(GET_RESTAURANT_DISHES, {\n        variables: {\n            id: restId\n        }\n    }), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 43,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"ERROR here\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 44,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: \"Not found\"\n    }, void 0, false, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n        lineNumber: 45,\n        columnNumber: 21\n    }, this);\n    var restaurant = data.restaurant;\n    if (restId > 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: restaurant.dishes.map(function(res) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                    xs: \"1\",\n                    style: {\n                        padding: 10\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card mb-3\",\n                        style: \"max-width: 540px;\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"row g-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-md-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"col-md-8\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"card-body\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                                className: \"card-title\",\n                                                children: res.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                className: \"card-text\",\n                                                children: [\n                                                    res.description,\n                                                    \".\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                style: {\n                                                    fontSize: \".8rem\"\n                                                },\n                                                color: \"dark\",\n                                                onClick: function() {\n                                                    return addItem(res);\n                                                },\n                                                children: \"+ Add To Cart\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                }, res.id, false, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n                    lineNumber: 54,\n                    columnNumber: 5\n                }, _this);\n            })\n        }, void 0, false);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {}, void 0, false, {\n            fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/components/dishes.js\",\n            lineNumber: 81,\n            columnNumber: 18\n        }, this);\n    }\n}\n_s(Dishes, \"kF4kkaGbCGX1cmdSeS2Gw9G7FxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Dishes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dishes);\nvar _c;\n$RefreshReg$(_c, \"Dishes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBRVNFLG9EQUFROzs7QUF4QmxDYSxLQUFBQSxNQUFNO0FBc0VYLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGlzaGVzLmpzPzlkZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQge2dxbCx1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCJcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gXCIuL3Jlc3RhdXJhbnRMaXN0XCI7XG5mdW5jdGlvbiBEaXNoZXMoe3Jlc3RJZH0pe1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoKVxuICBjb25zdCB7YWRkSXRlbX0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuXG4gIGlmIChyZXN0SWQgPiAwKXtcblxuICAgIHJldHVybiAoXG4gICAgICA8Plxue3Jlc3RhdXJhbnQuZGlzaGVzLm1hcCgocmVzKSA9PiAoXG4gICAgPENvbCB4cz1cIjFcIiBzdHlsZT17eyBwYWRkaW5nOiAxMH19IGtleT17cmVzLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIiBzdHlsZT1cIm1heC13aWR0aDogNTQwcHg7XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBnLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtc3RhcnRcIiBzdHlsZT17eyBoZWlnaHQ6IDE1MCwgd2lkdGg6IFwiMTAwJVwiIH19IHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfSA+PC9pbWc+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntyZXMubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57cmVzLmRlc2NyaXB0aW9ufS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6XCIuOHJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KCk9PiBhZGRJdGVtKHJlcykgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L0NvbD5cbiAgICAgICkpfVxuICAgICAgICA8Lz5cblxuICAgICAgICApfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHJldHVybiA8aDU+PC9oNT5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgZXhwb3J0IGRlZmF1bHQgRGlzaGVzIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImdxbCIsInVzZVF1ZXJ5IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRJbWciLCJDYXJkVGV4dCIsIkNhcmRUaXRsZSIsIlJvdyIsIkNvbCIsIlJlc3RhdXJhbnRMaXN0IiwiRGlzaGVzIiwicmVzdElkIiwicmVzdGF1cmFudElEIiwic2V0UmVzdGF1cmFudElEIiwiYWRkSXRlbSIsIkdFVF9SRVNUQVVSQU5UX0RJU0hFUyIsInJvdXRlciIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInAiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwicmVzIiwieHMiLCJzdHlsZSIsInBhZGRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvbnRTaXplIiwiY29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dishes.js\n"));

/***/ })

});