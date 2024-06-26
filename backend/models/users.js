const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  rewardPoints: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', userSchema);