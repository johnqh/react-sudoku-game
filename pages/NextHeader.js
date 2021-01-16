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
import NextHead from 'next/head';

const Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';

const NextHeader = () => (
	<NextHead>
		<title>Sudoku Evolved</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<meta name="description" content={Description} />
		<link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet" />
		<meta property="og:url" content="https://sudoku.sitianliu.com/" />
		<meta property="og:title" content="Sudoku Evolved" />
		<meta property="og:type" content="website" />
		<meta property="og:description" content={Description} />
		<meta property="og:image" content="https://sudoku.sitianliu.com/static/og-image.png" />
	</NextHead>
);

export default NextHeader;
