webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _todo_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-card */ "./pages/todo-card/index.js");
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/rx */ "./node_modules/react-icons/rx/index.mjs");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list */ "./pages/todo-list/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "D:\\chandan\\Sharpener projects\\NextJS\\todo\\01-starting-project\\pages\\index.js",
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

function HomePage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(DUMMY_ITEM),
      todoList = _useState[0],
      setTodoList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      add = _useState2[0],
      setAdd = _useState2[1];

  useEffect(function () {
    var fetchListItems = /*#__PURE__*/function () {
      var _ref = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, todoItems;
        return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/candy");

              case 3:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return response.json();

              case 7:
                todoItems = _context.sent;
                // Update cart context with fetched cart items
                setTodoList(to);

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching:', _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function fetchListItems() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchListItems();
  }, [candyListItems]);

  var addButtonHndler = function addButtonHndler() {
    setAdd(!add);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '220px',
        marginTop: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.list,
        children: todoList.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: item.id,
            name: item.name
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '250px',
        marginTop: '20px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_rx__WEBPACK_IMPORTED_MODULE_5__["RxFilePlus"], {
        color: "red",
        style: {
          width: '30px',
          height: '30px'
        },
        onClick: addButtonHndler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), add && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todo_card__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

_s(HomePage, "TxmQFP0ikrFhjSKbiFoRBlYwQ34=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiYWRkIiwic2V0QWRkIiwidXNlRWZmZWN0IiwiZmV0Y2hMaXN0SXRlbXMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwidG9kb0l0ZW1zIiwidG8iLCJjb25zb2xlIiwiZXJyb3IiLCJjYW5keUxpc3RJdGVtcyIsImFkZEJ1dHRvbkhuZGxlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiY2xhc3NlcyIsImxpc3QiLCJtYXAiLCJpdGVtIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FEaUIsRUFLakI7QUFDSUQsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FMaUIsRUFTakI7QUFDSUQsSUFBRSxFQUFFLElBRFI7QUFFSUMsTUFBSSxFQUFFO0FBRlYsQ0FUaUIsQ0FBbkI7O0FBY0EsU0FBU0MsUUFBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDSixVQUFELENBRHZCO0FBQUEsTUFDVkssUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFVkcsR0FGVTtBQUFBLE1BRUxDLE1BRks7O0FBSWpCQyxXQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGNBQWM7QUFBQSxvVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVFDLEtBQUssbUVBRmI7O0FBQUE7QUFFVEMsd0JBRlM7O0FBQUEscUJBR1hBLFFBQVEsQ0FBQ0MsRUFIRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUlhRCxRQUFRLENBQUNFLElBQVQsRUFKYjs7QUFBQTtBQUlMQyx5QkFKSztBQUtYO0FBQ0FULDJCQUFXLENBQUNVLEVBQUQsQ0FBWDs7QUFOVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU2ZDLHVCQUFPLENBQUNDLEtBQVIsQ0FBYyxpQkFBZDs7QUFUZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFkUixjQUFjO0FBQUE7QUFBQTtBQUFBLE9BQXBCOztBQWFBQSxrQkFBYztBQUNqQixHQWZRLEVBZU4sQ0FBQ1MsY0FBRCxDQWZNLENBQVQ7O0FBaUJBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSztBQUMzQlosVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFDYyxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFFQyx3REFBTyxDQUFDQyxJQUF2QjtBQUFBLGtCQUNLdEIsUUFBUSxDQUFDdUIsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSw4QkFDWixxRUFBQyxrREFBRDtBQUVFLGNBQUUsRUFBRUEsSUFBSSxDQUFDNUIsRUFGWDtBQUdFLGdCQUFJLEVBQUU0QixJQUFJLENBQUMzQjtBQUhiLGFBQ08yQixJQUFJLENBQUM1QixFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVlFO0FBQUssV0FBSyxFQUFFO0FBQUNvQixlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFBWSxhQUFLLEVBQUMsS0FBbEI7QUFBd0IsYUFBSyxFQUFFO0FBQUNLLGVBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQS9CO0FBQWdFLGVBQU8sRUFBRVg7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQWVJYixHQUFHLGlCQUFLO0FBQUssV0FBSyxFQUFFO0FBQUNjLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFFBQXJEO0FBQStERSxpQkFBUyxFQUFFO0FBQTFFLE9BQVo7QUFBQSw2QkFDUixxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTdDUXRCLFE7O0tBQUFBLFE7QUE4Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyOGEyYmVkZGI1ZWI3NWNmZDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb2RvQ2FyZCBmcm9tIFwiLi90b2RvLWNhcmRcIjtcbmltcG9ydCB7IFJ4RmlsZVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvcnhcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvLWxpc3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IERVTU1ZX0lURU0gPSBbXG4gIHtcbiAgICAgIGlkOiAnbTEnLFxuICAgICAgbmFtZTogJ0EgZmlyc3QgbWVldHVwJyxcbiAgfSxcbiAge1xuICAgICAgaWQ6ICdtMicsXG4gICAgICBuYW1lOiAnQSBzZWNvbmQgbWVldHVwJyxcbiAgfSxcbiAge1xuICAgICAgaWQ6ICdtMycsXG4gICAgICBuYW1lOiAnQSB0aGlyZCBtZWV0dXAnLFxuICB9XG5dXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKERVTU1ZX0lURU0pO1xuICBjb25zdCBbYWRkLCBzZXRBZGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaExpc3RJdGVtcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2NydWRjcnVkLmNvbS9hcGkvZWIwOWFmN2E1NTRmNDM3YmE0NThkZmM2ZDA0ZDcyODEvY2FuZHlgKTtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0b2RvSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb250ZXh0IHdpdGggZmV0Y2hlZCBjYXJ0IGl0ZW1zXG4gICAgICAgICAgICAgICAgICBzZXRUb2RvTGlzdCh0byk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZzonLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmV0Y2hMaXN0SXRlbXMoKTtcbiAgfSwgW2NhbmR5TGlzdEl0ZW1zXSk7XG5cbiAgY29uc3QgYWRkQnV0dG9uSG5kbGVyID0gKCkgPT57XG4gICAgc2V0QWRkKCFhZGQpO1xuICB9XG4gIHJldHVybihcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidmbGV4LXN0YXJ0JywgbWFyZ2luTGVmdDonMjIwcHgnLCBtYXJnaW5Ub3A6JzIwcHgnfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAgICB7dG9kb0xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxUb2RvTGlzdFxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonZmxleC1zdGFydCcsIG1hcmdpbkxlZnQ6JzI1MHB4JywgbWFyZ2luVG9wOicyMHB4J319PlxuICAgICAgICAgIDxSeEZpbGVQbHVzIGNvbG9yPVwicmVkXCIgc3R5bGU9e3t3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4J319IG9uQ2xpY2s9e2FkZEJ1dHRvbkhuZGxlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBhZGQgJiYgKDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIG1hcmdpblRvcDogJzEwcHgnfX0+XG4gICAgICAgIDxUb2RvQ2FyZCAvPlxuICAgICAgPC9kaXY+KX1cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9