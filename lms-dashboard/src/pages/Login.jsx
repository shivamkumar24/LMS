import React, { useState } from "react";
import "../styles/Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(`https://lms-server-s702.onrender.com/users`);
    let data = await res.data;

    let notFound = true;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].username === username &&
        data[i].password === password &&
        data[i].role === role
      ) {
        localStorage.setItem("isRole", data[i].role);
        localStorage.setItem("isAuth", true);
        alert("Successfully Login");
        navigate("/");
        notFound = false;
      }
    }
    if (notFound) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </label>
        <label>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">Student</option>
            <option value="admin">Teacher</option>
          </select>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
