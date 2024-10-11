import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";

const App = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!userInfo ? <RegisterPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/login"
          element={!userInfo ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={userInfo ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
