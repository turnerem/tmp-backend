const ENV = process.env.NODE_ENV || 'development'

const testData = require('./test-data');

const data = {
  test: testData, 
  development: null
}


module.exports = data[ENV]