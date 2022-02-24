"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n\n\nconst Home = ({ properties  })=>{\n    console.log(properties);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"feed-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Places to stay near you\"\n                }, void 0, false, {\n                    fileName: \"/home/rishab/Programmings/NextProjects/airnb/front-end/pages/index.js\",\n                    lineNumber: 8,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"feed\",\n                    children: properties.map((property)=>{})\n                }, void 0, false, {\n                    fileName: \"/home/rishab/Programmings/NextProjects/airnb/front-end/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rishab/Programmings/NextProjects/airnb/front-end/pages/index.js\",\n            lineNumber: 7,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/rishab/Programmings/NextProjects/airnb/front-end/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined));\n};\n//will be passed to the page component as props\nconst getServerSideProps = async ()=>{\n    const query = `*[_type== \"property\"]`;\n    const properties = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    if (!properties.length) {\n        return {\n            props: {\n                properties: []\n            }\n        };\n    } else {\n        return {\n            props: {\n                properties\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFFdEMsS0FBSyxDQUFDQyxJQUFJLElBQUksQ0FBQ0MsQ0FBQUEsVUFBVSxHQUFDLEdBQUksQ0FBQztJQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFVBQVU7SUFDdEIsTUFBTSw2RUFDSkcsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTTs4RkFDbkJELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdCOzs0RkFDN0JDLENBQUU7OEJBQUMsQ0FBdUI7Ozs7Ozs0RkFDMUJGLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFNOzhCQUNuQkosVUFBVSxDQUFDTSxHQUFHLEVBQUVDLFFBQVEsR0FBRyxDQUFDLENBRzVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtOLENBQUM7QUFDRCxFQUErQztBQUN4QyxLQUFLLENBQUNDLGtCQUFrQixhQUFjLENBQUM7SUFDNUMsS0FBSyxDQUFDQyxLQUFLLElBQUkscUJBQXFCO0lBQ3BDLEtBQUssQ0FBQ1QsVUFBVSxHQUFHLEtBQUssQ0FBQ0YsdURBQWtCLENBQUNXLEtBQUs7SUFFbEQsRUFBRSxHQUFFVCxVQUFVLENBQUNXLE1BQU0sRUFBQyxDQUFDO1FBQ2pCLE1BQU0sRUFBQztZQUNUQyxLQUFLLEVBQUMsQ0FBQztnQkFDVFosVUFBVSxFQUFDLENBQUMsQ0FBQztZQUNkLENBQUM7UUFDQyxDQUFDO0lBQ0osQ0FBQyxNQUNHLENBQUM7UUFDSCxNQUFNLEVBQUM7WUFDTlksS0FBSyxFQUFDLENBQUM7Z0JBQ0xaLFVBQVU7WUFDWixDQUFDO1FBQ0YsQ0FBQztJQUNILENBQUM7QUFDRixDQUFDO0FBRUQsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXJibmIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2FuaXR5Q2xpZW50fSBmcm9tICcuLi9zYW5pdHknXG5cbmNvbnN0IEhvbWUgPSAoe3Byb3BlcnRpZXN9KSA9Pntcblx0Y29uc29sZS5sb2cocHJvcGVydGllcylcblx0cmV0dXJuKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuXHRcdCA8ZGl2IGNsYXNzTmFtZT1cImZlZWQtY29udGFpbmVyXCI+XG5cdFx0XHQgPGgxPlBsYWNlcyB0byBzdGF5IG5lYXIgeW91PC9oMT5cblx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImZlZWRcIj5cblx0XHRcdCAge3Byb3BlcnRpZXMubWFwKChwcm9wZXJ0eSk9Pntcblx0XHRcdFx0ICBcblx0XHRcdFx0IFxuXHRcdFx0XHQgfSl9XG5cdFx0XHQgPC9kaXY+XG5cdFx0IDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4vL3dpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+e1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlPT0gXCJwcm9wZXJ0eVwiXWBcbiAgY29uc3QgcHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSlcbiAgXG5cdGlmKCFwcm9wZXJ0aWVzLmxlbmd0aCl7XG4gICAgICAgcmV0dXJue1xuXHQgICAgcHJvcHM6e1xuXHRcdCBwcm9wZXJ0aWVzOltdLFxuXHRcdH1cblx0ICAgfVxuXHR9XG5cdGVsc2V7XG5cdCAgcmV0dXJue1xuXHQgICBwcm9wczp7XG5cdCAgICAgcHJvcGVydGllc1xuXHQgICB9XG5cdCAgfVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuXG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiSG9tZSIsInByb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJwcm9wZXJ0eSIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwiZmV0Y2giLCJsZW5ndGgiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    /**\n   * Find your project ID and dataset in `sanity.json` in your studio project.\n   * These are considered “public”, but you can use environment variables\n   * if you want differ between local dev and production.\n   *\n   * https://nextjs.org/docs/basic-features/environment-variables\n   **/ dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || \"production\",\n    projectId: \"ok0lqsod\" || 0,\n    useCdn: \"development\" === \"production\"\n};\n/**\n * Set up a helper function for generating Image URLs with only the asset reference data in your documents.\n * Read more: https://www.sanity.io/docs/image-url\n **/ const urlFor = (source)=>(0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createImageUrlBuilder)(config).image(source)\n;\n// Set up the client for fetching data in the getProps page functions\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRTtBQUVqRSxLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ2QsRUFNSTs7Ozs7O0lBQUEsR0FDSkMsT0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsMEJBQTBCLElBQUksQ0FBWTtJQUMvREMsU0FBUyxFQUFFSCxVQUF5QyxJQUFJLENBQVU7SUFDbEVLLE1BQU0sRUFaUixDQUFhLGlCQVlzQixDQUFZO0FBTS9DLENBQUM7QUFDRCxFQUdJOzs7RUFBQSxHQUNHLEtBQUssQ0FBQ0MsTUFBTSxJQUFJQyxNQUFNLEdBQUtWLGtFQUFxQixDQUFDQyxNQUFNLEVBQUVVLEtBQUssQ0FBQ0QsTUFBTTs7QUFFNUUsRUFBcUU7QUFDOUQsS0FBSyxDQUFDRSxZQUFZLEdBQUdiLHlEQUFZLENBQUNFLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXJibmIvLi9zYW5pdHkuanM/ODVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNyZWF0ZUltYWdlVXJsQnVpbGRlciB9IGZyb20gXCJuZXh0LXNhbml0eVwiXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIEZpbmQgeW91ciBwcm9qZWN0IElEIGFuZCBkYXRhc2V0IGluIGBzYW5pdHkuanNvbmAgaW4geW91ciBzdHVkaW8gcHJvamVjdC5cbiAgICogVGhlc2UgYXJlIGNvbnNpZGVyZWQg4oCccHVibGlj4oCdLCBidXQgeW91IGNhbiB1c2UgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gICAqIGlmIHlvdSB3YW50IGRpZmZlciBiZXR3ZWVuIGxvY2FsIGRldiBhbmQgcHJvZHVjdGlvbi5cbiAgICpcbiAgICogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZW52aXJvbm1lbnQtdmFyaWFibGVzXG4gICAqKi9cbiAgZGF0YXNldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQgfHwgXCJwcm9kdWN0aW9uXCIsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQgfHwgXCJvazBscXNvZFwiLFxuICB1c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgLyoqXG4gICAqIFNldCB1c2VDZG4gdG8gYGZhbHNlYCBpZiB5b3VyIGFwcGxpY2F0aW9uIHJlcXVpcmUgdGhlIGZyZXNoZXN0IHBvc3NpYmxlXG4gICAqIGRhdGEgYWx3YXlzIChwb3RlbnRpYWxseSBzbGlnaHRseSBzbG93ZXIgYW5kIGEgYml0IG1vcmUgZXhwZW5zaXZlKS5cbiAgICogQXV0aGVudGljYXRlZCByZXF1ZXN0IChsaWtlIHByZXZpZXcpIHdpbGwgYWx3YXlzIGJ5cGFzcyB0aGUgQ0ROXG4gICAqKi9cbn1cbi8qKlxuICogU2V0IHVwIGEgaGVscGVyIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIEltYWdlIFVSTHMgd2l0aCBvbmx5IHRoZSBhc3NldCByZWZlcmVuY2UgZGF0YSBpbiB5b3VyIGRvY3VtZW50cy5cbiAqIFJlYWQgbW9yZTogaHR0cHM6Ly93d3cuc2FuaXR5LmlvL2RvY3MvaW1hZ2UtdXJsXG4gKiovXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gY3JlYXRlSW1hZ2VVcmxCdWlsZGVyKGNvbmZpZykuaW1hZ2Uoc291cmNlKVxuXG4vLyBTZXQgdXAgdGhlIGNsaWVudCBmb3IgZmV0Y2hpbmcgZGF0YSBpbiB0aGUgZ2V0UHJvcHMgcGFnZSBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBjcmVhdGVDbGllbnQoY29uZmlnKVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZUltYWdlVXJsQnVpbGRlciIsImNvbmZpZyIsImRhdGFzZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0FOSVRZX0RBVEFTRVQiLCJwcm9qZWN0SWQiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsInVzZUNkbiIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwic2FuaXR5Q2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sanity.js\n");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();