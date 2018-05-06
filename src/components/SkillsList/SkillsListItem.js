import React from 'react';
import styled from 'react-emotion';

import projects from '../../utils/projects';

const SkillsListItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  p {
    font-family: Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 900;
    text-align: right;
  }
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const Name = styled.p`
  font-size: 0.7rem;
  margin: 0 2rem 0 0;
  width: 15%;
  @media (max-width: 768px) {
    margin: 0;
    width: 30%;
  }
`;

const Count = styled.p`
  font-size: 1rem;
  width: 5%;
  @media (max-width: 768px) {
    width: 10%;
  }
`;

const BarContainer = styled.div`
  background: black;
  width: 30%;
  transform: skewX(-30deg);
`;
const Bar = styled.div`
  background: red;
  height: 0.5rem;
  margin: 0;
  width: ${p => p.count / p.total * 100}%;
`;

export default ({ name, count, stackName, total }) => {
  return (
    <SkillsListItem>
      <Name>{name}</Name>

      <BarContainer>
        <Bar
          total={projects.length}
          count={count}
          stackName={stackName}
          total={total}
        />
      </BarContainer>

      <Count>{count}</Count>
    </SkillsListItem>
  );
};
