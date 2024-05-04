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
              return deleteHandler();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9MaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiZGVsZXRlSGFuZGxlciIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJzdGF0dXMiLCJwdXNoVG9Eb25lSGFuZGxlciIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJjbGFzc2VzIiwiY2FyZCIsInBhZGRpbmciLCJzZWxlY3QiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxRQUFULENBQW1CQyxLQUFuQixFQUF5QjtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEtBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFHckIsTUFBTUMsYUFBYTtBQUFBLGtWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkQsMkJBQWEsQ0FBQyxJQUFELENBQWI7QUFEa0I7QUFBQTtBQUFBLHFCQUdTRSxLQUFLLGdGQUF5RUwsS0FBSyxDQUFDTSxFQUEvRSxHQUFxRjtBQUM3R0Msc0JBQU0sRUFBRTtBQURxRyxlQUFyRixDQUhkOztBQUFBO0FBR1JDLHNCQUhROztBQU1kLGtCQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDYjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFGYSxDQUdiOztBQUNBQyxzQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILGVBTEQsTUFLTztBQUNISix1QkFBTyxDQUFDSyxLQUFSLENBQWMsd0JBQWQsRUFBd0NQLFFBQVEsQ0FBQ1EsTUFBakQ7QUFDSDs7QUFiYTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWVkTixxQkFBTyxDQUFDSyxLQUFSLENBQWMsc0JBQWQ7O0FBZmM7QUFBQTtBQWlCZFosMkJBQWEsQ0FBQyxLQUFELENBQWI7QUFqQmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYkMsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUFxQkEsTUFBTWEsaUJBQWlCO0FBQUEsbVZBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNWixLQUFLLHdFQUF3RTtBQUNoR0Usc0JBQU0sRUFBRSxNQUR3RjtBQUVoR1csdUJBQU8sRUFBRTtBQUNMLGtDQUFnQjtBQURYLGlCQUZ1RjtBQUtoR0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRWYsb0JBQUUsRUFBRU4sS0FBSyxDQUFDTSxFQUFaO0FBQWdCZ0Isc0JBQUksRUFBRXRCLEtBQUssQ0FBQ3NCO0FBQTVCLGlCQUFmO0FBTDBGLGVBQXhFLENBRlg7O0FBQUE7QUFFWGQsc0JBRlc7O0FBQUEsbUJBU2JBLFFBQVEsQ0FBQ0MsRUFUSTtBQUFBO0FBQUE7QUFBQTs7QUFVYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaO0FBVmE7QUFBQSxxQkFXUFAsYUFBYSxFQVhOOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQWFiTSxxQkFBTyxDQUFDSyxLQUFSLENBQWMsNENBQWQsRUFBNERQLFFBQVEsQ0FBQ1EsTUFBckU7O0FBYmE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCakJOLHFCQUFPLENBQUNLLEtBQVIsQ0FBYywwQ0FBZDs7QUFoQmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUEsb0JBQWpCRSxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsS0FBdkI7O0FBbUJBLHNCQUVRO0FBQUssYUFBUyxFQUFFTSw0REFBTyxDQUFDQyxJQUF4QjtBQUFBLDRCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BQVo7QUFBQSw2QkFDSTtBQUFRLGlCQUFTLEVBQUVGLDREQUFPLENBQUNHLE1BQTNCO0FBQW1DLGVBQU8sRUFBRVQ7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUssZUFBUyxFQUFFTSw0REFBTyxDQUFDRCxJQUF4QjtBQUFBLDZCQUNJO0FBQUEsa0JBQUt0QixLQUFLLENBQUNzQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFPSTtBQUFLLGVBQVMsRUFBRUMsNERBQU8sVUFBdkI7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFTLGFBQUssRUFBQyxLQUFmO0FBQXFCLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUUsTUFBUjtBQUFnQkMsZ0JBQU0sRUFBRTtBQUF4QixTQUE1QjtBQUE2RCxlQUFPLEVBQUV4QjtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZSO0FBZUg7O0dBMURRTCxROztLQUFBQSxRO0FBNERNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YWI1OTBlNzJlYzJhMzRhYjc5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vdG9kby1saXN0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBSeFRyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XHJcbiAgXHJcblxyXG5mdW5jdGlvbiBUb2RvTGlzdCAocHJvcHMpe1xyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1pbnB1dC8ke3Byb3BzLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZGVsZXRpb24gaXMgc3VjY2Vzc2Z1bCwgeW91IGNhbiBwZXJmb3JtIGFueSBuZWNlc3NhcnkgY2xlYW51cCBvciBVSSB1cGRhdGVzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSXRlbSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgLy8gRXhhbXBsZTogUmVmcmVzaGluZyB0aGUgdG9kbyBsaXN0IGFmdGVyIGRlbGV0aW9uXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGl0ZW06JywgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGl0ZW06JywgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHVzaFRvRG9uZUhhbmRsZXI9IGFzeW5jKCk9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1kb25lYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQ6IHByb3BzLmlkLCBuYW1lOiBwcm9wcy5uYW1lIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIG1vdmVkIHRvIFwidG9kby1kb25lXCIgZm9sZGVyIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIG1vdmUgaXRlbSB0byBcInRvZG8tZG9uZVwiIGZvbGRlcjonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbW92aW5nIGl0ZW0gdG8gXCJ0b2RvLWRvbmVcIiBmb2xkZXI6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzAuNXJlbSd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0fSBvbkNsaWNrPXtwdXNoVG9Eb25lSGFuZGxlcn0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57cHJvcHMubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSeFRyYXNoIGNvbG9yPVwicmVkXCIgc3R5bGU9e3t3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4J319IG9uQ2xpY2s9e2RlbGV0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=