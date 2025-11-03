import React from 'react';

export default function AboutPage() {
  return (
    <>
      {/* We can add a different banner or skip it */}
      <div className="site-banner" role="banner" aria-hidden="true"> 
        <div className="banner-inner">About Me</div>
      </div>
      
      <main>
        <section id="about-page" className="section">
          <div className="card">
            <h2>More About Me</h2>
            <p>This is where you can add more personal details, hobbies, your journey into computer science, etc.</p>
            <p>You could add paragraphs, images, or anything else you like here.</p>
            
            {/* TIP: You can move the content from your 
              src/components/About.jsx component and put it here
              if you want to.
            */}
          </div>
        </section>
      </main>
    </>
  );
}