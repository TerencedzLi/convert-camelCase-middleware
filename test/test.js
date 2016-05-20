var assert = require('assert')
var _ = require('lodash')
var caseMiddleware = require('..')

var testObjects = {}

describe('Null Object', function () {
  it('Should just return and unalter objects', function () {
    assert.equal(caseMiddleware(), null)
  })
})

describe('Single object', function () {
  it('Should convert single object\'s fields to camelCase', function () {
    var singleObjectResult = {}

    testObjects = {
      'field_1': 1,
      'field 2': 2,
      'field3': 3,
      'field-four': 4,
      'field five': 5
    }
    singleObjectResult = {
      'field1': 1,
      'field2': 2,
      'field3': 3,
      'fieldFour': 4,
      'fieldFive': 5
    }

    assert.deepEqual(caseMiddleware(testObjects), singleObjectResult)
  })
})

describe('Multiple Objects', function () {
  it('Should convert array of objects\'s fields to camelCase', function () {
    var objectArray = []
    testObjects = []

    for ( var i = 0 ; i < 4 ; i++) {
      testObjects[testObjects.length] = {
        'field_1': 1,
        'field 2': 2,
        'field3': 3,
        'field-four': 4,
        'field five': 5
      }

      objectArray[objectArray.length] = {
        'field1': 1,
        'field2': 2,
        'field3': 3,
        'fieldFour': 4,
        'fieldFive': 5
      }
    }

    assert.deepEqual(caseMiddleware(testObjects), objectArray)
  })
})
