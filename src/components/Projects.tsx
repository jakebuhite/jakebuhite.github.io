import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  description: string;
  link: string;
  type: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, techStack, description, link, type }) => {
  // Only projects with a real screenshot show an image; the shared placeholder is skipped.
  const hasImage = !image.includes('default-project');

  return (
    <motion.article
      className={`project-card ${hasImage ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {hasImage && <img src={image} className="project-image" alt={title} />}
      <div className="project-body">
        <span className="project-type">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span className="tech-banner" key={index}>
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View repo
        </a>
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "BackBlog",
      image: "/project1.png",
      techStack: ["Swift", "Kotlin", "Firebase", "Mockito"],
      description: "A movie-centric social playlist app for Android and iOS.",
      link: "https://github.com/jakebuhite/backblog",
      type: "MOBILE",
    },
    {
      title: "News Site",
      image: "/default-project.png",
      techStack: ["Node.js", "Express.js", "PostgreSQL"],
      description:
        "A user-friendly web application to view articles and posts created and managed by admins with the included dashboard.",
      link: "https://github.com/jakebuhite/news-site",
      type: "FULLSTACK",
    },
    {
      title: "Connect4 Agent",
      image: "/default-project.png",
      techStack: ["C++", "AI"],
      description:
        "A Connect4 console game built in C++, featuring AI opponents powered by TDL and Minimax algorithms.",
      link: "https://github.com/jakebuhite/connect4",
      type: "ALGORITHMIC",
    },
    {
      title: "Maze Generator and Solver",
      image: "/default-project.png",
      techStack: ["Python"],
      description:
        "A Python program that generates and solves large mazes (up to 10,000 x 10,000) using randomized iterative depth-first search for maze generation and A* for solving.",
      link: "https://github.com/jakebuhite/maze-generator-solver",
      type: "ALGORITHMIC",
    },
    {
      title: "Workout Buddy",
      image: "/default-project.png",
      techStack: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application that allows users to log, track, and manage their workouts.",
      link: "https://github.com/jakebuhite/workout-buddy",
      type: "FULLSTACK",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">02 / Projects</span>
          <h2>Things I've built</h2>
          <p>Some projects I've worked on recently.</p>
        </div>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;