import React, { useState } from 'react';

const ProjectCard = ({ searchTerm, setSearchTerm, projects, onDelete }) => {
  return (
    <div className="project-card">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "90%", marginBottom: "1rem" }}
      />
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            padding: "0.5rem"
          }}
        >
          <button
            onClick={() => onDelete(index)}
            style={{
              marginRight: "1rem",
              fontSize: "1.5rem",
              border: "1px solid #999",
              background: "transparent",
              borderRadius: "4px",
              color: "black",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <div className="project-details">
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
