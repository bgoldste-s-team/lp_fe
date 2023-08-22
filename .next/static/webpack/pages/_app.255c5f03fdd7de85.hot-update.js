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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppContext\": function() { return /* binding */ AppContext; },\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var _data_site_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/site_data.json */ \"./src/data/site_data.json\");\n/* harmony import */ var _contexts_SiteContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SiteContext */ \"./src/contexts/SiteContext.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);\n// pages/_app.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_site_data_json__WEBPACK_IMPORTED_MODULE_5__.theme);\n    const [siteName, setSiteName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_site_data_json__WEBPACK_IMPORTED_MODULE_5__.name);\n    const [siteDesc, setSiteDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_site_data_json__WEBPACK_IMPORTED_MODULE_5__.description);\n    const [siteImgUrl, setSiteImgUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_site_data_json__WEBPACK_IMPORTED_MODULE_5__.site_image);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (router.query.theme) {\n            setTheme(router.query.theme);\n        }\n        if (router.query.siteName) {\n            setSiteName(router.query.siteName);\n        }\n        if (router.query.siteDesc) {\n            setSiteDesc(router.query.siteDesc);\n        }\n        if (router.query.siteImgUrl) {\n            setSiteImgUrl(router.query.siteImgUrl);\n        }\n        const fetchSiteData = async ()=>{\n            try {\n                const siteId = \"55\";\n                const baseUrl = \"http://127.0.0.1:8000\";\n                const response = await fetch(\"\".concat(baseUrl, \"/api/sites/\").concat(siteId));\n                // console.log(process.env)\n                // const response = await fetch(`${baseUrl}/api/sites/${siteId}/`); // Replace with your API endpoint\n                const data = await response.json();\n                setTheme(data.theme);\n                setSiteName(data.name);\n                setSiteDesc(data.description);\n                setSiteImgUrl(data.site_image);\n            } catch (error) {\n                console.error(\"Error fetching site data:\", error);\n            }\n        };\n        fetchSiteData();\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        attribute: \"class\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n            value: {\n                siteName,\n                theme,\n                siteDesc,\n                siteImgUrl\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-theme\": theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/ben/cs_fe/src/pages/_app.js\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/cs_fe/src/pages/_app.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ben/cs_fe/src/pages/_app.js\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/cs_fe/src/pages/_app.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this);\n}\n_s(MyApp, \"RtPxEy13/f2JbP/U01vE0Qe24dQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7O0FBQzBDO0FBQ25CO0FBQ0k7QUFDRjtBQUNJO0FBQ0k7QUFDaEI7QUFJMUIsTUFBTVEsMkJBQWFSLG9EQUFhQSxHQUFHO0FBQzNCLFNBQVNTLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQ0ksdURBQWM7SUFDakQsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDSSxzREFBYTtJQUN0RCxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDSSw2REFBb0I7SUFDN0QsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQ0ksNERBQW1CO0lBS2hFTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSVcsT0FBT1ksS0FBSyxDQUFDWCxLQUFLLEVBQUU7WUFDcEJDLFNBQVNGLE9BQU9ZLEtBQUssQ0FBQ1gsS0FBSztRQUMvQixDQUFDO1FBQ0QsSUFBSUQsT0FBT1ksS0FBSyxDQUFDVCxRQUFRLEVBQUU7WUFDdkJDLFlBQVlKLE9BQU9ZLEtBQUssQ0FBQ1QsUUFBUTtRQUNyQyxDQUFDO1FBQ0QsSUFBSUgsT0FBT1ksS0FBSyxDQUFDTixRQUFRLEVBQUU7WUFDdkJDLFlBQVlQLE9BQU9ZLEtBQUssQ0FBQ04sUUFBUTtRQUNyQyxDQUFDO1FBQ0QsSUFBSU4sT0FBT1ksS0FBSyxDQUFDSCxVQUFVLEVBQUU7WUFDekJDLGNBQWNWLE9BQU9ZLEtBQUssQ0FBQ0gsVUFBVTtRQUN6QyxDQUFDO1FBQ0QsTUFBTUksZ0JBQWdCLFVBQVk7WUFDOUIsSUFBSTtnQkFFQSxNQUFNQyxTQUFTQyxJQUErQjtnQkFDOUMsTUFBTUcsVUFBVUgsdUJBQStCO2dCQUUvQyxNQUFNSyxXQUFXLE1BQU1DLE1BQU0sR0FBd0JQLE9BQXJCSSxTQUFRLGVBQW9CLE9BQVBKO2dCQUNyRCwyQkFBMkI7Z0JBQzNCLHFHQUFxRztnQkFDckcsTUFBTVEsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ3JCLFNBQVNvQixLQUFLckIsS0FBSztnQkFDbkJHLFlBQVlrQixLQUFLakIsSUFBSTtnQkFDckJFLFlBQVllLEtBQUtkLFdBQVc7Z0JBQzVCRSxjQUFjWSxLQUFLWCxVQUFVO1lBQ2pDLEVBQUUsT0FBT2EsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDL0M7UUFDSjtRQUVBWDtJQUNKLEdBQUc7UUFBQ2IsT0FBT1ksS0FBSztLQUFDO0lBSWpCLHFCQUVJLDhEQUFDcEIsc0RBQWFBO1FBQUNrQyxXQUFVO2tCQUNyQiw0RUFBQzlCLFdBQVcrQixRQUFRO1lBQUNDLE9BQU87Z0JBQUV6QjtnQkFBVUY7Z0JBQU9LO2dCQUFVRztZQUFXO3NCQUNoRSw0RUFBQ29CO2dCQUFJQyxjQUFZN0I7MEJBQ2IsNEVBQUNIO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QyxDQUFDO0dBMUR1QkY7O1FBQ0xOLGtEQUFTQTs7O0tBREpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHNpdGVEYXRhIGZyb20gXCJAL2RhdGEvc2l0ZV9kYXRhLmpzb25cIjtcbmltcG9ydCBTaXRlQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0cy9TaXRlQ29udGV4dFwiO1xuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5cblxuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShzaXRlRGF0YS50aGVtZSk7XG4gICAgY29uc3QgW3NpdGVOYW1lLCBzZXRTaXRlTmFtZV0gPSB1c2VTdGF0ZShzaXRlRGF0YS5uYW1lKTtcbiAgICBjb25zdCBbc2l0ZURlc2MsIHNldFNpdGVEZXNjXSA9IHVzZVN0YXRlKHNpdGVEYXRhLmRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBbc2l0ZUltZ1VybCwgc2V0U2l0ZUltZ1VybF0gPSB1c2VTdGF0ZShzaXRlRGF0YS5zaXRlX2ltYWdlKTtcblxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXIucXVlcnkudGhlbWUpIHtcbiAgICAgICAgICAgIHNldFRoZW1lKHJvdXRlci5xdWVyeS50aGVtZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnNpdGVOYW1lKSB7XG4gICAgICAgICAgICBzZXRTaXRlTmFtZShyb3V0ZXIucXVlcnkuc2l0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZXIucXVlcnkuc2l0ZURlc2MpIHtcbiAgICAgICAgICAgIHNldFNpdGVEZXNjKHJvdXRlci5xdWVyeS5zaXRlRGVzYyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zaXRlSW1nVXJsKSB7XG4gICAgICAgICAgICBzZXRTaXRlSW1nVXJsKHJvdXRlci5xdWVyeS5zaXRlSW1nVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaFNpdGVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNpdGVJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfSUQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VVUkw7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9zaXRlcy8ke3NpdGVJZH1gKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudilcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9zaXRlcy8ke3NpdGVJZH0vYCk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBlbmRwb2ludFxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0VGhlbWUoZGF0YS50aGVtZSk7XG4gICAgICAgICAgICAgICAgc2V0U2l0ZU5hbWUoZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICBzZXRTaXRlRGVzYyhkYXRhLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZXRTaXRlSW1nVXJsKGRhdGEuc2l0ZV9pbWFnZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNpdGUgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hTaXRlRGF0YSgpO1xuICAgIH0sIFtyb3V0ZXIucXVlcnldKVxuXG5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cbiAgICAgICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNpdGVOYW1lLCB0aGVtZSwgc2l0ZURlc2MsIHNpdGVJbWdVcmwgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuXG4gICAgKVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlRoZW1lUHJvdmlkZXIiLCJMYXlvdXQiLCJzaXRlRGF0YSIsIlNpdGVDb250ZXh0IiwiQXBwQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidGhlbWUiLCJzZXRUaGVtZSIsInNpdGVOYW1lIiwic2V0U2l0ZU5hbWUiLCJuYW1lIiwic2l0ZURlc2MiLCJzZXRTaXRlRGVzYyIsImRlc2NyaXB0aW9uIiwic2l0ZUltZ1VybCIsInNldFNpdGVJbWdVcmwiLCJzaXRlX2ltYWdlIiwicXVlcnkiLCJmZXRjaFNpdGVEYXRhIiwic2l0ZUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfSUQiLCJiYXNlVXJsIiwiTkVYVF9QVUJMSUNfQkFTRVVSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImF0dHJpYnV0ZSIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJkYXRhLXRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});