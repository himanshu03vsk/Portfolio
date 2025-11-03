import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-card">
        {/* decorative sunburst badge */}
        <div className="sunburst" aria-hidden="true">
          <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              {/* Note: SVG IDs should be unique. This is fine in a component. */}
              <radialGradient id="g2_hero" cx="50%" cy="40%">
                <stop offset="0%" stopColor="#fff59d"/>
                <stop offset="100%" stopColor="#ffb703"/>
              </radialGradient>
            </defs>
            <g>
              <path d="M36 2 L42 20 L60 24 L44 36 L48 54 L36 44 L24 54 L28 36 L12 24 L30 20 Z" fill="url(#g2_hero)" stroke="#2b2b2b" strokeWidth="3"/>
            </g>
          </svg>
        </div>
        <h2>Hello — I'm Himanshu Vishwakarma</h2>
        <p className="lead">Detail-oriented and results-driven Computer Science graduate student with strong experience across the full stack and machine learning. I build scalable web and desktop applications, optimize database-driven systems for performance, and translate complex requirements into user-friendly, maintainable products.</p>
        <div className="actions">
          <a className="btn" href="#projects">See projects</a>
          {/* Note path change for public assets */}
          <a className="btn ghost" href="/ISNRES.pdf" download>Download resume</a>
        </div>
      </div>
    </section>
  );
}