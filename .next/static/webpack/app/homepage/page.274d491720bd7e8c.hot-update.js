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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/homepage/Homepage.module.css */ \"(app-client)/./app/homepage/Homepage.module.css\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// const url = 'https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo';\n// const dataRequest = () => {\n// const fetchData = async () => {\n//     try {\n//         const res = await axios(url);\n//         const data = res.data;\n//         console.log(res);\n//     } catch (error) {\n//         console.log(error.res);\n//     }\n// }\n// useEffect(() => {\n//     fetchData();\n// }, []);\n// }\nfunction DataFetching() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo\").then((res)=>{\n            console.log(res);\n            setPosts(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    let randomLeftMargin;\n    // const interval = setInterval(function() {\n    //     // method to be executed;\n    //     if (randomLeftMargin !== `${Math.random() * 1000}px`) {\n    //         randomLeftMargin = `${Math.random() * 1000}px`;\n    //     }\n    //   }, 200);\n    function newRandomMarginLeft() {\n        let randomLeftMargin = \"\".concat(Math.random() * 1000, \"px\");\n        return randomLeftMargin;\n    // console.log('rML', randomLeftMargin);\n    }\n    setInterval(newRandomMarginLeft, 2000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: \"\".concat(Math.random() * 1000, \"px\"),\n                    marginRight: \"\".concat(Math.random() * 500, \"px\"),\n                    marginTop: \"\".concat(Math.random() * 100, \"px\"),\n                    marginBottom: \"\".concat(Math.random() * 100, \"px\")\n                },\n                className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: post.title\n                }, post.id, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                    lineNumber: 67,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                lineNumber: 61,\n                columnNumber: 25\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(DataFetching, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = DataFetching;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetching);\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRW1EO0FBQ3pCO0FBQytCO0FBRXpELHNFQUFzRTtBQUV0RSw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWix3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixJQUFJO0FBRUosb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsSUFBSTtBQUVKLFNBQVNLLGVBQWU7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pDLGlEQUFTLENBQUMsd0RBQ0xNLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pILFNBQVNHLElBQUlHLElBQUk7UUFDckIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPO1lBQ1ZKLFFBQVFDLEdBQUcsQ0FBQ0c7UUFDaEI7SUFDUixHQUFHLEVBQUU7SUFFTCxJQUFJQztJQUVKLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsOERBQThEO0lBQzlELDBEQUEwRDtJQUMxRCxRQUFRO0lBQ1IsYUFBYTtJQUViLFNBQVNDLHNCQUFzQjtRQUMzQixJQUFJRCxtQkFBbUIsR0FBd0IsT0FBckJFLEtBQUtDLE1BQU0sS0FBSyxNQUFLO1FBQy9DLE9BQU9IO0lBQ1Asd0NBQXdDO0lBQzVDO0lBQ0FJLFlBQVlILHFCQUFxQjtJQUdqQyxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBV2xCLGdGQUFZO2tCQUVwQkUsTUFBTWlCLEdBQUcsQ0FDTEMsQ0FBQUEscUJBQ0ksOERBQUNIO2dCQUFJSSxPQUFPO29CQUNSQyxZQUFZLEdBQXdCLE9BQXJCUixLQUFLQyxNQUFNLEtBQUssTUFBSztvQkFDcENRLGFBQWEsR0FBdUIsT0FBcEJULEtBQUtDLE1BQU0sS0FBSyxLQUFJO29CQUNwQ1MsV0FBVyxHQUF1QixPQUFwQlYsS0FBS0MsTUFBTSxLQUFLLEtBQUk7b0JBQ2xDVSxjQUFjLEdBQXVCLE9BQXBCWCxLQUFLQyxNQUFNLEtBQUssS0FBSTtnQkFDekM7Z0JBQUdHLFdBQVdsQiwrRUFBVzswQkFDckIsNEVBQUMwQjs4QkFBaUJOLEtBQUtPLEtBQUs7bUJBQXBCUCxLQUFLUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFNM0M7R0FoRFMzQjtLQUFBQTtBQWtEVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzLmpzP2JlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hcHAvaG9tZXBhZ2UvSG9tZXBhZ2UubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29uc3QgdXJsID0gJ2h0dHBzOi8vNjNjNjllNDhkY2RjNDc4ZTE1YzU2NzE0Lm1vY2thcGkuaW8vUG9zdEluZm8nO1xyXG5cclxuLy8gY29uc3QgZGF0YVJlcXVlc3QgPSAoKSA9PiB7XHJcbi8vIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3ModXJsKTtcclxuLy8gICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGZldGNoRGF0YSgpO1xyXG4vLyB9LCBbXSk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIERhdGFGZXRjaGluZygpIHtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovLzYzYzY5ZTQ4ZGNkYzQ3OGUxNWM1NjcxNC5tb2NrYXBpLmlvL1Bvc3RJbmZvJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgbGV0IHJhbmRvbUxlZnRNYXJnaW47XHJcblxyXG4gICAgLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAvLyBtZXRob2QgdG8gYmUgZXhlY3V0ZWQ7XHJcbiAgICAvLyAgICAgaWYgKHJhbmRvbUxlZnRNYXJnaW4gIT09IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YCkge1xyXG4gICAgLy8gICAgICAgICByYW5kb21MZWZ0TWFyZ2luID0gYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSwgMjAwKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gbmV3UmFuZG9tTWFyZ2luTGVmdCgpIHtcclxuICAgICAgICBsZXQgcmFuZG9tTGVmdE1hcmdpbiA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YDtcclxuICAgICAgICByZXR1cm4gcmFuZG9tTGVmdE1hcmdpbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnck1MJywgcmFuZG9tTGVmdE1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBzZXRJbnRlcnZhbChuZXdSYW5kb21NYXJnaW5MZWZ0LCAyMDAwKTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBvc3RzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICBwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBgJHtNYXRoLnJhbmRvbSgpICogNTAwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMH1weGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGAke01hdGgucmFuZG9tKCkgKiAxMDB9cHhgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtwb3N0LmlkfT57cG9zdC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhRmV0Y2hpbmc7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInN0eWxlcyIsIkRhdGFGZXRjaGluZyIsInBvc3RzIiwic2V0UG9zdHMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVyciIsInJhbmRvbUxlZnRNYXJnaW4iLCJuZXdSYW5kb21NYXJnaW5MZWZ0IiwiTWF0aCIsInJhbmRvbSIsInNldEludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicCIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/posts.js\n"));

/***/ })

});