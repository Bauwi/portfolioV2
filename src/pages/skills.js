import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import SkillsList from '../components/SkillsList/SkillsList';

import projects from '../utils/projects';
import getProjectsStats from '../utils/getProjectsStats';

const { stackFront, stackBack, total } = getProjectsStats(projects);
console.log(projects);
const SkillsPageTop = styled.header`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  height: 50vh;
`;

const SkillsPageBottom = styled.section`
  display: flex;
  flex-direction: column;
  height: 50vh;
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
const SkillsPageTopFooter = styled.footer`
  display: flex;
  align-items: center;
  font-family: Nothing You Could Do, Arial, sans-serif;
  justify-content: flex-end;
  padding: 1rem 1rem 0 1rem;
  p {
    margin: 0;
  }
`;
const Total = styled.span`
  font-size: 2rem;
`;
const Smile = styled.span`
  display: inline-block;
  transform: rotateZ(90deg) rotateX(180deg);
`;

const SkillsPage = () => (
  <div>
    <SkillsPageTop>
      <SkillsPageSectionHeader>
        <h2>Front</h2>
        <aside>
          These are not marks <Smile> =) </Smile>{' '}
        </aside>
      </SkillsPageSectionHeader>
      <SkillsList stackName="stackFront" stack={stackFront.slice(0, 7)} />
    </SkillsPageTop>
    <SkillsPageBottom>
      <SkillsPageSectionHeader>
        <h2>Back</h2>
      </SkillsPageSectionHeader>
      <SkillsList stackName="stackBack" stack={stackBack.slice(0, 7)} />
      <SkillsPageTopFooter>
        <p>
          ...in <Total>{total}</Total> projects{' '}
        </p>
      </SkillsPageTopFooter>
    </SkillsPageBottom>
  </div>
);

export default SkillsPage;
