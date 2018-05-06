import React from 'react';
import styled from 'react-emotion';
import Link from 'gatsby-link';

import ContactSVG from './ContactSVG';
import GithubIcon from '../Icons/GithubIcon';

const SideBar = styled.aside`
  height: 100vh;
  width: 15vw;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 5px solid red;
  height: 100vh;
  width: 15vw;
  @media (max-width: 768px) {
    position: initial;
    flex-direction: row;
    height: 20vh;
    width: 100%;
  }
`;

const NavBarSection = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem 1rem;
    &:nth-child(2) {
      background: white;
      justify-content: center;
      margin: 0;
      padding: 0;
      padding-left: 1rem;
      img {
        margin: 0;
      }
    }
  }
`;
/* ************************************************ */
/* trick to make activeClassName work properly      */
/* ************************************************ */
const BaseItem = styled(Link)`
  font-family: Helvetica;
  font-weight: 500;
  color: white;
  cursor: pointer;
  padding-right: 1rem;
  text-align: right;
  text-transform: uppercase;
  text-decoration: none;

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Item = styled(({ className, ...props }) => (
  <BaseItem {...props} activeClassName={className} />
))`
  color: red !important;
  svg g g {
    fill: red !important;
  }
`;
/* ************************************************ */

const GithubLink = styled.a`
  padding-right: 1rem;
  text-align: right;
`;

export default () => (
  <SideBar>
    <NavBar>
      <NavBarSection>
        <Item to="/" exact>
          Home
        </Item>
        <Item to="/about/">About</Item>
        <Item to="/projects/">Projects</Item>
        <Item to="/skills/">Skills</Item>
      </NavBarSection>

      <NavBarSection>
        <Item to="/contact/">
          <ContactSVG />
        </Item>
        <GithubLink href="https://github.com/Bauwi" target="_blank">
          <GithubIcon />
        </GithubLink>
      </NavBarSection>
    </NavBar>
  </SideBar>
);
