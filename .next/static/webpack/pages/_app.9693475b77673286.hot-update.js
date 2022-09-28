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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp(props) {\n    _s();\n    // var {cart,addItem,removeItem, user, setUser} = useContext(AppContext)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cart: cart\n    }), cart = ref[0], setCart = ref[1];\n    var Component = props.Component, pageProps = props.pageProps;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), user = ref1[0], setUser = ref1[1];\n    var contextValue = {\n        cart: cart,\n        addItem: addItem,\n        removeItem: removeItem,\n        isAuthenticated: false,\n        user: null,\n        setUser: setUser\n    };\n    addItem = function(item) {\n        var items = state.cart.items;\n        //check for item already in cart\n        //if not in cart, add item if item is found increase quanity ++\n        var foundItem = true;\n        if (items.length > 0) {\n            foundItem = items.find(function(i) {\n                return i.id === item.id;\n            });\n            if (!foundItem) foundItem = false;\n        } else {\n            foundItem = false;\n        }\n        console.log(\"Found Item value: \".concat(JSON.stringify(foundItem)));\n        // if item is not new, add to cart, set quantity to 1\n        if (!foundItem) {\n            //set quantity property to 1\n            var temp = JSON.parse(JSON.stringify(item));\n            temp.quantity = 1;\n            var newCart = {\n                items: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(state.cart.items).concat([\n                    temp\n                ]),\n                total: state.cart.total + item.price\n            };\n            setState({\n                cart: newCart\n            });\n            console.log(\"Total items: \".concat(JSON.stringify(newCart)));\n        } else {\n            // we already have it so just increase quantity ++\n            console.log(\"Total so far:  \".concat(state.cart.total));\n            newCart = {\n                items: items.map(function(item) {\n                    if (item.id === foundItem.id) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity + 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total + item.price\n            };\n        }\n        setState({\n            cart: newCart\n        }); // problem is this is not updated yet\n        console.log(\"state reset to cart:\".concat(JSON.stringify(state)));\n    };\n    removeItem = function(item) {\n        var items = state.cart.items;\n        //check for item already in cart\n        var foundItem = items.find(function(i) {\n            return i.id === item.id;\n        });\n        if (foundItem.quantity > 1) {\n            var newCart = {\n                items: items.map(function(item) {\n                    if (item.id === foundItem.id) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity - 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total - item.price\n            };\n        //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)\n        } else {\n            console.log(\"Try remove item \".concat(JSON.stringify(foundItem)));\n            var index = items.findIndex(function(i) {\n                return i.id === foundItem.id;\n            });\n            items.splice(index, 1);\n            var newCart = {\n                items: items,\n                total: state.cart.total - item.price\n            };\n        }\n        setState({\n            cart: newCart\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: contextValue,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n                    integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n                    crossOrigin: \"anonymous\"\n                }, void 0, false, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"50XsvJyMeqqtPFOACNSc9enCsAc=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxTQUFTLHFGQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDdkI7Ozs7OztZQUVXLENBQ3RCO0FBRUosQ0FBQztHQTVGUUwsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBK0ZkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKXtcbiAgLy8gdmFyIHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlcn0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG4gIGNvbnN0IFsgY2FydCxzZXRDYXJ0IF0gPSB1c2VTdGF0ZSh7Y2FydH0pO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtOiByZW1vdmVJdGVtLGlzQXV0aGVudGljYXRlZDpmYWxzZSx1c2VyOm51bGwsc2V0VXNlcn1cblxuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIC8vaWYgbm90IGluIGNhcnQsIGFkZCBpdGVtIGlmIGl0ZW0gaXMgZm91bmQgaW5jcmVhc2UgcXVhbml0eSArK1xuICAgIGxldCBmb3VuZEl0ZW0gPSB0cnVlO1xuICAgIGlmKGl0ZW1zLmxlbmd0aCA+IDApe1xuICAgICAgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgIFxuICAgICAgaWYoIWZvdW5kSXRlbSkgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEZvdW5kIEl0ZW0gdmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKVxuICAgIC8vIGlmIGl0ZW0gaXMgbm90IG5ldywgYWRkIHRvIGNhcnQsIHNldCBxdWFudGl0eSB0byAxXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIC8vc2V0IHF1YW50aXR5IHByb3BlcnR5IHRvIDFcbiAgICBcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICAgIGl0ZW1zOiBbLi4uc3RhdGUuY2FydC5pdGVtcyx0ZW1wXSxcbiAgICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSlcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBpdGVtczogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgaXQgc28ganVzdCBpbmNyZWFzZSBxdWFudGl0eSArK1xuICAgICAgY29uc29sZS5sb2coYFRvdGFsIHNvIGZhcjogICR7c3RhdGUuY2FydC50b3RhbH1gKVxuICAgICAgbmV3Q2FydD0ge1xuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+e1xuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0pXG4gICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9fSksXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0OiBuZXdDYXJ0fSk7ICAvLyBwcm9ibGVtIGlzIHRoaXMgaXMgbm90IHVwZGF0ZWQgeWV0XG4gICAgY29uc29sZS5sb2coYHN0YXRlIHJlc2V0IHRvIGNhcnQ6JHtKU09OLnN0cmluZ2lmeShzdGF0ZSl9YClcbiAgICAgXG4gIH07XG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIC8vY2hlY2sgZm9yIGl0ZW0gYWxyZWFkeSBpbiBjYXJ0XG4gICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZCgoaSkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gZm91bmRJdGVtLmlkKXtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgeyBxdWFudGl0eTogaXRlbS5xdWFudGl0eSAtIDEgfSlcbiAgICAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH19KSxcbiAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSxcbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coYE5ld0NhcnQgYWZ0ZXIgcmVtb3ZlOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApXG4gICAgfSBlbHNlIHsgLy8gb25seSAxIGluIHRoZSBjYXJ0IHNvIHJlbW92ZSB0aGUgd2hvbGUgaXRlbVxuICAgICAgY29uc29sZS5sb2coYFRyeSByZW1vdmUgaXRlbSAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0PSB7IGl0ZW1zOiBpdGVtcywgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgLSBpdGVtLnByaWNlIH0gXG4gICAgfVxuICAgIHNldFN0YXRlKHtjYXJ0Om5ld0NhcnR9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSGVhZCIsIkFwcENvbnRleHQiLCJIb21lIiwiTGF5b3V0IiwiQ29va2llIiwiTXlBcHAiLCJwcm9wcyIsImNhcnQiLCJzZXRDYXJ0IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsInNldFVzZXIiLCJjb250ZXh0VmFsdWUiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsIml0ZW0iLCJpdGVtcyIsInN0YXRlIiwiZm91bmRJdGVtIiwibGVuZ3RoIiwiZmluZCIsImkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidGVtcCIsInBhcnNlIiwicXVhbnRpdHkiLCJuZXdDYXJ0IiwidG90YWwiLCJwcmljZSIsInNldFN0YXRlIiwibWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJQcm92aWRlciIsInZhbHVlIiwibGluayIsInJlbCIsImhyZWYiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});