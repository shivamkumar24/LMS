import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./routes/AllRoutes";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  // };

  return (
    <div className="app">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
