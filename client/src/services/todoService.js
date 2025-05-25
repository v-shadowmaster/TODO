import axios from "axios";

const API_URL = 'http://localhost:8000/api/todos';

// Helper function to get the auth header
const getAuthHeader = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return {};

    try {
        const user = JSON.parse(userStr);
        return user.token ? { Authorization: `Bearer ${user.token}` } : {};

    } catch (e) {
        console.error('Error parsing user for auth header', e);
        return {};
    }
};

// Get all todos
const getTodos = async () => {
    const headers = getAuthHeader();
    const response = await axios.get(API_URL, { headers });
    return response.data;
};


// Create todo
const createTodo = async (todoData) => {
    const headers = getAuthHeader();
    const response = await axios.post(API_URL, todoData, { headers });
    return response.data;
};

// Update todo
const updateTodo = async (id, todoData) => {
    const headers = getAuthHeader();
    const response = await axios.put(`${API_URL}/${id}`, todoData, { headers });
    return response.data;
};

// Delete todo
const deleteTodo = async (id) => {
    const headers = getAuthHeader();
    const response = await axios.delete(`${API_URL}/${id}`, { headers });
    return response.data;
};

export { getTodos, createTodo, updateTodo, deleteTodo };