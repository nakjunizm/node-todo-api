const mongoose = require('mongoose');

// To use Promise on mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose: mongoose
}
