import React from "react";
import "../styles/CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Progress: {course.progress}%</p>
      <Link to={`/course/${course.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
