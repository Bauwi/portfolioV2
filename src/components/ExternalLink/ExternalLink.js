import React, { Component } from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const ExternalLink = styled.a`
  opacity: 0;
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

export default class ExternalLinkComp extends Component {
  render() {
    return (
      <ExternalLink href={this.props.destination} target="_blank">
        <img src={this.props.imgUrl} alt={this.props.value} />
      </ExternalLink>
    );
  }
}
