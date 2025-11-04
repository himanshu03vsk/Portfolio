import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="section">
      <h3 data-title="Resume">Resume</h3>
      <div className="card">
        <p>For full details, download the PDF or view it in your browser.</p>
        <a className="btn" href="/ISNRES.pdf" target="_blank">Open resume (PDF)</a>
        <a className="btn ghost" href="resume.html">View parsed resume</a>
      </div>
    </section>
  );
}