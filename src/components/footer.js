import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/sarabattilotti/"><img src="assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://www.linkedin.com/in/giorgio-cugusi-45946817b/"><img src="assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://www.linkedin.com/in/malwina-maria-polak-327b2093/"><img src="assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Sara, Giorgio & Malwina</p>
      </div>
    </footer>
  )
}