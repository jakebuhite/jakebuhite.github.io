import React from 'react';
import ObfuscatedText from './ObfuscatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container text-center">
        <ObfuscatedText></ObfuscatedText>
        <p className="comment">/* Software Engineer specializing in mobile and back-end development */</p>
        <div className="social-icons">
          <a href="https://github.com/jakebuhite" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/jake-buhite" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFilePdf} />
          </a>
          <a href="https://youtube.com/username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

