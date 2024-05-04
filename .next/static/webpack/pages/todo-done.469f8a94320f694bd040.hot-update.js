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
    children: listItem.map(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1kb25lL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9Eb25lIiwiZG9uZUxpc3QiLCJ1c2VTdGF0ZSIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiZGVsZXRlSGFuZGxlciIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJzdGF0dXMiLCJsaXN0SXRlbSIsIm1hcCIsIml0ZW0iLCJjbGFzc2VzIiwiY2FyZCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsUUFBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVzs7QUFFM0I7QUFGMkIsa0JBSVNDLHNEQUFRLENBQUMsS0FBRCxDQUpqQjtBQUFBLE1BSXBCQyxVQUpvQjtBQUFBLE1BSVJDLGFBSlE7O0FBTTNCLE1BQU1DLGFBQWE7QUFBQSxtVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJELDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBRGtCO0FBQUE7QUFBQSxxQkFHU0UsS0FBSywrRUFBd0VDLEVBQXhFLEdBQThFO0FBQ3RHQyxzQkFBTSxFQUFFO0FBRDhGLGVBQTlFLENBSGQ7O0FBQUE7QUFHUkMsc0JBSFE7O0FBTWQsa0JBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNiO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUZhLENBR2I7O0FBQ0FDLHNCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsZUFMRCxNQUtPO0FBQ0hKLHVCQUFPLENBQUNLLEtBQVIsQ0FBYyx3QkFBZCxFQUF3Q1AsUUFBUSxDQUFDUSxNQUFqRDtBQUNIOztBQWJhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZWROLHFCQUFPLENBQUNLLEtBQVIsQ0FBYyxzQkFBZDs7QUFmYztBQUFBO0FBaUJkWiwyQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQWpCYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiQyxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQW9CQSxzQkFDSTtBQUFBLGNBQ0thLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUFDLElBQUk7QUFBQSwwQkFDZDtBQUFLLGlCQUFTLEVBQUVDLDREQUFPLENBQUNDLElBQXhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFRCw0REFBTyxDQUFDRSxJQUF4QjtBQUFBLGlDQUNJO0FBQUEsc0JBQUtILElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUssbUJBQVMsRUFBRUYsNERBQU8sVUFBdkI7QUFBQSxpQ0FDSSxxRUFBQyxzREFBRDtBQUFTLGlCQUFLLEVBQUMsS0FBZjtBQUFxQixpQkFBSyxFQUFFO0FBQUVHLG1CQUFLLEVBQUUsTUFBVDtBQUFpQkMsb0JBQU0sRUFBRTtBQUF6QixhQUE1QjtBQUErRCxtQkFBTyxFQUFFcEI7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxTQUFtQ2UsSUFBSSxDQUFDYixFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQXhDUVAsUTs7S0FBQUEsUTs7QUErRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RvZG8tZG9uZS40NjlmOGE5NDMyMGY2OTRiZDA0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vdG9kby1kb25lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBSeFRyYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL3J4XCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFRvZG9Eb25lKHsgZG9uZUxpc3QgfSl7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IFtsaXN0SXRlbSwgc2V0TGlzdEl0ZW1dID0gdXNlU3RhdGUoRFVNTVlfSVRFTSk7XHJcblxyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1kb25lLyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBkZWxldGlvbiBpcyBzdWNjZXNzZnVsLCB5b3UgY2FuIHBlcmZvcm0gYW55IG5lY2Vzc2FyeSBjbGVhbnVwIG9yIFVJIHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJdGVtIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGFtcGxlOiBSZWZyZXNoaW5nIHRoZSB0b2RvIGxpc3QgYWZ0ZXIgZGVsZXRpb25cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgaXRlbTonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgaXRlbTonLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bGlzdEl0ZW0ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UnhUcmFzaCBjb2xvcj1cInJlZFwiIHN0eWxlPXt7IHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnIH19IG9uQ2xpY2s9e2RlbGV0ZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvNDMwN2YzOGVlNzI3NGU1ZmEzMGU2ZWY5MmFjMWQ5NTIvdG9kby1pbnB1dGApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgICAgICB0b2RvTGlzdCBcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGE6XCIsIHJlc3BvbnNlLnN0YXR1cyk7XHJcbiAgICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb0xpc3Q6IFtdIH0gfTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nOlwiLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IHRvZG9MaXN0OiBbXSB9IH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Eb25lOyJdLCJzb3VyY2VSb290IjoiIn0=