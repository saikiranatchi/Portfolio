import React from 'react';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.jpg';

function Projects() {
  const projects = [
    {
      name: 'Magical Dream Space',
      description: 'A storytelling website showcasing web development skills in HTML, CSS, and JavaScript.',
      link: 'https://saikiranatchi.github.io/storywebsite_project/',
      img: project1,
    },
    {
      name: 'CitySanctum',
      description: 'A travel guide built with React, featuring reusable components and a responsive interface.',
      link: 'https://saikiranatchi.github.io/React-project/',
      img: project2,
    },
    {
      name: 'ShopEase',
      description: 'An E-Commerce website built with React, Contains different categories of Electronics and with a responsive interaction.',
      link: 'https://saikiranatchi.github.io/E-COMMERCE-PROJECT/',
      img: project3,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.name} />
            <div className="overlay">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
