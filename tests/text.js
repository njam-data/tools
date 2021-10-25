import { test } from 'uvu'
import * as assert from 'uvu/assert'

import { slugify, unslugify } from '../text.js'

test('slugify & unslugify', () => {
  const slug = slugify('Hello This Is Text')
  assert.equal(slug, 'hello_this_is_text')

  const uppercase = unslugify('hello_this_is_text', { capitalize: true })
  assert.equal(uppercase, 'Hello This Is Text')

  const lowercase = unslugify('hello_this_is_text', { capitalize: false })
  assert.equal(lowercase, 'hello this is text')
})

test.run()
