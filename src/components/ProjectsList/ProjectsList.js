import React, { Component } from 'react';
import styled from 'react-emotion';

import ProjectsListItem from './ProjectsListItem';

import { projects } from '../../utils/projects';
import { filterProjects } from '../../utils/filterProjects';

const ProjectsListWrapper = styled.div`
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectsListTitle = styled.h2`
  font-family: Nothing You Could Do, Arial, sans-serif;
  border-right: 5px solid red;
  font-weight: 900;
  margin: 0 0 1rem 0;
  padding: 1rem;
`;
const ProjectsList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;
export default class ProjectsListComp extends Component {
  renderprojectsList = () => {
    return this.props.projects.map(project => {
      return (
        <ProjectsListItem
          key={project.id}
          project={project}
          styles={this.props.styles}
        />
      );
    });
  };

  render() {
    return (
      <ProjectsListWrapper>
        <ProjectsListTitle>{this.props.title}</ProjectsListTitle>
        <ProjectsList>{this.renderprojectsList()}</ProjectsList>
        <p />
      </ProjectsListWrapper>
    );
  }
}