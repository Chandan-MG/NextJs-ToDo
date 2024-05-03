webpackHotUpdate_N_E("pages/todo-list",{

/***/ "./pages/todo-list/index.js":
/*!**********************************!*\
  !*** ./pages/todo-list/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list.module.css */ "./pages/todo-list/todo-list.module.css");
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_list_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");


var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-list\\index.js",
    _s = $RefreshSig$();




var DUMMY_ITEM = [{
  id: 'm1',
  name: 'A first meetup'
}, {
  id: 'm2',
  name: 'A second meetup'
}, {
  id: 'm3',
  name: 'A third meetup'
}];

function TodoList(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(DUMMY_ITEM),
      listItem = _useState[0],
      setListItem = _useState[1];

  var addDeleteHndler = function addDeleteHndler() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: '0.5rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.select
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["delete"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxTrash"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: addDeleteHndler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 13
  }, this);
}

_s(TodoList, "tHI6c3u3/Vl+eAtf2sZi8zKFpmQ=");

_c = TodoList;
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

var _c;

$RefreshReg$(_c, "TodoList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkRVTU1ZX0lURU0iLCJpZCIsIm5hbWUiLCJUb2RvTGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJsaXN0SXRlbSIsInNldExpc3RJdGVtIiwiYWRkRGVsZXRlSG5kbGVyIiwiY2xhc3NlcyIsImNhcmQiLCJwYWRkaW5nIiwic2VsZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2Y7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FEZSxFQUtmO0FBQ0lELElBQUUsRUFBRSxJQURSO0FBRUlDLE1BQUksRUFBRTtBQUZWLENBTGUsRUFTZjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQVRlLENBQW5COztBQWdCQSxTQUFTQyxRQUFULENBQW1CQyxLQUFuQixFQUF5QjtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDTCxVQUFELENBRG5CO0FBQUEsTUFDZE0sUUFEYztBQUFBLE1BQ0pDLFdBREk7O0FBRXJCLE1BQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsR0FBSSxDQUV6QixDQUZEOztBQUdBLHNCQUVRO0FBQUssYUFBUyxFQUFFQyw0REFBTyxDQUFDQyxJQUF4QjtBQUFBLDRCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BQVo7QUFBQSw2QkFDSTtBQUFRLGlCQUFTLEVBQUVGLDREQUFPLENBQUNHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFLLGVBQVMsRUFBRUgsNERBQU8sQ0FBQ1AsSUFBeEI7QUFBQSw2QkFDSTtBQUFBLGtCQUFLRSxLQUFLLENBQUNGO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JO0FBQUssZUFBUyxFQUFFTyw0REFBTyxVQUF2QjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQVMsYUFBSyxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFO0FBQUNJLGVBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQTVCO0FBQTZELGVBQU8sRUFBRU47QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGUjtBQWVIOztHQXBCUUwsUTs7S0FBQUEsUTtBQXNCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9kby1saXN0Ljk1NzFiNTg4NzY5MGEyZjAzYWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi90b2RvLWxpc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFJ4VHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuXHJcbmNvbnN0IERVTU1ZX0lURU0gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgbmFtZTogJ0EgZmlyc3QgbWVldHVwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgbmFtZTogJ0Egc2Vjb25kIG1lZXR1cCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTMnLFxyXG4gICAgICAgIG5hbWU6ICdBIHRoaXJkIG1lZXR1cCcsXHJcbiAgICB9XHJcbl1cclxuICBcclxuXHJcbmZ1bmN0aW9uIFRvZG9MaXN0IChwcm9wcyl7XHJcbiAgICBjb25zdCBbbGlzdEl0ZW0sIHNldExpc3RJdGVtXSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xyXG4gICAgY29uc3QgYWRkRGVsZXRlSG5kbGVyPSgpPT57XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnMC41cmVtJ319ID5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3R9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb3BzLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UnhUcmFzaCBjb2xvcj1cInJlZFwiIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCd9fSBvbkNsaWNrPXthZGREZWxldGVIbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=