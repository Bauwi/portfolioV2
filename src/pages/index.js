import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

const IndexPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eaeaea;
  height: 60vh;
  padding: 2rem;
  text-align: right;

  h1 {
    color: black;
    font-family: Fira Code;
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
  }
  h2 {
    color: lightgrey;
    font-family: Fira Code;
    margin: 0;
  }
  p {
    color: black;
    font-family: 'Nothing You Could Do';
  }
`;
const LastName = styled.span`
  color: rgba(0, 0, 0, 0.1);
`;

const IndexPageMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  text-align: right;

  div {
    padding: 2rem;
    border-right: 5px solid red;
    p {
      margin: 0;
      font-family: 'Source Sans Pro';
      font-style: italic;
    }
  }
  nav {
    padding-right: 2rem;
    padding-bottom: 3rem;
    a {
      color: rgba(255, 255, 255, 0.3);
      text-decoration: none;
      margin: 0 1rem;
      &:hover {
        color: red;
      }
    }
  }
`;
const IndexPage = () => (
  <div>
    <IndexPageHeader>
      <h1>
        KEVIN <LastName>PHILIPPE</LastName>
      </h1>
      <h2>Front-End Developer</h2>
      <p>and a bit of back...</p>
    </IndexPageHeader>
    <IndexPageMain>
      <div>
        <p>Enthusiastic 27 years old web development permanent learner.</p>
        <p>Fresh from the oven.</p>
        <p>Autodidact.</p>
      </div>
      <nav>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/skills">SKILLS</Link>
      </nav>
    </IndexPageMain>
  </div>
);

export default IndexPage;
