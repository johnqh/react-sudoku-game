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

import CirclularProgress from './CirclularProgress';
import { ControlNumberColor } from './utils';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const NumberControlStyle = css`
	.number {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		font-size: 2em;
		margin: 0.1em;
		width: 1.5em;
		height: 1.5em;
		color: ${ControlNumberColor};
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);
		border-radius: 50%;
	}
	.number > div {
		margin-top: 0.3em;
	}
`;

const NumberControl = ({ number, onClick, completionPercentage }) => (
	<div key={number} className="number" onClick={onClick}>
		<div>{number}</div>
		<CirclularProgress percent={completionPercentage} />
		<style jsx>{NumberControlStyle}</style>
	</div>
);

NumberControl.propTypes = {
	number: PropTypes.number.isRequired,
	onClick: PropTypes.func,
	completionPercentage: PropTypes.number.isRequired,
};

NumberControl.defaultProps = {
	onClick: null,
};

export default NumberControl;
