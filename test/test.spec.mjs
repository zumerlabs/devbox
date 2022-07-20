/* eslint-env mocha */
import { equal } from 'assert'

import { sumar } from '../src/index.mjs'

describe('Babel usage suite', () => {
  it('should add numbers correctly', () => {
    equal(sumar(2, 2, 2), 6)
  })
})
