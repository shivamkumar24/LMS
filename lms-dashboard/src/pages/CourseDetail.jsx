import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/CourseDetail.scss";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);

  const getCourseDetail = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://lms-server-s702.onrender.com/courses/${id}`
      );
      const data = res.data;
      setCourse(data);
    } catch (error) {
      alert("Error fetching course");
    } finally {
      setLoading(false);
    }
  };

  const toggleCompletion = (lessonId) => {
    setCourse((prevCourse) => {
      const updatedLessons = prevCourse.lessons.map((lesson) => {
        if (lesson.id === lessonId) {
          return { ...lesson, completed: !lesson.completed };
        }
        return lesson;
      });
      return { ...prevCourse, lessons: updatedLessons };
    });
  };

  useEffect(() => {
    getCourseDetail(id);
  }, [id]);

  return (
    <div className="course-detail">
      {loading && <div className="loading">Loading .....</div>}

      {course !== null && (
        <>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.id}>
                {lesson.id}. {lesson.title} -
                <button onClick={() => toggleCompletion(lesson.id)}>
                  {lesson.completed ? "Incomplete" : "Completed"}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CourseDetail;
