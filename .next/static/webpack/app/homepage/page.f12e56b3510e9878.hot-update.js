"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/homepage/page",{

/***/ "(app-client)/./components/posts.js":
/*!*****************************!*\
  !*** ./components/posts.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/homepage/Homepage.module.css */ \"(app-client)/./app/homepage/Homepage.module.css\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DataFetching() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo\").then((res)=>{\n            console.log(res);\n            setPosts(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"# Onderwerp\"\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"../post\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginLeft: \"\".concat(Math.random() * 1000, \"px\"),\n                            marginRight: \"\".concat(Math.random() * 1000, \"px\"),\n                            marginTop: \"\".concat(Math.random() * 1000, \"px\"),\n                            marginBottom: \"\".concat(Math.random() * 1000, \"px\")\n                        },\n                        className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.title\n                        }, post.id, false, {\n                            fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                        lineNumber: 29,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                    lineNumber: 28,\n                    columnNumber: 25\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(DataFetching, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = DataFetching;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetching);\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRW1EO0FBQ3RCO0FBQ0g7QUFDK0I7QUFFekQsU0FBU00sZUFBZTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDLElBQU07UUFDWkUsaURBQVMsQ0FBQyx3REFDTE0sSUFBSSxDQUFDQyxDQUFBQSxNQUFPO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkgsU0FBU0csSUFBSUcsSUFBSTtRQUNyQixHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQU87WUFDVkosUUFBUUMsR0FBRyxDQUFDRztRQUNoQjtJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXYixnRkFBWTs7MEJBQ3hCLDhEQUFDYzswQkFBRzs7Ozs7O1lBRUFaLE1BQU1hLEdBQUcsQ0FDTEMsQ0FBQUEscUJBQ0ksOERBQUNDO29CQUFFQyxNQUFLOzhCQUNKLDRFQUFDTjt3QkFBSU8sT0FBTzs0QkFDUkMsWUFBWSxHQUF3QixPQUFyQkMsS0FBS0MsTUFBTSxLQUFLLE1BQUs7NEJBQ3BDQyxhQUFhLEdBQXdCLE9BQXJCRixLQUFLQyxNQUFNLEtBQUssTUFBSzs0QkFDckNFLFdBQVcsR0FBd0IsT0FBckJILEtBQUtDLE1BQU0sS0FBSyxNQUFLOzRCQUNuQ0csY0FBYyxHQUF3QixPQUFyQkosS0FBS0MsTUFBTSxLQUFLLE1BQUs7d0JBQzFDO3dCQUFHVCxXQUFXYiwrRUFBVztrQ0FDckIsNEVBQUMwQjtzQ0FBaUJWLEtBQUtXLEtBQUs7MkJBQXBCWCxLQUFLWSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0M7R0FsQ1MzQjtLQUFBQTtBQW9DVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzLmpzP2JlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2FwcC9ob21lcGFnZS9Ib21lcGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly82M2M2OWU0OGRjZGM0NzhlMTVjNTY3MTQubW9ja2FwaS5pby9Qb3N0SW5mbycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICAgIDxoMT4jIE9uZGVyd2VycDwvaDE+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9wb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBgJHtNYXRoLnJhbmRvbSgpICogMTAwMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwMH1weGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUZldGNoaW5nOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImF4aW9zIiwic3R5bGVzIiwiRGF0YUZldGNoaW5nIiwicG9zdHMiLCJzZXRQb3N0cyIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwb3N0IiwiYSIsImhyZWYiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJNYXRoIiwicmFuZG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/posts.js\n"));

/***/ })

});