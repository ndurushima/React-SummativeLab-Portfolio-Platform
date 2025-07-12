import React, { useState } from "react";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

const initialProjects = [
  { title: "HogWild", description: "A fun project organizing hog information"} ,
  { title: "WeatherApp", description: "An app to check the weather in your area" },
  { title: "RecipeFinder", description: "Find recipes based on ingredients you have" }
];
const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <InfoCard onAddProject={addProject} />
      <ProjectCard
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        projects={filteredProjects}
        onDelete={deleteProject}
      />
    </div>
  );
};

export default App;
