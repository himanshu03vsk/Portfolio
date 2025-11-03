import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* decorative banner */}
      <div className="site-banner" role="banner" aria-hidden="true"> 
        <div className="banner-inner">Himanshu Vishwakarma — Portfolio</div>
      </div>

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
    </>
  );
}