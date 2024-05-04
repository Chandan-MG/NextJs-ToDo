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
    var _ref2 = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
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

    return function deleteHandler(_x) {
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
            onClick: function onClick() {
              return deleteHandler(item.id);
            }
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
      }, item._id, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1kb25lL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9Eb25lIiwiZG9uZUxpc3QiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiZGVsZXRlSGFuZGxlciIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJzdGF0dXMiLCJtYXAiLCJpdGVtIiwiY2xhc3NlcyIsImNhcmQiLCJuYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUlBLFNBQVNBLFFBQVQsT0FBK0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7O0FBRTNCO0FBRjJCLGtCQUlTQyxzREFBUSxDQUFDLEtBQUQsQ0FKakI7QUFBQSxNQUlwQkMsVUFKb0I7QUFBQSxNQUlSQyxhQUpROztBQU0zQixNQUFNQyxhQUFhO0FBQUEsbVZBQUcsaUJBQU9DLEVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCRiwyQkFBYSxDQUFDLElBQUQsQ0FBYjtBQURrQjtBQUFBO0FBQUEscUJBR1NHLEtBQUssK0VBQXdFRCxFQUF4RSxHQUE4RTtBQUN0R0Usc0JBQU0sRUFBRTtBQUQ4RixlQUE5RSxDQUhkOztBQUFBO0FBR1JDLHNCQUhROztBQU1kLGtCQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDYjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFGYSxDQUdiOztBQUNBQyxzQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILGVBTEQsTUFLTztBQUNISix1QkFBTyxDQUFDSyxLQUFSLENBQWMsd0JBQWQsRUFBd0NQLFFBQVEsQ0FBQ1EsTUFBakQ7QUFDSDs7QUFiYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVkTixxQkFBTyxDQUFDSyxLQUFSLENBQWMsc0JBQWQ7O0FBZmM7QUFBQTtBQWlCZFosMkJBQWEsQ0FBQyxLQUFELENBQWI7QUFqQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYkMsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUFvQkEsc0JBQ0k7QUFBQSxjQUNLSixRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDBCQUNkO0FBQUssaUJBQVMsRUFBRUMsNERBQU8sQ0FBQ0MsSUFBeEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVELDREQUFPLENBQUNFLElBQXhCO0FBQUEsaUNBQ0k7QUFBQSxzQkFBS0gsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFRiw0REFBTyxVQUF2QjtBQUFBLGlDQUNJLHFFQUFDLHNEQUFEO0FBQVMsaUJBQUssRUFBQyxLQUFmO0FBQXFCLGlCQUFLLEVBQUU7QUFBRUcsbUJBQUssRUFBRSxNQUFUO0FBQWlCQyxvQkFBTSxFQUFFO0FBQXpCLGFBQTVCO0FBQStELG1CQUFPLEVBQUU7QUFBQSxxQkFBTW5CLGFBQWEsQ0FBQ2MsSUFBSSxDQUFDYixFQUFOLENBQW5CO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFtQ2EsSUFBSSxDQUFDTSxHQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXhDUXpCLFE7O0tBQUFBLFE7O0FBK0RNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90b2RvLWRvbmUuYTEwNDE4N2QxN2RkMzUwZjQ1MTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tZG9uZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgUnhUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvRG9uZSh7IGRvbmVMaXN0IH0pe1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBbbGlzdEl0ZW0sIHNldExpc3RJdGVtXSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xyXG5cclxuICAgIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1kb25lLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBkZWxldGlvbiBpcyBzdWNjZXNzZnVsLCB5b3UgY2FuIHBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbnVwIG9yIFVJIHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBSZWZyZXNoaW5nIHRoZSB0b2RvIGxpc3QgYWZ0ZXIgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgaXRlbTonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaXRlbTonLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7ZG9uZUxpc3QubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0ga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJ4VHJhc2ggY29sb3I9XCJyZWRcIiBzdHlsZT17eyB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JyB9fSBvbkNsaWNrPXsoKSA9PiBkZWxldGVIYW5kbGVyKGl0ZW0uaWQpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jcnVkY3J1ZC5jb20vYXBpLzQzMDdmMzhlZTcyNzRlNWZhMzBlNmVmOTJhYzFkOTUyL3RvZG8tZG9uZWApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBkb25lTGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgICAgICBkb25lTGlzdCBcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGE6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgZG9uZUxpc3Q6IFtdIH0gfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGRvbmVMaXN0OiBbXSB9IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Eb25lOyJdLCJzb3VyY2VSb290IjoiIn0=