'use strict';
const superstruct = require('superstruct');

let Validate = true;

// Debug
const _D = 'Switch';
let Debug = process.env[_D];

function debugSwitch() {
	Debug = true;
	return Debug;
}

function getDebug() {
	return Debug;
}

const _validate = () => {
	if (Debug) {
		return {state: true};
	}
	return {state: Validate};
};

function setValidate(val) {
	if (typeof val !== 'boolean') {
		throw new TypeError(`Expected a boolean, got ${typeof val}`);
	}

	Validate = val;

	return _validate();
}

function getValidate() {
	if (Debug) {
		return true;
	}
	return Validate;
}

const toggleValidate = () => {
	Validate = !Validate;

	return _validate();
};

module.exports = {
	superstruct,
	setValidate,
	getValidate,
	toggleValidate,
	debugSwitch,
	getDebug
};
