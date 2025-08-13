require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose.createConnection(process.env.MONGO_URI)
  .on('open', () => console.log('MongoDB Atlas connected'))
  .on('error', (err) => console.error('Connection error:', err));

module.exports = connection;
