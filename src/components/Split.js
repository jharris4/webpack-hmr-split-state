if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Split.prod');
} else {
  module.exports = require('./Split.dev');
}