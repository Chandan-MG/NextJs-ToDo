webpackHotUpdate_N_E("pages/todo-done",{

/***/ "./pages/todo-done/index.js":
/*!**********************************!*\
  !*** ./pages/todo-done/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-done.module.css */ "./pages/todo-done/todo-done.module.css");
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todo_done_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");


var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-done\\index.js",
    _s = $RefreshSig$();





function TodoDone(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(DUMMY_ITEM),
      listItem = _useState[0],
      setListItem = _useState[1];

  var addDeleteHndler = function addDeleteHndler() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: listItem.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["delete"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_3__["RxTrash"], {
            color: "red",
            style: {
              width: '30px',
              height: '30px'
            },
            onClick: addDeleteHndler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_s(TodoDone, "tHI6c3u3/Vl+eAtf2sZi8zKFpmQ=");

_c = TodoDone;
/* harmony default export */ __webpack_exports__["default"] = (TodoDone);

var _c;

$RefreshReg$(_c, "TodoDone");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1kb25lL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9Eb25lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkRVTU1ZX0lURU0iLCJsaXN0SXRlbSIsInNldExpc3RJdGVtIiwiYWRkRGVsZXRlSG5kbGVyIiwibWFwIiwiaXRlbSIsImNsYXNzZXMiLCJjYXJkIiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUNDLFVBQUQsQ0FGcEI7QUFBQSxNQUViQyxRQUZhO0FBQUEsTUFFSEMsV0FGRzs7QUFHcEIsTUFBTUMsZUFBZSxHQUFDLFNBQWhCQSxlQUFnQixHQUFJLENBRXpCLENBRkQ7O0FBR0Esc0JBQ0k7QUFBQSxjQUNLRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsMEJBQ2Q7QUFBSyxpQkFBUyxFQUFFQyw0REFBTyxDQUFDQyxJQUF4QjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBRUQsNERBQU8sQ0FBQ0UsSUFBeEI7QUFBQSxpQ0FDSTtBQUFBLHNCQUFLSCxJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSTtBQUFLLG1CQUFTLEVBQUVGLDREQUFPLFVBQXZCO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFBUyxpQkFBSyxFQUFDLEtBQWY7QUFBcUIsaUJBQUssRUFBRTtBQUFFRyxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLG9CQUFNLEVBQUU7QUFBekIsYUFBNUI7QUFBK0QsbUJBQU8sRUFBRVA7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFtQ0UsSUFBSSxDQUFDTSxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXBCUWQsUTs7S0FBQUEsUTtBQXNCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9kby1kb25lLjQ4OGU5MzYyYTc1YzkzNWNmNDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi90b2RvLWRvbmUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFJ4VHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVG9kb0RvbmUocHJvcHMpe1xyXG4gICAgXHJcbiAgICBjb25zdCBbbGlzdEl0ZW0sIHNldExpc3RJdGVtXSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xyXG4gICAgY29uc3QgYWRkRGVsZXRlSG5kbGVyPSgpPT57XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsaXN0SXRlbS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSeFRyYXNoIGNvbG9yPVwicmVkXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcgfX0gb25DbGljaz17YWRkRGVsZXRlSG5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvRG9uZTsiXSwic291cmNlUm9vdCI6IiJ9