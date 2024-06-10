import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Description for project 2',
    link: '#'
  },
  // Add more projects as needed
];

const ProjectList = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectList;
