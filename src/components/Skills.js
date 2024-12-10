import React, { useEffect } from 'react';

// Move skills array outside the component
const skills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'React', level: 75 },
];

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.progress-bar').forEach((bar, index) => {
              bar.style.width = `${skills[index].level}%`;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.querySelector('.skills');
    observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []); // Empty dependency array

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">{skill.name}</div>
          <div className="skill-bar">
            <div className="progress-bar"></div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
