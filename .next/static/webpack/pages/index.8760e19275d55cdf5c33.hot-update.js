webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list.module.css */ "./pages/todo-list/todo-list.module.css");
/* harmony import */ var _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_list_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-list\\index.js",
    _s = $RefreshSig$();





function TodoList(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isDeleting = _useState[0],
      setIsDeleting = _useState[1];

  var deleteHandler = /*#__PURE__*/function () {
    var _ref = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsDeleting(true);
              _context.prev = 1;
              _context.next = 4;
              return fetch("https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-input/".concat(props.id), {
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
      return _ref.apply(this, arguments);
    };
  }();

  var pushToDoneHandler = /*#__PURE__*/function () {
    var _ref2 = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var response;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("https://crudcrud.com/api/4307f38ee7274e5fa30e6ef92ac1d952/todo-done", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: props.id,
                  name: props.name
                })
              });

            case 3:
              response = _context2.sent;

              if (!response.ok) {
                _context2.next = 10;
                break;
              }

              console.log('Item moved to "todo-done" folder successfully');
              _context2.next = 8;
              return deleteItem();

            case 8:
              _context2.next = 11;
              break;

            case 10:
              console.error('Failed to move item to "todo-done" folder:', response.status);

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              console.error('Error moving item to "todo-done" folder:', _context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function pushToDoneHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: '0.5rem'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.select,
        onClick: pushToDoneHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.name,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _todo_list_module_css__WEBPACK_IMPORTED_MODULE_4___default.a["delete"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__["RxTrash"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: deleteHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }, this);
}

_s(TodoList, "PcvudgQ4pB1b8YUmRhNmcS3boU8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9MaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiZGVsZXRlSGFuZGxlciIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJzdGF0dXMiLCJwdXNoVG9Eb25lSGFuZGxlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJkZWxldGVJdGVtIiwiY2xhc3NlcyIsImNhcmQiLCJwYWRkaW5nIiwic2VsZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsUUFBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQyxLQUFELENBRHZCO0FBQUEsTUFDZEMsVUFEYztBQUFBLE1BQ0ZDLGFBREU7O0FBR3JCLE1BQU1DLGFBQWE7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJELDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBRGtCO0FBQUE7QUFBQSxxQkFHU0UsS0FBSyxnRkFBeUVMLEtBQUssQ0FBQ00sRUFBL0UsR0FBcUY7QUFDN0dDLHNCQUFNLEVBQUU7QUFEcUcsZUFBckYsQ0FIZDs7QUFBQTtBQUdSQyxzQkFIUTs7QUFNZCxrQkFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2I7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBRmEsQ0FHYjs7QUFDQUMsc0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxlQUxELE1BS087QUFDSEosdUJBQU8sQ0FBQ0ssS0FBUixDQUFjLHdCQUFkLEVBQXdDUCxRQUFRLENBQUNRLE1BQWpEO0FBQ0g7O0FBYmE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlZE4scUJBQU8sQ0FBQ0ssS0FBUixDQUFjLHNCQUFkOztBQWZjO0FBQUE7QUFpQmRaLDJCQUFhLENBQUMsS0FBRCxDQUFiO0FBakJjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJDLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBcUJBLE1BQU1hLGlCQUFpQjtBQUFBLG1WQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTVosS0FBSyx3RUFBd0U7QUFDaEdFLHNCQUFNLEVBQUUsTUFEd0Y7QUFFaEdXLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWCxpQkFGdUY7QUFLaEdDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVmLG9CQUFFLEVBQUVOLEtBQUssQ0FBQ00sRUFBWjtBQUFnQmdCLHNCQUFJLEVBQUV0QixLQUFLLENBQUNzQjtBQUE1QixpQkFBZjtBQUwwRixlQUF4RSxDQUZYOztBQUFBO0FBRVhkLHNCQUZXOztBQUFBLG1CQVNiQSxRQUFRLENBQUNDLEVBVEk7QUFBQTtBQUFBO0FBQUE7O0FBVWJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSwrQ0FBWjtBQVZhO0FBQUEscUJBV1BZLFVBQVUsRUFYSDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFhYmIscUJBQU8sQ0FBQ0ssS0FBUixDQUFjLDRDQUFkLEVBQTREUCxRQUFRLENBQUNRLE1BQXJFOztBQWJhO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFnQmpCTixxQkFBTyxDQUFDSyxLQUFSLENBQWMsMENBQWQ7O0FBaEJpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBLG9CQUFqQkUsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQW1CQSxzQkFFUTtBQUFLLGFBQVMsRUFBRU8sNERBQU8sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUU7QUFBVixPQUFaO0FBQUEsNkJBQ0k7QUFBUSxpQkFBUyxFQUFFRiw0REFBTyxDQUFDRyxNQUEzQjtBQUFtQyxlQUFPLEVBQUVWO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFLLGVBQVMsRUFBRU8sNERBQU8sQ0FBQ0YsSUFBeEI7QUFBQSw2QkFDSTtBQUFBLGtCQUFLdEIsS0FBSyxDQUFDc0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBT0k7QUFBSyxlQUFTLEVBQUVFLDREQUFPLFVBQXZCO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBUyxhQUFLLEVBQUMsS0FBZjtBQUFxQixhQUFLLEVBQUU7QUFBQ0ksZUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFNLEVBQUU7QUFBeEIsU0FBNUI7QUFBNkQsZUFBTyxFQUFFekI7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGUjtBQWVIOztHQTFEUUwsUTs7S0FBQUEsUTtBQTRETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc2MGUxOTI3NWQ1NWNkZjVjMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3RvZG8tbGlzdC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgUnhUcmFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xyXG4gIFxyXG5cclxuZnVuY3Rpb24gVG9kb0xpc3QgKHByb3BzKXtcclxuICAgIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jcnVkY3J1ZC5jb20vYXBpLzQzMDdmMzhlZTcyNzRlNWZhMzBlNmVmOTJhYzFkOTUyL3RvZG8taW5wdXQvJHtwcm9wcy5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIGRlbGV0aW9uIGlzIHN1Y2Nlc3NmdWwsIHlvdSBjYW4gcGVyZm9ybSBhbnkgbmVjZXNzYXJ5IGNsZWFudXAgb3IgVUkgdXBkYXRlc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0l0ZW0gZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIC8vIEV4YW1wbGU6IFJlZnJlc2hpbmcgdGhlIHRvZG8gbGlzdCBhZnRlciBkZWxldGlvblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBpdGVtOicsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpdGVtOicsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHB1c2hUb0RvbmVIYW5kbGVyPSBhc3luYygpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jcnVkY3J1ZC5jb20vYXBpLzQzMDdmMzhlZTcyNzRlNWZhMzBlNmVmOTJhYzFkOTUyL3RvZG8tZG9uZWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkOiBwcm9wcy5pZCwgbmFtZTogcHJvcHMubmFtZSB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXRlbSBtb3ZlZCB0byBcInRvZG8tZG9uZVwiIGZvbGRlciBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBtb3ZlIGl0ZW0gdG8gXCJ0b2RvLWRvbmVcIiBmb2xkZXI6JywgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG1vdmluZyBpdGVtIHRvIFwidG9kby1kb25lXCIgZm9sZGVyOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICcwLjVyZW0nfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdH0gb25DbGljaz17cHVzaFRvRG9uZUhhbmRsZXJ9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb3BzLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5cclxuICAgICAgICAgICAgICAgICAgICA8UnhUcmFzaCBjb2xvcj1cInJlZFwiIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCd9fSBvbkNsaWNrPXtkZWxldGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9