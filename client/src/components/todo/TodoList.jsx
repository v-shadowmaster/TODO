import React from "react";
import TodoItem from "./TodoItem";
import { updateTodo, deleteTodo } from "../../services/todoService";

const TodoList = ({ todos, setTodos, user }) => {
  const onToggle = async (_id) => {
    try {
      const todo = todos.find((t) => t._id === _id);
      if (!todo) return;

      const response = await updateTodo(_id, { completed: !todo.completed });
      if (response.success) {
        setTodos(
          todos.map((t) =>
            t._id === _id ? { ...t, completed: !t.completed } : t
          )
        );
      }
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const onDelete = async (_id) => {
    try {
      const response = await deleteTodo(_id);
      if (response.success) {
        setTodos(todos.filter((t) => t._id !== _id));
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const onUpdate = async (_id, newData) => {
    try {
      const response = await updateTodo(_id, newData);
      if (response.success) {
        setTodos(todos.map((t) => (t._id === _id ? { ...t, ...newData } : t)));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onUpdate}
          onDelete={onDelete}
        />
      ))}
      {todos.length === 0 && (
        <div className="bg-white border border-gray-300 rounded-none p-6">
          <p className="text-gray-500 text-center">
            No todos yet. Create one above!
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
