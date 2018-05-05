import React from 'react';
import styled from 'react-emotion';

const AboutPage = styled.div`
  height: 100%;
`;

const AboutPageTop = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
  background-image: url('/images/europe-top.png');
  background-repeat: no-repeat;
  background-position: 100% 0%;
  color: black;
  min-height: 104px;
  h2 {
    font-family: Nothing You Could Do, Arial, sans-serif;
    font-size: 2rem;
    font-weight: 900;
    padding: 1rem;
  }
`;

const AboutPageBottom = styled.section`
  background-image: url('/images/europe-bottom.png');
  background-repeat: no-repeat;
  background-position: 100% 0%;
  min-height: calc(90vh - 104px);
`;

const AboutPageBottomLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(90vh - 104px);
  padding: 1rem;
  width: 50%;

  p {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
    font-style: italic;
    margin-left: 2rem;
    font-weight: 300;
    opacity: 0.8;
  }
`;

const Footer = styled.footer`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  height: 10vh;
  text-align: center;
`;
const AboutComp = () => (
  <AboutPage>
    <AboutPageTop>
      <h2>About</h2>
    </AboutPageTop>

    <AboutPageBottom>
      <AboutPageBottomLeft>
        <p>
          27 years old junior web developer looking for opportunities in Paris
          and everywhere else.
        </p>
        <p>Love Music.</p>
        <p>Hate none but well-kept lawn.</p>
      </AboutPageBottomLeft>
      <Footer>Available for hire.</Footer>
    </AboutPageBottom>
  </AboutPage>
);

export default AboutComp;
