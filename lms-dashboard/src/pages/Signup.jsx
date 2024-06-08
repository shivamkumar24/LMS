import React, { useState } from "react";
import "../styles/Signup.scss";

const Signup = () => {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp:", { role, username, password });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Role:
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
