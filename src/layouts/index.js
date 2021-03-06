import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import Sidebar from '../components/Sidebar';
import theme from '../utils/theme';

import icon from '../../static/images/icon.png';

const Wrapper = styled.main`
  background: black;
  width: 100%;
  overflow-x: hidden !important;
`;
const Container = styled.main`
  display: flex;
  margin: auto;
  width: 85vw;
  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;

const Content = styled.section`
  background: #222;
  color: white;
  width: 70vw;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Helmet
        title="Portfolio - Kevin Philippe"
        meta={[
          {
            name: 'description',
            content: 'Junior web developer looking for opportunities',
          },
          {
            name: 'keywords',
            content: 'mern, react, redux, node, express, mongo',
          },
        ]}
      >
        {' '}
        <link rel="icon" type="image/png" href={`${icon}`} />
      </Helmet>
      <Container>
        <Sidebar />
        <Content>{children()}</Content>
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default TemplateWrapper;
