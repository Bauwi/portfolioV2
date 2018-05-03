import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import Link from 'gatsby-link';

const PaperContainer = styled.div`
  height: 100vh;
  width: 15vw;
`;

const Paper = styled.aside`
  z-index: ${p => p.theme.zIndex.drawer};
  position: fixed;
  border-right: 5px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15vw;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${p => p.theme.size(4)};
`;
const BaseItem = styled(Link)`
  font-family: Helvetica;
  font-weight: 500;
  color: white;
  cursor: pointer;
  padding-right: 1rem;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;
`;
const Item = styled(({ className, ...props }) => (
  <BaseItem {...props} activeClassName={className} />
))`
  color: red !important;
`;

export default () => (
  <PaperContainer>
    <Paper>
      <Header />
      <Item to="/" exact>
        Home
      </Item>
      <Item to="/about/">About</Item>
      <Item to="/projects/">Projects</Item>
      <Item to="/skills/">Skills</Item>
    </Paper>
  </PaperContainer>
);
