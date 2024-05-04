webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/todo-card/index.js":
/*!**********************************!*\
  !*** ./pages/todo-card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-card.module.css */ "./pages/todo-card/todo-card.module.css");
/* harmony import */ var _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todo_card_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\todo-card\\index.js",
    _s = $RefreshSig$();




function TodoCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      newTodo = _useState[0],
      setNewTodo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var nameInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  function submitHandler(_x) {
    return _submitHandler.apply(this, arguments);
  }

  function _submitHandler() {
    _submitHandler = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var enteredName, todoData;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              enteredName = nameInputRef.current.value;
              todoData = {
                name: enteredName
              };
              alert(todoData.name); // const response = await fetch('/api/todo-input',{
              //     method: 'POST',
              //     body: JSON.stringify(todoData),
              //     headers: {
              //         'Content-Type': 'application/json'
              //     }
              // });
              // props.onAddMeetup(meetupData);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitHandler.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.card,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
          className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
          onSubmit: submitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
              type: "text",
              required: true,
              id: "name",
              ref: nameInputRef,
              placeholder: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(TodoCard, "09NESPOLtvfoS5JRwBURlTcHfCU=");

_c = TodoCard;
/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

var _c;

$RefreshReg$(_c, "TodoCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9DYXJkIiwidXNlU3RhdGUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJuYW1lSW5wdXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWROYW1lIiwiY3VycmVudCIsInZhbHVlIiwidG9kb0RhdGEiLCJuYW1lIiwiYWxlcnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiY2xhc3NlcyIsImNhcmQiLCJmb3JtIiwiY29udHJvbCIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBSWxCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7O0FBSmtCLFdBTUhDLGFBTkc7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1ZBTWxCLGlCQUE2QkMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47QUFFTUMseUJBSFIsR0FHc0JMLFlBQVksQ0FBQ00sT0FBYixDQUFxQkMsS0FIM0M7QUFLUUMsc0JBTFIsR0FLbUI7QUFDZkMsb0JBQUksRUFBRUo7QUFEUyxlQUxuQjtBQVFFSyxtQkFBSyxDQUFDRixRQUFRLENBQUNDLElBQVYsQ0FBTCxDQVJGLENBU0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOa0I7QUFBQTtBQUFBOztBQTJCbEIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFRSxlQUFPLEVBQUUsTUFBWDtBQUFtQkMsa0JBQVUsRUFBRSxRQUEvQjtBQUF5Q0Msc0JBQWMsRUFBRSxRQUF6RDtBQUFtRUMscUJBQWEsRUFBRSxRQUFsRjtBQUE0RkMsYUFBSyxFQUFDO0FBQWxHLE9BQVo7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUVDLDREQUFPLENBQUNDLElBQXhCO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFFRCw0REFBTyxDQUFDRSxJQUF6QjtBQUErQixrQkFBUSxFQUFFaEIsYUFBekM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVjLDREQUFPLENBQUNHLE9BQXhCO0FBQUEsbUNBRUU7QUFBTyxrQkFBSSxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsTUFBM0I7QUFBNEIsZ0JBQUUsRUFBQyxNQUEvQjtBQUFzQyxpQkFBRyxFQUFFbkIsWUFBM0M7QUFBeUQseUJBQVcsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRWdCLDREQUFPLENBQUNJLE9BQXhCO0FBQUEsbUNBQ0U7QUFBUSxrQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQTdDUTFCLFE7O0tBQUFBLFE7QUErQ01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQyYTk5YWY1MjAzMTc1Nzk1ZGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi90b2RvLWNhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBUb2RvQ2FyZCgpIHtcclxuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGVudGVyZWROYW1lID0gbmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgdG9kb0RhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGVudGVyZWROYW1lLFxyXG4gICAgfTtcclxuICAgIGFsZXJ0KHRvZG9EYXRhLm5hbWUpO1xyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2RvLWlucHV0Jyx7XHJcbiAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodG9kb0RhdGEpLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gcHJvcHMub25BZGRNZWV0dXAobWVldHVwRGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgd2lkdGg6JzEwMCUnIH19PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPSduYW1lJz5UaXRsZTwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtZScgcmVmPXtuYW1lSW5wdXRSZWZ9IHBsYWNlaG9sZGVyPSdOYW1lJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9DYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=