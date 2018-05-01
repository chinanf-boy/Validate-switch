'use strict';
const superstruct = require('superstruct');

let Validate = true;

function setValidate(val) {
	if (typeof val !== 'boolean') {
		throw new TypeError(`Expected a boolean, got ${typeof val}`);
	}

	Validate = val;

	return {state: val};
}

function getValidate() {
	return Validate;
}

const toggleValidate = () => {
	Validate = !Validate;

	return {state: Validate};
};

module.exports = {
	superstruct,
	setValidate,
	getValidate,
	toggleValidate
};
