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
import { Set } from 'immutable';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

import { range } from '../sudoku';

import { getBackGroundColor, getFontColor, cellWidth } from './utils';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const CellViewStyle = css`
	.cell {
		height: ${cellWidth}em;
		width: ${cellWidth}em;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		font-size: 1.1em;
		font-weight: bold;
		transition: background-color 0.3s ease-in-out;
	}
	.cell:nth-child(3n + 3):not(:last-child) {
		border-right: 2px solid black;
	}
	.cell:not(:last-child) {
		border-right: 1px solid black;
	}
	.note-number {
		font-size: 0.6em;
		width: 33%;
		height: 33%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const CellView = (props) => {
	const { value, onClick, isPeer, isSelected, sameValue, prefilled, notes, conflict } = props;
	const backgroundColor = getBackGroundColor({
		conflict,
		isPeer,
		sameValue,
		isSelected,
	});
	const fontColor = getFontColor({ conflict, prefilled, value });
	return (
		<div className="cell" onClick={onClick}>
			{notes
				? range(9).map((i) => (
						<div key={i} className="note-number">
							{notes.has(i + 1) && i + 1}
						</div>
				  ))
				: value && value}
			{/* language=CSS */}
			<style jsx>{CellViewStyle}</style>
			<style jsx>
				{`
					.cell {
						background-color: ${backgroundColor || 'initial'};
						color: ${fontColor || 'initial'};
					}
				`}
			</style>
		</div>
	);
};

CellView.propTypes = {
	// current number value
	value: PropTypes.number,
	// cell click handler
	onClick: PropTypes.func.isRequired,
	// if the cell is a peer of the selected cell
	isPeer: PropTypes.bool.isRequired,
	// if the cell is selected by the user
	isSelected: PropTypes.bool.isRequired,
	// current cell has the same value if the user selected cell
	sameValue: PropTypes.bool.isRequired,
	// if this was prefilled as a part of the puzzle
	prefilled: PropTypes.bool.isRequired,
	// current notes taken on the cell
	notes: PropTypes.instanceOf(Set),
	// if the current cell does not satisfy the game constraint
	conflict: PropTypes.bool.isRequired,
};

CellView.defaultProps = {
	notes: null,
	value: null,
};

export default CellView;
