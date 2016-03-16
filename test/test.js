var assert = require('assert')
var _ = require('lodash')
var caseMiddleware = require('..')

var req = {}
var reqTest = {}
var reqTestArray = []

var next = function () { return 'next'}

describe('Null Object', function () {
  it('Should just call the function \'next\'', function () {
    assert.equal(caseMiddleware(req, null, next), 'next')
  })
})

describe('Single object', function () {
  it('Should convert single object\'s fields to camelCase', function () {
    req.pgRows = {
      'field_1': 1,
      'field 2': 2,
      'field3': 3,
      'field-four': 4,
      'field five': 5
    }
    reqTest = {
      'field1': 1,
      'field2': 2,
      'field3': 3,
      'fieldFour': 4,
      'fieldFive': 5
    }
    assert.deepEqual(caseMiddleware(req, null, next), reqTest)
  })
})

describe('Multiple Objects', function () {
  it('Should convert array of objects\'s fields to camelCase', function () {
    req.pgRows = []
    for ( var i = 0 ; i < 4 ; i++) {
      req.pgRows[req.pgRows.length] = {
        'field_1': 1,
        'field 2': 2,
        'field3': 3,
        'field-four': 4,
        'field five': 5
      }

      reqTestArray[reqTestArray.length] = {
        'field1': 1,
        'field2': 2,
        'field3': 3,
        'fieldFour': 4,
        'fieldFive': 5
      }
    }
    assert.deepEqual(caseMiddleware(req, null, next), reqTestArray)
  })
})
