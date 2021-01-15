webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_css__ = __webpack_require__("./node_modules/styled-jsx/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_range_style__ = __webpack_require__("./input-range-style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tool_tip__ = __webpack_require__("./components/tool-tip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Board__ = __webpack_require__("./pages/Board.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Actions__ = __webpack_require__("./pages/Actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Control__ = __webpack_require__("./pages/Control.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__GenerateUI__ = __webpack_require__("./pages/GenerateUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__functions__ = __webpack_require__("./pages/functions.js");
var _jsxFileName = '/Users/qianghuang/react-sudoku-game/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-console */
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




var ReturnIcon = function ReturnIcon(props) {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'svg',
		props,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
			d: 'M384.834 180.699H36.101l73.326-82.187c4.755-5.33 4.289-13.505-1.041-18.26-5.328-4.754-13.505-4.29-18.26 1.041l-82.582 92.56c-10.059 11.278-10.058 28.282.001 39.557l82.582 92.561a12.897 12.897 0 0 0 9.654 4.323c3.064 0 6.139-1.083 8.606-3.282 5.33-4.755 5.795-12.93 1.041-18.26l-73.326-82.188h348.733c55.858 0 101.3 45.444 101.3 101.3s-45.443 101.3-101.3 101.3h-61.58c-7.143 0-12.933 5.791-12.933 12.933 0 7.142 5.79 12.933 12.933 12.933h61.58c70.12 0 127.166-57.046 127.166-127.166-.001-70.119-57.047-127.165-127.167-127.165z'
		})
	);
};

ReturnIcon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 512.001 512.001'
};










var Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

// eslint-disable-next-line react/no-multi-comp

