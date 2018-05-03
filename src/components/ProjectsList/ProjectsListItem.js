import React, { Component } from 'react';
import styled from 'react-emotion';

import ExternalLink from './../ExternalLink/ExternalLink';

const ProjectsListItem = styled.li`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #565656;
  border-bottom: 8px solid #565656;
  color: ${p => p.styles.color};
  list-style-type: none;
  max-width: 20vw;
  height: 20vw;
  margin: 0 0 3rem 0;

  p {
    text-align: right;
    padding: 1rem;
    font-style: italic;
  }

  &:hover {
    border: 1px solid transparent;
    border-bottom: 8px solid red;
    li,
    a {
      opacity: 1;
    }
  }
`;
const ItemHeader = styled.header`
  display: flex;
`;
const Stack = styled.ul`
  display: flex;
  width: 100%;
  font-size: 0.8rem;
  flex-wrap: wrap;
  margin: 0;
  padding: 1rem;
  height: 33%;
  li {
    font-family: Helvetica, Arial, sans-serif;
    opacity: 0.3;
    list-style-type: none;
    margin: 0 0.5rem;
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export default class ProjectsListItemComp extends Component {
  renderStack = () => {
    const {
      project: { stackBack, stackFront, id },
    } = this.props;
    return [...stackFront, ...stackBack]
      .reverse()
      .map(tech => <li key={`${id || 0}${tech}`}>{tech}</li>);
  };

  render() {
    const {
      styles,
      project: { codeUrl, liveUrl },
    } = this.props;
    return (
      <ProjectsListItem styles={styles}>
        <ItemHeader>
          <Stack>{this.renderStack()}</Stack>
          <ButtonsWrapper>
            <ExternalLink
              value="code"
              imgUrl="/images/github.png"
              destination={codeUrl}
            />
            <ExternalLink
              value="live"
              imgUrl="/images/live.png"
              destination={liveUrl}
            />
          </ButtonsWrapper>
        </ItemHeader>

        <p>{this.props.project.name.replace(' ', '_').toUpperCase()}</p>
      </ProjectsListItem>
    );
  }
}
