import React from 'react';
import { motion } from 'framer-motion';
import ObfuscatedText from './ObfuscatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="status-pill">
          <span className="dot" />
          Software Engineer III at Walmart Global Tech
        </span>
        <ObfuscatedText />
        <p className="hero-lead">
          Software engineer specializing in <strong>back-end development</strong>,
          building reliable APIs and data pipelines at scale.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-solid">
            View my work <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a href="/jbuhite_resume.pdf" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
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
          <a href="mailto:jakebuhite@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
