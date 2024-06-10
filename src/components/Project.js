import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
`;

const Project = ({ title, description, link }) => {
  return (
    <ProjectContainer>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </ProjectContainer>
  );
};

export default Project;
