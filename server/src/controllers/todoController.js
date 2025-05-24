const Todo = require("../models/Todo");

/**
 * @desc    Get all todos for authenticated user
 * @route   GET /api/todos
 * @access  Private
 */

const getTodos = async (request, response, next) => {

    try {

        const todos = await Todo.find({ user: request.user._id });

    } catch (error) {

    }

}