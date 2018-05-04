import React from 'react';
import styled from 'react-emotion';

const AboutPageTop = styled.header`
  min-height: 60vh;
  height: 80vh;
`;

const AboutPageBottom = styled.section`
  min-height: 20vh;
`;

const AboutComp = () => (
  <div>
    <AboutPageTop>top</AboutPageTop>
    <AboutPageBottom>bottom</AboutPageBottom>
  </div>
);

export default AboutComp;
