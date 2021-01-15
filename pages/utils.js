/* eslint-disable no-tabs */
/* eslint-disable object-curly-newline */
const LightBlue100 = '#B3E5FC';
const LightBlue200 = '#81D4FA';
const LightBlue300 = '#4FC3F7';
const Indigo700 = '#303F9F';
const DeepOrange200 = '#FFAB91';
const DeepOrange600 = '#F4511E';
export const ControlNumberColor = Indigo700;

export const cellWidth = 2.5;

/* eslint-disable indent */
export function getBackGroundColor({ conflict, isPeer, sameValue, isSelected }) {
	if (conflict && isPeer && sameValue) {
		return DeepOrange200;
	} else if (sameValue) {
		return LightBlue300;
	} else if (isSelected) {
		return LightBlue200;
	} else if (isPeer) {
		return LightBlue100;
	}
	return false;
}

export function getFontColor({ value, conflict, prefilled }) {
	if (conflict && !prefilled) {
		return DeepOrange600;
	} else if (!prefilled && value) {
		return ControlNumberColor;
	}
	return false;
}
