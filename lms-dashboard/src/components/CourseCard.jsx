import React from "react";
import "../styles/CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.substring(0, maxLength).trim() + " ....."
      : description;
  };

  return (
    <div className="course-card">
      <h2>{course.title}</h2>
      <p className="description">
        {truncateDescription(course.description, 120)}
        <Link to={`/course/${course.id}`} className="read-more">
          Read more
        </Link>
      </p>
      <p className="progress">Progress: {course.progress}%</p>
      <Link to={`/course/${course.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default CourseCard;
