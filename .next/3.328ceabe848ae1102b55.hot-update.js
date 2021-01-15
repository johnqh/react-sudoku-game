webpackHotUpdate(3,{

/***/ "./pages/Board.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Cell__ = __webpack_require__("./pages/Cell.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./pages/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sudoku__ = __webpack_require__("./sudoku.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/Board.js';


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

/* eslint-disable react/forbid-prop-types */
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
var PuzzleStyle = new String('.puzzle{margin-top:0.5em;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;}.row:not(:last-child){border-bottom:1px solid black;}.row:nth-child(3n + 3):not(:last-child){border-bottom:2px solid black !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCdUIsQUFHb0IsQUFNSixBQU1pQixBQUdXLGlCQWRKLGFBWXRDLFdBR0EsYUFkZ0IsZUFDeUQsS0FJckQsNERBSHBCLGlDQUlRLGlDQUM4QixxQ0FDdEMiLCJmaWxlIjoicGFnZXMvQm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5pbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnO1xuaW1wb3J0IHsgY2VsbFdpZHRoIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpc1BlZXIgYXMgYXJlQ29vcmRpbmF0ZVBlZXJzIH0gZnJvbSAnLi4vc3Vkb2t1JztcbmltcG9ydCB7IGlzQ29uZmxpY3QgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IFB1enpsZVN0eWxlID0gY3NzYFxuXHQucHV6emxlIHtcblx0XHRtYXJnaW4tdG9wOiAwLjVlbTtcblx0XHR3aWR0aDogJHtjZWxsV2lkdGggKiA5fWVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cdH1cblx0LnJvdyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXg6IDA7XG5cdFx0d2lkdGg6ICR7Y2VsbFdpZHRoICogOX1lbTtcblx0fVxuXHQucm93Om5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0fVxuXHQucm93Om50aC1jaGlsZCgzbiArIDMpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuXHR9XG5gO1xuXG5mdW5jdGlvbiByZW5kZXJDZWxsKGJvYXJkLCBjZWxsLCB4LCB5LCBzZWxlY3RlZCwgb25DbGljaykge1xuXHRjb25zdCB7IHZhbHVlLCBwcmVmaWxsZWQsIG5vdGVzIH0gPSBjZWxsLnRvSlNPTigpO1xuXHRjb25zdCBjb25mbGljdCA9IGlzQ29uZmxpY3QoYm9hcmQsIHgsIHkpO1xuXHRjb25zdCBwZWVyID0gYXJlQ29vcmRpbmF0ZVBlZXJzKHsgeCwgeSB9LCBib2FyZC5nZXQoJ3NlbGVjdGVkJykpO1xuXHRjb25zdCBzYW1lVmFsdWUgPSAhIShzZWxlY3RlZCAmJiBzZWxlY3RlZC5nZXQoJ3ZhbHVlJykgJiYgdmFsdWUgPT09IHNlbGVjdGVkLmdldCgndmFsdWUnKSk7XG5cblx0Y29uc3QgaXNTZWxlY3RlZCA9IGNlbGwgPT09IHNlbGVjdGVkO1xuXHRyZXR1cm4gKFxuXHRcdDxDZWxsXG5cdFx0XHRwcmVmaWxsZWQ9e3ByZWZpbGxlZH1cblx0XHRcdG5vdGVzPXtub3Rlc31cblx0XHRcdHNhbWVWYWx1ZT17c2FtZVZhbHVlfVxuXHRcdFx0aXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cblx0XHRcdGlzUGVlcj17cGVlcn1cblx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0b25DbGljayh4LCB5KTtcblx0XHRcdH19XG5cdFx0XHRrZXk9e3l9XG5cdFx0XHR4PXt4fVxuXHRcdFx0eT17eX1cblx0XHRcdGNvbmZsaWN0PXtjb25mbGljdH1cblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgb25DbGljayB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1enpsZVwiPlxuXHRcdFx0e2JvYXJkXG5cdFx0XHRcdC5nZXQoJ3B1enpsZScpXG5cdFx0XHRcdC5tYXAoKHJvdywgaSkgPT4gKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcblx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7cm93Lm1hcCgoY2VsbCwgaikgPT4gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgaSwgaiwgc2VsZWN0ZWQsIG9uQ2xpY2spKS50b0FycmF5KCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpXG5cdFx0XHRcdC50b0FycmF5KCl9XG5cdFx0XHQ8c3R5bGUganN4PntQdXp6bGVTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQm9hcmQucHJvcFR5cGVzID0ge1xuXHRib2FyZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXHRzZWxlY3RlZDogUHJvcFR5cGVzLm9iamVjdCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbkJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcblx0c2VsZWN0ZWQ6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiJdfQ== */\n/*@ sourceURL=pages/Board.js */');

PuzzleStyle.__hash = '2878659807';
PuzzleStyle.__scoped = '.puzzle.jsx-192934110{margin-top:0.5em;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}.row.jsx-192934110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* cellWidth */] * 9 + 'em;}.row.jsx-192934110:not(:last-child){border-bottom:1px solid black;}.row.jsx-192934110:nth-child(3n + 3):not(:last-child){border-bottom:2px solid black !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0JvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCdUIsQUFHb0IsQUFNSixBQU1pQixBQUdXLGlCQWRKLGFBWXRDLFdBR0EsYUFkZ0IsZUFDeUQsS0FJckQsNERBSHBCLGlDQUlRLGlDQUM4QixxQ0FDdEMiLCJmaWxlIjoicGFnZXMvQm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3FpYW5naHVhbmcvcmVhY3Qtc3Vkb2t1LWdhbWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5pbXBvcnQgQ2VsbCBmcm9tICcuL0NlbGwnO1xuaW1wb3J0IHsgY2VsbFdpZHRoIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpc1BlZXIgYXMgYXJlQ29vcmRpbmF0ZVBlZXJzIH0gZnJvbSAnLi4vc3Vkb2t1JztcbmltcG9ydCB7IGlzQ29uZmxpY3QgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xue1xuXHQvKiBsYW5ndWFnZT1DU1MgKi9cbn1cbmNvbnN0IFB1enpsZVN0eWxlID0gY3NzYFxuXHQucHV6emxlIHtcblx0XHRtYXJnaW4tdG9wOiAwLjVlbTtcblx0XHR3aWR0aDogJHtjZWxsV2lkdGggKiA5fWVtO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG5cdH1cblx0LnJvdyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGZsZXg6IDA7XG5cdFx0d2lkdGg6ICR7Y2VsbFdpZHRoICogOX1lbTtcblx0fVxuXHQucm93Om5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcblx0fVxuXHQucm93Om50aC1jaGlsZCgzbiArIDMpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuXHR9XG5gO1xuXG5mdW5jdGlvbiByZW5kZXJDZWxsKGJvYXJkLCBjZWxsLCB4LCB5LCBzZWxlY3RlZCwgb25DbGljaykge1xuXHRjb25zdCB7IHZhbHVlLCBwcmVmaWxsZWQsIG5vdGVzIH0gPSBjZWxsLnRvSlNPTigpO1xuXHRjb25zdCBjb25mbGljdCA9IGlzQ29uZmxpY3QoYm9hcmQsIHgsIHkpO1xuXHRjb25zdCBwZWVyID0gYXJlQ29vcmRpbmF0ZVBlZXJzKHsgeCwgeSB9LCBib2FyZC5nZXQoJ3NlbGVjdGVkJykpO1xuXHRjb25zdCBzYW1lVmFsdWUgPSAhIShzZWxlY3RlZCAmJiBzZWxlY3RlZC5nZXQoJ3ZhbHVlJykgJiYgdmFsdWUgPT09IHNlbGVjdGVkLmdldCgndmFsdWUnKSk7XG5cblx0Y29uc3QgaXNTZWxlY3RlZCA9IGNlbGwgPT09IHNlbGVjdGVkO1xuXHRyZXR1cm4gKFxuXHRcdDxDZWxsXG5cdFx0XHRwcmVmaWxsZWQ9e3ByZWZpbGxlZH1cblx0XHRcdG5vdGVzPXtub3Rlc31cblx0XHRcdHNhbWVWYWx1ZT17c2FtZVZhbHVlfVxuXHRcdFx0aXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cblx0XHRcdGlzUGVlcj17cGVlcn1cblx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0b25DbGljayh4LCB5KTtcblx0XHRcdH19XG5cdFx0XHRrZXk9e3l9XG5cdFx0XHR4PXt4fVxuXHRcdFx0eT17eX1cblx0XHRcdGNvbmZsaWN0PXtjb25mbGljdH1cblx0XHQvPlxuXHQpO1xufVxuXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJvYXJkLCBzZWxlY3RlZCwgb25DbGljayB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB1enpsZVwiPlxuXHRcdFx0e2JvYXJkXG5cdFx0XHRcdC5nZXQoJ3B1enpsZScpXG5cdFx0XHRcdC5tYXAoKHJvdywgaSkgPT4gKFxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcblx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHR7cm93Lm1hcCgoY2VsbCwgaikgPT4gcmVuZGVyQ2VsbChib2FyZCwgY2VsbCwgaSwgaiwgc2VsZWN0ZWQsIG9uQ2xpY2spKS50b0FycmF5KCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpXG5cdFx0XHRcdC50b0FycmF5KCl9XG5cdFx0XHQ8c3R5bGUganN4PntQdXp6bGVTdHlsZX08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuQm9hcmQucHJvcFR5cGVzID0ge1xuXHRib2FyZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXHRzZWxlY3RlZDogUHJvcFR5cGVzLm9iamVjdCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbkJvYXJkLmRlZmF1bHRQcm9wcyA9IHtcblx0c2VsZWN0ZWQ6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiJdfQ== */\n/*@ sourceURL=pages/Board.js */';
PuzzleStyle.__scopedHash = '192934110';
function renderCell(board, cell, x, y, selected, _onClick) {
	var _cell$toJSON = cell.toJSON(),
	    value = _cell$toJSON.value,
	    prefilled = _cell$toJSON.prefilled,
	    notes = _cell$toJSON.notes;

	var conflict = Object(__WEBPACK_IMPORTED_MODULE_6__functions__["f" /* isConflict */])(board, x, y);
	var peer = Object(__WEBPACK_IMPORTED_MODULE_5__sudoku__["a" /* isPeer */])({ x: x, y: y }, board.get('selected'));
	var sameValue = !!(selected && selected.get('value') && value === selected.get('value'));

	var isSelected = cell === selected;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Cell__["a" /* default */], {
		prefilled: prefilled,
		notes: notes,
		sameValue: sameValue,
		isSelected: isSelected,
		isPeer: peer,
		value: value,
		onClick: function onClick() {
			_onClick(x, y);
		},
		key: y,
		x: x,
		y: y,
		conflict: conflict,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	});
}

var Board = function Board(props) {
	var board = props.board,
	    selected = props.selected,
	    onClick = props.onClick;


	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'puzzle',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 78
			}
		},
		board.get('puzzle').map(function (row, i) {
			return (
				// eslint-disable-next-line react/no-array-index-key
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{ key: i, className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'row',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 83
						}
					},
					row.map(function (cell, j) {
						return renderCell(board, cell, i, j, selected, onClick);
					}).toArray()
				)
			);
		}).toArray(),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: PuzzleStyle.__scopedHash,
			css: PuzzleStyle.__scoped
		})
	);
};

Board.propTypes = {
	board: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
	selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
	onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

Board.defaultProps = {
	selected: null
};

var _default = Board;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(PuzzleStyle, 'PuzzleStyle', '/Users/qianghuang/react-sudoku-game/pages/Board.js');
	reactHotLoader.register(renderCell, 'renderCell', '/Users/qianghuang/react-sudoku-game/pages/Board.js');
	reactHotLoader.register(Board, 'Board', '/Users/qianghuang/react-sudoku-game/pages/Board.js');
	reactHotLoader.register(_default, 'default', '/Users/qianghuang/react-sudoku-game/pages/Board.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Board")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.328ceabe848ae1102b55.hot-update.js.map