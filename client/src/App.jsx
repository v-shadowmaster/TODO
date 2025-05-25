import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { getCurrentUser } from "./services/authService";
import "./index.css";

// Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if user is logged in an app start
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading.......</div>;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !user ? <Login setUser={setUser} /> : <Navigate to="/dashboard" />
          }
        />
        <Route
          path="/register"
          element={
            !user ? (
              <Register setUser={setUser} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} setUser={setUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/"
          element={<Navigate to={user ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
