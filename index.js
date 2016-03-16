var camelCase = require('lodash.camelcase')

module.exports = function (req, res, next) {
  if (!req.pgRows) return next()

  if (req.pgRows.constructor === Array) {
    var jsRows = []

    req.pgRows.forEach(function (pgRow) {
      jsRows.push(convertObjectKeysToCamelCase(pgRow))
    })

    req.jsRows = jsRows

    return req.jsRows
  }

  if (typeof req.pgRows === 'object') {
    req.jsRows = convertObjectKeysToCamelCase(req.pgRows)
  }

  return req.jsRows
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
