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
  return (
    <motion.div
      className="col-lg-4 col-md-6 mb-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card shadow-sm h-100">
        <img src={image} className="card-img-top project-image" alt={title} />
        <div className="card-body">
          <p className="project-type">{type}</p>
          <h5 className="card-title">{title}</h5>
          <div className="tech-stack mb-3">
            {techStack.map((tech, index) => (
              <span className="tech-banner" key={index}>
                {tech}
              </span>
            ))}
          </div>
          <p className="card-text">{description}</p>
          <a
            href={link}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Repo
          </a>
        </div>
      </div>
    </motion.div>
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
    <section id="projects" className="section text-center py-5">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          @Projects
        </motion.h2>
        <motion.p
          className="comment"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          /* Here are some projects I've worked on recently */
        </motion.p>
        <motion.div
          className="row justify-content-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;