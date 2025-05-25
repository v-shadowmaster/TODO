// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../services/todoService";
import SearchBar from "./SearchBar";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      if (response.success) {
        setTodos(response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header Card */}
        <div className="bg-white border border-gray-300 p-6 rounded-none flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Hi, {user.name}</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-none transition-colors"
          >
            Logout
          </button>
        </div>

        <div>
          <SearchBar />
        </div>

        {/* Todos Section Card */}
        <div className="bg-white border border-gray-300 p-6 rounded-none space-y-6">
          <TodoForm onTodoCreated={fetchTodos} />
          <TodoList todos={todos} setTodos={setTodos} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
