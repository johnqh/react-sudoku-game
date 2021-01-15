/* eslint-disable consistent-return */
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

import { List, fromJS } from 'immutable';

import { makePuzzle, pluck } from '../sudoku';

/**
 * make size 9 array of 0s
 * @returns {Array}
 */
function makeCountObject() {
	const countObj = [];
	for (let i = 0; i < 10; i += 1) countObj.push(0);
	return countObj;
}

/**
 * given a 2D array of numbers as the initial puzzle, generate the initial game state
 * @param puzzle
 * @returns {any}
 */
export function makeBoard({ puzzle }) {
	// create initial count object to keep track of conflicts per number value
	const rows = Array.from(Array(9).keys()).map(() => makeCountObject());
	const columns = Array.from(Array(9).keys()).map(() => makeCountObject());
	const squares = Array.from(Array(9).keys()).map(() => makeCountObject());
	const result = puzzle.map((row, i) =>
		row.map((cell, j) => {
			if (cell) {
				rows[i][cell] += 1;
				columns[j][cell] += 1;
				squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)][cell] += 1;
			}
			return {
				value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
				prefilled: !!puzzle[i][j],
			};
		})
	);
	return fromJS({ puzzle: result, selected: false, choices: { rows, columns, squares } });
}

/**
 * give the coordinate update the current board with a number choice
 * @param x
 * @param y
 * @param number
 * @param fill whether to set or unset
 * @param board the immutable board given to change
 */
export function updateBoardWithNumber({ x, y, number, fill = true, board }) {
	let cell = board.get('puzzle').getIn([x, y]);
	// delete its notes
	cell = cell.delete('notes');
	// set or unset its value depending on `fill`
	cell = fill ? cell.set('value', number) : cell.delete('value');
	const increment = fill ? 1 : -1;
	// update the current group choices
	const rowPath = ['choices', 'rows', x, number];
	const columnPath = ['choices', 'columns', y, number];
	const squarePath = ['choices', 'squares', Math.floor(x / 3) * 3 + Math.floor(y / 3), number];
	return board
		.setIn(rowPath, board.getIn(rowPath) + increment)
		.setIn(columnPath, board.getIn(columnPath) + increment)
		.setIn(squarePath, board.getIn(squarePath) + increment)
		.setIn(['puzzle', x, y], cell);
}

export function selectCell(board, x, y) {
	return board.set('selected', { x, y });
}

export function isConflict(board, i, j) {
	const { value } = board.getIn(['puzzle', i, j]).toJSON();
	if (!value) return false;
	const rowConflict = board.getIn(['choices', 'rows', i, value]) > 1;
	const columnConflict = board.getIn(['choices', 'columns', j, value]) > 1;
	const squareConflict = board.getIn(['choices', 'squares', Math.floor(i / 3) * 3 + Math.floor(j / 3), value]) > 1;
	return rowConflict || columnConflict || squareConflict;
}

export function fillNumber(oldBoard, selectedCell, number) {
	let board = oldBoard;
	// no-op if nothing is selected
	if (!selectedCell) return;
	const prefilled = selectedCell.get('prefilled');
	// no-op if it is refilled
	if (prefilled) return;
	const { x, y } = board.get('selected');
	const currentValue = selectedCell.get('value');
	// remove the current value and update the game state
	if (currentValue) {
		board = updateBoardWithNumber({
			x,
			y,
			number: currentValue,
			fill: false,
			board,
		});
	}
	// update to new number if any
	const setNumber = currentValue !== number && number;
	if (setNumber) {
		board = updateBoardWithNumber({
			x,
			y,
			number,
			fill: true,
			board,
		});
	}
	return board;
}

export function fillSelectedWithSolution(board, solution, selectedCell) {
	if (!selectedCell) return;
	const { x, y } = board.get('selected');
	return solution[x][y];
}

export function addNumberAsNote(oldBoard, oldSelectedCell, number) {
	let board = oldBoard;
	let selectedCell = oldSelectedCell;
	if (!selectedCell) return;
	const prefilled = selectedCell.get('prefilled');
	if (prefilled) return;
	const { x, y } = board.get('selected');
	const currentValue = selectedCell.get('value');
	if (currentValue) {
		board = updateBoardWithNumber({
			x,
			y,
			number: currentValue,
			fill: false,
			board,
		});
	}
	let notes = selectedCell.get('notes') || Set();
	if (notes.has(number)) {
		notes = notes.delete(number);
	} else {
		notes = notes.add(number);
	}
	selectedCell = selectedCell.set('notes', notes);
	selectedCell = selectedCell.delete('value');
	board = board.setIn(['puzzle', x, y], selectedCell);
}

function getNumberOfGroupsAssignedForNumber(number, groups) {
	return groups.reduce((accumulator, row) => accumulator + (row.get(number) > 0 ? 1 : 0), 0);
}

// get the min between its completion in rows, columns and squares.
export function getNumberValueCount(board, number) {
	const rows = board.getIn(['choices', 'rows']);
	const columns = board.getIn(['choices', 'columns']);
	const squares = board.getIn(['choices', 'squares']);
	return Math.min(getNumberOfGroupsAssignedForNumber(number, squares), Math.min(getNumberOfGroupsAssignedForNumber(number, rows), getNumberOfGroupsAssignedForNumber(number, columns)));
}

export function generateGame(finalCount = 20) {
	console.log('generating');
	// get a filled puzzle generated
	const solution = makePuzzle();
	// pluck values from cells to create the game
	const { puzzle } = pluck(solution, finalCount);
	// initialize the board with choice counts
	const board = makeBoard({ puzzle });
	return {
		board,
		history: List.of(board),
		historyOffSet: 0,
		solution,
	};
}
