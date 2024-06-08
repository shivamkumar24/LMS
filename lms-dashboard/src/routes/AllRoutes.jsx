import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CourseList from "../components/CourseList";
import CourseDetail from "../components/CourseDetail";
import CourseUpload from "../components/CourseUpload";
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
