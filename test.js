import test from 'ava';
import m from '.';

test.todo('Validate Switch Test go go go !!!');

test.before('setValidate', t => {
	const inputVal = 123;

	const err = t.throws(() => {
		m.setValidate(inputVal);
	}, TypeError);

	t.is(err.message, 'Expected a boolean, got ' + typeof inputVal);

	t.is(m.setValidate(false).state, false);
});

test('getValidate', t => {
	t.is(m.getValidate(), false);
});

test('toggleValidate', t => {
	t.is(m.toggleValidate().state, true);
});
