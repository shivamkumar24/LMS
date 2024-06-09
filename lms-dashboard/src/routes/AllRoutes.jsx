import Login from "../pages/Login";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import CourseUpload from "../pages/CourseUpload";
import PageNotFound from "../pages/PageNotFound";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const AllRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={isAuthenticated ? <CourseList /> : <Navigate to="/login" />}
      />
      <Route
        path="/course/:id"
        element={isAuthenticated ? <CourseDetail /> : <Navigate to="/login" />}
      />
      <Route
        path="/upload"
        element={isAuthenticated ? <CourseUpload /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
