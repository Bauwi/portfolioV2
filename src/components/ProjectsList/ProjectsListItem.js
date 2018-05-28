import React, { Component } from 'react';
import styled from 'react-emotion';

import GithubIcon from '../Icons/GithubIcon';
import LiveIcon from '../Icons/LiveIcon';

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

  @media (max-width: 1024px) {
    max-width: initial;
    height: 25vw;
    width: 25vw;
  }

  @media (max-width: 768px) {
    border: none;
    flex-direction: column-reverse;
    width: 100vw;
    max-width: initial;
    height: auto;
    min-height: 20vh;
    margin: 0;
    padding: 10px;
    &:hover {
      border: none;
    }
  }
`;
const ItemHeader = styled.header`
  display: flex;
  @media (max-width: 768px) {
    align-items: center;
  }
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
  @media (max-width: 768px) {
    flex-direction: row;
    margin: 0;
  }
`;

const Warning = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0;
  padding: 0 1rem !important;
`;

const ExternalLink = styled.a`
  opacity: 0.3;
  background: none;
  border: none;
  border-radius: 50%;
  color: #222;
  cursor: pointer;
  font-size: 0.8rem;
  height: 2rem;
  width: 2rem;
  margin: 0.2rem 0;
  padding: 0.2rem;

  &:hover {
    background: rgba(255, 0, 0, 0.1);
  }
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
      project: { codeUrl, liveUrl, beginnerWarning },
    } = this.props;
    return (
      <ProjectsListItem styles={styles}>
        <ItemHeader>
          <Stack>{this.renderStack()}</Stack>
          <ButtonsWrapper>
            {codeUrl && (
              <ExternalLink
                value="code"
                imgUrl="github.png"
                href={codeUrl}
              >
                <GithubIcon />
              </ExternalLink>
            )}
            {liveUrl && (
              <ExternalLink value="live" href={liveUrl}>
                <LiveIcon />
              </ExternalLink>
            )}
          </ButtonsWrapper>
        </ItemHeader>
        {beginnerWarning && <Warning>early beginner project</Warning>}

        <p>{this.props.project.name.replace(/ /g, '_').toUpperCase()}</p>
      </ProjectsListItem>
    );
  }
}