var Index = function (_Component) {
	_inherits(Index, _Component);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.generateGame = function () {
			var finalCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

			_this.setState(Object(__WEBPACK_IMPORTED_MODULE_10__functions__["d" /* generateGame */])(finalCount));
		}, _this.addNumberAsNote = function (number) {
			var board = Object(__WEBPACK_IMPORTED_MODULE_10__functions__["a" /* addNumberAsNote */])(_this.state.board, _this.getSelectedCell(), number);
			if (board) _this.updateBoard(board);
		}, _this.updateBoard = function (newBoard) {
			var history = _this.state.history;
			var historyOffSet = _this.state.historyOffSet;
			// anything before current step is still in history

			history = history.slice(0, historyOffSet + 1);
			// add itself onto the history
			history = history.push(newBoard);
			// update the game
			_this.setState({ board: newBoard, history: history, historyOffSet: history.size - 1 });
		}, _this.canUndo = function () {
			return _this.state.historyOffSet > 0;
		}, _this.redo = function () {
			var history = _this.state.history;
			var historyOffSet = _this.state.historyOffSet;

			if (history.size) {
				historyOffSet = Math.min(history.size - 1, historyOffSet + 1);
				var board = history.get(historyOffSet);
				_this.setState({ board: board, historyOffSet: historyOffSet });
			}
		}, _this.undo = function () {
			var history = _this.state.history;
			var _this$state = _this.state,
			    historyOffSet = _this$state.historyOffSet,
			    board = _this$state.board;

			if (history.size) {
				historyOffSet = Math.max(0, historyOffSet - 1);
				board = history.get(historyOffSet);
				_this.setState({ board: board, historyOffSet: historyOffSet, history: history });
			}
		}, _this.eraseSelected = function () {
			var selectedCell = _this.getSelectedCell();
			if (!selectedCell) return;
			_this.fillNumber(false);
		}, _this.fillSelectedWithSolution = function () {
			var _this$state2 = _this.state,
			    board = _this$state2.board,
			    solution = _this$state2.solution;

			var selectedCell = _this.getSelectedCell();

			_this.fillNumber(Object(__WEBPACK_IMPORTED_MODULE_10__functions__["c" /* fillSelectedWithSolution */])(board, solution, selectedCell));
		}, _this.fillNumber = function (number) {
			var selectedCell = _this.getSelectedCell();

			_this.updateBoard(Object(__WEBPACK_IMPORTED_MODULE_10__functions__["b" /* fillNumber */])(_this.state.board, selectedCell, number));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// eslint-disable-next-line no-undef
			if ('serviceWorker' in navigator) {
				// eslint-disable-next-line no-undef
				navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
					console.log('ServiceWorker scope: ', reg.scope);
					console.log('service worker registration successful');
				}).catch(function (err) {
					console.warn('service worker registration failed', err.message);
				});
			}
		}
	}, {
		key: 'getSelectedCell',
		value: function getSelectedCell() {
			var board = this.state.board;

			var selected = board.get('selected');
			return selected && board.get('puzzle').getIn([selected.x, selected.y]);
		}

		// fill currently selected cell with number

	}, {
		key: 'renderControls',
		value: function renderControls() {
			var board = this.state.board;

			var selected = this.getSelectedCell();
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-1610769295' + ' ' + 'controls',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 122
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Control__["a" /* default */], { board: board, selected: selected, fillNumber: this.fillNumber, fillNote: this.addNumberAsNote, __source: {
						fileName: _jsxFileName,
						lineNumber: 123
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Actions__["a" /* default */], { history: this.state.history, selected: selected, undo: this.undo, redo: this.redo, erase: this.eraseSelected, solution: this.fillSelectedWithSolution, __source: {
						fileName: _jsxFileName,
						lineNumber: 124
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '1610769295',
					css: '.controls.jsx-1610769295{margin-top:0.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThITSxBQUd5QixpQkFDSiwwRUFDRSx5REFDUSxtR0FDWixXQUNLLGdCQUNqQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCBSYW5nZVN0eWxlIGZyb20gJy4uL2lucHV0LXJhbmdlLXN0eWxlJztcbmltcG9ydCBSZXR1cm5JY29uIGZyb20gJy4uL3N2Zy9yZXR1cm4uc3ZnJztcblxuaW1wb3J0IFRpcCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2wtdGlwJztcblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgR2VuZXJhdGlvblVJIGZyb20gJy4vR2VuZXJhdGVVSSc7XG5pbXBvcnQgeyBzZWxlY3RDZWxsLCBmaWxsTnVtYmVyLCBmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24sIGFkZE51bWJlckFzTm90ZSwgZ2VuZXJhdGVHYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICdEaXNjb3ZlciB0aGUgbmV4dCBldm9sdXRpb24gb2YgU3Vkb2t1IHdpdGggYW1hemluZyBncmFwaGljcywgYW5pbWF0aW9ucywgYW5kIHVzZXItZnJpZW5kbHkgZmVhdHVyZXMuIEVuam95IGEgU3Vkb2t1IGV4cGVyaWVuY2UgbGlrZSB5b3UgbmV2ZXIgaGF2ZSBiZWZvcmUgd2l0aCBjdXN0b21pemFibGUgZ2FtZSBnZW5lcmF0aW9uLCBjZWxsIGhpZ2hsaWdodGluZywgaW50dWl0aXZlIGNvbnRyb2xzIGFuZCBtb3JlISc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1tdWx0aS1jb21wXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge307XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcblx0XHRcdFx0LnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKVxuXHRcdFx0XHQudGhlbigocmVnKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgc2NvcGU6ICcsIHJlZy5zY29wZSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Z2V0U2VsZWN0ZWRDZWxsKCkge1xuXHRcdGNvbnN0IHsgYm9hcmQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSBib2FyZC5nZXQoJ3NlbGVjdGVkJyk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkICYmIGJvYXJkLmdldCgncHV6emxlJykuZ2V0SW4oW3NlbGVjdGVkLngsIHNlbGVjdGVkLnldKTtcblx0fVxuXG5cdGdlbmVyYXRlR2FtZSA9IChmaW5hbENvdW50ID0gMjApID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKGdlbmVyYXRlR2FtZShmaW5hbENvdW50KSk7XG5cdH07XG5cblx0YWRkTnVtYmVyQXNOb3RlID0gKG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IGJvYXJkID0gYWRkTnVtYmVyQXNOb3RlKHRoaXMuc3RhdGUuYm9hcmQsIHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCksIG51bWJlcik7XG5cdFx0aWYgKGJvYXJkKSB0aGlzLnVwZGF0ZUJvYXJkKGJvYXJkKTtcblx0fTtcblxuXHR1cGRhdGVCb2FyZCA9IChuZXdCb2FyZCkgPT4ge1xuXHRcdGxldCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgeyBoaXN0b3J5T2ZmU2V0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIGFueXRoaW5nIGJlZm9yZSBjdXJyZW50IHN0ZXAgaXMgc3RpbGwgaW4gaGlzdG9yeVxuXHRcdGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIGhpc3RvcnlPZmZTZXQgKyAxKTtcblx0XHQvLyBhZGQgaXRzZWxmIG9udG8gdGhlIGhpc3Rvcnlcblx0XHRoaXN0b3J5ID0gaGlzdG9yeS5wdXNoKG5ld0JvYXJkKTtcblx0XHQvLyB1cGRhdGUgdGhlIGdhbWVcblx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IG5ld0JvYXJkLCBoaXN0b3J5LCBoaXN0b3J5T2ZmU2V0OiBoaXN0b3J5LnNpemUgLSAxIH0pO1xuXHR9O1xuXG5cdGNhblVuZG8gPSAoKSA9PiB0aGlzLnN0YXRlLmhpc3RvcnlPZmZTZXQgPiAwO1xuXG5cdHJlZG8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCB7IGhpc3RvcnlPZmZTZXQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGhpc3Rvcnkuc2l6ZSkge1xuXHRcdFx0aGlzdG9yeU9mZlNldCA9IE1hdGgubWluKGhpc3Rvcnkuc2l6ZSAtIDEsIGhpc3RvcnlPZmZTZXQgKyAxKTtcblx0XHRcdGNvbnN0IGJvYXJkID0gaGlzdG9yeS5nZXQoaGlzdG9yeU9mZlNldCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGhpc3RvcnlPZmZTZXQgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdHVuZG8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCB7IGhpc3RvcnlPZmZTZXQsIGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChoaXN0b3J5LnNpemUpIHtcblx0XHRcdGhpc3RvcnlPZmZTZXQgPSBNYXRoLm1heCgwLCBoaXN0b3J5T2ZmU2V0IC0gMSk7XG5cdFx0XHRib2FyZCA9IGhpc3RvcnkuZ2V0KGhpc3RvcnlPZmZTZXQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBoaXN0b3J5T2ZmU2V0LCBoaXN0b3J5IH0pO1xuXHRcdH1cblx0fTtcblxuXHRlcmFzZVNlbGVjdGVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cdFx0aWYgKCFzZWxlY3RlZENlbGwpIHJldHVybjtcblx0XHR0aGlzLmZpbGxOdW1iZXIoZmFsc2UpO1xuXHR9O1xuXG5cdGZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbiA9ICgpID0+IHtcblx0XHRjb25zdCB7IGJvYXJkLCBzb2x1dGlvbiB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXG5cdFx0dGhpcy5maWxsTnVtYmVyKGZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbihib2FyZCwgc29sdXRpb24sIHNlbGVjdGVkQ2VsbCkpO1xuXHR9O1xuXG5cdC8vIGZpbGwgY3VycmVudGx5IHNlbGVjdGVkIGNlbGwgd2l0aCBudW1iZXJcblx0ZmlsbE51bWJlciA9IChudW1iZXIpID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXG5cdFx0dGhpcy51cGRhdGVCb2FyZChmaWxsTnVtYmVyKHRoaXMuc3RhdGUuYm9hcmQsIHNlbGVjdGVkQ2VsbCwgbnVtYmVyKSk7XG5cdH07XG5cblx0cmVuZGVyQ29udHJvbHMoKSB7XG5cdFx0Y29uc3QgeyBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cblx0XHRcdFx0PENvbnRyb2wgYm9hcmQ9e2JvYXJkfSBzZWxlY3RlZD17c2VsZWN0ZWR9IGZpbGxOdW1iZXI9e3RoaXMuZmlsbE51bWJlcn0gZmlsbE5vdGU9e3RoaXMuYWRkTnVtYmVyQXNOb3RlfSAvPlxuXHRcdFx0XHQ8QWN0aW9ucyBoaXN0b3J5PXt0aGlzLnN0YXRlLmhpc3Rvcnl9IHNlbGVjdGVkPXtzZWxlY3RlZH0gdW5kbz17dGhpcy51bmRvfSByZWRvPXt0aGlzLnJlZG99IGVyYXNlPXt0aGlzLmVyYXNlU2VsZWN0ZWR9IHNvbHV0aW9uPXt0aGlzLmZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbn0gLz5cblx0XHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmNvbnRyb2xzIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMC4zZW07XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyR2VuZXJhdGlvblVJKCkge1xuXHRcdHJldHVybiA8R2VuZXJhdGlvblVJIGdlbmVyYXRlR2FtZT17dGhpcy5nZW5lcmF0ZUdhbWV9IC8+O1xuXHR9XG5cblx0cmVuZGVySGVhZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldy1nYW1lXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBmYWxzZSB9KX0+XG5cdFx0XHRcdFx0PFJldHVybkljb24gLz5cblx0XHRcdFx0XHQ8ZGl2Pk5ldyBHYW1lPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VGlwIC8+XG5cdFx0XHRcdHsvKiBsYW5ndWFnZT1DU1MgKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAuNWVtO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5ldy1nYW1lIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjJlbTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjJlbSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5ldy1nYW1lIDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMWVtO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblx0XHRcdFx0PE5leHRIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5TdWRva3UgRXZvbHZlZDwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e0Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3BlY2lhbCtFbGl0ZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vc3Vkb2t1LnNpdGlhbmxpdS5jb20vXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlN1ZG9rdSBFdm9sdmVkXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e0Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zdWRva3Uuc2l0aWFubGl1LmNvbS9zdGF0aWMvb2ctaW1hZ2UucG5nXCIgLz5cblx0XHRcdFx0PC9OZXh0SGVhZD5cblx0XHRcdFx0eyFib2FyZCAmJiB0aGlzLnJlbmRlckdlbmVyYXRpb25VSSgpfVxuXHRcdFx0XHR7Ym9hcmQgJiYgdGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0e2JvYXJkICYmIChcblx0XHRcdFx0XHQ8Qm9hcmRcblx0XHRcdFx0XHRcdGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e3RoaXMuZ2V0U2VsZWN0ZWRDZWxsKCl9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoeCwgeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IHNlbGVjdENlbGwodGhpcy5zdGF0ZS5ib2FyZCwgeCwgeSkgfSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtib2FyZCAmJiB0aGlzLnJlbmRlckNvbnRyb2xzKCl9XG5cdFx0XHRcdHsvKiBsYW5ndWFnZT1DU1MgKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSksXG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnU3BlY2lhbCBFbGl0ZScsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA5MzBweCkgYW5kIChtaW4taGVpZ2h0OiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDM3MHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnJvb3RlciB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPlxuXHRcdFx0XHRcdHtSYW5nZVN0eWxlfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
				})
			);
		}
	}, {
		key: 'renderGenerationUI',
		value: function renderGenerationUI() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__GenerateUI__["a" /* default */], { generateGame: this.generateGame, __source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-3293196743' + ' ' + 'header',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 148
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{ onClick: function onClick() {
							return _this2.setState({ board: false });
						}, className: 'jsx-3293196743' + ' ' + 'new-game',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 149
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReturnIcon, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 150
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'div',
						{
							className: 'jsx-3293196743',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 151
							}
						},
						'New Game'
					)
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_tool_tip__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 153
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '3293196743',
					css: '.header.jsx-3293196743{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:500px;padding:0 0.5em;box-sizing:border-box;}.new-game.jsx-3293196743{cursor:pointer;margin-top:0.2em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.2em 0;}.new-game.jsx-3293196743 svg{height:1em;margin-bottom:0.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKTSxBQUdxQixBQVFFLEFBUUosV0FDUyxJQVJILGdCQVNsQixDQVJxQiwwQ0FUVCxXQUNtQixpREFTUCxrRUFSUCxnQkFDQSxnQkFDTSxDQU9ILHFCQU5wQix3RUFPaUIsZ0JBQ2pCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9xaWFuZ2h1YW5nL3JlYWN0LXN1ZG9rdS1nYW1lIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudC1wcm9wcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1zcGFjZXMtYW5kLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdGFicyAqL1xuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYWNjZXNzaWJsZS1lbW9qaSAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuaW1wb3J0IFJhbmdlU3R5bGUgZnJvbSAnLi4vaW5wdXQtcmFuZ2Utc3R5bGUnO1xuaW1wb3J0IFJldHVybkljb24gZnJvbSAnLi4vc3ZnL3JldHVybi5zdmcnO1xuXG5pbXBvcnQgVGlwIGZyb20gJy4uL2NvbXBvbmVudHMvdG9vbC10aXAnO1xuXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZCc7XG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL0FjdGlvbnMnO1xuaW1wb3J0IENvbnRyb2wgZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBHZW5lcmF0aW9uVUkgZnJvbSAnLi9HZW5lcmF0ZVVJJztcbmltcG9ydCB7IHNlbGVjdENlbGwsIGZpbGxOdW1iZXIsIGZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbiwgYWRkTnVtYmVyQXNOb3RlLCBnZW5lcmF0ZUdhbWUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IERlc2NyaXB0aW9uID0gJ0Rpc2NvdmVyIHRoZSBuZXh0IGV2b2x1dGlvbiBvZiBTdWRva3Ugd2l0aCBhbWF6aW5nIGdyYXBoaWNzLCBhbmltYXRpb25zLCBhbmQgdXNlci1mcmllbmRseSBmZWF0dXJlcy4gRW5qb3kgYSBTdWRva3UgZXhwZXJpZW5jZSBsaWtlIHlvdSBuZXZlciBoYXZlIGJlZm9yZSB3aXRoIGN1c3RvbWl6YWJsZSBnYW1lIGdlbmVyYXRpb24sIGNlbGwgaGlnaGxpZ2h0aW5nLCBpbnR1aXRpdmUgY29udHJvbHMgYW5kIG1vcmUhJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLW11bHRpLWNvbXBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuXHRcdFx0XHQucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG5cdFx0XHRcdC50aGVuKChyZWcpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciBzY29wZTogJywgcmVnLnNjb3BlKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRnZXRTZWxlY3RlZENlbGwoKSB7XG5cdFx0Y29uc3QgeyBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZCA9IGJvYXJkLmdldCgnc2VsZWN0ZWQnKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWQgJiYgYm9hcmQuZ2V0KCdwdXp6bGUnKS5nZXRJbihbc2VsZWN0ZWQueCwgc2VsZWN0ZWQueV0pO1xuXHR9XG5cblx0Z2VuZXJhdGVHYW1lID0gKGZpbmFsQ291bnQgPSAyMCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoZ2VuZXJhdGVHYW1lKGZpbmFsQ291bnQpKTtcblx0fTtcblxuXHRhZGROdW1iZXJBc05vdGUgPSAobnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgYm9hcmQgPSBhZGROdW1iZXJBc05vdGUodGhpcy5zdGF0ZS5ib2FyZCwgdGhpcy5nZXRTZWxlY3RlZENlbGwoKSwgbnVtYmVyKTtcblx0XHRpZiAoYm9hcmQpIHRoaXMudXBkYXRlQm9hcmQoYm9hcmQpO1xuXHR9O1xuXG5cdHVwZGF0ZUJvYXJkID0gKG5ld0JvYXJkKSA9PiB7XG5cdFx0bGV0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCB7IGhpc3RvcnlPZmZTZXQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly8gYW55dGhpbmcgYmVmb3JlIGN1cnJlbnQgc3RlcCBpcyBzdGlsbCBpbiBoaXN0b3J5XG5cdFx0aGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgaGlzdG9yeU9mZlNldCArIDEpO1xuXHRcdC8vIGFkZCBpdHNlbGYgb250byB0aGUgaGlzdG9yeVxuXHRcdGhpc3RvcnkgPSBoaXN0b3J5LnB1c2gobmV3Qm9hcmQpO1xuXHRcdC8vIHVwZGF0ZSB0aGUgZ2FtZVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZDogbmV3Qm9hcmQsIGhpc3RvcnksIGhpc3RvcnlPZmZTZXQ6IGhpc3Rvcnkuc2l6ZSAtIDEgfSk7XG5cdH07XG5cblx0Y2FuVW5kbyA9ICgpID0+IHRoaXMuc3RhdGUuaGlzdG9yeU9mZlNldCA+IDA7XG5cblx0cmVkbyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IHsgaGlzdG9yeU9mZlNldCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoaGlzdG9yeS5zaXplKSB7XG5cdFx0XHRoaXN0b3J5T2ZmU2V0ID0gTWF0aC5taW4oaGlzdG9yeS5zaXplIC0gMSwgaGlzdG9yeU9mZlNldCArIDEpO1xuXHRcdFx0Y29uc3QgYm9hcmQgPSBoaXN0b3J5LmdldChoaXN0b3J5T2ZmU2V0KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgaGlzdG9yeU9mZlNldCB9KTtcblx0XHR9XG5cdH07XG5cblx0dW5kbyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IHsgaGlzdG9yeU9mZlNldCwgYm9hcmQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGhpc3Rvcnkuc2l6ZSkge1xuXHRcdFx0aGlzdG9yeU9mZlNldCA9IE1hdGgubWF4KDAsIGhpc3RvcnlPZmZTZXQgLSAxKTtcblx0XHRcdGJvYXJkID0gaGlzdG9yeS5nZXQoaGlzdG9yeU9mZlNldCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGhpc3RvcnlPZmZTZXQsIGhpc3RvcnkgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdGVyYXNlU2VsZWN0ZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblx0XHRpZiAoIXNlbGVjdGVkQ2VsbCkgcmV0dXJuO1xuXHRcdHRoaXMuZmlsbE51bWJlcihmYWxzZSk7XG5cdH07XG5cblx0ZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgYm9hcmQsIHNvbHV0aW9uIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cblx0XHR0aGlzLmZpbGxOdW1iZXIoZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uKGJvYXJkLCBzb2x1dGlvbiwgc2VsZWN0ZWRDZWxsKSk7XG5cdH07XG5cblx0Ly8gZmlsbCBjdXJyZW50bHkgc2VsZWN0ZWQgY2VsbCB3aXRoIG51bWJlclxuXHRmaWxsTnVtYmVyID0gKG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cblx0XHR0aGlzLnVwZGF0ZUJvYXJkKGZpbGxOdW1iZXIodGhpcy5zdGF0ZS5ib2FyZCwgc2VsZWN0ZWRDZWxsLCBudW1iZXIpKTtcblx0fTtcblxuXHRyZW5kZXJDb250cm9scygpIHtcblx0XHRjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuXHRcdFx0XHQ8Q29udHJvbCBib2FyZD17Ym9hcmR9IHNlbGVjdGVkPXtzZWxlY3RlZH0gZmlsbE51bWJlcj17dGhpcy5maWxsTnVtYmVyfSBmaWxsTm90ZT17dGhpcy5hZGROdW1iZXJBc05vdGV9IC8+XG5cdFx0XHRcdDxBY3Rpb25zIGhpc3Rvcnk9e3RoaXMuc3RhdGUuaGlzdG9yeX0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSB1bmRvPXt0aGlzLnVuZG99IHJlZG89e3RoaXMucmVkb30gZXJhc2U9e3RoaXMuZXJhc2VTZWxlY3RlZH0gc29sdXRpb249e3RoaXMuZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9ufSAvPlxuXHRcdFx0XHR7LyogbGFuZ3VhZ2U9Q1NTICovfVxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQuY29udHJvbHMge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjNlbTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuNWVtIDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJHZW5lcmF0aW9uVUkoKSB7XG5cdFx0cmV0dXJuIDxHZW5lcmF0aW9uVUkgZ2VuZXJhdGVHYW1lPXt0aGlzLmdlbmVyYXRlR2FtZX0gLz47XG5cdH1cblxuXHRyZW5kZXJIZWFkZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3LWdhbWVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IGZhbHNlIH0pfT5cblx0XHRcdFx0XHQ8UmV0dXJuSWNvbiAvPlxuXHRcdFx0XHRcdDxkaXY+TmV3IEdhbWU8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxUaXAgLz5cblx0XHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHRcdG1heC13aWR0aDogNTAwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAgMC41ZW07XG5cdFx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubmV3LWdhbWUge1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDAuMmVtO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAuMmVtIDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQubmV3LWdhbWUgOmdsb2JhbChzdmcpIHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxZW07XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDAuM2VtO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYm9hcmQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuXHRcdFx0XHQ8TmV4dEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPlN1ZG9rdSBFdm9sdmVkPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17RGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TcGVjaWFsK0VsaXRlXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9zdWRva3Uuc2l0aWFubGl1LmNvbS9cIiAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiU3Vkb2t1IEV2b2x2ZWRcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17RGVzY3JpcHRpb259IC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3N1ZG9rdS5zaXRpYW5saXUuY29tL3N0YXRpYy9vZy1pbWFnZS5wbmdcIiAvPlxuXHRcdFx0XHQ8L05leHRIZWFkPlxuXHRcdFx0XHR7IWJvYXJkICYmIHRoaXMucmVuZGVyR2VuZXJhdGlvblVJKCl9XG5cdFx0XHRcdHtib2FyZCAmJiB0aGlzLnJlbmRlckhlYWRlcigpfVxuXHRcdFx0XHR7Ym9hcmQgJiYgKFxuXHRcdFx0XHRcdDxCb2FyZFxuXHRcdFx0XHRcdFx0Ym9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9XG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17dGhpcy5nZXRTZWxlY3RlZENlbGwoKX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyh4LCB5KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZDogc2VsZWN0Q2VsbCh0aGlzLnN0YXRlLmJvYXJkLCB4LCB5KSB9KTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2JvYXJkICYmIHRoaXMucmVuZGVyQ29udHJvbHMoKX1cblx0XHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSxcblx0XHRcdFx0XHRcdC5ib2R5IHtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdTcGVjaWFsIEVsaXRlJywgY3Vyc2l2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib2R5IHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDB2dztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDkzMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC1oZWlnaHQ6IDkzMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC1oZWlnaHQ6IDgwMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KSBhbmQgKG1pbi13aWR0aDogMzcwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSkge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQucm9vdGVyIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PHN0eWxlIGpzeCBnbG9iYWw+XG5cdFx0XHRcdFx0e1JhbmdlU3R5bGV9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var board = this.state.board;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-2302105356' + ' ' + 'body',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 186
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 187
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'title',
						{
							className: 'jsx-2302105356',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 188
							}
						},
						'Sudoku Evolved'
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 189
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: Description, className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 190
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Special+Elite', rel: 'stylesheet', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 191
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { property: 'og:url', content: 'https://sudoku.sitianliu.com/', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 192
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { property: 'og:title', content: 'Sudoku Evolved', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 193
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { property: 'og:type', content: 'website', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 194
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { property: 'og:description', content: Description, className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 195
						}
					}),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { property: 'og:image', content: 'https://sudoku.sitianliu.com/static/og-image.png', className: 'jsx-2302105356',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 196
						}
					})
				),
				!board && this.renderGenerationUI(),
				board && this.renderHeader(),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Board__["a" /* default */], {
					board: this.state.board,
					selected: this.getSelectedCell(),
					onClick: function onClick(x, y) {
						_this3.setState({ board: Object(__WEBPACK_IMPORTED_MODULE_10__functions__["g" /* selectCell */])(_this3.state.board, x, y) });
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 201
					}
				}),
				board && this.renderControls(),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2302105356',
					css: 'body,.body.jsx-2302105356{font-family:\'Special Elite\',cursive;}.body.jsx-2302105356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;position:relative;}@media (min-width:800px) and (min-height:930px){.header,.puzzle,.controls{font-size:1.5em;}}@media (max-width:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:930px) and (min-height:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:800px) and (min-height:600px) and (min-width:370px){.header,.puzzle,.controls{font-size:1em;}}@media (max-width:370px){.header,.puzzle,.controls{font-size:0.8em;}}@media (max-height:600px){.header,.puzzle,.controls{font-size:0.8em;}}body{margin:0;}.rooter.jsx-2302105356{position:fixed;bottom:0;font-size:0.8em;width:100%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1OTSxBQUk2QyxBQUd4QixBQVVJLEFBS0EsQUFLQSxBQUtGLEFBS0UsQUFLQSxBQUlSLEFBR00sU0FGaEIsS0FkQyxDQWlCUyxDQWhDVCxBQUtBLEFBS0EsQUFVQSxBQUtBLFFBUWdCLFlBOUNqQixJQStDWSxXQUNPLGtCQUNuQixLQTlDdUIsOEVBQ0gsNkZBQ0ksbUdBQ1YsYUFDRCxZQUNNLGtCQUNuQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmltcG9ydCBSYW5nZVN0eWxlIGZyb20gJy4uL2lucHV0LXJhbmdlLXN0eWxlJztcbmltcG9ydCBSZXR1cm5JY29uIGZyb20gJy4uL3N2Zy9yZXR1cm4uc3ZnJztcblxuaW1wb3J0IFRpcCBmcm9tICcuLi9jb21wb25lbnRzL3Rvb2wtdGlwJztcblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcbmltcG9ydCBDb250cm9sIGZyb20gJy4vQ29udHJvbCc7XG5pbXBvcnQgR2VuZXJhdGlvblVJIGZyb20gJy4vR2VuZXJhdGVVSSc7XG5pbXBvcnQgeyBzZWxlY3RDZWxsLCBmaWxsTnVtYmVyLCBmaWxsU2VsZWN0ZWRXaXRoU29sdXRpb24sIGFkZE51bWJlckFzTm90ZSwgZ2VuZXJhdGVHYW1lIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICdEaXNjb3ZlciB0aGUgbmV4dCBldm9sdXRpb24gb2YgU3Vkb2t1IHdpdGggYW1hemluZyBncmFwaGljcywgYW5pbWF0aW9ucywgYW5kIHVzZXItZnJpZW5kbHkgZmVhdHVyZXMuIEVuam95IGEgU3Vkb2t1IGV4cGVyaWVuY2UgbGlrZSB5b3UgbmV2ZXIgaGF2ZSBiZWZvcmUgd2l0aCBjdXN0b21pemFibGUgZ2FtZSBnZW5lcmF0aW9uLCBjZWxsIGhpZ2hsaWdodGluZywgaW50dWl0aXZlIGNvbnRyb2xzIGFuZCBtb3JlISc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1tdWx0aS1jb21wXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge307XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0aWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRcdFx0bmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcblx0XHRcdFx0LnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKVxuXHRcdFx0XHQudGhlbigocmVnKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgc2NvcGU6ICcsIHJlZy5zY29wZSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsJyk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKCdzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkJywgZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblx0Z2V0U2VsZWN0ZWRDZWxsKCkge1xuXHRcdGNvbnN0IHsgYm9hcmQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2VsZWN0ZWQgPSBib2FyZC5nZXQoJ3NlbGVjdGVkJyk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkICYmIGJvYXJkLmdldCgncHV6emxlJykuZ2V0SW4oW3NlbGVjdGVkLngsIHNlbGVjdGVkLnldKTtcblx0fVxuXG5cdGdlbmVyYXRlR2FtZSA9IChmaW5hbENvdW50ID0gMjApID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKGdlbmVyYXRlR2FtZShmaW5hbENvdW50KSk7XG5cdH07XG5cblx0YWRkTnVtYmVyQXNOb3RlID0gKG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IGJvYXJkID0gYWRkTnVtYmVyQXNOb3RlKHRoaXMuc3RhdGUuYm9hcmQsIHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCksIG51bWJlcik7XG5cdFx0aWYgKGJvYXJkKSB0aGlzLnVwZGF0ZUJvYXJkKGJvYXJkKTtcblx0fTtcblxuXHR1cGRhdGVCb2FyZCA9IChuZXdCb2FyZCkgPT4ge1xuXHRcdGxldCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgeyBoaXN0b3J5T2ZmU2V0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdC8vIGFueXRoaW5nIGJlZm9yZSBjdXJyZW50IHN0ZXAgaXMgc3RpbGwgaW4gaGlzdG9yeVxuXHRcdGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIGhpc3RvcnlPZmZTZXQgKyAxKTtcblx0XHQvLyBhZGQgaXRzZWxmIG9udG8gdGhlIGhpc3Rvcnlcblx0XHRoaXN0b3J5ID0gaGlzdG9yeS5wdXNoKG5ld0JvYXJkKTtcblx0XHQvLyB1cGRhdGUgdGhlIGdhbWVcblx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IG5ld0JvYXJkLCBoaXN0b3J5LCBoaXN0b3J5T2ZmU2V0OiBoaXN0b3J5LnNpemUgLSAxIH0pO1xuXHR9O1xuXG5cdGNhblVuZG8gPSAoKSA9PiB0aGlzLnN0YXRlLmhpc3RvcnlPZmZTZXQgPiAwO1xuXG5cdHJlZG8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCB7IGhpc3RvcnlPZmZTZXQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGhpc3Rvcnkuc2l6ZSkge1xuXHRcdFx0aGlzdG9yeU9mZlNldCA9IE1hdGgubWluKGhpc3Rvcnkuc2l6ZSAtIDEsIGhpc3RvcnlPZmZTZXQgKyAxKTtcblx0XHRcdGNvbnN0IGJvYXJkID0gaGlzdG9yeS5nZXQoaGlzdG9yeU9mZlNldCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGhpc3RvcnlPZmZTZXQgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdHVuZG8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGxldCB7IGhpc3RvcnlPZmZTZXQsIGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChoaXN0b3J5LnNpemUpIHtcblx0XHRcdGhpc3RvcnlPZmZTZXQgPSBNYXRoLm1heCgwLCBoaXN0b3J5T2ZmU2V0IC0gMSk7XG5cdFx0XHRib2FyZCA9IGhpc3RvcnkuZ2V0KGhpc3RvcnlPZmZTZXQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkLCBoaXN0b3J5T2ZmU2V0LCBoaXN0b3J5IH0pO1xuXHRcdH1cblx0fTtcblxuXHRlcmFzZVNlbGVjdGVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cdFx0aWYgKCFzZWxlY3RlZENlbGwpIHJldHVybjtcblx0XHR0aGlzLmZpbGxOdW1iZXIoZmFsc2UpO1xuXHR9O1xuXG5cdGZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbiA9ICgpID0+IHtcblx0XHRjb25zdCB7IGJvYXJkLCBzb2x1dGlvbiB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXG5cdFx0dGhpcy5maWxsTnVtYmVyKGZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbihib2FyZCwgc29sdXRpb24sIHNlbGVjdGVkQ2VsbCkpO1xuXHR9O1xuXG5cdC8vIGZpbGwgY3VycmVudGx5IHNlbGVjdGVkIGNlbGwgd2l0aCBudW1iZXJcblx0ZmlsbE51bWJlciA9IChudW1iZXIpID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZENlbGwgPSB0aGlzLmdldFNlbGVjdGVkQ2VsbCgpO1xuXG5cdFx0dGhpcy51cGRhdGVCb2FyZChmaWxsTnVtYmVyKHRoaXMuc3RhdGUuYm9hcmQsIHNlbGVjdGVkQ2VsbCwgbnVtYmVyKSk7XG5cdH07XG5cblx0cmVuZGVyQ29udHJvbHMoKSB7XG5cdFx0Y29uc3QgeyBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cblx0XHRcdFx0PENvbnRyb2wgYm9hcmQ9e2JvYXJkfSBzZWxlY3RlZD17c2VsZWN0ZWR9IGZpbGxOdW1iZXI9e3RoaXMuZmlsbE51bWJlcn0gZmlsbE5vdGU9e3RoaXMuYWRkTnVtYmVyQXNOb3RlfSAvPlxuXHRcdFx0XHQ8QWN0aW9ucyBoaXN0b3J5PXt0aGlzLnN0YXRlLmhpc3Rvcnl9IHNlbGVjdGVkPXtzZWxlY3RlZH0gdW5kbz17dGhpcy51bmRvfSByZWRvPXt0aGlzLnJlZG99IGVyYXNlPXt0aGlzLmVyYXNlU2VsZWN0ZWR9IHNvbHV0aW9uPXt0aGlzLmZpbGxTZWxlY3RlZFdpdGhTb2x1dGlvbn0gLz5cblx0XHRcdFx0ey8qIGxhbmd1YWdlPUNTUyAqL31cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0LmNvbnRyb2xzIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMC4zZW07XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjVlbSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyR2VuZXJhdGlvblVJKCkge1xuXHRcdHJldHVybiA8R2VuZXJhdGlvblVJIGdlbmVyYXRlR2FtZT17dGhpcy5nZW5lcmF0ZUdhbWV9IC8+O1xuXHR9XG5cblx0cmVuZGVySGVhZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldy1nYW1lXCIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBmYWxzZSB9KX0+XG5cdFx0XHRcdFx0PFJldHVybkljb24gLz5cblx0XHRcdFx0XHQ8ZGl2Pk5ldyBHYW1lPC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VGlwIC8+XG5cdFx0XHRcdHsvKiBsYW5ndWFnZT1DU1MgKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDAuNWVtO1xuXHRcdFx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5ldy1nYW1lIHtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAwLjJlbTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwLjJlbSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lm5ldy1nYW1lIDpnbG9iYWwoc3ZnKSB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMWVtO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGJvYXJkIH0gPSB0aGlzLnN0YXRlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblx0XHRcdFx0PE5leHRIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5TdWRva3UgRXZvbHZlZDwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e0Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHRcdDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3BlY2lhbCtFbGl0ZVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vc3Vkb2t1LnNpdGlhbmxpdS5jb20vXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlN1ZG9rdSBFdm9sdmVkXCIgLz5cblx0XHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG5cdFx0XHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e0Rlc2NyaXB0aW9ufSAvPlxuXHRcdFx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9zdWRva3Uuc2l0aWFubGl1LmNvbS9zdGF0aWMvb2ctaW1hZ2UucG5nXCIgLz5cblx0XHRcdFx0PC9OZXh0SGVhZD5cblx0XHRcdFx0eyFib2FyZCAmJiB0aGlzLnJlbmRlckdlbmVyYXRpb25VSSgpfVxuXHRcdFx0XHR7Ym9hcmQgJiYgdGhpcy5yZW5kZXJIZWFkZXIoKX1cblx0XHRcdFx0e2JvYXJkICYmIChcblx0XHRcdFx0XHQ8Qm9hcmRcblx0XHRcdFx0XHRcdGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfVxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e3RoaXMuZ2V0U2VsZWN0ZWRDZWxsKCl9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoeCwgeSkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQ6IHNlbGVjdENlbGwodGhpcy5zdGF0ZS5ib2FyZCwgeCwgeSkgfSk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtib2FyZCAmJiB0aGlzLnJlbmRlckNvbnRyb2xzKCl9XG5cdFx0XHRcdHsvKiBsYW5ndWFnZT1DU1MgKi99XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdDpnbG9iYWwoYm9keSksXG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnU3BlY2lhbCBFbGl0ZScsIGN1cnNpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm9keSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwdnc7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA5MzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA5MzBweCkgYW5kIChtaW4taGVpZ2h0OiA4MDBweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkgYW5kIChtaW4taGVpZ2h0OiA2MDBweCkgYW5kIChtaW4td2lkdGg6IDM3MHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogNjAwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnJvb3RlciB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPlxuXHRcdFx0XHRcdHtSYW5nZVN0eWxlfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: __WEBPACK_IMPORTED_MODULE_4__input_range_style__["a" /* default */].__hash,
					css: __WEBPACK_IMPORTED_MODULE_4__input_range_style__["a" /* default */]
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Description, 'Description', '/Users/qianghuang/react-sudoku-game/pages/index.js');
	reactHotLoader.register(Index, 'Index', '/Users/qianghuang/react-sudoku-game/pages/index.js');
	reactHotLoader.register(_default, 'default', '/Users/qianghuang/react-sudoku-game/pages/index.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.0e7dd7ba843ff48d7561.hot-update.js.map