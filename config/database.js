const mongoose = require('mongoose');
require('dotenv').config()
const connectString = process.env.DATABASE_URL
mongoose.connect(connectString);
const db = mongoose.connection;

// connection event listeners
db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})

// connection event listeners
db.on('error', function (err) {
  console.log('something went wrong')
})