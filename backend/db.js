const mongoose = require("mongoose");
require('dotenv').config();

const MongoURL = process.env.MONGO_URL;

if (!MongoURL) {
  throw new Error('MONGO_URL environment variable is not set');
}

mongoose.connect(MongoURL);

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// Model
const todo = mongoose.model('Todo', todoSchema);

module.exports = {
  todo
};
