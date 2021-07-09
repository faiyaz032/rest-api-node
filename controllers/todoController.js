//internal imports
const Todo = require('../models/Todo');

async function createTodo(req, res, next) {
   try {
      const newTodo = new Todo({ title: req.body.title, description: req.body.description, status: req.body.status });
      const savedTodo = await newTodo.save();
      res.status(200).json({ success: 'Todo saved Successfully', todo: savedTodo });
   } catch (error) {
      next(error.message);
   }
}

async function getTodos(req, res, next) {
   try {
      const todos = await Todo.find({});
      res.status(200).json({ todos });
   } catch (error) {
      next(error.message);
   }
}
module.exports = { createTodo, getTodos };
