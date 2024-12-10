import React, { useState, useEffect } from 'react';

function Hero() {
  const roles = [
    'Software Developer',
    'React Enthusiast',
    'Java Developer',
    'SQL Expert',
    'Creative Coder',
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="hero">
      <h1>Saikiran Atchi</h1>
      <h2 className="animated-role">{roles[currentRole]}</h2>
      <div className="hero-buttons">
        <a href="#contact" className="btn-primary">Contact Me</a>
        <a href="#projects" className="btn-secondary">Explore My Projects</a>
      </div>
    </section>
  );
}

export default Hero;
