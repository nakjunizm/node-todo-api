const mongoose = require('mongoose');

// To use Promise on mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose: mongoose
}