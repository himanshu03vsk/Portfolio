import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard'; // We will create this sub-component

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the /projects.json file in the public folder
    fetch('/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(err => {
        console.error("Couldn't load projects:", err);
        setError(err.message);
      });
  }, []); // Empty array means this effect runs only once

  return (
    <section id="projects" className="section projects">
      <h3>Selected projects</h3>
      <div id="projects-grid" className="grid" aria-live="polite">
        {error && (
          <div className="card" style={{ gridColumn: '1/-1' }}>
            Couldn't load projects: {error}
          </div>
        )}
        {!error && projects.length === 0 && (
          <div className="card" style={{ gridColumn: '1/-1' }}>
            Loading projects…
          </div>
        )}
        {!error && projects.length > 0 && (
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}