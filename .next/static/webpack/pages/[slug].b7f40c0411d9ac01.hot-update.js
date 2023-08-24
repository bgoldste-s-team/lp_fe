"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./src/components/AdBlock.js":
/*!***********************************!*\
  !*** ./src/components/AdBlock.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    console.log(\"adblock\", page, site, index, name);\n    const variants = {\n        variant1: {\n            styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            header: \"\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-white p-8 text-center\",\n            header: \"\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\"\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 0 ? \"variant1\" : \"variant2\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-theme\": \"pagesake\",\n        className: \"hero \".concat(variants[variant].styling, \" \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-content flex-col   items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/pagesake_logo.svg\",\n                            className: \"btn btn-ghost\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-xl \",\n                            children: [\n                                \"Pagesake \",\n                                name,\n                                \" \",\n                                index\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl \",\n                            children: [\n                                \"Don't Just Browse The Web. \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 79\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-green-200  font-bold mt-4\",\n                                    children: \"Create it.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free. \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-2\",\n                            children: \"See what the savviest creators on the web are already doing, checkout Pagesake today! \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center gap-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-secondary btn-outline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Learn More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 75\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://pagesake.com\",\n                                        children: \"Start for Free\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 61\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsVUFBVSxTQUErQjtRQUE5QixFQUFDQyxLQUFJLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUM7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSixNQUFNQyxNQUFNQyxPQUFPSDtJQUcxQyxNQUFNTSxXQUFXO1FBQ2JDLFVBQVU7WUFDTkMsU0FBUztZQUNUQyxRQUFPO1lBQ1BDLFdBQVU7WUFDVkMsTUFBTTtZQUNOQyxXQUFVO1lBQ1ZDLFdBQVU7WUFDVkMsV0FBVTtZQUNWQyxXQUFVO1FBQ2Q7UUFDQUMsVUFBVTtZQUNIUixTQUFTO1lBQ1pDLFFBQU87WUFDUEMsV0FBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVU7WUFDVkMsV0FBVTtZQUNWQyxXQUFVO1lBQ1ZDLFdBQVU7UUFDZDtJQUNKO0lBRUEsTUFBTUUsY0FBY2QsUUFBUSxNQUFNO0lBRWxDLE1BQU1lLFVBQVVmLFFBQVEsTUFBTSxJQUFJLGFBQVksVUFBVTtJQUN4RCxxQkFDSSw4REFBQ2dCO1FBQUlDLGNBQVc7UUFBV0MsV0FBVyxRQUFrQyxPQUExQmYsUUFBUSxDQUFDWSxRQUFRLENBQUNWLE9BQU8sRUFBQztrQkFFcEUsNEVBQUNXO1lBQUlFLFdBQVU7OzhCQUNYLDhEQUFDRjtvQkFBSUUsV0FBVzs7c0NBQ1osOERBQUNDOzRCQUFJQyxLQUFLOzRCQUFzQkYsV0FBVTs7Ozs7O3NDQUkxQyw4REFBQ0c7NEJBQUdILFdBQVc7O2dDQUFZO2dDQUFVckI7Z0NBQUs7Z0NBQUVHOzs7Ozs7Ozs7Ozs7OzhCQU1oRCw4REFBQ2dCOztzQ0FDRyw4REFBQ007NEJBQUdKLFdBQVU7O2dDQUFZOzhDQUFnQyw4REFBQ0s7Ozs7OzhDQUN2RCw4REFBQ0M7b0NBQUtOLFdBQVc7OENBQWtDOzs7Ozs7Ozs7Ozs7c0NBRXZELDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FBTzs7Ozs7O3NDQUNwQiw4REFBQ087NEJBQUVQLFdBQVU7c0NBQU87Ozs7OztzQ0FDcEIsOERBQUNGOzRCQUFJRSxXQUFXOzs4Q0FDWiw4REFBQ1E7b0NBQU9SLFdBQVU7OENBQWdDLDRFQUFDdkIsa0RBQUlBO3dDQUFDZ0MsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7OzhDQUN0Riw4REFBQ0Q7b0NBQU9SLFdBQVU7OENBQWtCLDRFQUFDdkIsa0RBQUlBO3dDQUFDZ0MsTUFBTTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEc7S0E1RE0vQjtBQThETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZEJsb2NrLmpzP2Y1YjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEFkQmxvY2sgPSAoe25hbWUsIHBhZ2UsIHNpdGUsIGluZGV4fSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhZGJsb2NrJywgcGFnZSwgc2l0ZSwgaW5kZXgsIG5hbWUpXG5cblxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICB2YXJpYW50MToge1xuICAgICAgICAgICAgc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIGhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgc3ViaGVhZGVyOlwiXCIsXG4gICAgICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtd2hpdGUgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICBoZWFkZXI6XCJcIixcbiAgICAgICAgICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgYm9keTogXCJcIixcbiAgICAgICAgICAgIGN0YTFfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMl9saW5rOlwiXCIsXG4gICAgICAgICAgICBjdGExX3RleHQ6XCJcIixcbiAgICAgICAgICAgIGN0YTJfdGV4dDpcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1c2VWYXJpYW50MiA9IGluZGV4ICUgMiA9PT0gMCBcblxuICAgIGNvbnN0IHZhcmlhbnQgPSBpbmRleCAlIDIgPT09IDAgPyAndmFyaWFudDEnIDondmFyaWFudDInXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lPVwicGFnZXNha2VcIiBjbGFzc05hbWU9e2BoZXJvICR7dmFyaWFudHNbdmFyaWFudF0uc3R5bGluZ30gYH0+XG4gICAgICAgICAgICB7Lyo8ZGl2ICBjbGFzc05hbWU9XCJzY3JvbGwtcC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTEwIHB4LTRcIj4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGZsZXgtY29sICAgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wYWdlc2FrZV9sb2dvLnN2Zyd9IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cImh0dHBzOi8vZGV4dGVybGFicy1wdWJsaWMuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vcGFnZXNha2VfbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9XCIgYmctc3RvbmUtMzAwIG1heC13LXNtIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBoLTE2IHctMTYgXCJcbiAgICAgICAgICAgICAgICAgICAgLz4qL31cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17J3RleHQteGwgJ30+UGFnZXNha2Uge25hbWV9IHtpbmRleH08L2g0PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIFwiPkRvbiZhcG9zO3QgSnVzdCBCcm93c2UgVGhlIFdlYi4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd0ZXh0LWdyZWVuLTIwMCAgZm9udC1ib2xkIG10LTQnfT5DcmVhdGUgaXQuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS0yXCI+UGFnZXNha2UgbGV0cyB5b3UgYnVpbGQgY29tcGxldGUgd2Vic2l0ZXMsIHdpdGggY29udGVudCwgbW9uZXRpemF0aW9uIG9wdGlvbnMsIGFuZCBiZWF1dGlmdWwgZGVzaWduLCBhbGwgaW4gc2Vjb25kcy4gRm9yIGZyZWUuIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMlwiPlNlZSB3aGF0IHRoZSBzYXZ2aWVzdCBjcmVhdG9ycyBvbiB0aGUgd2ViIGFyZSBhbHJlYWR5IGRvaW5nLCBjaGVja291dCBQYWdlc2FrZSB0b2RheSEgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXgganVzdGlmeS1jZW50ZXIgZ2FwLTQgbXQtNCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PkxlYXJuIE1vcmU8L0xpbms+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPjxMaW5rIGhyZWY9eydodHRwczovL3BhZ2VzYWtlLmNvbSd9PlN0YXJ0IGZvciBGcmVlPC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQWRCbG9jayIsIm5hbWUiLCJwYWdlIiwic2l0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwidmFyaWFudDEiLCJzdHlsaW5nIiwiaGVhZGVyIiwic3ViaGVhZGVyIiwiYm9keSIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiZGl2IiwiZGF0YS10aGVtZSIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImg0IiwiaDEiLCJiciIsInNwYW4iLCJwIiwiYnV0dG9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});