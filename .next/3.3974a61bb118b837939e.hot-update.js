webpackHotUpdate(3,{

/***/ "./pages/NumberControl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sudoku__ = __webpack_require__("./sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CirclularProgress__ = __webpack_require__("./pages/CirclularProgress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__("./pages/utils.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/NumberControl.js';


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable jsx-a11y/accessible-emoji */



// eslint-disable-next-line import/no-extraneous-dependencies







// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
var NumberControlStyle = new String('.number{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:0.1em;width:1.5em;height:1.5em;color:' + __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ControlNumberColor */] + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}.number>div{margin-top:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL051bWJlckNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUI4QixBQUdnQixBQWFJLGlCQUNsQix5REFibUIsa0JBQ0ssbUdBQ0osNkZBQ0wsY0FDRCxhQUNELFlBQ0MsYUFDc0IsbUNBQ3FDLGlFQUN0RCxrQkFDbkIiLCJmaWxlIjoicGFnZXMvTnVtYmVyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuLi9zdWRva3UnO1xuXG5pbXBvcnQgQ2lyY2x1bGFyUHJvZ3Jlc3MgZnJvbSAnLi9DaXJjbHVsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG57XG5cdC8qIGxhbmd1YWdlPUNTUyAqL1xufVxuY29uc3QgTnVtYmVyQ29udHJvbFN0eWxlID0gY3NzYFxuXHQubnVtYmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdG1hcmdpbjogMC4xZW07XG5cdFx0d2lkdGg6IDEuNWVtO1xuXHRcdGhlaWdodDogMS41ZW07XG5cdFx0Y29sb3I6ICR7Q29udHJvbE51bWJlckNvbG9yfTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR9XG5cdC5udW1iZXIgPiBkaXYge1xuXHRcdG1hcmdpbi10b3A6IDAuM2VtO1xuXHR9XG5gO1xuXG5jb25zdCBOdW1iZXJDb250cm9sID0gKHsgbnVtYmVyLCBvbkNsaWNrLCBjb21wbGV0aW9uUGVyY2VudGFnZSB9KSA9PiAoXG5cdDxkaXYga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT1cIm51bWJlclwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdDxkaXY+e251bWJlcn08L2Rpdj5cblx0XHQ8Q2lyY2x1bGFyUHJvZ3Jlc3MgcGVyY2VudD17Y29tcGxldGlvblBlcmNlbnRhZ2V9IC8+XG5cdFx0PHN0eWxlIGpzeD57TnVtYmVyQ29udHJvbFN0eWxlfTwvc3R5bGU+XG5cdDwvZGl2PlxuKTtcblxuTnVtYmVyQ29udHJvbC5wcm9wVHlwZXMgPSB7XG5cdG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblx0Y29tcGxldGlvblBlcmNlbnRhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbk51bWJlckNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuXHRvbkNsaWNrOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyQ29udHJvbDtcbiJdfQ== */\n/*@ sourceURL=pages/NumberControl.js */');

NumberControlStyle.__hash = '3439289403';
NumberControlStyle.__scoped = '.number.jsx-869851258{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:0.1em;width:1.5em;height:1.5em;color:' + __WEBPACK_IMPORTED_MODULE_5__utils__["a" /* ControlNumberColor */] + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}.number.jsx-869851258>div.jsx-869851258{margin-top:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL051bWJlckNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUI4QixBQUdnQixBQWFJLGlCQUNsQix5REFibUIsa0JBQ0ssbUdBQ0osNkZBQ0wsY0FDRCxhQUNELFlBQ0MsYUFDc0IsbUNBQ3FDLGlFQUN0RCxrQkFDbkIiLCJmaWxlIjoicGFnZXMvTnVtYmVyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICcuLi9zdWRva3UnO1xuXG5pbXBvcnQgQ2lyY2x1bGFyUHJvZ3Jlc3MgZnJvbSAnLi9DaXJjbHVsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBDb250cm9sTnVtYmVyQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG57XG5cdC8qIGxhbmd1YWdlPUNTUyAqL1xufVxuY29uc3QgTnVtYmVyQ29udHJvbFN0eWxlID0gY3NzYFxuXHQubnVtYmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdG1hcmdpbjogMC4xZW07XG5cdFx0d2lkdGg6IDEuNWVtO1xuXHRcdGhlaWdodDogMS41ZW07XG5cdFx0Y29sb3I6ICR7Q29udHJvbE51bWJlckNvbG9yfTtcblx0XHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR9XG5cdC5udW1iZXIgPiBkaXYge1xuXHRcdG1hcmdpbi10b3A6IDAuM2VtO1xuXHR9XG5gO1xuXG5jb25zdCBOdW1iZXJDb250cm9sID0gKHsgbnVtYmVyLCBvbkNsaWNrLCBjb21wbGV0aW9uUGVyY2VudGFnZSB9KSA9PiAoXG5cdDxkaXYga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT1cIm51bWJlclwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdDxkaXY+e251bWJlcn08L2Rpdj5cblx0XHQ8Q2lyY2x1bGFyUHJvZ3Jlc3MgcGVyY2VudD17Y29tcGxldGlvblBlcmNlbnRhZ2V9IC8+XG5cdFx0PHN0eWxlIGpzeD57TnVtYmVyQ29udHJvbFN0eWxlfTwvc3R5bGU+XG5cdDwvZGl2PlxuKTtcblxuTnVtYmVyQ29udHJvbC5wcm9wVHlwZXMgPSB7XG5cdG51bWJlcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXHRvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblx0Y29tcGxldGlvblBlcmNlbnRhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbk51bWJlckNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuXHRvbkNsaWNrOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyQ29udHJvbDtcbiJdfQ== */\n/*@ sourceURL=pages/NumberControl.js */';
NumberControlStyle.__scopedHash = '869851258';
var NumberControl = function NumberControl(_ref) {
	var number = _ref.number,
	    onClick = _ref.onClick,
	    completionPercentage = _ref.completionPercentage;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{ key: number, onClick: onClick, className: 'jsx-' + NumberControlStyle.__scopedHash + ' ' + 'number',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{
				className: 'jsx-' + NumberControlStyle.__scopedHash,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			},
			number
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__CirclularProgress__["a" /* default */], { percent: completionPercentage, __source: {
				fileName: _jsxFileName,
				lineNumber: 48
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: NumberControlStyle.__scopedHash,
			css: NumberControlStyle.__scoped
		})
	);
};

NumberControl.propTypes = {
	number: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
	completionPercentage: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired
};

NumberControl.defaultProps = {
	onClick: null
};

var _default = NumberControl;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(NumberControlStyle, 'NumberControlStyle', '/Users/qianghuang/react-sudoku-game/pages/NumberControl.js');
	reactHotLoader.register(NumberControl, 'NumberControl', '/Users/qianghuang/react-sudoku-game/pages/NumberControl.js');
	reactHotLoader.register(_default, 'default', '/Users/qianghuang/react-sudoku-game/pages/NumberControl.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/NumberControl")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.3974a61bb118b837939e.hot-update.js.map