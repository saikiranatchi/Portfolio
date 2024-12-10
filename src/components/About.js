import React from 'react';
import aboutimg from './images/sai3.jpg';
import resume from './images/resume.pdf';

function About() {
  return (
    <section id="about" className="about">
      <img src={aboutimg} alt="Profile" />
      <div className="about-content">
        <h2>Who Am i ?</h2>
        <p>
          I am a highly motivated and detail-oriented Software Developer with a solid foundation in 
          Information Technology. A recent graduate from DVR & Dr. HS MIC College of Technology with a CGPA of 8.35, 
          I specialize in building responsive, interactive, and user-friendly web applications. 
          My technical expertise includes Java, Python, React, and SQL, with a passion for solving complex problems 
          and delivering impactful solutions. I am eager to contribute to innovative projects, leveraging my skills 
          to create seamless digital experiences.
        </p>
        <div className="about-buttons">
          <a href="#contact" className="btn-primary">Contact</a>
          <a href={resume} className="btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;
