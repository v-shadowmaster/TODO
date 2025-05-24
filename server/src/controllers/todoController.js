const Todo = require("../models/Todo");

/**
 * @desc    Get all todos for authenticated user
 * @route   GET /api/todos
 * @access  Private
 */

const getTodos = async (request, response, next) => {
    try {
        const todos = await Todo.find({ user: request.user._id });

        return response.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        })
    } catch (error) {
        console.error('Get todos error:', err);
        next(err);
    }
}


/**
 * @desc    Create a new todo
 * @route   POST /api/todos
 * @access  Private
 */


const createTodos = async (request, response, next) => {
    try {

        const { title, description } = request.body;
        const todo = await Todo.create({
            title,
            description,
            user: request.user._id
        });

        return response.status(201).json({
            success: true,
            data: todo
        })

    } catch (err) {
        console.error("create todo error ", err);
        next(err);
    }
}


/**
 * @desc    Update an existing todo
 * @route   PUT /api/todos/:id
 * @access  Private
 */

const updateTodo = async (request, response, next) => {
    try {
        let todo = await Todo.findById(req.params.id);
        if (!todo || todo.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ success: false, error: 'Todo not found' });
        }

        todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        return response.status(200).json({
            success: true,
            data: todo
        });
    } catch (err) {
        console.error('Update todo error:', err);
        next(err);
    }
}

/**
 * @desc    Delete a todo
 * @route   DELETE /api/todos/:id
 * @access  Private
 */

const deleteTodo = async (request, response, next) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo || todo.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ success: false, error: 'Todo not found' });
        }

        await todo.remove();
        return response.status(200).json({ success: true, data: {} });
    } catch (err) {
        console.error('Delete todo error:', err);
        next(err);
    }
};

module.exports = { getTodos, createTodos, updateTodo, deleteTodo }


