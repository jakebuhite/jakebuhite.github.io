import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

type ExperienceItemProps = {
  position: string;
  company: string;
  date: string;
  location: string;
  tasks: string[];
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ position, company, date, location, tasks }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h5>{position} @ <strong className="company">{company}</strong></h5>
        <span><FontAwesomeIcon icon={faCalendar} /> {date}</span>
        <p><FontAwesomeIcon icon={faMapMarker} /> {location}</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      position: "Software Engineer II",
      company: "Walmart Global Tech",
      date: "June 2024 - Present",
      location: "Hoboken, NJ",
      tasks: [
        "Successfully optimized API endpoints by designing and implementing efficient pagination techniques, resulting in a 30% reduction in p99 response times.",
        "Proactively identified, resolved, and communicated impactful API bug fixes.",
        "Utilized Splunk and Ktor to query, preprocess, and analyze API call logs."
      ]
    },
    {
      position: "CIS Department Tutor",
      company: "Saint Vincent College",
      date: "Nov. 2021 - May 2024",
      location: "Hoboken, NJ",
      tasks: [
        "Evaluated the needs and weaknesses of each student.",
        "Explained the fundamentals of C++ and concepts such as object-oriented design.",
        "Addressed and resolved student inquiries, providing comprehensive support while fostering positive learning."
      ]
    },
    {
      position: "Software Engineer Intern",
      company: "Walmart Global Tech",
      date: "May 2023 - Aug. 2023",
      location: "Bentonville, AR",
      tasks: [
        "Successfully optimized API endpoints by designing and implementing efficient pagination techniques, resulting in a 30% reduction in p99 response times.",
        "Proactively identified, resolved, and communicated impactful API bug fixes, ensuring seamless functionality and enhancing overall integration experience.",
        "Utilized Splunk and Ktor to query, preprocess, and analyze API call logs."
      ]
    },
    {
      position: "Software Developer Intern",
      company: "Clickstop",
      date: "June 2022 - Dec. 2022",
      location: "Remote",
      tasks: [
        "Leveraged an array of shipping APIs, including those from FedEx, UPS, and USPS, to orchestrate real-time tracking of company packages at scale.",
        "Automated the process of updating record fields in HubSpot through the integration of AWS Lambda and DynamoDB.",
        "Designed and developed a company downtime reporter using PHP and JavaScript."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-center">@Experience</h2>
        <p className="text-center comment">/* Here's a look at my journey so far */</p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;