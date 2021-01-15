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

import { range } from '../sudoku';

import NumberControl from './NumberControl';
import { getNumberValueCount } from './functions';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const ControlStyle = css`
	.control {
		padding: 0 2em;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		font-family: 'Special Elite', cursive;
		transition: filter 0.5s ease-in-out;
		width: 100%;
	}
`;

function getClickHandler(onClick, onDoubleClick, delay = 250) {
	let timeoutID = null;
	return (event) => {
		if (!timeoutID) {
			timeoutID = setTimeout(() => {
				onClick(event);
				timeoutID = null;
			}, delay);
		} else {
			timeoutID = clearTimeout(timeoutID);
			onDoubleClick(event);
		}
	};
}

const Control = (props) => {
	const { board, selected, fillNumber, fillNote } = props;
	const prefilled = selected && selected.get('prefilled');

	return (
		<div className="control">
			{range(9).map((i) => {
				const number = i + 1;
				// handles binding single click and double click callbacks
				const clickHandle = getClickHandler(
					() => {
						fillNumber(number);
					},
					() => {
						fillNote(number);
					}
				);
				return <NumberControl key={number} number={number} onClick={!prefilled ? clickHandle : undefined} completionPercentage={getNumberValueCount(board, number) / 9} />;
			})}
			<style jsx>{ControlStyle}</style>
		</div>
	);
};

Control.propTypes = {
	board: PropTypes.object.isRequired,
	selected: PropTypes.object,
	fillNumber: PropTypes.func.isRequired,
	fillNote: PropTypes.func.isRequired,
};

Control.defaultProps = {
	selected: null,
};

export default Control;
