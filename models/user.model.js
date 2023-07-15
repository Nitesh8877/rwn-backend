const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,  // Minimum length for the username
    maxlength: 100,  // Maximum length for the username
    match: /^[a-zA-Z]+$/,  // Username pattern with only alphabetic characters
    message:"Username is only characters"
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,  // Email pattern validation
    message:"please enter valid email"
  },
  password: {
    type: String,
    required: true,
    minlength: 8,  // Minimum length for the password
    maxlength: 100,  // Maximum length for the password
    message:"Password pattern validation with at least one lowercase, uppercase, digit, and special character"
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
