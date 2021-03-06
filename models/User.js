//dependencies
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
   },
   { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
