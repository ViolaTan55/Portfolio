import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Robotics from "./components/Projects/Robotics";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import RhinoAI from "./components/ProjectsPages/RhinoAI";
import Visualizer from "./components/ProjectsPages/Visualizer";
import Transformable from "./components/ProjectsPages/Transformable";
import Workshop from "./components/ProjectsPages/Workshop";
import CNN from "./components/ProjectsPages/CNN";
import TenantPower from "./components/ProjectsPages/TenantPower";
import Drone from "./components/ProjectsPages/Drone";
import VirtualRobot from "./components/ProjectsPages/VirtualRobot";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hci" element={<Projects />} />
          <Route path="/robotics" element={<Robotics />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />

          <Route path="/rhinoai" element={<RhinoAI />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/transformable" element={<Transformable />} />
          <Route path="/tenantpower" element={<TenantPower />} />
          <Route path="/parkcnn" element={<CNN />} />
          <Route path="/designplaykit" element={<Workshop />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/virtualrobot" element={<VirtualRobot />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
