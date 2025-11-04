import React from 'react';

// A helper array with your image names. 
// Add all your scroller photos here!
const scrollerImages = [
  "scroll6.png",
  "scroll8.png",
  "scroll9.png",
  "scroll4.jpeg",
  "scroll1.jpeg",
  "scroll2.jpeg",


];

export default function AboutPage() {
  
  // Helper function to render the image list
  const renderImages = () => (
    <div className="scroller-content">
      {scrollerImages.map((img, index) => (
        <img 
          key={index} 
          src={`/about-photos/${img}`} 
          alt="Decorative scrolling photo" 
        />
      ))}
    </div>
  );

  return (
    <>
      {/* --- NEW LEFT SCROLLER START --- */}
      <div className="photo-scroller left">
        <div className="scroller-track">
          {renderImages()}
          {renderImages()} {/* This duplicate is crucial for the seamless loop */}
        </div>
      </div>
      {/* --- NEW LEFT SCROLLER END --- */}

      {/* --- NEW RIGHT SCROLLER START --- */}
      <div className="photo-scroller right">
        <div className="scroller-track">
          {renderImages()}
          {renderImages()} {/* This duplicate is crucial for the seamless loop */}
        </div>
      </div>
      {/* --- NEW RIGHT SCROLLER END --- */}


      {/* Your existing page content starts here */}
      <div className="site-banner" role="banner" aria-hidden="true"> 
        <div className="banner-inner">About Me</div>
      </div>
      
      <main>
        <section id="about-page" className="section">
          <div className="card">
            
            <h3 data-title="Hello!">Hello!</h3>

            <p style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
              Hello! I'm Himanshu. My work as an engineer is driven by a deep curiosity for how complex systems work—and how to make them better.
            </p>
            <p style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
              This drive for results isn't just professional; it's what pushed me to graduate as Valedictorian of my undergraduate class and what led my team to a win at a university-wide datathon. I believe that technology is built <em>by</em> people, <em>for</em> people, which is why I've always taken an active role in my community. Whether it was serving as my freshman Class Representative or organizing workshops for our college fests, I thrive on bringing people and ideas together.
            </p>
            <p style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
              This passion for complex systems extends beyond the code. I have a deep appreciation for high-performance engineering, which manifests as an insane love for cars and airplanes. My analytical side also enjoys diving into new, complex structures, from foreign languages (I speak conversational Japanese) to the rich storytelling found in anime.
            </p>
            <p style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
              When it's time to unwind, you'll find me re-energizing with a workout, executing team strategies in a game of Valorant, or finding the perfect soundtrack for the moment. My taste in music is eclectic and always matches the mood—whether I need to be energetic, focused, or just reflective.
            </p>
            <p style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
              I'm ultimately a problem-solver who loves to build, a leader who enjoys collaborating, and a lifelong learner who's always looking for the next interesting challenge.
            </p>

            <hr style={{ border: 'none', height: '4px', backgroundColor: 'var(--neutral-light)', margin: '24px 0' }} />

            <div className="photo-grid">
              <img src="/about-photos/scroll3.jpeg" alt="A photo of me" />
              <img src="/about-photos/scroll5.png" alt="A photo of me working out or at a fest" />
              <img src="/about-photos/scroll7.png" alt="A photo of me with my car or gaming setup" />
            </div>

          </div>
        </section>
      </main>
    </>
  );
}