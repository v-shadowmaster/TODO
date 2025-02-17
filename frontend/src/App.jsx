import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AddEditNotes from "./pages/AddEditNotes/AddEditNotes";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/create-note" exact element={<AddEditNotes />} />
    </Routes>
  </Router>
);

const App = () => {
  return <>{routes}</>;
};

export default App;
