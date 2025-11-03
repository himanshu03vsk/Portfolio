import React, { useEffect, useRef, useState } from 'react';

const colors = ['blue', 'pink', 'yellow', 'green', 'amber']; // Color cycle

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Effect for Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target); // Stop observing once revealed
          }
        });
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card fade-in ${isRevealed ? 'reveal' : ''}`}
    >
      <h4>{project.title}</h4>
      
      <div className="skills project-skills">
        {project.tech && Array.isArray(project.tech) && project.tech.map((tech, index) => (
          <span key={index} className={`skill ${colors[index % colors.length]}`}>
            {tech}
          </span>
        ))}
      </div>
      
      <p className="muted">{project.summary}</p>
      
      <div className="project-details">
        {project.details && Array.isArray(project.details) && project.details.length > 0 && (
          <ul>
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="project-actions">
        <a href={project.demo} className="btn small">Demo</a>
        <a href={project.source} className="btn small ghost">Source</a>
      </div>
    </article>
  );
}