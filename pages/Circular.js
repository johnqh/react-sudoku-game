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

import { ControlNumberColor } from './utils';

// eslint-disable-next-line no-lone-blocks
{
	/* language=CSS */
}
const CirculuarProgressStyle = css`
	.circular-progress {
		display: block;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: filter 0.4s ease-in-out;
	}

	.circle-bg {
		fill: none;
		stroke: #eee;
		stroke-width: 3.8;
	}

	.circle {
		stroke: ${ControlNumberColor};
		transition: stroke-dasharray 0.4s ease-in-out;
		fill: none;
		stroke-width: 2.8;
		stroke-linecap: round;
	}
`;

const CircularPathD = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';

const CirclularProgress = ({ percent }) => (
	<svg viewBox="0 0 36 36" className="circular-progress">
		<path className="circle-bg" d={CircularPathD} />
		<path className="circle" strokeDasharray={`${percent * 100}, 100`} d={CircularPathD} />
		{/* language=CSS */}
		<style jsx>{CirculuarProgressStyle}</style>
	</svg>
);

CirclularProgress.propTypes = {
	percent: PropTypes.number.isRequired,
};

export default CirclularProgress;
