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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/homepage/Homepage.module.css */ \"(app-client)/./app/homepage/Homepage.module.css\");\n/* harmony import */ var _app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// const url = 'https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo';\n// const dataRequest = () => {\n// const fetchData = async () => {\n//     try {\n//         const res = await axios(url);\n//         const data = res.data;\n//         console.log(res);\n//     } catch (error) {\n//         console.log(error.res);\n//     }\n// }\n// useEffect(() => {\n//     fetchData();\n// }, []);\n// }\nfunction DataFetching() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://63c69e48dcdc478e15c56714.mockapi.io/PostInfo\").then((res)=>{\n            console.log(res);\n            setPosts(res.data);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, []);\n    let randomLeftMargin;\n    // const interval = setInterval(function() {\n    //     // method to be executed;\n    //     if (randomLeftMargin !== `${Math.random() * 1000}px`) {\n    //         randomLeftMargin = `${Math.random() * 1000}px`;\n    //     }\n    //   }, 200);\n    function newRandomMarginLeft() {\n        let randomLeftMargin = \"\".concat(Math.random() * 1000, \"px\");\n        return randomLeftMargin;\n    // console.log('rML', randomLeftMargin);\n    }\n    setInterval(newRandomMarginLeft, 2000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().posts),\n        children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginLeft: \"\".concat(Math.random() * 1000, \"px\"),\n                        marginRight: \"\".concat(Math.random() * 1000, \"px\"),\n                        marginTop: \"\".concat(Math.random() * 1000, \"px\"),\n                        marginBottom: \"\".concat(Math.random() * 1000, \"px\")\n                    },\n                    className: (_app_homepage_Homepage_module_css__WEBPACK_IMPORTED_MODULE_3___default().post),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"\",\n                        children: post.title\n                    }, post.id, false, {\n                        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                        lineNumber: 69,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                    lineNumber: 63,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n                lineNumber: 62,\n                columnNumber: 25\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\xampp\\\\htdocs\\\\Dev2Dev\\\\components\\\\posts.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(DataFetching, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = DataFetching;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataFetching);\nvar _c;\n$RefreshReg$(_c, \"DataFetching\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRW1EO0FBQ3RCO0FBQ0g7QUFDK0I7QUFFekQsc0VBQXNFO0FBRXRFLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsWUFBWTtBQUNaLHdDQUF3QztBQUN4QyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4QixrQ0FBa0M7QUFDbEMsUUFBUTtBQUNSLElBQUk7QUFFSixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLFVBQVU7QUFDVixJQUFJO0FBRUosU0FBU00sZUFBZTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDLElBQU07UUFDWkUsaURBQVMsQ0FBQyx3REFDTE0sSUFBSSxDQUFDQyxDQUFBQSxNQUFPO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkgsU0FBU0csSUFBSUcsSUFBSTtRQUNyQixHQUNDQyxLQUFLLENBQUNDLENBQUFBLE1BQU87WUFDVkosUUFBUUMsR0FBRyxDQUFDRztRQUNoQjtJQUNSLEdBQUcsRUFBRTtJQUVMLElBQUlDO0lBRUosNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyw4REFBOEQ7SUFDOUQsMERBQTBEO0lBQzFELFFBQVE7SUFDUixhQUFhO0lBRWIsU0FBU0Msc0JBQXNCO1FBQzNCLElBQUlELG1CQUFtQixHQUF3QixPQUFyQkUsS0FBS0MsTUFBTSxLQUFLLE1BQUs7UUFDL0MsT0FBT0g7SUFDUCx3Q0FBd0M7SUFDNUM7SUFDQUksWUFBWUgscUJBQXFCO0lBR2pDLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFXbEIsZ0ZBQVk7a0JBRXBCRSxNQUFNaUIsR0FBRyxDQUNMQyxDQUFBQSxxQkFDSSw4REFBQ0M7Z0JBQUVDLE1BQUs7MEJBQ0osNEVBQUNMO29CQUFJTSxPQUFPO3dCQUNSQyxZQUFZLEdBQXdCLE9BQXJCVixLQUFLQyxNQUFNLEtBQUssTUFBSzt3QkFDcENVLGFBQWEsR0FBd0IsT0FBckJYLEtBQUtDLE1BQU0sS0FBSyxNQUFLO3dCQUNyQ1csV0FBVyxHQUF3QixPQUFyQlosS0FBS0MsTUFBTSxLQUFLLE1BQUs7d0JBQ25DWSxjQUFjLEdBQXdCLE9BQXJCYixLQUFLQyxNQUFNLEtBQUssTUFBSztvQkFDMUM7b0JBQUdHLFdBQVdsQiwrRUFBVzs4QkFDckIsNEVBQUNxQjt3QkFBRUMsTUFBSztrQ0FBa0JGLEtBQUtRLEtBQUs7dUJBQXBCUixLQUFLUyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2RDtHQW5EUzVCO0tBQUFBO0FBcURULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMuanM/YmU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXBwL2hvbWVwYWdlL0hvbWVwYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbnN0IHVybCA9ICdodHRwczovLzYzYzY5ZTQ4ZGNkYzQ3OGUxNWM1NjcxNC5tb2NrYXBpLmlvL1Bvc3RJbmZvJztcclxuXHJcbi8vIGNvbnN0IGRhdGFSZXF1ZXN0ID0gKCkgPT4ge1xyXG4vLyBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHVybCk7XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlcyk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBmZXRjaERhdGEoKTtcclxuLy8gfSwgW10pO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBEYXRhRmV0Y2hpbmcoKSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly82M2M2OWU0OGRjZGM0NzhlMTVjNTY3MTQubW9ja2FwaS5pby9Qb3N0SW5mbycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0UG9zdHMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGxldCByYW5kb21MZWZ0TWFyZ2luO1xyXG5cclxuICAgIC8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgLy8gbWV0aG9kIHRvIGJlIGV4ZWN1dGVkO1xyXG4gICAgLy8gICAgIGlmIChyYW5kb21MZWZ0TWFyZ2luICE9PSBgJHtNYXRoLnJhbmRvbSgpICogMTAwMH1weGApIHtcclxuICAgIC8vICAgICAgICAgcmFuZG9tTGVmdE1hcmdpbiA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0sIDIwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3UmFuZG9tTWFyZ2luTGVmdCgpIHtcclxuICAgICAgICBsZXQgcmFuZG9tTGVmdE1hcmdpbiA9IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YDtcclxuICAgICAgICByZXR1cm4gcmFuZG9tTGVmdE1hcmdpbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnck1MJywgcmFuZG9tTGVmdE1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBzZXRJbnRlcnZhbChuZXdSYW5kb21NYXJnaW5MZWZ0LCAyMDAwKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9zdHMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGAke01hdGgucmFuZG9tKCkgKiAxMDAwfXB4YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogYCR7TWF0aC5yYW5kb20oKSAqIDEwMDB9cHhgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIga2V5PXtwb3N0LmlkfT57cG9zdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhRmV0Y2hpbmc7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiYXhpb3MiLCJzdHlsZXMiLCJEYXRhRmV0Y2hpbmciLCJwb3N0cyIsInNldFBvc3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJyYW5kb21MZWZ0TWFyZ2luIiwibmV3UmFuZG9tTWFyZ2luTGVmdCIsIk1hdGgiLCJyYW5kb20iLCJzZXRJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJhIiwiaHJlZiIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/posts.js\n"));

/***/ })

});