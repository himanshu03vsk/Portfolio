import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h3 data-title="Experience">Experience</h3>
      
      <div className="card">
        <h4>AI & ML Intern — Trademark Analytics (Remote)</h4>
        <p className="muted">June 2022 – Dec. 2022</p>
        <ul>
          <li>Engineered an explainability dashboard to evaluate speech-model performance across demographics (age, gender, accent) and to classify noisy audio via neural networks — reducing error rate by 5% and making the system more inclusive.</li>
          <li>Built reusable evaluation pipelines and visualizations to communicate fairness and performance metrics to cross-functional stakeholders, improving decision-making and increasing user satisfaction by ~12%.</li>
        </ul>
      </div>
      
      <div className="card">
        <h4>Software Engineer Intern — Suven Technologies (Remote)</h4>
        <p className="muted">Aug. 2021 – Sep. 2021</p>
        <ul>
          <li>Redesigned a legacy client desktop app using Java (JDK, Swing), modernizing the codebase and increasing feature delivery speed by 33% while improving the user workflow.</li>
          <li>Optimized backend services to cut server response time by ~24% and applied caching/indexing strategies to reduce data load times and improve perceived performance.</li>
        </ul>
      </div>
    </section>
  );
}