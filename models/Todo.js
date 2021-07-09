//dependencies
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
   {
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true },
      status: { type: String, enum: ['active', 'inactive'] },
   },
   { timestamps: true }
);

const todo = mongoose.model('Todo', todoSchema);

module.exports = todo;
