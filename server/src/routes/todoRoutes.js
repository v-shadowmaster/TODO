const express = require('express');
const auth = require('../middleware/auth');
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

const router = express.Router();

// All routes need auth middleware
router.get('/', auth, getTodos);
router.post('/', auth, createTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

module.exports = router;
