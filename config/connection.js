const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'social-network';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(`${url}/${dbName}`, options);

module.exports = mongoose.connection;
