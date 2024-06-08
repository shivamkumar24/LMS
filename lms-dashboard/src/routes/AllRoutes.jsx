import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import CourseUpload from "../pages/CourseUpload";
import PageNotFound from "../pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/upload" element={<CourseUpload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
