import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false); // State to track scroll position

  // Track scroll position to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show after scrolling 200px
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_e2s1ns1',
        'template_q2fjdgh',
        e.target,
        'DoWyBj2KyJcOW-Gom'
      )
      .then(
        (response) => {
          setSuccess('Message sent successfully!');
          setLoading(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setError('Failed to send the message. Please try again later.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        {/* Form Fields */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          Send Message
        </button>

        {/* Loading Spinner */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            Sending...
          </div>
        )}
      </form>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </section>
  );
}

export default Contact;
