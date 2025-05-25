import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';

// Register user
const register = async (name, email, password) => {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });

    if (response.data.success && response.data.data.token) {
        // store user details and JWT in local storage
        localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data;
};


// Login user
const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.success && response.data.data.token) {
        // Store user details and JWT in local storage
        localStorage.setItem('user', JSON.stringify(response.data.data));
    }
    return response.data;
}

//Logout user
const logout = () => {
    // Remove user from local storage to log user out
    localStorage.removeItem('user');
}


// Get current user from stored token
const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    try {
        return JSON.parse(userStr);
    } catch (e) {
        console.error('Error parsing user from localStorage', e);
    }
};

export { register, login, logout, getCurrentUser };

