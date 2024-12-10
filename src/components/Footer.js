import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Saikiran Atchi. All Rights Reserved.</p>
        <div className="social-links">
          {/* Email Icon */}
          <a href="mailto:saikiranatchi@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> saikiranatchi@gmail.com
          </a>

          {/* Phone Icon */}
          <a href="tel:+91-9392523658" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone-alt"></i> +91-9392523658
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/saikiranatchi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/saikiranatchi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
