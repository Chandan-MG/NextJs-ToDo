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
      var enteredName, todoData, response;
      return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              enteredName = nameInputRef.current.value;
              todoData = {
                name: enteredName
              }; // const response = await fetch('/api/todo-input',{
              //     method: 'POST',
              //     body: JSON.stringify(todoData),
              //     headers: {
              //         'Content-Type': 'application/json'
              //     }
              // });

              _context.next = 5;
              return fetch("https://expense-tracker-dfeec-default-rtdb.firebaseio.com/todo/todoInput.json", {
                method: "POST",
                body: JSON.stringify(todoData),
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 5:
              response = _context.sent;

              // const data = await response.json();
              if (response.ok) {
                alert();
              } // props.onAddMeetup(meetupData);


            case 7:
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
              lineNumber: 53,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: _todo_card_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
              type: "submit",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kby1jYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRvZG9DYXJkIiwidXNlU3RhdGUiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJuYW1lSW5wdXRSZWYiLCJ1c2VSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWROYW1lIiwiY3VycmVudCIsInZhbHVlIiwidG9kb0RhdGEiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZSIsIm9rIiwiYWxlcnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiY2xhc3NlcyIsImNhcmQiLCJmb3JtIiwiY29udHJvbCIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUNYQyxPQURXO0FBQUEsTUFDRkMsVUFERTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBSWxCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7O0FBSmtCLFdBTUhDLGFBTkc7QUFBQTtBQUFBOztBQUFBO0FBQUEsd1ZBTWxCLGlCQUE2QkMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLG1CQUFLLENBQUNDLGNBQU47QUFFTUMseUJBSFIsR0FHc0JMLFlBQVksQ0FBQ00sT0FBYixDQUFxQkMsS0FIM0M7QUFLUUMsc0JBTFIsR0FLbUI7QUFDZkMsb0JBQUksRUFBRUo7QUFEUyxlQUxuQixFQVNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWZGO0FBQUEscUJBZ0J5QkssS0FBSyxrRkFFMUI7QUFDRUMsc0JBQU0sRUFBRSxNQURWO0FBRUVDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixRQUFmLENBRlI7QUFHRU8sdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSFgsZUFGMEIsQ0FoQjlCOztBQUFBO0FBZ0JRQyxzQkFoQlI7O0FBMEJFO0FBQ0Esa0JBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNiQyxxQkFBSztBQUNSLGVBN0JILENBOEJFOzs7QUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOa0I7QUFBQTtBQUFBOztBQXlDbEIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUUsTUFBWDtBQUFtQkMsa0JBQVUsRUFBRSxRQUEvQjtBQUF5Q0Msc0JBQWMsRUFBRSxRQUF6RDtBQUFtRUMscUJBQWEsRUFBRSxRQUFsRjtBQUE0RkMsYUFBSyxFQUFDO0FBQWxHLE9BQVo7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUVDLDREQUFPLENBQUNDLElBQXhCO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFFRCw0REFBTyxDQUFDRSxJQUF6QjtBQUErQixrQkFBUSxFQUFFeEIsYUFBekM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVzQiw0REFBTyxDQUFDRyxPQUF4QjtBQUFBLG1DQUVFO0FBQU8sa0JBQUksRUFBQyxNQUFaO0FBQW1CLHNCQUFRLE1BQTNCO0FBQTRCLGdCQUFFLEVBQUMsTUFBL0I7QUFBc0MsaUJBQUcsRUFBRTNCLFlBQTNDO0FBQXlELHlCQUFXLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUV3Qiw0REFBTyxDQUFDSSxPQUF4QjtBQUFBLG1DQUNFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7R0EzRFFsQyxROztLQUFBQSxRO0FBNkRNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjEwZjU5OTZmZTY5MDlkOGE2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vdG9kby1jYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gVG9kb0NhcmQoKSB7XHJcbiAgY29uc3QgW25ld1RvZG8sIHNldE5ld1RvZG9dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkTmFtZSA9IG5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EYXRhID0ge1xyXG4gICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdG9kby1pbnB1dCcse1xyXG4gICAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRvZG9EYXRhKSxcclxuICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2V4cGVuc2UtdHJhY2tlci1kZmVlYy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vdG9kby90b2RvSW5wdXQuanNvbmAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRvZG9EYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGFsZXJ0KClcclxuICAgIH1cclxuICAgIC8vIHByb3BzLm9uQWRkTWVldHVwKG1lZXR1cERhdGEpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHdpZHRoOicxMDAlJyB9fT5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+VGl0bGU8L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgaWQ9J25hbWUnIHJlZj17bmFtZUlucHV0UmVmfSBwbGFjZWhvbGRlcj0nTmFtZScgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9