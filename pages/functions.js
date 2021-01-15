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

import { fromJS } from 'immutable';

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
