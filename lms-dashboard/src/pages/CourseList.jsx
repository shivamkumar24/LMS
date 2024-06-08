import React from "react";
import CourseCard from "../components/CourseCard";
import "../styles/CourseList.scss";

const CourseList = () => {
  const courses = [
    { id: 1, title: "Course 1", description: "Description 1", progress: 50 },
    { id: 2, title: "Course 2", description: "Description 2", progress: 20 },
  ];

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
