import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const isRole = localStorage.getItem("isRole");

  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>LMS</h1>
      <nav>
        <Link to="/">Courses</Link>
        {isRole === "admin" && <Link to="/upload">Upload Course</Link>}
      </nav>
    </header>
  );
};

export default Header;
