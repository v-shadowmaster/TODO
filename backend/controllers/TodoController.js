const Todo = require("../models/todoModel");

// getting all the todos
const getTodos = async (request, response) => {
  const todos = await Todo.find();
  response.json(todos);
};

// creating a new todo
const createTodo = (request, response) => {
  const todo = new Todo({
    title: request.body.title,
    completed: request.body.completed,
  });

  todo.save();

  response.json(todo);
};

// deleting a todo with the id passed
const deleteTodo = async (request, response) => {
  const deleteTodo = await Todo.findByIdAndDelete(request.params.id);
  response.json(deleteTodo);
};

// updating the completed status of the todo
const toggleTodoStatus = async (request, response) => {
  const todo = await Todo.findById(request.params.id);
  todo.completed = !todo.completed;
  todo.save();
  response.json(todo);
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.toggleTodoStatus = toggleTodoStatus;
