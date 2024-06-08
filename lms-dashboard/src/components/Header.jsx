import React from "react";
import "../styles/Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 onClick={() => navigate("/")}>LMS</h1>
      <nav>
        <a href="/">Courses</a>
        <a href="/upload">Upload Course</a>
      </nav>
    </header>
  );
};

export default Header;
