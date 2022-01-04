import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { convertNumberProperties, convertEmptyStringsToNull } from '../convert.js'

test('convertNumberProperties', () => {
  const obj = { wholeNumber: '100', decimal: '0.05'}
	const converted = convertNumberProperties(obj)
	assert.equal(converted.wholeNumber, 100)
	assert.equal(converted.decimal, 0.05)
})

test('convertEmptyStringsToNull', () => {
  const obj = {
		empty: '',
		literal: ``,
		notEmpty: 'str',
		nil: null,
		nan: NaN,
		obj: {}
	}

	const converted = convertEmptyStringsToNull(obj)

	assert.equal(converted.empty, null)
	assert.equal(converted.literal, null)
	assert.equal(converted.notEmpty, 'str')
	assert.equal(converted.nil, null)
	assert.equal(converted.nan, NaN)
	assert.equal(converted.obj, {})
})

test.run()
