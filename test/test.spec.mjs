/* eslint-env mocha */
import { equal } from 'assert'
import { awesomeSum } from '../src/index.mjs'

describe('awesomeSum', () => {
  it('should add numbers correctly', () => {
    equal(awesomeSum(2, 2), 4)
  })
})
