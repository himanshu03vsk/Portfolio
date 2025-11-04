import React from 'react';

export default function Education() {
  return (
    <section id="education" className="section">
      <h3 data-title="Education">Education</h3>
      <div className="card">
        <p><strong>The University of Texas at Arlington</strong> — Arlington, TX<br/>
        Master of Science in Computer Science; GPA: 4.0/4.0<br/>
        Aug. 2024 – May 2026 (expected)</p>
        
        <strong style={{display:'block', marginTop:'16px'}}>Technical skills:</strong>
        <div className="skills" aria-label="Technical skills">
          <span className="skill blue">Python</span>
          <span className="skill pink">JavaScript</span>
          <span className="skill yellow">C++</span>
          <span className="skill green">Java</span>
          <span className="skill amber">Kotlin</span>
          <span className="skill blue">SQL</span>
          <span className="skill pink">C#</span>
          <span className="skill yellow">T-SQL</span>
          <span className="skill green">React</span>
          <span className="skill amber">Node</span>
          <span className="skill blue">Express</span>
          <span className="skill pink">ASP.NET</span>
          <span className="skill yellow">Django</span>
          <span className="skill green">Flask</span>
          <span className="skill amber">Oracle</span>
          <span className="skill blue">MySQL</span>
          <span className="skill pink">MongoDB</span>
          <span className="skill yellow">MS SQL Server</span>
          <span className="skill green">Docker</span>
          <span className="skill amber">gRPC</span>
          <span className="skill blue">Linux</span>
          <span className="skill pink">Git</span>
          <span className="skill yellow">AWS</span>
          <span className="skill green">AI & ML concepts</span>
        </div>
      </div>
    </section>
  );
}