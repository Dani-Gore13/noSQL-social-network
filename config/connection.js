const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const dbName = 'social-network';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Create a connection to the MongoDB database
mongoose.connect(`${url}/${dbName}`, options);

// Get the default connection
const db = mongoose.connection;

// Event handlers for the database connection
db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = db;
