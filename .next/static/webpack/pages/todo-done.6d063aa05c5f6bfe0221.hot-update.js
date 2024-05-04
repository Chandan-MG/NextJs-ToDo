webpackHotUpdate_N_E("pages/todo-done",{

/***/ "./pages/todo-done/index.js":
/*!**********************************!*\
  !*** ./pages/todo-done/index.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-done.module.css */ "./pages/todo-done/todo-done.module.css");
/* harmony import */ var _todo_done_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_done_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-done\\index.js",
    _s = $RefreshSig$();





function TodoDone(_ref) {
  _s();

  var _this = this;

  var doneList = _ref.doneList;

  // const [listItem, setListItem] = useState(DUMMY_ITEM);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isDeleting = _useState[0],
      setIsDeleting = _useState[1];

  var deleteHandler = /*#__PURE__*/function () {
    var _ref2 = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsDeleting(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch("https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done/".concat(id), {
                method: 'DELETE'
              });

            case 4:
              response = _context.sent;

              if (response.ok) {
                // If deletion is successful, you can perform any necessary cleanup or UI updates
                console.log('Item deleted successfully'); // Example: Refreshing the todo list after deletion

                window.location.reload();
              } else {
                console.error('Failed to delete item:', response.status);
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error('Error deleting item:', _context.t0);

            case 11:
              _context.prev = 11;
              setIsDeleting(false);
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));

    return function deleteHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: doneList.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.name,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: item.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _todo_done_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["delete"],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__["RxTrash"], {
            color: "red",
            style: {
              width: '30px',
              height: '30px'
            },
            onClick: deleteHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

_s(TodoDone, "PcvudgQ4pB1b8YUmRhNmcS3boU8=");

_c = TodoDone;
var __N_SSG = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1kb25lL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9Eb25lIiwiZG9uZUxpc3QiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiZGVsZXRlSGFuZGxlciIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJzdGF0dXMiLCJtYXAiLCJpdGVtIiwiY2xhc3NlcyIsImNhcmQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLFFBQVQsT0FBK0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBRTNCO0FBRjJCLGtCQUlTQyxzREFBUSxDQUFDLEtBQUQsQ0FKakI7QUFBQSxNQUlwQkMsVUFKb0I7QUFBQSxNQUlSQyxhQUpROztBQU0zQixNQUFNQyxhQUFhO0FBQUEsbVZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCRCwyQkFBYSxDQUFDLElBQUQsQ0FBYjtBQURrQjtBQUFBO0FBQUEscUJBR1NFLEtBQUssK0VBQXdFQyxFQUF4RSxHQUE4RTtBQUN0R0Msc0JBQU0sRUFBRTtBQUQ4RixlQUE5RSxDQUhkOztBQUFBO0FBR1JDLHNCQUhROztBQU1kLGtCQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDYjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFGYSxDQUdiOztBQUNBQyxzQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILGVBTEQsTUFLTztBQUNISix1QkFBTyxDQUFDSyxLQUFSLENBQWMsd0JBQWQsRUFBd0NQLFFBQVEsQ0FBQ1EsTUFBakQ7QUFDSDs7QUFiYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVkTixxQkFBTyxDQUFDSyxLQUFSLENBQWMsc0JBQWQ7O0FBZmM7QUFBQTtBQWlCZFosMkJBQWEsQ0FBQyxLQUFELENBQWI7QUFqQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYkMsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUFvQkEsc0JBQ0k7QUFBQSxjQUNLSixRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDBCQUNkO0FBQUssaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsSUFBeEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVELDREQUFPLENBQUNFLElBQXhCO0FBQUEsaUNBQ0k7QUFBQSxzQkFBS0gsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFRiw0REFBTyxVQUF2QjtBQUFBLGlDQUNJLHFFQUFDLHNEQUFEO0FBQVMsaUJBQUssRUFBQyxLQUFmO0FBQXFCLGlCQUFLLEVBQUU7QUFBRUcsbUJBQUssRUFBRSxNQUFUO0FBQWlCQyxvQkFBTSxFQUFFO0FBQXpCLGFBQTVCO0FBQStELG1CQUFPLEVBQUVuQjtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLFNBQW1DYyxJQUFJLENBQUNaLEVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBeENRUCxROztLQUFBQSxROztBQStETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdG9kby1kb25lLjZkMDYzYWEwNWM1ZjZiZmUwMjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi90b2RvLWRvbmUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IFJ4VHJhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gVG9kb0RvbmUoeyBkb25lTGlzdCB9KXtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgW2xpc3RJdGVtLCBzZXRMaXN0SXRlbV0gPSB1c2VTdGF0ZShEVU1NWV9JVEVNKTtcclxuXHJcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRJc0RlbGV0aW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS80MzA3ZjM4ZWU3Mjc0ZTVmYTMwZTZlZjkyYWMxZDk1Mi90b2RvLWRvbmUvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGRlbGV0aW9uIGlzIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFudXAgb3IgVUkgdXBkYXRlc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0l0ZW0gZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IFJlZnJlc2hpbmcgdGhlIHRvZG8gbGlzdCBhZnRlciBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBpdGVtOicsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpdGVtOicsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtkb25lTGlzdC5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2l0ZW0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSeFRyYXNoIGNvbG9yPVwicmVkXCIgc3R5bGU9e3sgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcgfX0gb25DbGljaz17ZGVsZXRlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vY3J1ZGNydWQuY29tL2FwaS80MzA3ZjM4ZWU3Mjc0ZTVmYTMwZTZlZjkyYWMxZDk1Mi90b2RvLWlucHV0YCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgcHJvcHM6IHsgXHJcbiAgICAgICAgICAgIHRvZG9MaXN0IFxyXG4gICAgICAgICAgfSBcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YTpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICByZXR1cm4geyBwcm9wczogeyB0b2RvTGlzdDogW10gfSB9O1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmc6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb0xpc3Q6IFtdIH0gfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0RvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==