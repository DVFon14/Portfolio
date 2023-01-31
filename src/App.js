//import "./App.css";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Resume from "./resume/resume";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
