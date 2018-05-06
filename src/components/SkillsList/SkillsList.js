import React, { Component } from 'react';
import styled from 'react-emotion';

import SkillsListItem from './SkillsListItem';

const SkillsList = styled.ul`
  margin: 1rem 0 0 0;
`;

export default class SkillsListComp extends Component {
  renderSkillsList = () => {
    return this.props.stack.map(techno => (
      <SkillsListItem key={techno.name} {...techno} {...this.props} />
    ));
  };

  render() {
    return <SkillsList>{this.renderSkillsList()}</SkillsList>;
  }
}
