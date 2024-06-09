import React, { useState, useEffect } from "react";
import "../styles/CourseList.scss";
import axios from "axios";
import CourseCard from "../components/CourseCard";

const CourseList = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    setLoading(true);
    try {
      let res = await axios.get(`https://lms-server-s702.onrender.com/courses`);
      let data = res.data;
      setCourses(data);
    } catch (error) {
      alert("Error fetching course");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="course-list">
      {loading && <div className="loading">Loading .....</div>}

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
