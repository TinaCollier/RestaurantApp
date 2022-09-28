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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/context */ \"./components/context.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MyApp(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), cart = ref.cart, addItem = ref.addItem, removeItem = ref.removeItem, user = ref.user, setUser = ref.setUser;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cart: cart\n    }), state = ref1[0], setState = ref1[1];\n    var Component = props.Component, pageProps = props.pageProps;\n    console.log(\"root level user\", user);\n    setUser = function(user) {\n        setState({\n            user: user\n        });\n    };\n    addItem = function(item) {\n        var items = state.cart.items;\n        //check for item already in cart\n        //if not in cart, add item if item is found increase quanity ++\n        var foundItem = true;\n        if (items.length > 0) {\n            foundItem = items.find(function(i) {\n                return i.id === item.id;\n            });\n            if (!foundItem) foundItem = false;\n        } else {\n            foundItem = false;\n        }\n        console.log(\"Found Item value: \".concat(JSON.stringify(foundItem)));\n        // if item is not new, add to cart, set quantity to 1\n        if (!foundItem) {\n            //set quantity property to 1\n            var temp = JSON.parse(JSON.stringify(item));\n            temp.quantity = 1;\n            var newCart = {\n                items: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(state.cart.items).concat([\n                    temp\n                ]),\n                total: state.cart.total + item.price\n            };\n            setState({\n                cart: newCart\n            });\n            console.log(\"Total items: \".concat(JSON.stringify(newCart)));\n        } else {\n            // we already have it so just increase quantity ++\n            console.log(\"Total so far:  \".concat(state.cart.total));\n            newCart = {\n                items: items.map(function(item) {\n                    if (item.id === foundItem.id) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity + 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total + item.price\n            };\n        }\n        setState({\n            cart: newCart\n        }); // problem is this is not updated yet\n        console.log(\"state reset to cart:\".concat(JSON.stringify(state)));\n    };\n    removeItem = function(item) {\n        var items = state.cart.items;\n        //check for item already in cart\n        var foundItem = items.find(function(i) {\n            return i.id === item.id;\n        });\n        if (foundItem.quantity > 1) {\n            var newCart = {\n                items: items.map(function(item) {\n                    if (item.id === foundItem.id) {\n                        return Object.assign({}, item, {\n                            quantity: item.quantity - 1\n                        });\n                    } else {\n                        return item;\n                    }\n                }),\n                total: state.cart.total - item.price\n            };\n        //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)\n        } else {\n            console.log(\"Try remove item \".concat(JSON.stringify(foundItem)));\n            var index = items.findIndex(function(i) {\n                return i.id === foundItem.id;\n            });\n            items.splice(index, 1);\n            var newCart = {\n                items: items,\n                total: state.cart.total - item.price\n            };\n        }\n        setState({\n            cart: newCart\n        });\n    };\n    var mySetUser = function(data) {\n        console.log(\"you are now setting the user@!!!\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            cart: state.cart,\n            addItem: addItem,\n            removeItem: removeItem,\n            isAuthenticated: false,\n            user: null,\n            setUser: mySetUser\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\",\n                    integrity: \"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\",\n                    crossOrigin: \"anonymous\"\n                }, void 0, false, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                    fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tinacollier/Desktop/MITprojects/Portfolios/RestaurantApp/pages/_app.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"x1dMPS+OQvjaH8+YVPZyMGaAu8c=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeUMsS0FBSyxFQUFFO1lBQUNuQyxJQUFJLEVBQUVLLEtBQUssQ0FBQ0wsSUFBSTtZQUFFQyxPQUFPLEVBQUVBLE9BQU87WUFBRUMsVUFBVSxFQUFFQSxVQUFVO1lBQUNrQyxlQUFlLEVBQUMsS0FBSztZQUFDakMsSUFBSSxFQUFDLElBQUk7WUFBQ0MsT0FBTyxFQUFDNEIsU0FBUztTQUFDOzswQkFDeEksOERBQUN2QyxrREFBSTswQkFDSCw0RUFBQzRDLE1BQUk7b0JBQ0hDLEdBQUcsRUFBQyxZQUFZO29CQUNoQkMsSUFBSSxFQUFDLHVFQUF1RTtvQkFDNUVDLFNBQVMsRUFBQyx5RUFBeUU7b0JBQ25GQyxXQUFXLEVBQUMsV0FBVzs7Ozs7d0JBQ3ZCOzs7OztvQkFDRzswQkFFUCw4REFBQzdDLDBEQUFNOzBCQUNILDRFQUFDVyxTQUFTLHFGQUFLQyxTQUFTOzs7O3dCQUFJOzs7OztvQkFDdkI7Ozs7OztZQUVXLENBQ3RCO0FBRUosQ0FBQztHQXBHUVYsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBdUdkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKXtcbiAgdmFyIHtjYXJ0LGFkZEl0ZW0scmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlcn0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7Y2FydDpjYXJ0fSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIGNvbnNvbGUubG9nKCAncm9vdCBsZXZlbCB1c2VyJywgdXNlciApO1xuICBcbiAgXG4gIHNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcbiAgfTtcbiAgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgbGV0IHsgaXRlbXMgfSA9IHN0YXRlLmNhcnQ7XG4gICAgLy9jaGVjayBmb3IgaXRlbSBhbHJlYWR5IGluIGNhcnRcbiAgICAvL2lmIG5vdCBpbiBjYXJ0LCBhZGQgaXRlbSBpZiBpdGVtIGlzIGZvdW5kIGluY3JlYXNlIHF1YW5pdHkgKytcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcbiAgICBpZihpdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgIGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgICBcbiAgICAgIGlmKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgZm91bmRJdGVtID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBGb3VuZCBJdGVtIHZhbHVlOiAke0pTT04uc3RyaW5naWZ5KGZvdW5kSXRlbSl9YClcbiAgICAvLyBpZiBpdGVtIGlzIG5vdCBuZXcsIGFkZCB0byBjYXJ0LCBzZXQgcXVhbnRpdHkgdG8gMVxuICAgIGlmICghZm91bmRJdGVtKSB7XG4gICAgICAvL3NldCBxdWFudGl0eSBwcm9wZXJ0eSB0byAxXG4gICAgXG4gICAgICBsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgdGVtcC5xdWFudGl0eSA9IDE7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsdGVtcF0sXG4gICAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfVxuICAgICAgc2V0U3RhdGUoe2NhcnQ6bmV3Q2FydH0pXG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgaXRlbXM6ICR7SlNPTi5zdHJpbmdpZnkobmV3Q2FydCl9YClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2UgYWxyZWFkeSBoYXZlIGl0IHNvIGp1c3QgaW5jcmVhc2UgcXVhbnRpdHkgKytcbiAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBzbyBmYXI6ICAke3N0YXRlLmNhcnQudG90YWx9YClcbiAgICAgIG5ld0NhcnQ9IHtcbiAgICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PntcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KVxuICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfX0pLFxuICAgICAgICAgIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsICsgaXRlbS5wcmljZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDogbmV3Q2FydH0pOyAgLy8gcHJvYmxlbSBpcyB0aGlzIGlzIG5vdCB1cGRhdGVkIHlldFxuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApXG4gICAgIFxuICB9O1xuICByZW1vdmVJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICAvL2NoZWNrIGZvciBpdGVtIGFscmVhZHkgaW4gY2FydFxuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgIGlmIChmb3VuZEl0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICB2YXIgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT57XG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCl7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pXG4gICAgICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9fSksXG4gICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKGBOZXdDYXJ0IGFmdGVyIHJlbW92ZTogJHtKU09OLnN0cmluZ2lmeShuZXdDYXJ0KX1gKVxuICAgIH0gZWxzZSB7IC8vIG9ubHkgMSBpbiB0aGUgY2FydCBzbyByZW1vdmUgdGhlIHdob2xlIGl0ZW1cbiAgICAgIGNvbnNvbGUubG9nKGBUcnkgcmVtb3ZlIGl0ZW0gJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApXG4gICAgICBjb25zdCBpbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gZm91bmRJdGVtLmlkKTtcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB2YXIgbmV3Q2FydD0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9IFxuICAgIH1cbiAgICBzZXRTdGF0ZSh7Y2FydDpuZXdDYXJ0fSk7XG4gIH1cblxuICBjb25zdCBteVNldFVzZXIgPSAoIGRhdGEgKSA9PiB7XG4gICAgY29uc29sZS5sb2coICd5b3UgYXJlIG5vdyBzZXR0aW5nIHRoZSB1c2VyQCEhIScsIGRhdGEgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y2FydDogc3RhdGUuY2FydCwgYWRkSXRlbTogYWRkSXRlbSwgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxpc0F1dGhlbnRpY2F0ZWQ6ZmFsc2UsdXNlcjpudWxsLHNldFVzZXI6bXlTZXRVc2VyfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cblxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSGVhZCIsIkFwcENvbnRleHQiLCJIb21lIiwiTGF5b3V0IiwiQ29va2llIiwiTXlBcHAiLCJwcm9wcyIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInVzZXIiLCJzZXRVc2VyIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiaXRlbXMiLCJmb3VuZEl0ZW0iLCJsZW5ndGgiLCJmaW5kIiwiaSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIm15U2V0VXNlciIsImRhdGEiLCJQcm92aWRlciIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwibGluayIsInJlbCIsImhyZWYiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});