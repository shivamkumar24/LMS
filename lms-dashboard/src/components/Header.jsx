import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>LMS</h1>
      <nav>
        <a href="/">Courses</a>
        <a href="/upload">Upload Course</a>
      </nav>
    </header>
  );
};

export default Header;
