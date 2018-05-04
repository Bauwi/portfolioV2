import React, { Component } from 'react';
import styled from 'react-emotion';

import SkillsList from '../components/SkillsList/SkillsList';

import projects from '../utils/projects';
import getProjectsStats from '../utils/getProjectsStats';

const { stackFront, stackBack, total } = getProjectsStats(projects);

const SkillsPageTop = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: black;
  min-height: 50vh;
`;

const SkillsPageBottom = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 50vh;
`;

const SkillsPageSectionHeader = styled.header`
  display: flex;
  align-items: center;
  font-family: Nothing You Could Do, Arial, sans-serif;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
  h2,
  aside {
    font-family: Nothing You Could Do, Arial, sans-serif;
    font-weight: 900;
    font-size: 2rem;
    margin: 0;
  }
  aside {
    font-size: 1.3rem;
  }
`;
const SkillsPageSectionFooter = styled.footer`
  display: flex;
  align-items: center;
  font-family: Nothing You Could Do, Arial, sans-serif;
  justify-content: flex-end;
  padding: 1rem 1rem 0 1rem;
  p {
    margin: 0;
  }
`;
const Button = styled.button`
  color: ${p => (p.name === 'showAllFront' ? 'black' : 'white')};
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.5rem;
  font-style: italic;
  font-weight: 600;
  padding: 0.5rem 0 0 0;
  opacity: 0.7;
  outline: none;
  text-decoration: underline;
`;
const Total = styled.span`
  font-size: 2rem;
`;
const Smile = styled.span`
  display: inline-block;
  transform: rotateZ(90deg) rotateX(180deg);
`;

class SkillsPage extends Component {
  state = {
    showAllFront: false,
    showAllBack: false,
  };

  showAll = category => {
    this.setState(prevProps => ({ [category]: !prevProps[category] }));
  };

  render() {
    const { showAllFront, showAllBack } = this.state;
    return (
      <div>
        <SkillsPageTop>
          <SkillsPageSectionHeader>
            <h2>Front</h2>
            <aside>
              These are not marks <Smile> =) </Smile>{' '}
            </aside>
          </SkillsPageSectionHeader>
          <SkillsList
            stackName="stackFront"
            stack={showAllFront ? stackFront : stackFront.slice(0, 5)}
          />
          <Button
            onClick={() => this.showAll('showAllFront')}
            name="showAllFront"
          >
            {showAllFront ? 'HIDE SOME' : 'SHOW ALL'}
          </Button>
        </SkillsPageTop>
        <SkillsPageBottom>
          <SkillsPageSectionHeader>
            <h2>Back</h2>
          </SkillsPageSectionHeader>
          <SkillsList
            stackName="stackBack"
            stack={showAllBack ? stackBack : stackBack.slice(0, 5)}
          />
          <Button
            onClick={() => this.showAll('showAllBack')}
            name="showAllBack"
          >
            {showAllBack ? 'HIDE SOME' : 'SHOW ALL'}
          </Button>
          <SkillsPageSectionFooter>
            <p>
              ...in <Total>{total}</Total> projects{' '}
            </p>
          </SkillsPageSectionFooter>
        </SkillsPageBottom>
      </div>
    );
  }
}

export default SkillsPage;
