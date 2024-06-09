import React, { useState } from "react";
import "../styles/CourseUpload.scss";
import axios from "axios";

const CourseUpload = () => {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState("");
  const [lessons, setLessons] = useState([{ id: 1, title: "" }]);

  const handleLessonChange = (index, event) => {
    const newLessons = lessons.slice();
    newLessons[index].title = event.target.value;
    setLessons(newLessons);
  };

  const handleAddLesson = () => {
    setLessons([...lessons, { id: lessons.length + 1, title: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://lms-server-s702.onrender.com/courses",
        {
          title,
          progress,
          description,
          lessons,
        }
      );
      alert("Course Uploaded Successfully");
    } catch (error) {
      alert("Error while uploading course");
    }
  };

  return (
    <form className="course-upload" onSubmit={handleSubmit}>
      <div>
        <label>Course Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Course Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Progress</label>
        <input
          type="number"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Lessons</label>
        {lessons.map((lesson, index) => (
          <input
            key={lesson.id}
            type="text"
            value={lesson.title}
            onChange={(e) => handleLessonChange(index, e)}
            required
          />
        ))}
        <button type="button" onClick={handleAddLesson}>
          Add Lesson
        </button>
      </div>
      <button type="submit">Upload Course</button>
    </form>
  );
};

export default CourseUpload;
