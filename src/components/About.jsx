import React from 'react';

export default function About() {
  return (
    <section id="about" className="section">
      <h3>About</h3>
      <div className="card">
        <p>I'm a pragmatic engineer who combines careful system design with a focus on usability. I have built features end-to-end — from database schema and backend APIs to interactive front-end interfaces — and I enjoy mentoring teammates and presenting technical work to non-technical stakeholders. My work emphasizes reliability, performance, and clear documentation.</p>
        <div className="skills" aria-hidden="false">
          <span className="skill">Python</span>
          <span className="skill">JavaScript</span>
          <span className="skill">C# / Java</span>
          <span className="skill">React</span>
          <span className="skill">SQL / Oracle</span>
          <span className="skill">Docker</span>
        </div>
      </div>
    </section>
  );
}