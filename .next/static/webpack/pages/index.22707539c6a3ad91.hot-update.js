"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AdBlock.js":
/*!***********************************!*\
  !*** ./src/components/AdBlock.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Your Side Hustle Is Calling\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Portfolio Websites \\uD83C\\uDFA8\",\n                \"Review Sites \\uD83D\\uDD75️‍♂️\",\n                \"Small Businesses \\uD83D\\uDDC3️\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body: \"\",\n            cta1_link: \"\",\n            cta2_link: \"\",\n            cta1_text: \"\",\n            cta2_text: \"\",\n            textArray: [\n                \"Ready in seconds.\",\n                \"Actually Free\",\n                \"SEO Optimized\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4\",\n            \"data-theme\": \"pagesake\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"https://pagesake.com\",\n                tareget: \"blank\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border border-sky-500 rounded p-2 hero \".concat(variants[variant].styling, \" \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-content flex-col   items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-start justify-center\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 133,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/pagesake_logo.svg\",\n                                        className: \"h-28 w-28\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 142,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-4xl \",\n                                        children: [\n                                            \" \",\n                                            variants[variant].header1,\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 144,\n                                                columnNumber: 43\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \" text-4xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-primary  to-purple-300  \",\n                                                children: variants[variant].header2\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 145,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 143,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg  mt-4 py-2 bg-gray text-center \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"   \"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: currentText\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                            lineNumber: 159,\n                                            columnNumber: 222\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 159,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\",\n                                        children: [\n                                            \"Pagesake lets you build complete websites, with content, monetization options, and beautiful design, all in seconds. For free.\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 161,\n                                                columnNumber: 151\n                                            }, undefined),\n                                            \" asdfasdfasdf\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 161,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center gap-4 mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-primary btn-outline\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"https://pagesake.com\",\n                                                    children: \"Learn More\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                    lineNumber: 163,\n                                                    columnNumber: 61\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 163,\n                                                columnNumber: 13\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-primary\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"https://pagesake.com\",\n                                                    children: \"Start for Free\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                    lineNumber: 164,\n                                                    columnNumber: 49\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                                lineNumber: 164,\n                                                columnNumber: 13\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 162,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 129,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 127,\n        columnNumber: 1\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzhCQUV0Riw0RUFBQ21CO3dCQUFJQyxXQUFVOzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVc7Ozs7OzswQ0FRaEIsOERBQUNEOztrREFDRyw4REFBQ007d0NBQUlDLEtBQUs7d0NBQXNCTixXQUFVOzs7Ozs7a0RBQzFDLDhEQUFDTzt3Q0FBT1AsV0FBWTs7NENBQ25COzRDQUFFdEIsUUFBUSxDQUFDYSxRQUFRLENBQUNWLE9BQU87NENBQUM7MERBQUMsOERBQUMyQjs7Ozs7MERBQ2pDLDhEQUFDQztnREFBS1QsV0FBVTswREFNWnRCLFFBQVEsQ0FBQ2EsUUFBUSxDQUFDVCxPQUFPOzs7Ozs7Ozs7Ozs7a0RBUS9CLDhEQUFDaUI7d0NBQUlDLFdBQVcsMENBQXdHMUIsT0FBOURFLFVBQVUsS0FBSywyQ0FBMkMsRUFBQyxLQUEwRixPQUF2RkYsY0FBYyxJQUFJLG1CQUFtQkEsY0FBWSxJQUFJLGtCQUFrQixlQUFlLEVBQUM7a0RBQU0sNEVBQUNpQztzREFBSW5DOzs7Ozs7Ozs7OztrREFFMU4sOERBQUNzQzt3Q0FBRVYsV0FBVTs7NENBQUc7MERBQThILDhEQUFDUTs7Ozs7NENBQUs7Ozs7Ozs7a0RBQ3BKLDhEQUFDVDt3Q0FBSUMsV0FBVzs7MERBQ1osOERBQUNXO2dEQUFPWCxXQUFVOzBEQUE4Qiw0RUFBQ3RDLGtEQUFJQTtvREFBQ3dDLE1BQU07OERBQXdCOzs7Ozs7Ozs7OzswREFDcEYsOERBQUNTO2dEQUFPWCxXQUFVOzBEQUFrQiw0RUFBQ3RDLGtEQUFJQTtvREFBQ3dDLE1BQU07OERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXBGO0dBdEtNdEM7S0FBQUE7QUF3S04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRCbG9jay5qcz9mNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgRmFDYXJ0U2hvcHBpbmdcblxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cblxuXG5cbmNvbnN0IEFkQmxvY2sgPSAoe25hbWUsIHBhZ2UsIHNpdGUsIGluZGV4fSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhZGJsb2NrJywgcGFnZSwgc2l0ZSwgaW5kZXgsIG5hbWUpXG5cbiAgICBjb25zdCB0ZXh0QXJyYXkgPSBbXG4gICAgICAnRmlyc3QgbWVzc2FnZScsXG4gICAgICAnU2Vjb25kIG1lc3NhZ2UnLFxuICAgICAgJ1RoaXJkIG1lc3NhZ2UnLFxuICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgIF07XG5cbiAgICBjb25zdCBbY3VycmVudFRleHQsIHNldEN1cnJlbnRUZXh0XSA9IHVzZVN0YXRlKHRleHRBcnJheVswXSk7XG4gICAgY29uc3QgW3RleHRJbmRleCwgc2V0VGV4dEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuIFxuXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIC8vIHZhcmlhbnQxOiB7XG4gICAgICAgIC8vICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIxOlwiRG9uJ3QgSnVzdCBCcm93c2UgVGhlIFdlYi5cIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgIC8vICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgLy8gICAgIGJvZHk6IFwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX3RleHQ6XCJcIlxuICAgICAgICAvLyB9LFxuICAgICAgICB2YXJpYW50MToge1xuICAgICAgICAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWxlZnRcIixcbiAgICAgICAgICAgIGhlYWRlcjE6XCJZb3VyIFNpZGUgSHVzdGxlIElzIENhbGxpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgICAgIGJvZHk6IFwiXCIsXG4gICAgICAgICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgICAgICBjdGEyX3RleHQ6XCJcIixcbiAgICAgICAgICAgIHRleHRBcnJheTogW1xuICAgICAgICAgICAgICAgICAgJ1BvcnRmb2xpbyBXZWJzaXRlcyDwn46oJyxcbiAgICAgICAgICAgICAgICAgICdSZXZpZXcgU2l0ZXMg8J+Vte+4j+KAjeKZgu+4jycsXG4gICAgICAgICAgICAgICAgICAnU21hbGwgQnVzaW5lc3NlcyDwn5eD77iPJyxcbiAgICAgICAgICAgICAgLy8gLi4uIGFkZCBhcyBtYW55IG1lc3NhZ2VzIGFzIHlvdSB3YW50XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQyOiB7XG4gICAgICAgICBzdHlsaW5nOiBcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtbGVmdFwiLFxuICAgICAgICAgaGVhZGVyMTpcIlJldmVudWUgR2VuZXJhdGluZyBXZWJzaXRlc1wiLFxuICAgICAgICAgaGVhZGVyMjpcIlJlYWR5IGluIHNlY29uZHMuXCIsXG4gICAgICAgICBzdWJoZWFkZXI6XCJZb3VyIFNpZGUgSHVzdGxlIGlzIENhbGxpbmcuXCIsXG4gICAgICAgICBib2R5OiBcIlwiLFxuICAgICAgICAgY3RhMV9saW5rOlwiXCIsXG4gICAgICAgICBjdGEyX2xpbms6XCJcIixcbiAgICAgICAgIGN0YTFfdGV4dDpcIlwiLFxuICAgICAgICAgY3RhMl90ZXh0OlwiXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICdSZWFkeSBpbiBzZWNvbmRzLicsXG4gICAgICAgICAgICAgICAnQWN0dWFsbHkgRnJlZScsXG4gICAgICAgICAgICAgICAnU0VPIE9wdGltaXplZCcsXG4gICAgICAgICAgICAgXG4gICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgXVxuICAgICB9XG4gfVxuXG4gY29uc3QgdXNlVmFyaWFudDIgPSBpbmRleCAlIDIgPT09IDAgXG5cbiBjb25zdCB2YXJpYW50ID0gaW5kZXggJSAyID09PSAxID8gJ3ZhcmlhbnQxJyA6J3ZhcmlhbnQyJ1xuXG5cblxuIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gLy8gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gLy8gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAvLyAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gLy8gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuIC8vICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAvLyAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAvLyAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuIC8vICAgICAgICB9LCAzMDApOyAvLyBUaGlzIGRlbGF5IGlzIGZvciB0aGUgZmFkZS1vdXQgZWZmZWN0IHRvIGJlIG5vdGljZWFibGUgYmVmb3JlIHRoZSB0ZXh0IGNoYW5nZXNcbiAgICAgICAgXG4gLy8gICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAvLyAgICAgIH0pO1xuIC8vICAgIH0sIDM1MDApOyAvLyBHaXZpbmcgc29tZSBleHRyYSB0aW1lIGZvciBhbmltYXRpb25zXG5cbiAvLyAgICByZXR1cm4gKCkgPT4ge1xuIC8vICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gLy8gICAgfTtcbiAvLyAgfSwgW10pO1xudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpOyAvLyBTdGFydHMgdGhlIGZhZGUtb3V0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuICAgICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDApOyAvLyBXYWl0IGZvciB0aGUgZmFkZS1vdXQgdG8gZmluaXNoIGJlZm9yZSBjaGFuZ2luZyB0ZXh0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpOyAvLyBGYWRlLWluIHRoZSBuZXcgdGV4dCBhZnRlciBhbm90aGVyIGRlbGF5XG4gICAgICB9LCA2MDApOyAvLyBTdGFydCB0aGUgZmFkZS1pbiBhZnRlciB0aGUgdGV4dCBoYXMgY2hhbmdlZFxuXG4gICAgfSwgMzUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbn0sIFtdKTtcblxuXG5cbiByZXR1cm4gKFxuPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC00JyBkYXRhLXRoZW1lPVwicGFnZXNha2VcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vcGFnZXNha2UuY29tXCIgdGFyZWdldD1cImJsYW5rXCIgcGFzc0hyZWY+XG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YCBib3JkZXIgYm9yZGVyLXNreS01MDAgcm91bmRlZCBwLTIgaGVybyAke3ZhcmlhbnRzW3ZhcmlhbnRdLnN0eWxpbmd9IGB9PlxuICAgICAgICAgICAgICAgIHsvKjxkaXYgIGNsYXNzTmFtZT1cInNjcm9sbC1wLTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXByaW1hcnkgdG8tc2Vjb25kYXJ5IHRleHQtd2hpdGUgcHktMTAgcHgtNFwiPiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBmbGV4LWNvbCAgIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlcid9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17Jy9wYWdlc2FrZV9sb2dvLnN2Zyd9IGNsYXNzTmFtZT1cImgtMjggdy0yOFwiIC8+XG4gICAgICAgICAgICA8aDEgICAgIGNsYXNzTmFtZT17YHRleHQtNHhsIGB9XG4gICAgICAgICAgICA+IHt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIxfSA8YnIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyB0ZXh0LTR4bCBmb250LWJvbGQgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgXG4gICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXJcbiAgICAgICAgICAgZnJvbS1wcmltYXJ5XG5cbiAgICAgICAgICAgIHRvLXB1cnBsZS0zMDBcbiAgICAgICAgICBcbiAgICAgICAgICAgJz57dmFyaWFudHNbdmFyaWFudF0uaGVhZGVyMn08L3NwYW4+XG5cbiAgICAgICAgPC9oMT5cblxuXG5cbiAgICAgICAgey8qQU5JTUFURUQgVEVYVCAqL30gIFxuICAgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LWxnICBtdC00IHB5LTIgYmctZ3JheSB0ZXh0LWNlbnRlciAke3Zpc2libGUgPyAnJyA6ICd0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwIG9wYWNpdHktMCd9ICR7dGV4dEluZGV4ID09PSAwID8gJ3RleHQtZ3JlZW4tMzAwJyA6IHRleHRJbmRleD09PTEgPyAndGV4dC1ibHVlLTMwMCcgOiAndGV4dC1yZWQtMzAwICd9ICAgYH0+PGgxPntjdXJyZW50VGV4dH08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+UGFnZXNha2UgbGV0cyB5b3UgYnVpbGQgY29tcGxldGUgd2Vic2l0ZXMsIHdpdGggY29udGVudCwgbW9uZXRpemF0aW9uIG9wdGlvbnMsIGFuZCBiZWF1dGlmdWwgZGVzaWduLCBhbGwgaW4gc2Vjb25kcy4gRm9yIGZyZWUuPGJyIC8+IGFzZGZhc2RmYXNkZjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGp1c3RpZnktY2VudGVyIGdhcC00IG10LTQnfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1vdXRsaW5lXCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+TGVhcm4gTW9yZTwvTGluaz48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+PExpbmsgaHJlZj17J2h0dHBzOi8vcGFnZXNha2UuY29tJ30+U3RhcnQgZm9yIEZyZWU8L0xpbms+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbjwvZGl2PiBcbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRCbG9jaztcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiRmFDYXJ0U2hvcHBpbmciLCJBZEJsb2NrIiwibmFtZSIsInBhZ2UiLCJzaXRlIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwidGV4dEFycmF5IiwiY3VycmVudFRleHQiLCJzZXRDdXJyZW50VGV4dCIsInRleHRJbmRleCIsInNldFRleHRJbmRleCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidmFyaWFudHMiLCJ2YXJpYW50MSIsInN0eWxpbmciLCJoZWFkZXIxIiwiaGVhZGVyMiIsInN1YmhlYWRlciIsImJvZHkiLCJjdGExX2xpbmsiLCJjdGEyX2xpbmsiLCJjdGExX3RleHQiLCJjdGEyX3RleHQiLCJ2YXJpYW50MiIsInVzZVZhcmlhbnQyIiwidmFyaWFudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibmV3SW5kZXgiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS10aGVtZSIsImhyZWYiLCJ0YXJlZ2V0IiwicGFzc0hyZWYiLCJpbWciLCJzcmMiLCJoMSIsImJyIiwic3BhbiIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});