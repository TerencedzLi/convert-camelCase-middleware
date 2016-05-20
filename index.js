var camelCase = require('lodash.camelcase')

module.exports = function (objectsToConvert) {

  if (!objectsToConvert) return null;

  if (objectsToConvert.constructor === Array) {
    var jsRows = []
    objectsToConvert.forEach(function (object) {
      jsRows.push(convertObjectKeysToCamelCase(object))
    })

    return jsRows
  }

  if (typeof objectsToConvert === 'object') {
    objectsToConvert = convertObjectKeysToCamelCase(objectsToConvert)

  }

  return objectsToConvert
}

function convertObjectKeysToCamelCase (obj) {
  var keys = Object.keys(obj)
  var tempObj = {}

  keys.forEach(function (key) {
    if (key.indexOf(' ') > -1|| key.indexOf('_') > -1 || key.indexOf('-') > -1) {
      tempObj[camelCase(key)] = obj[key]
    } else {
      tempObj[key] = obj[key]
    }
  })

  return tempObj
}
