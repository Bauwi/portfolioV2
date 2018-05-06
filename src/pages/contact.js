import React from 'react';
import styled from 'react-emotion';

const ContactPageTop = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eaeaea;
  color: black;
  min-height: 60vh;
  height: 80vh;
`;

const ContactPageBottom = styled.section`
  min-height: 20vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Label = styled.label`
  font-family: Helvetica, Arial, sans-serif;
  font-style: italic;
`;

const Input = styled.input`
  border: none;
  margin: 0 0 0.5rem 0;
  outline: none;

  &:nth-child(2) {
    background: none;
    border-bottom: 1px solid black;
    padding: 1rem;

    &:focus {
      border-color: red;
    }
  }
  &:nth-child(5) {
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.8rem;
    width: 5rem;
    margin: 1rem auto;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
const Textarea = styled.textarea`
  border-radius: 5px;
  height: 50%;
  padding: 1rem;
  outline: none;
  &:focus {
    border-color: red;
  }
`;
const Header = styled.header`
  padding: 1rem 1rem 0 1rem;
  width: 100%;

  h2 {
    font-family: Nothing You Could Do, Arial, sans-serif;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      text-align: right;
    }
  }
`;
const Email = styled.a`
  display: inline-block;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: white;
  }
`;

const FormComp = () => (
  <div>
    <ContactPageTop>
      <Header>
        <h2>Contact</h2>
      </Header>
      <Form action="https://formspree.io/kvn.philippe@gmail.com" method="POST">
        <Label htmlFor="form_email">E-MAIL</Label>
        <Input id="form_email" type="email" name="_replyto" />

        <Label htmlFor="form_message">MESSAGE</Label>
        <Textarea id="form_message" type="text" name="message" />

        <Input type="submit" value="SEND" />
      </Form>
    </ContactPageTop>
    <ContactPageBottom>
      <Header>
        <h2>Or...</h2>
      </Header>
      <Email href="mailto:kvn.philippe@gmail.com">kvn.philippe@gmail.com</Email>
    </ContactPageBottom>
  </div>
);

export default FormComp;
