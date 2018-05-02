import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { navigateTo, withPrefix } from 'gatsby-link';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

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

const Item = styled.a`
  font-family: Helvetica;
  font-weight: 100;
  font-style: italic;
  color: white;
  cursor: pointer;
  padding-right: 1rem;
  text-align: right;
  text-transform: uppercase;
`;

// Static data to keep it simple
const items = [
  { url: '/', name: 'Home' },
  { url: '/about/', name: 'About' },
  { url: '/projects/', name: 'Projects' },
];

const Drawer = ({ isDrawerOpen, toggleDrawer }) => (
  <PaperContainer>
    <Paper>
      <Header />
      {items.map(item => (
        <Item
          key={item.url}
          onClick={() => {
            navigateTo(withPrefix(item.url));
            toggleDrawer(false);
          }}
        >
          {item.name}
        </Item>
      ))}
    </Paper>
  </PaperContainer>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Drawer);
