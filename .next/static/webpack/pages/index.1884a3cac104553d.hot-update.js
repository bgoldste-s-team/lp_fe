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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AdBlock = (param)=>{\n    let { name , page , site , index  } = param;\n    _s();\n    console.log(\"adblock\", page, site, index, name);\n    const textArray = [\n        \"First message\",\n        \"Second message\",\n        \"Third message\"\n    ];\n    const [currentText, setCurrentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(textArray[0]);\n    const [textIndex, setTextIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const variants = {\n        // variant1: {\n        //     // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n        //     styling:\"bg-neutral-content text-neutral p-8 text-center\",\n        //     header1:\"Don't Just Browse The Web.\",\n        //     header2:\"Create It.\",\n        //     subheader:\"\",\n        //     body: \"\",\n        //     cta1_link:\"\",\n        //     cta2_link:\"\",\n        //     cta1_text:\"\",\n        //     cta2_text:\"\"\n        // },\n        variant1: {\n            // styling: \"bg-gradient-to-r from-black via-purple-800 to-black text-white p-8 text-center\",\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Don't Just Browse The Web.\",\n            header2: \"Create It.\",\n            subheader: \"\",\n            body1: \"Ever wonder what you could do with a website? \",\n            body2: \"Pagesake builds complete, monetizable websites for you in seconds. Actually Free.\",\n            cta1_link: \"https://pagesake.com\",\n            cta2_link: \"https://pagesake.com\",\n            cta1_text: \"Start FREE\",\n            cta2_text: \"How It Works\",\n            textArray: [\n                \"SEO Optimized \\uD83D\\uDD0E\",\n                \"AI Content Generation \\uD83E\\uDD16\",\n                \"Actually Free \\uD83E\\uDD11\"\n            ]\n        },\n        variant2: {\n            styling: \"bg-neutral-content text-neutral p-8 text-left\",\n            header1: \"Revenue Generating Websites\",\n            header2: \"Ready in seconds.\",\n            subheader: \"Your Side Hustle is Calling.\",\n            body1: \"Dreaming about a business? Our AI-powered website builder can get you from dream to done in seconds.\",\n            body2: \"\",\n            cta1_link: \"https://pagesake.com\",\n            cta2_link: \"https://pagesake.com\",\n            cta1_text: \"Start FREE \\uD83D\\uDE80\",\n            cta2_text: \"\\uD83D\\uDCA1 How It Works \",\n            textArray: [\n                \"Portfolio Websites \\uD83C\\uDFA8\",\n                \"Review Sites \\uD83D\\uDD75️‍♂️\",\n                \"Small Businesses \\uD83D\\uDDC3️\"\n            ]\n        }\n    };\n    const useVariant2 = index % 2 === 0;\n    const variant = index % 2 === 1 ? \"variant1\" : \"variant2\";\n    // useEffect(() => {\n    //    const interval = setInterval(() => {\n    //      setVisible(false);\n    //      setTextIndex((prevIndex) => {\n    //        const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n    //        setTimeout(() => {\n    //          setCurrentText(variants[variant].textArray[newIndex]);\n    //          setVisible(true);\n    //        }, 300); // This delay is for the fade-out effect to be noticeable before the text changes\n    //        return newIndex;\n    //      });\n    //    }, 3500); // Giving some extra time for animations\n    //    return () => {\n    //      clearInterval(interval);\n    //    };\n    //  }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setVisible(false); // Starts the fade-out\n            setTimeout(()=>{\n                setTextIndex((prevIndex)=>{\n                    const newIndex = prevIndex + 1 === variants[variant].textArray.length ? 0 : prevIndex + 1;\n                    setCurrentText(variants[variant].textArray[newIndex]);\n                    return newIndex;\n                });\n            }, 300); // Wait for the fade-out to finish before changing text\n            setTimeout(()=>{\n                setVisible(true); // Fade-in the new text after another delay\n            }, 600); // Start the fade-in after the text has changed\n        }, 3500);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 bg-neutral-content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-theme\": \"pagesake\",\n                className: \"hero rounded-2xl p-0  \".concat(variants[variant].styling, \" \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"https://pagesake.com\",\n                            target: \"_blank\",\n                            passHref: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/pagesake_logo.svg\",\n                                className: \" w-28 p-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 141,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 140,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl \",\n                                children: [\n                                    \" \",\n                                    variants[variant].header1,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 78\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-4xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-primary to-purple-300\",\n                                        children: variants[variant].header2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 144,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-xl   mt-4 py-2 bg-gray text-center \".concat(visible ? \"\" : \"transition-opacity duration-300 opacity-0\", \" \").concat(textIndex === 0 ? \"text-green-300\" : textIndex === 1 ? \"text-blue-300\" : \"text-red-300 \", \"   \"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: currentText\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                lineNumber: 158,\n                                columnNumber: 227\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-md py-1\",\n                            children: variants[variant].body1\n                        }, void 0, false, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 161,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center py-1 text\",\n                            children: [\n                                \" \",\n                                variants[variant].body2\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 162,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row-2 justify-center gap-4 mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary btn-outline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: variants[variant].cta2_link,\n                                        children: variants[variant].cta2_text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 167,\n                                        columnNumber: 65\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 167,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: variants[variant].cta1_link,\n                                        children: variants[variant].cta1_text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                        lineNumber: 168,\n                                        columnNumber: 53\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                            lineNumber: 166,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n            lineNumber: 130,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/components/AdBlock.js\",\n        lineNumber: 129,\n        columnNumber: 1\n    }, undefined);\n};\n_s(AdBlock, \"VfzrQ5a30aEbx1D5PVciVzf3WBk=\");\n_c = AdBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdBlock);\nvar _c;\n$RefreshReg$(_c, \"AdBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXpIO0dBMUtNeEI7S0FBQUE7QUE0S04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRCbG9jay5qcz9mNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQge1xuICAgRmFDYXJ0U2hvcHBpbmdcblxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cblxuXG5cbmNvbnN0IEFkQmxvY2sgPSAoe25hbWUsIHBhZ2UsIHNpdGUsIGluZGV4fSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhZGJsb2NrJywgcGFnZSwgc2l0ZSwgaW5kZXgsIG5hbWUpXG5cbiAgICBjb25zdCB0ZXh0QXJyYXkgPSBbXG4gICAgICAnRmlyc3QgbWVzc2FnZScsXG4gICAgICAnU2Vjb25kIG1lc3NhZ2UnLFxuICAgICAgJ1RoaXJkIG1lc3NhZ2UnLFxuICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgIF07XG5cbiAgICBjb25zdCBbY3VycmVudFRleHQsIHNldEN1cnJlbnRUZXh0XSA9IHVzZVN0YXRlKHRleHRBcnJheVswXSk7XG4gICAgY29uc3QgW3RleHRJbmRleCwgc2V0VGV4dEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuIFxuXG4gICAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgICAgIC8vIHZhcmlhbnQxOiB7XG4gICAgICAgIC8vICAgICAvLyBzdHlsaW5nOiBcImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibGFjayB2aWEtcHVycGxlLTgwMCB0by1ibGFjayB0ZXh0LXdoaXRlIHAtOCB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAvLyAgICAgc3R5bGluZzpcImJnLW5ldXRyYWwtY29udGVudCB0ZXh0LW5ldXRyYWwgcC04IHRleHQtY2VudGVyXCIsXG4gICAgICAgIC8vICAgICBoZWFkZXIxOlwiRG9uJ3QgSnVzdCBCcm93c2UgVGhlIFdlYi5cIixcbiAgICAgICAgLy8gICAgIGhlYWRlcjI6XCJDcmVhdGUgSXQuXCIsXG4gICAgICAgIC8vICAgICBzdWJoZWFkZXI6XCJcIixcbiAgICAgICAgLy8gICAgIGJvZHk6IFwiXCIsXG4gICAgICAgIC8vICAgICBjdGExX2xpbms6XCJcIixcbiAgICAgICAgLy8gICAgIGN0YTJfbGluazpcIlwiLFxuICAgICAgICAvLyAgICAgY3RhMV90ZXh0OlwiXCIsXG4gICAgICAgIC8vICAgICBjdGEyX3RleHQ6XCJcIlxuICAgICAgICAvLyB9LFxuICAgICAgICB2YXJpYW50MToge1xuICAgICAgICAgICAgLy8gc3R5bGluZzogXCJiZy1ncmFkaWVudC10by1yIGZyb20tYmxhY2sgdmlhLXB1cnBsZS04MDAgdG8tYmxhY2sgdGV4dC13aGl0ZSBwLTggdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIHN0eWxpbmc6XCJiZy1uZXV0cmFsLWNvbnRlbnQgdGV4dC1uZXV0cmFsIHAtOCB0ZXh0LWxlZnRcIixcbiAgICAgICAgICAgIGhlYWRlcjE6XCJEb24ndCBKdXN0IEJyb3dzZSBUaGUgV2ViLlwiLFxuICAgICAgICAgICAgaGVhZGVyMjpcIkNyZWF0ZSBJdC5cIixcbiAgICAgICAgICAgIHN1YmhlYWRlcjpcIlwiLFxuICAgICAgICAgICAgYm9keTE6IFwiRXZlciB3b25kZXIgd2hhdCB5b3UgY291bGQgZG8gd2l0aCBhIHdlYnNpdGU/IFwiLFxuICAgICAgICAgICAgYm9keTI6XCJQYWdlc2FrZSBidWlsZHMgY29tcGxldGUsIG1vbmV0aXphYmxlIHdlYnNpdGVzIGZvciB5b3UgaW4gc2Vjb25kcy4gQWN0dWFsbHkgRnJlZS5cIixcbiAgICAgICAgICAgIGN0YTFfbGluazpcImh0dHBzOi8vcGFnZXNha2UuY29tXCIsXG4gICAgICAgICAgICBjdGEyX2xpbms6XCJodHRwczovL3BhZ2VzYWtlLmNvbVwiLFxuICAgICAgICAgICAgY3RhMV90ZXh0OlwiU3RhcnQgRlJFRVwiLFxuICAgICAgICAgICAgY3RhMl90ZXh0OlwiSG93IEl0IFdvcmtzXCIsXG4gICAgICAgICAgICB0ZXh0QXJyYXk6IFtcbiAgICAgICAgICAgICAgICAgICdTRU8gT3B0aW1pemVkIPCflI4nLFxuICAgICAgICAgICAgICAgICAgJ0FJIENvbnRlbnQgR2VuZXJhdGlvbiDwn6SWJyxcbiAgICAgICAgICAgICAgICAgICdBY3R1YWxseSBGcmVlIPCfpJEnLFxuICAgICAgICAgICAgICAvLyAuLi4gYWRkIGFzIG1hbnkgbWVzc2FnZXMgYXMgeW91IHdhbnRcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDI6IHtcbiAgICAgICAgIHN0eWxpbmc6IFwiYmctbmV1dHJhbC1jb250ZW50IHRleHQtbmV1dHJhbCBwLTggdGV4dC1sZWZ0XCIsXG4gICAgICAgICBoZWFkZXIxOlwiUmV2ZW51ZSBHZW5lcmF0aW5nIFdlYnNpdGVzXCIsXG4gICAgICAgICBoZWFkZXIyOlwiUmVhZHkgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgIHN1YmhlYWRlcjpcIllvdXIgU2lkZSBIdXN0bGUgaXMgQ2FsbGluZy5cIixcbiAgICAgICAgIGJvZHkxOiBcIkRyZWFtaW5nIGFib3V0IGEgYnVzaW5lc3M/IE91ciBBSS1wb3dlcmVkIHdlYnNpdGUgYnVpbGRlciBjYW4gZ2V0IHlvdSBmcm9tIGRyZWFtIHRvIGRvbmUgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgIGJvZHkyOiBcIlwiLFxuICAgICAgICAgY3RhMV9saW5rOlwiaHR0cHM6Ly9wYWdlc2FrZS5jb21cIixcbiAgICAgICAgICAgIGN0YTJfbGluazpcImh0dHBzOi8vcGFnZXNha2UuY29tXCIsXG4gICAgICAgICAgICBjdGExX3RleHQ6XCJTdGFydCBGUkVFIPCfmoBcIixcbiAgICAgICAgICAgIGN0YTJfdGV4dDpcIvCfkqEgSG93IEl0IFdvcmtzIFwiLFxuICAgICAgICAgICAgdGV4dEFycmF5OiBbXG4gICAgICAgICAgICAgICAgJ1BvcnRmb2xpbyBXZWJzaXRlcyDwn46oJyxcbiAgICAgICAgICAgICAgJ1JldmlldyBTaXRlcyDwn5W177iP4oCN4pmC77iPJyxcbiAgICAgICAgICAgICAgJ1NtYWxsIEJ1c2luZXNzZXMg8J+Xg++4jycsXG4gICAgICAgICAgICAgXG4gICAgICAgICAgIC8vIC4uLiBhZGQgYXMgbWFueSBtZXNzYWdlcyBhcyB5b3Ugd2FudFxuICAgICAgICAgICAgICAgXVxuICAgICB9XG4gfVxuXG4gY29uc3QgdXNlVmFyaWFudDIgPSBpbmRleCAlIDIgPT09IDAgXG5cbiBjb25zdCB2YXJpYW50ID0gaW5kZXggJSAyID09PSAxID8gJ3ZhcmlhbnQxJyA6J3ZhcmlhbnQyJ1xuXG5cblxuIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gLy8gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gLy8gICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAvLyAgICAgIHNldFRleHRJbmRleCgocHJldkluZGV4KSA9PiB7XG4gLy8gICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuIC8vICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAvLyAgICAgICAgICBzZXRDdXJyZW50VGV4dCh2YXJpYW50c1t2YXJpYW50XS50ZXh0QXJyYXlbbmV3SW5kZXhdKTtcbiAvLyAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuIC8vICAgICAgICB9LCAzMDApOyAvLyBUaGlzIGRlbGF5IGlzIGZvciB0aGUgZmFkZS1vdXQgZWZmZWN0IHRvIGJlIG5vdGljZWFibGUgYmVmb3JlIHRoZSB0ZXh0IGNoYW5nZXNcbiAgICAgICAgXG4gLy8gICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAvLyAgICAgIH0pO1xuIC8vICAgIH0sIDM1MDApOyAvLyBHaXZpbmcgc29tZSBleHRyYSB0aW1lIGZvciBhbmltYXRpb25zXG5cbiAvLyAgICByZXR1cm4gKCkgPT4ge1xuIC8vICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gLy8gICAgfTtcbiAvLyAgfSwgW10pO1xudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFZpc2libGUoZmFsc2UpOyAvLyBTdGFydHMgdGhlIGZhZGUtb3V0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRUZXh0SW5kZXgoKHByZXZJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJldkluZGV4ICsgMSA9PT0gdmFyaWFudHNbdmFyaWFudF0udGV4dEFycmF5Lmxlbmd0aCA/IDAgOiBwcmV2SW5kZXggKyAxO1xuICAgICAgICAgIHNldEN1cnJlbnRUZXh0KHZhcmlhbnRzW3ZhcmlhbnRdLnRleHRBcnJheVtuZXdJbmRleF0pO1xuICAgICAgICAgIHJldHVybiBuZXdJbmRleDtcbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDApOyAvLyBXYWl0IGZvciB0aGUgZmFkZS1vdXQgdG8gZmluaXNoIGJlZm9yZSBjaGFuZ2luZyB0ZXh0XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpOyAvLyBGYWRlLWluIHRoZSBuZXcgdGV4dCBhZnRlciBhbm90aGVyIGRlbGF5XG4gICAgICB9LCA2MDApOyAvLyBTdGFydCB0aGUgZmFkZS1pbiBhZnRlciB0aGUgdGV4dCBoYXMgY2hhbmdlZFxuXG4gICAgfSwgMzUwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbn0sIFtdKTtcblxuXG5cbiByZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3AtNCBiZy1uZXV0cmFsLWNvbnRlbnQnID5cbiAgICAgICBcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lPVwicGFnZXNha2VcIiBjbGFzc05hbWU9e2BoZXJvIHJvdW5kZWQtMnhsIHAtMCAgJHt2YXJpYW50c1t2YXJpYW50XS5zdHlsaW5nfSBgfT5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2ICBjbGFzc05hbWU9XCJzY3JvbGwtcC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXNlY29uZGFyeSB0ZXh0LXdoaXRlIHB5LTEwIHB4LTRcIj4qL31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICA8ZGl2PlxuICA8TGluayBocmVmPVwiaHR0cHM6Ly9wYWdlc2FrZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Jy9wYWdlc2FrZV9sb2dvLnN2Zyd9IGNsYXNzTmFtZT1cIiB3LTI4IHAtMlwiIC8+XG4gICAgICAgICAgICAgPC9MaW5rPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93Jz4gIFxuICAgICAgICAgICAgICAgIDxoMSAgICAgY2xhc3NOYW1lPXtgdGV4dC00eGwgYH0+IHt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIxfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wcmltYXJ5IHRvLXB1cnBsZS0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt2YXJpYW50c1t2YXJpYW50XS5oZWFkZXIyfVxuICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LypBTklNQVRFRCBURVhUICovfSAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC14bCAgIG10LTQgcHktMiBiZy1ncmF5IHRleHQtY2VudGVyICR7dmlzaWJsZSA/ICcnIDogJ3RyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDAgb3BhY2l0eS0wJ30gJHt0ZXh0SW5kZXggPT09IDAgPyAndGV4dC1ncmVlbi0zMDAnIDogdGV4dEluZGV4PT09MSA/ICd0ZXh0LWJsdWUtMzAwJyA6ICd0ZXh0LXJlZC0zMDAgJ30gICBgfT48aDE+e2N1cnJlbnRUZXh0fTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1tZCBweS0xXCI+e3ZhcmlhbnRzW3ZhcmlhbnRdLmJvZHkxfTwvcD5cbiAgICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xIHRleHRcIj4ge3ZhcmlhbnRzW3ZhcmlhbnRdLmJvZHkyfTwvcD5cblxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LXJvdy0yIGp1c3RpZnktY2VudGVyIGdhcC00IG10LTQnfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tb3V0bGluZVwiPjxMaW5rIGhyZWY9e3ZhcmlhbnRzW3ZhcmlhbnRdLmN0YTJfbGlua30+e3ZhcmlhbnRzW3ZhcmlhbnRdLmN0YTJfdGV4dH08L0xpbms+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj48TGluayBocmVmPXt2YXJpYW50c1t2YXJpYW50XS5jdGExX2xpbmt9Pnt2YXJpYW50c1t2YXJpYW50XS5jdGExX3RleHR9PC9MaW5rPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgIFxuXG5cbiAgIFxuICAgIDwvZGl2PlxuPC9kaXY+IFxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZEJsb2NrO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGYUNhcnRTaG9wcGluZyIsIkFkQmxvY2siLCJuYW1lIiwicGFnZSIsInNpdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QXJyYXkiLCJjdXJyZW50VGV4dCIsInNldEN1cnJlbnRUZXh0IiwidGV4dEluZGV4Iiwic2V0VGV4dEluZGV4IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ2YXJpYW50cyIsInZhcmlhbnQxIiwic3R5bGluZyIsImhlYWRlcjEiLCJoZWFkZXIyIiwic3ViaGVhZGVyIiwiYm9keTEiLCJib2R5MiIsImN0YTFfbGluayIsImN0YTJfbGluayIsImN0YTFfdGV4dCIsImN0YTJfdGV4dCIsInZhcmlhbnQyIiwidXNlVmFyaWFudDIiLCJ2YXJpYW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJwcmV2SW5kZXgiLCJuZXdJbmRleCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXRoZW1lIiwiaHJlZiIsInRhcmdldCIsInBhc3NIcmVmIiwiaW1nIiwic3JjIiwiaDEiLCJiciIsInNwYW4iLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AdBlock.js\n"));

/***/ })

});