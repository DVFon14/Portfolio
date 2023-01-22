//import "./App.css";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Resume from "./Pages/resume";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
