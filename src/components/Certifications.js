import React from 'react';
import hackerrank from './images/hackerrank.svg';
import greatlearning from './images/greatlearning.svg';

function Certifications() {
  const certifications = [
    {
      name: 'Python Certification',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/cb4a845fde23',
      icon: hackerrank,
    },
    {
      name: 'SQL Certification',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/88568f58a1d9',
      icon: hackerrank,
    },
    {
      name: 'Java Certification',
      platform: 'GreatLearning',
      link: 'https://www.mygreatlearning.com/certificate/KNTYVITN',
      icon: greatlearning,
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img src={cert.icon} alt={`${cert.platform} logo`} />
            <h3>{cert.name}</h3>
            <p>{cert.platform}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
