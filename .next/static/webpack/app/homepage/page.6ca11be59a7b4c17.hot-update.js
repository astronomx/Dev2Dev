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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/homepage/Homepage.module.css */ \"(app-client)/./app/homepage/Homepage.module.css\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// const url = 'https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo';\n// const dataRequest = () => {\n// const fetchData = async () => {\n//     try {\n//         const res = await axios(url);\n//         const data = res.data;\n//         console.log(res);\n//     } catch (error) {\n//         console.log(error.res);\n//     }\n// }\n// useEffect(() => {\n//     fetchData();\n// }, []);\n// }\nfunction DataFetching() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo\").then((res)=>{\n            console.log(res);\n            setPosts(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    let randomLeftMargin;\n    // const interval = setInterval(function() {\n    //     // method to be executed;\n    //     if (randomLeftMargin !== `${Math.random() * 1000}px`) {\n    //         randomLeftMargin = `${Math.random() * 1000}px`;\n    //     }\n    //   }, 200);\n    function newRandomMarginLeft() {\n        let randomLeftMargin = \"\".concat(Math.random() * 1000, \"px\");\n        return randomLeftMargin;\n    // console.log('rML', randomLeftMargin);\n    }\n    setInterval(newRandomMarginLeft, 2000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginLeft: \"\".concat(Math.random() * 1000, \"px\"),\n                    marginRight: \"\".concat(Math.random() * 500, \"px\"),\n                    marginTop: \"\".concat(Math.random() * 100, \"px\"),\n                    marginBottom: \"\".concat(Math.random() * 100, \"px\")\n                },\n                className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.title\n                    }, post.id, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                        lineNumber: 67,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        to: \"../components/post.js\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                        lineNumber: 68,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                lineNumber: 61,\n                columnNumber: 25\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(DataFetching, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = DataFetching;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetching);\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRW1EO0FBQ3pCO0FBQytCO0FBRXpELHNFQUFzRTtBQUV0RSw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWix3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixJQUFJO0FBRUosb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixVQUFVO0FBQ1YsSUFBSTtBQUVKLFNBQVNLLGVBQWU7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pDLGlEQUFTLENBQUMsd0RBQ0xNLElBQUksQ0FBQ0MsQ0FBQUEsTUFBTztZQUNUQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pILFNBQVNHLElBQUlHLElBQUk7UUFDckIsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPO1lBQ1ZKLFFBQVFDLEdBQUcsQ0FBQ0c7UUFDaEI7SUFDUixHQUFHLEVBQUU7SUFFTCxJQUFJQztJQUVKLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsOERBQThEO0lBQzlELDBEQUEwRDtJQUMxRCxRQUFRO0lBQ1IsYUFBYTtJQUViLFNBQVNDLHNCQUFzQjtRQUMzQixJQUFJRCxtQkFBbUIsR0FBd0IsT0FBckJFLEtBQUtDLE1BQU0sS0FBSyxNQUFLO1FBQy9DLE9BQU9IO0lBQ1Asd0NBQXdDO0lBQzVDO0lBQ0FJLFlBQVlILHFCQUFxQjtJQUdqQyxxQkFDSSw4REFBQ0k7UUFBSUMsV0FBV2xCLGdGQUFZO2tCQUVwQkUsTUFBTWlCLEdBQUcsQ0FDTEMsQ0FBQUEscUJBQ0ksOERBQUNIO2dCQUFJSSxPQUFPO29CQUNSQyxZQUFZLEdBQXdCLE9BQXJCUixLQUFLQyxNQUFNLEtBQUssTUFBSztvQkFDcENRLGFBQWEsR0FBdUIsT0FBcEJULEtBQUtDLE1BQU0sS0FBSyxLQUFJO29CQUNwQ1MsV0FBVyxHQUF1QixPQUFwQlYsS0FBS0MsTUFBTSxLQUFLLEtBQUk7b0JBQ2xDVSxjQUFjLEdBQXVCLE9BQXBCWCxLQUFLQyxNQUFNLEtBQUssS0FBSTtnQkFDekM7Z0JBQUdHLFdBQVdsQiwrRUFBVzs7a0NBQ3JCLDhEQUFDMEI7a0NBQWlCTixLQUFLTyxLQUFLO3VCQUFwQlAsS0FBS1EsRUFBRTs7Ozs7a0NBQ2YsOERBQUNDO3dCQUFLQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQU10QztHQWpEUzdCO0tBQUFBO0FBbURULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMuanM/YmU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2FwcC9ob21lcGFnZS9Ib21lcGFnZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBjb25zdCB1cmwgPSAnaHR0cHM6Ly82M2M2OWU0OGRjZGM0NzhlMTVjNTY3MTQubW9ja2FwaS5pby9Qb3N0SW5mbyc7XHJcblxyXG4vLyBjb25zdCBkYXRhUmVxdWVzdCA9ICgpID0+IHtcclxuLy8gY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh1cmwpO1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXMpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZmV0Y2hEYXRhKCk7XHJcbi8vIH0sIFtdKTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gRGF0YUZldGNoaW5nKCkge1xyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vNjNjNjllNDhkY2RjNDc4ZTE1YzU2NzE0Lm1vY2thcGkuaW8vUG9zdEluZm8nKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBsZXQgcmFuZG9tTGVmdE1hcmdpbjtcclxuXHJcbiAgICAvLyBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIC8vIG1ldGhvZCB0byBiZSBleGVjdXRlZDtcclxuICAgIC8vICAgICBpZiAocmFuZG9tTGVmdE1hcmdpbiAhPT0gYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgKSB7XHJcbiAgICAvLyAgICAgICAgIHJhbmRvbUxlZnRNYXJnaW4gPSBgJHtNYXRoLnJhbmRvbSgpICogMTAwMH1weGA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9LCAyMDApO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBuZXdSYW5kb21NYXJnaW5MZWZ0KCkge1xyXG4gICAgICAgIGxldCByYW5kb21MZWZ0TWFyZ2luID0gYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgO1xyXG4gICAgICAgIHJldHVybiByYW5kb21MZWZ0TWFyZ2luO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyTUwnLCByYW5kb21MZWZ0TWFyZ2luKTtcclxuICAgIH1cclxuICAgIHNldEludGVydmFsKG5ld1JhbmRvbU1hcmdpbkxlZnQsIDIwMDApO1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zdHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGAke01hdGgucmFuZG9tKCkgKiA1MDB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogYCR7TWF0aC5yYW5kb20oKSAqIDEwMH1weGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Bvc3QuaWR9Pntwb3N0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnLi4vY29tcG9uZW50cy9wb3N0LmpzJ30+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUZldGNoaW5nOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJzdHlsZXMiLCJEYXRhRmV0Y2hpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJyYW5kb21MZWZ0TWFyZ2luIiwibmV3UmFuZG9tTWFyZ2luTGVmdCIsIk1hdGgiLCJyYW5kb20iLCJzZXRJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInAiLCJ0aXRsZSIsImlkIiwiTGluayIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/posts.js\n"));

/***/ })

});