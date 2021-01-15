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
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

import Cell from './Cell';
import { cellWidth } from './utils';
import { isPeer as areCoordinatePeers } from '../sudoku';
import { isConflict } from './functions';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const PuzzleStyle = css`
	.puzzle {
		margin-top: 0.5em;
		width: ${cellWidth * 9}em;
		cursor: pointer;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
	.row {
		display: flex;
		align-items: center;
		flex: 0;
		width: ${cellWidth * 9}em;
	}
	.row:not(:last-child) {
		border-bottom: 1px solid black;
	}
	.row:nth-child(3n + 3):not(:last-child) {
		border-bottom: 2px solid black !important;
	}
`;

function renderCell(board, cell, x, y, selected, onClick) {
	const { value, prefilled, notes } = cell.toJSON();
	const conflict = isConflict(board, x, y);
	const peer = areCoordinatePeers({ x, y }, board.get('selected'));
	const sameValue = !!(selected && selected.get('value') && value === selected.get('value'));

	const isSelected = cell === selected;
	return (
		<Cell
			prefilled={prefilled}
			notes={notes}
			sameValue={sameValue}
			isSelected={isSelected}
			isPeer={peer}
			value={value}
			onClick={() => {
				onClick(x, y);
			}}
			key={y}
			x={x}
			y={y}
			conflict={conflict}
		/>
	);
}

const Board = (props) => {
	const { board, selected, onClick } = props;

	return (
		<div className="puzzle">
			{board
				.get('puzzle')
				.map((row, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<div key={i} className="row">
						{row.map((cell, j) => renderCell(board, cell, i, j, selected, onClick)).toArray()}
					</div>
				))
				.toArray()}
			<style jsx>{PuzzleStyle}</style>
		</div>
	);
};

Board.propTypes = {
	board: PropTypes.object.isRequired,
	selected: PropTypes.object,
	onClick: PropTypes.func.isRequired,
};

Board.defaultProps = {
	selected: null,
};

export default Board;
