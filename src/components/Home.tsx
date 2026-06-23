import React from 'react';
import ObfuscatedText from './ObfuscatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container text-center">
        <ObfuscatedText />
        <p className="comment">/* Software Engineer specializing in back-end development */</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-hero">View My Work</a>
          <a href="path/to/your/resume.pdf" className="btn-outline-accent" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/jakebuhite" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/jake-buhite" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://youtube.com/username" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
