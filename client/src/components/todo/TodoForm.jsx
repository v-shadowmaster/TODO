// src/components/todo/TodoForm.js
import React, { useState } from "react";
import { createTodo } from "../../services/todoService";

export default function TodoForm({ onTodoCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createTodo({ title, description });
      if (response.success) {
        setError("Todo created successfully");
        setTitle("");
        setDescription("");
        // Call the callback to refresh the todo list
        if (onTodoCreated) {
          onTodoCreated();
        }
      } else {
        setError(response.error || "Cannot create the task");
      }
    } catch (e) {
      setError(e.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-none">
      <h2 className="text-xl font-bold text-gray-900 mb-4">New Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="todo-title" className="sr-only">
            Title
          </label>
          <input
            id="todo-title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="todo-desc" className="sr-only">
            Description
          </label>
          <textarea
            id="todo-desc"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 px-3 py-2 rounded-none text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-none hover:bg-orange-700 transition-colors"
        >
          Add Todo
        </button>
      </form>

      {error && (
        <div className="mt-4 text-sm text-center">
          <span
            className={
              error.includes("successfully") ? "text-green-600" : "text-red-600"
            }
          >
            {error}
          </span>
        </div>
      )}
    </div>
  );
}
