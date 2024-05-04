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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchListItems = /*#__PURE__*/function () {
      var _ref = Object(D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, todoItems;
        return D_chandan_Sharpener_projects_NextJS_todo_01_starting_project_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://crudcrud.com/api/4750e20b495744a1a7029e7947281f42/todo-input");

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
                setTodoList(todoItems);

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
  }, [todoList]);

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
            lineNumber: 51,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
        lineNumber: 60,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfSVRFTSIsImlkIiwibmFtZSIsIkhvbWVQYWdlIiwidXNlU3RhdGUiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwiYWRkIiwic2V0QWRkIiwidXNlRWZmZWN0IiwiZmV0Y2hMaXN0SXRlbXMiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwidG9kb0l0ZW1zIiwiY29uc29sZSIsImVycm9yIiwiYWRkQnV0dG9uSG5kbGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjbGFzc2VzIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQURpQixFQUtqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQUxpQixFQVNqQjtBQUNJRCxJQUFFLEVBQUUsSUFEUjtBQUVJQyxNQUFJLEVBQUU7QUFGVixDQVRpQixDQUFuQjs7QUFjQSxTQUFTQyxRQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUNKLFVBQUQsQ0FEdkI7QUFBQSxNQUNWSyxRQURVO0FBQUEsTUFDQUMsV0FEQTs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVWRyxHQUZVO0FBQUEsTUFFTEMsTUFGSzs7QUFJakJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGNBQWM7QUFBQSxvVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRVFDLEtBQUssd0VBRmI7O0FBQUE7QUFFVEMsd0JBRlM7O0FBQUEscUJBR1hBLFFBQVEsQ0FBQ0MsRUFIRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUlhRCxRQUFRLENBQUNFLElBQVQsRUFKYjs7QUFBQTtBQUlMQyx5QkFKSztBQUtYO0FBQ0FULDJCQUFXLENBQUNTLFNBQUQsQ0FBWDs7QUFOVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU2ZDLHVCQUFPLENBQUNDLEtBQVIsQ0FBYyxpQkFBZDs7QUFUZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFkUCxjQUFjO0FBQUE7QUFBQTtBQUFBLE9BQXBCOztBQWFBQSxrQkFBYztBQUNqQixHQWZRLEVBZU4sQ0FBQ0wsUUFBRCxDQWZNLENBQVQ7O0FBaUJBLE1BQU1hLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBSztBQUMzQlYsVUFBTSxDQUFDLENBQUNELEdBQUYsQ0FBTjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFDWSxlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFFQyx3REFBTyxDQUFDQyxJQUF2QjtBQUFBLGtCQUNLcEIsUUFBUSxDQUFDcUIsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSw4QkFDWixxRUFBQyxrREFBRDtBQUVFLGNBQUUsRUFBRUEsSUFBSSxDQUFDMUIsRUFGWDtBQUdFLGdCQUFJLEVBQUUwQixJQUFJLENBQUN6QjtBQUhiLGFBQ095QixJQUFJLENBQUMxQixFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFk7QUFBQSxTQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVlFO0FBQUssV0FBSyxFQUFFO0FBQUNrQixlQUFPLEVBQUMsTUFBVDtBQUFpQkMsa0JBQVUsRUFBQyxRQUE1QjtBQUFzQ0Msc0JBQWMsRUFBQyxZQUFyRDtBQUFtRUMsa0JBQVUsRUFBQyxPQUE5RTtBQUF1RkMsaUJBQVMsRUFBQztBQUFqRyxPQUFaO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFBWSxhQUFLLEVBQUMsS0FBbEI7QUFBd0IsYUFBSyxFQUFFO0FBQUNLLGVBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBTSxFQUFFO0FBQXhCLFNBQS9CO0FBQWdFLGVBQU8sRUFBRVg7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQWVJWCxHQUFHLGlCQUFLO0FBQUssV0FBSyxFQUFFO0FBQUNZLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxrQkFBVSxFQUFDLFFBQTVCO0FBQXNDQyxzQkFBYyxFQUFDLFFBQXJEO0FBQStERSxpQkFBUyxFQUFFO0FBQTFFLE9BQVo7QUFBQSw2QkFDUixxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTdDUXBCLFE7O0tBQUFBLFE7QUE4Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlNDAyOTUzZjdkNTdhOGIwOTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRvZG9DYXJkIGZyb20gXCIuL3RvZG8tY2FyZFwiO1xuaW1wb3J0IHsgUnhGaWxlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9yeFwiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG8tbGlzdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuXG5jb25zdCBEVU1NWV9JVEVNID0gW1xuICB7XG4gICAgICBpZDogJ20xJyxcbiAgICAgIG5hbWU6ICdBIGZpcnN0IG1lZXR1cCcsXG4gIH0sXG4gIHtcbiAgICAgIGlkOiAnbTInLFxuICAgICAgbmFtZTogJ0Egc2Vjb25kIG1lZXR1cCcsXG4gIH0sXG4gIHtcbiAgICAgIGlkOiAnbTMnLFxuICAgICAgbmFtZTogJ0EgdGhpcmQgbWVldHVwJyxcbiAgfVxuXVxuZnVuY3Rpb24gSG9tZVBhZ2UoKXtcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvTGlzdF0gPSB1c2VTdGF0ZShEVU1NWV9JVEVNKTtcbiAgY29uc3QgW2FkZCwgc2V0QWRkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZmV0Y2hMaXN0SXRlbXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9jcnVkY3J1ZC5jb20vYXBpLzQ3NTBlMjBiNDk1NzQ0YTFhNzAyOWU3OTQ3MjgxZjQyL3RvZG8taW5wdXRgKTtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0b2RvSXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb250ZXh0IHdpdGggZmV0Y2hlZCBjYXJ0IGl0ZW1zXG4gICAgICAgICAgICAgICAgICBzZXRUb2RvTGlzdCh0b2RvSXRlbXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmc6JywgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZldGNoTGlzdEl0ZW1zKCk7XG4gIH0sIFt0b2RvTGlzdF0pO1xuXG4gIGNvbnN0IGFkZEJ1dHRvbkhuZGxlciA9ICgpID0+e1xuICAgIHNldEFkZCghYWRkKTtcbiAgfVxuICByZXR1cm4oXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBqdXN0aWZ5Q29udGVudDonZmxleC1zdGFydCcsIG1hcmdpbkxlZnQ6JzIyMHB4JywgbWFyZ2luVG9wOicyMHB4J319PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxuICAgICAgICAgICAge3RvZG9MaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8VG9kb0xpc3RcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywganVzdGlmeUNvbnRlbnQ6J2ZsZXgtc3RhcnQnLCBtYXJnaW5MZWZ0OicyNTBweCcsIG1hcmdpblRvcDonMjBweCd9fT5cbiAgICAgICAgICA8UnhGaWxlUGx1cyBjb2xvcj1cInJlZFwiIHN0eWxlPXt7d2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCd9fSBvbkNsaWNrPXthZGRCdXR0b25IbmRsZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgYWRkICYmICg8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICA8VG9kb0NhcmQgLz5cbiAgICAgIDwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==