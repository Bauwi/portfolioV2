import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Drawer from '../components/Sidebar';
import theme from '../utils/theme';

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

export default TemplateWrapper;
