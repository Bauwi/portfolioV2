import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/Header';
import Drawer from '../components/Drawer';
import theme from '../utils/theme';
import { toggleDrawer as toggleDrawerAction } from '../state/app';

const Wrapper = styled.main`
  background: black;
  width: 100%;
  overflow-x: hidden !important;
`;
const Container = styled.main`
  display: flex;
  margin: auto;
  width: 85vw;
`;

const Content = styled.section`
  background: #222;
  color: white;
  width: 70vw;
  transition: transform 0.3s ease-in-out;
  transform: perspective(200px)
    ${p =>
      p.isDrawerOpen
        ? `translateX(${p.theme.size(8)}) translateZ(-20px)`
        : 'none'};
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Helmet
        title="Gatsby Default Redux Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Container>
        <Drawer />
        <Content>{children()}</Content>
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(TemplateWrapper);
