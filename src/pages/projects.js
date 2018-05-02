import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import ProjectsList from '../components/ProjectsList/ProjectsList';

import { projects } from '../utils/projects';
import { filterProjects } from '../utils/filterProjects';

const ProjectsPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  height: 60vh;
`;

const ProjectsPageMain = styled.section`
  min-height: 40vh;
`;

const ProjectsListHeaderStyles = {
  color: 'black',
};
const ProjectsListMainStyles = {
  color: 'lightgrey',
};

const ProjectsPage = () => (
  <div>
    <ProjectsPageHeader>
      <ProjectsList
        projects={filterProjects('TOP', projects)}
        title="Recommanded..."
        styles={ProjectsListHeaderStyles}
      />
    </ProjectsPageHeader>
    <ProjectsPageMain>
      <ProjectsList
        projects={filterProjects('MORE', projects)}
        title="More..."
        styles={ProjectsListMainStyles}
      />
    </ProjectsPageMain>
  </div>
);

export default ProjectsPage;
