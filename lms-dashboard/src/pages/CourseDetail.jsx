import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/CourseDetail.scss";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchedCourse = {
      id,
      title: `Course ${id}`,
      description: `Description for Course ${id}`,
      lessons: [
        { id: 1, title: "Lesson 1", completed: false },
        { id: 2, title: "Lesson 2", completed: true },
      ],
    };
    setCourse(fetchedCourse);
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <ul>
        {course.lessons.map((lesson) => (
          <li key={lesson.id}>
            {lesson.title} - {lesson.completed ? "Completed" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
