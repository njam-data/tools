import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { convertNumberProperties, convertEmptyStringsToNull } from '../convert.js'

test('convertNumberProperties', () => {
  const obj = { 
		wholeNumber: '100', 
		decimal: '0.05', 
		thousands: '100,000.0',
		thousandsDecimal: '100,000.05',
		millions: '1,000,000',
		millionsDecimal: '1,000,000.05',
		ignore: '2019-11'
	}

	const converted = convertNumberProperties(obj, { exclude: ['ignore'] })
	assert.equal(converted.wholeNumber, 100)
	assert.equal(converted.decimal, 0.05)
	assert.equal(converted.thousands, 100000)
	assert.equal(converted.thousandsDecimal, 100000.05)
	assert.equal(converted.millions, 1000000)
	assert.equal(converted.millionsDecimal, 1000000.05)
	assert.equal(converted.ignore, '2019-11')
})

test('convertEmptyStringsToNull', () => {
  const obj = {
		empty: '',
		literal: ``,
		notEmpty: 'str',
		nil: null,
		nan: NaN,
		obj: {},
		nope: ''
	}

	const converted = convertEmptyStringsToNull(obj, { exclude: ['nope'] })

	assert.equal(converted.empty, null)
	assert.equal(converted.literal, null)
	assert.equal(converted.notEmpty, 'str')
	assert.equal(converted.nil, null)
	assert.equal(converted.nan, NaN)
	assert.equal(converted.obj, {})
	assert.equal(converted.nope, '')
})

test.run()
