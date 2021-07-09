//dependencies
const express = require('express');

//internal imports
const { createTodo, getTodos } = require('../controllers/todoController');
const loginCheck = require('../middlewares/loginCheck');

const router = express.Router();

router.post('/', loginCheck, createTodo);
router.get('/', loginCheck, getTodos);

module.exports = router;
