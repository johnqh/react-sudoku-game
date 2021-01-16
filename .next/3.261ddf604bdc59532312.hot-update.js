webpackHotUpdate(3,{

/***/ "./node_modules/styled-jsx/css.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_range_style__ = __webpack_require__("./input-range-style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Board__ = __webpack_require__("./pages/Board.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NextHeader__ = __webpack_require__("./pages/NextHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__("./pages/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Controls__ = __webpack_require__("./pages/Controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__GenerateUI__ = __webpack_require__("./pages/GenerateUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__functions__ = __webpack_require__("./pages/functions.js");
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

			_this.setState(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["d" /* generateGame */])(finalCount));
		}, _this.addNumberAsNote = function (number) {
			var board = Object(__WEBPACK_IMPORTED_MODULE_8__functions__["a" /* addNumberAsNote */])(_this.state.board, _this.getSelectedCell(), number);
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

			_this.fillNumber(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["c" /* fillSelectedWithSolution */])(board, solution, selectedCell));
		}, _this.fillNumber = function (number) {
			var selectedCell = _this.getSelectedCell();

			_this.updateBoard(Object(__WEBPACK_IMPORTED_MODULE_8__functions__["b" /* fillNumber */])(_this.state.board, selectedCell, number));
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
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    board = _state.board,
			    history = _state.history;

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: 'jsx-2302105356' + ' ' + 'body',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 113
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NextHeader__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 114
					}
				}),
				!board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__GenerateUI__["a" /* default */], { generateGame: this.generateGame, __source: {
						fileName: _jsxFileName,
						lineNumber: 115
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], { onClick: function onClick() {
						return _this2.setState({ board: false });
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 116
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Board__["a" /* default */], {
					board: this.state.board,
					selected: this.getSelectedCell(),
					onClick: function onClick(x, y) {
						_this2.setState({ board: Object(__WEBPACK_IMPORTED_MODULE_8__functions__["g" /* selectCell */])(_this2.state.board, x, y) });
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 118
					}
				}),
				board && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Controls__["a" /* default */], { board: board, selected: this.getSelectedCell(), fillNumber: this.fillNumber, fillNote: this.addNumberAsNote, history: history, undo: this.undo, redo: this.redo, erase: this.eraseSelected, solution: this.fillSelectedWithSolution, className: 'controls', __source: {
						fileName: _jsxFileName,
						lineNumber: 126
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2302105356',
					css: 'body,.body.jsx-2302105356{font-family:\'Special Elite\',cursive;}.body.jsx-2302105356{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;position:relative;}@media (min-width:800px) and (min-height:930px){.header,.puzzle,.controls{font-size:1.5em;}}@media (max-width:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:930px) and (min-height:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}@media (max-height:800px) and (min-height:600px) and (min-width:370px){.header,.puzzle,.controls{font-size:1em;}}@media (max-width:370px){.header,.puzzle,.controls{font-size:0.8em;}}@media (max-height:600px){.header,.puzzle,.controls{font-size:0.8em;}}body{margin:0;}.rooter.jsx-2302105356{position:fixed;bottom:0;font-size:0.8em;width:100%;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJTSxBQUk2QyxBQUd4QixBQVVJLEFBS0EsQUFLQSxBQUtGLEFBS0UsQUFLQSxBQUlSLEFBR00sU0FGaEIsS0FkQyxDQWlCUyxDQWhDVCxBQUtBLEFBS0EsQUFVQSxBQUtBLFFBUWdCLFlBOUNqQixJQStDWSxXQUNPLGtCQUNuQixLQTlDdUIsOEVBQ0gsNkZBQ0ksbUdBQ1YsYUFDRCxZQUNNLGtCQUNuQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcWlhbmdodWFuZy9yZWFjdC1zdWRva3UtZ2FtZSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQtcHJvcHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbWl4ZWQtc3BhY2VzLWFuZC10YWJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1pbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXRhYnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FjY2Vzc2libGUtZW1vamkgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSYW5nZVN0eWxlIGZyb20gJy4uL2lucHV0LXJhbmdlLXN0eWxlJztcblxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnO1xuaW1wb3J0IE5leHRIZWFkZXIgZnJvbSAnLi9OZXh0SGVhZGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMnO1xuaW1wb3J0IEdlbmVyYXRpb25VSSBmcm9tICcuL0dlbmVyYXRlVUknO1xuaW1wb3J0IHsgc2VsZWN0Q2VsbCwgZmlsbE51bWJlciwgZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uLCBhZGROdW1iZXJBc05vdGUsIGdlbmVyYXRlR2FtZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLW11bHRpLWNvbXBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0XHRpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxuXHRcdFx0XHQucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpXG5cdFx0XHRcdC50aGVuKChyZWcpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciBzY29wZTogJywgcmVnLnNjb3BlKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ3NlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQnLCBlcnIubWVzc2FnZSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRnZXRTZWxlY3RlZENlbGwoKSB7XG5cdFx0Y29uc3QgeyBib2FyZCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzZWxlY3RlZCA9IGJvYXJkLmdldCgnc2VsZWN0ZWQnKTtcblx0XHRyZXR1cm4gc2VsZWN0ZWQgJiYgYm9hcmQuZ2V0KCdwdXp6bGUnKS5nZXRJbihbc2VsZWN0ZWQueCwgc2VsZWN0ZWQueV0pO1xuXHR9XG5cblx0Z2VuZXJhdGVHYW1lID0gKGZpbmFsQ291bnQgPSAyMCkgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoZ2VuZXJhdGVHYW1lKGZpbmFsQ291bnQpKTtcblx0fTtcblxuXHRhZGROdW1iZXJBc05vdGUgPSAobnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgYm9hcmQgPSBhZGROdW1iZXJBc05vdGUodGhpcy5zdGF0ZS5ib2FyZCwgdGhpcy5nZXRTZWxlY3RlZENlbGwoKSwgbnVtYmVyKTtcblx0XHRpZiAoYm9hcmQpIHRoaXMudXBkYXRlQm9hcmQoYm9hcmQpO1xuXHR9O1xuXG5cdHVwZGF0ZUJvYXJkID0gKG5ld0JvYXJkKSA9PiB7XG5cdFx0bGV0IHsgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCB7IGhpc3RvcnlPZmZTZXQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Ly8gYW55dGhpbmcgYmVmb3JlIGN1cnJlbnQgc3RlcCBpcyBzdGlsbCBpbiBoaXN0b3J5XG5cdFx0aGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgaGlzdG9yeU9mZlNldCArIDEpO1xuXHRcdC8vIGFkZCBpdHNlbGYgb250byB0aGUgaGlzdG9yeVxuXHRcdGhpc3RvcnkgPSBoaXN0b3J5LnB1c2gobmV3Qm9hcmQpO1xuXHRcdC8vIHVwZGF0ZSB0aGUgZ2FtZVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZDogbmV3Qm9hcmQsIGhpc3RvcnksIGhpc3RvcnlPZmZTZXQ6IGhpc3Rvcnkuc2l6ZSAtIDEgfSk7XG5cdH07XG5cblx0Y2FuVW5kbyA9ICgpID0+IHRoaXMuc3RhdGUuaGlzdG9yeU9mZlNldCA+IDA7XG5cblx0cmVkbyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IHsgaGlzdG9yeU9mZlNldCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoaGlzdG9yeS5zaXplKSB7XG5cdFx0XHRoaXN0b3J5T2ZmU2V0ID0gTWF0aC5taW4oaGlzdG9yeS5zaXplIC0gMSwgaGlzdG9yeU9mZlNldCArIDEpO1xuXHRcdFx0Y29uc3QgYm9hcmQgPSBoaXN0b3J5LmdldChoaXN0b3J5T2ZmU2V0KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBib2FyZCwgaGlzdG9yeU9mZlNldCB9KTtcblx0XHR9XG5cdH07XG5cblx0dW5kbyA9ICgpID0+IHtcblx0XHRjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMuc3RhdGU7XG5cdFx0bGV0IHsgaGlzdG9yeU9mZlNldCwgYm9hcmQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGhpc3Rvcnkuc2l6ZSkge1xuXHRcdFx0aGlzdG9yeU9mZlNldCA9IE1hdGgubWF4KDAsIGhpc3RvcnlPZmZTZXQgLSAxKTtcblx0XHRcdGJvYXJkID0gaGlzdG9yeS5nZXQoaGlzdG9yeU9mZlNldCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgYm9hcmQsIGhpc3RvcnlPZmZTZXQsIGhpc3RvcnkgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdGVyYXNlU2VsZWN0ZWQgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRDZWxsID0gdGhpcy5nZXRTZWxlY3RlZENlbGwoKTtcblx0XHRpZiAoIXNlbGVjdGVkQ2VsbCkgcmV0dXJuO1xuXHRcdHRoaXMuZmlsbE51bWJlcihmYWxzZSk7XG5cdH07XG5cblx0ZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgYm9hcmQsIHNvbHV0aW9uIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cblx0XHR0aGlzLmZpbGxOdW1iZXIoZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9uKGJvYXJkLCBzb2x1dGlvbiwgc2VsZWN0ZWRDZWxsKSk7XG5cdH07XG5cblx0Ly8gZmlsbCBjdXJyZW50bHkgc2VsZWN0ZWQgY2VsbCB3aXRoIG51bWJlclxuXHRmaWxsTnVtYmVyID0gKG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkQ2VsbCA9IHRoaXMuZ2V0U2VsZWN0ZWRDZWxsKCk7XG5cblx0XHR0aGlzLnVwZGF0ZUJvYXJkKGZpbGxOdW1iZXIodGhpcy5zdGF0ZS5ib2FyZCwgc2VsZWN0ZWRDZWxsLCBudW1iZXIpKTtcblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBib2FyZCwgaGlzdG9yeSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cdFx0XHRcdDxOZXh0SGVhZGVyIC8+XG5cdFx0XHRcdHshYm9hcmQgJiYgPEdlbmVyYXRpb25VSSBnZW5lcmF0ZUdhbWU9e3RoaXMuZ2VuZXJhdGVHYW1lfSAvPn1cblx0XHRcdFx0e2JvYXJkICYmIDxIZWFkZXIgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBmYWxzZSB9KX0gLz59XG5cdFx0XHRcdHtib2FyZCAmJiAoXG5cdFx0XHRcdFx0PEJvYXJkXG5cdFx0XHRcdFx0XHRib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH1cblx0XHRcdFx0XHRcdHNlbGVjdGVkPXt0aGlzLmdldFNlbGVjdGVkQ2VsbCgpfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KHgsIHkpID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGJvYXJkOiBzZWxlY3RDZWxsKHRoaXMuc3RhdGUuYm9hcmQsIHgsIHkpIH0pO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7Ym9hcmQgJiYgPENvbnRyb2xzIGJvYXJkPXtib2FyZH0gc2VsZWN0ZWQ9e3RoaXMuZ2V0U2VsZWN0ZWRDZWxsKCl9IGZpbGxOdW1iZXI9e3RoaXMuZmlsbE51bWJlcn0gZmlsbE5vdGU9e3RoaXMuYWRkTnVtYmVyQXNOb3RlfSBoaXN0b3J5PXtoaXN0b3J5fSB1bmRvPXt0aGlzLnVuZG99IHJlZG89e3RoaXMucmVkb30gZXJhc2U9e3RoaXMuZXJhc2VTZWxlY3RlZH0gc29sdXRpb249e3RoaXMuZmlsbFNlbGVjdGVkV2l0aFNvbHV0aW9ufSBjbGFzc05hbWU9XCJjb250cm9sc1wiIC8+fVxuXHRcdFx0XHR7LyogbGFuZ3VhZ2U9Q1NTICovfVxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHQ6Z2xvYmFsKGJvZHkpLFxuXHRcdFx0XHRcdFx0LmJvZHkge1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ1NwZWNpYWwgRWxpdGUnLCBjdXJzaXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJvZHkge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWluLWhlaWdodDogOTMwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuNWVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogOTMwcHgpIGFuZCAobWluLWhlaWdodDogODAwcHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpIGFuZCAobWluLXdpZHRoOiAzNzBweCkge1xuXHRcdFx0XHRcdFx0XHQ6Z2xvYmFsKC5oZWFkZXIsIC5wdXp6bGUsIC5jb250cm9scykge1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcblx0XHRcdFx0XHRcdFx0Omdsb2JhbCguaGVhZGVyLCAucHV6emxlLCAuY29udHJvbHMpIHtcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOGVtO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC1oZWlnaHQ6IDYwMHB4KSB7XG5cdFx0XHRcdFx0XHRcdDpnbG9iYWwoLmhlYWRlciwgLnB1enpsZSwgLmNvbnRyb2xzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Omdsb2JhbChib2R5KSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5yb290ZXIge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8c3R5bGUganN4IGdsb2JhbD5cblx0XHRcdFx0XHR7UmFuZ2VTdHlsZX1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: __WEBPACK_IMPORTED_MODULE_2__input_range_style__["a" /* default */].__hash,
					css: __WEBPACK_IMPORTED_MODULE_2__input_range_style__["a" /* default */]
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
//# sourceMappingURL=3.261ddf604bdc59532312.hot-update.js.map