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
exports.id = "pages/property/[slug]";
exports.ids = ["pages/property/[slug]"];
exports.modules = {

/***/ "./pages/property/[slug].js":
/*!**********************************!*\
  !*** ./pages/property/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"./sanity.js\");\n\n\nconst Property = ({ title , loaction , propertyType , mainImage , images , price , beds , bedrooms , description , host , reviews ,  })=>{\n    console.log(title);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: title\n    }, void 0, false, {\n        fileName: \"/home/rishab/Programmings/NextProjects/airnb/front-end/pages/property/[slug].js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined));\n};\nconst getServerSideProps = async (pageContext)=>{\n    const pageSlug = pageContext.query.slug;\n    const query = `*[_type == 'property' && slug.current == $pageSlug][0]{\n   title,\n   location,\n   propertyType,\n   mainImage,\n   images,\n   price,\n   beds,\n   bedsrooms,\n   description,\n   host->{\n     _id,\n\t name,\n\t slug,\n\t image,\n   },\n   reviews[]{\n    ...,\n\ttraveller->{\n\t _id,\n\t name,\n\t slug,\n\t image,\n\t}\n   }\n}`;\n    const property = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query, {\n        pageSlug\n    });\n    if (!property) {\n        return {\n            props: null,\n            notFound: true\n        };\n    } else {\n        return {\n            props: {\n                title: property.title,\n                location: property.location,\n                property: property.propertyType,\n                mainImage: property.mainImage,\n                images: property.images,\n                price: property.price,\n                beds: property.beds,\n                bedsrooms: property.bedrooms,\n                description: property.description,\n                host: property.host,\n                reviews: property.reviews\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Property);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9wZXJ0eS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ3pDLEtBQUssQ0FBQ0MsUUFBUSxJQUFJLENBQUMsQ0FDbEJDLEtBQUssR0FDTEMsUUFBUSxHQUNSQyxZQUFZLEdBQ1pDLFNBQVMsR0FDVEMsTUFBTSxHQUNOQyxLQUFLLEdBQ0xDLElBQUksR0FDSkMsUUFBUSxHQUNSQyxXQUFXLEdBQ1hDLElBQUksR0FDSkMsT0FBTyxJQUNSLENBQUMsR0FBSyxDQUFDO0lBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixLQUFLO0lBQ2pCLE1BQU0sNkVBQ0phLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVc7a0JBQ3hCZCxLQUFLOzs7Ozs7QUFHVCxDQUFDO0FBR00sS0FBSyxDQUFDZSxrQkFBa0IsVUFBUUMsV0FBVyxHQUFJLENBQUM7SUFDdEQsS0FBSyxDQUFDQyxRQUFRLEdBQUdELFdBQVcsQ0FBQ0UsS0FBSyxDQUFDQyxJQUFJO0lBQ3ZDLEtBQUssQ0FBQ0QsS0FBSyxJQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUJiO0lBQ0EsS0FBSyxDQUFDRSxRQUFRLEdBQUUsS0FBSyxDQUFDdEIsdURBQWtCLENBQUNvQixLQUFLLEVBQUMsQ0FBQ0Q7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFFekQsRUFBRSxHQUFFRyxRQUFRLEVBQUMsQ0FBQztRQUNaLE1BQU0sRUFBQztZQUNMRSxLQUFLLEVBQUMsSUFBSTtZQUNiQyxRQUFRLEVBQUMsSUFBSTtRQUNaLENBQUM7SUFDSCxDQUFDLE1BQ0csQ0FBQztRQUNKLE1BQU0sQ0FBQyxDQUFDO1lBQ1BELEtBQUssRUFBQyxDQUFDO2dCQUNOdEIsS0FBSyxFQUFDb0IsUUFBUSxDQUFDcEIsS0FBSztnQkFDcEJ3QixRQUFRLEVBQUNKLFFBQVEsQ0FBQ0ksUUFBUTtnQkFDMUJKLFFBQVEsRUFBQ0EsUUFBUSxDQUFDbEIsWUFBWTtnQkFDOUJDLFNBQVMsRUFBQ2lCLFFBQVEsQ0FBQ2pCLFNBQVM7Z0JBQzVCQyxNQUFNLEVBQUNnQixRQUFRLENBQUNoQixNQUFNO2dCQUN0QkMsS0FBSyxFQUFDZSxRQUFRLENBQUNmLEtBQUs7Z0JBQ3BCQyxJQUFJLEVBQUNjLFFBQVEsQ0FBQ2QsSUFBSTtnQkFDbEJtQixTQUFTLEVBQUNMLFFBQVEsQ0FBQ2IsUUFBUTtnQkFDM0JDLFdBQVcsRUFBQ1ksUUFBUSxDQUFDWixXQUFXO2dCQUNoQ0MsSUFBSSxFQUFDVyxRQUFRLENBQUNYLElBQUk7Z0JBQ2xCQyxPQUFPLEVBQUNVLFFBQVEsQ0FBQ1YsT0FBTztZQUV6QixDQUFDO1FBRUYsQ0FBQztJQUNGLENBQUM7QUFDRixDQUFDO0FBRUQsaUVBQWVYLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXJibmIvLi9wYWdlcy9wcm9wZXJ0eS9bc2x1Z10uanM/NGVhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Nhbml0eUNsaWVudH0gZnJvbSBcIi4uLy4uL3Nhbml0eVwiXG5jb25zdCBQcm9wZXJ0eSA9ICh7XG5cdHRpdGxlLFxuXHRsb2FjdGlvbixcblx0cHJvcGVydHlUeXBlLFxuXHRtYWluSW1hZ2UsXG5cdGltYWdlcyxcblx0cHJpY2UsXG5cdGJlZHMsXG5cdGJlZHJvb21zLFxuXHRkZXNjcmlwdGlvbixcblx0aG9zdCxcblx0cmV2aWV3cyxcbn0pID0+IHtcblx0Y29uc29sZS5sb2codGl0bGUpXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdHt0aXRsZX1cblx0ICAgIDwvZGl2PlxuXHQpXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcz1hc3luYyAocGFnZUNvbnRleHQpID0+e1xuIGNvbnN0IHBhZ2VTbHVnID0gcGFnZUNvbnRleHQucXVlcnkuc2x1Z1xuIGNvbnN0IHF1ZXJ5PWAqW190eXBlID09ICdwcm9wZXJ0eScgJiYgc2x1Zy5jdXJyZW50ID09ICRwYWdlU2x1Z11bMF17XG4gICB0aXRsZSxcbiAgIGxvY2F0aW9uLFxuICAgcHJvcGVydHlUeXBlLFxuICAgbWFpbkltYWdlLFxuICAgaW1hZ2VzLFxuICAgcHJpY2UsXG4gICBiZWRzLFxuICAgYmVkc3Jvb21zLFxuICAgZGVzY3JpcHRpb24sXG4gICBob3N0LT57XG4gICAgIF9pZCxcblx0IG5hbWUsXG5cdCBzbHVnLFxuXHQgaW1hZ2UsXG4gICB9LFxuICAgcmV2aWV3c1tde1xuICAgIC4uLixcblx0dHJhdmVsbGVyLT57XG5cdCBfaWQsXG5cdCBuYW1lLFxuXHQgc2x1Zyxcblx0IGltYWdlLFxuXHR9XG4gICB9XG59YFxuXHRjb25zdCBwcm9wZXJ0eT0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LHtwYWdlU2x1Z30pXG5cblx0aWYoIXByb3BlcnR5KXtcblx0ICByZXR1cm57XG5cdCAgICBwcm9wczpudWxsLFxuXHRcdG5vdEZvdW5kOnRydWUsXG5cdCAgfVxuXHR9XG5cdGVsc2V7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOntcblx0XHRcdFx0dGl0bGU6cHJvcGVydHkudGl0bGUsXG5cdFx0XHRcdGxvY2F0aW9uOnByb3BlcnR5LmxvY2F0aW9uLFxuXHRcdFx0XHRwcm9wZXJ0eTpwcm9wZXJ0eS5wcm9wZXJ0eVR5cGUsXG5cdFx0XHRcdG1haW5JbWFnZTpwcm9wZXJ0eS5tYWluSW1hZ2UsXG5cdFx0XHRcdGltYWdlczpwcm9wZXJ0eS5pbWFnZXMsXG5cdFx0XHRcdHByaWNlOnByb3BlcnR5LnByaWNlLFxuXHRcdFx0XHRiZWRzOnByb3BlcnR5LmJlZHMsXG5cdFx0XHRcdGJlZHNyb29tczpwcm9wZXJ0eS5iZWRyb29tcyxcblx0XHRcdFx0ZGVzY3JpcHRpb246cHJvcGVydHkuZGVzY3JpcHRpb24sXG5cdFx0XHRcdGhvc3Q6cHJvcGVydHkuaG9zdCxcblx0XHRcdFx0cmV2aWV3czpwcm9wZXJ0eS5yZXZpZXdzLFxuXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJQcm9wZXJ0eSIsInRpdGxlIiwibG9hY3Rpb24iLCJwcm9wZXJ0eVR5cGUiLCJtYWluSW1hZ2UiLCJpbWFnZXMiLCJwcmljZSIsImJlZHMiLCJiZWRyb29tcyIsImRlc2NyaXB0aW9uIiwiaG9zdCIsInJldmlld3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicGFnZUNvbnRleHQiLCJwYWdlU2x1ZyIsInF1ZXJ5Iiwic2x1ZyIsInByb3BlcnR5IiwiZmV0Y2giLCJwcm9wcyIsIm5vdEZvdW5kIiwibG9jYXRpb24iLCJiZWRzcm9vbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/property/[slug].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/property/[slug].js"));
module.exports = __webpack_exports__;

})();