import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CourseDetails from "../pages/CourseDetails";
import PageNotFound from "../pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/coursedetails/:id" element={<CourseDetails />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
