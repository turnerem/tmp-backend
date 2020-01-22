const ENV = process.env.NODE_ENV || 'development'

const testData = require('./test-data');

const data = {
  test: testData, 
  development: testData
}


module.exports = data[ENV]