import React, { useState } from 'react';
import styled from '@emotion/styled';
import { navigate } from 'gatsby-link';
import { MdMail } from 'react-icons/md';

import { ButtonStyle1 } from '../reusableStyles/buttons/Button';
import { H2 } from '../reusableStyles/typography/Typography';

// Function to Make Netlify Submission and Gatsby Work
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Field = styled.div`
  & .hidden {
    display: none;
  }
  margin-bottom: 2rem;
`;

const Label = styled.label`
  padding: 1rem;
  display: block;
  outline: none;
  & input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
    font-family: Montserrat, Roboto;
    font-size: 1.6rem;
  }
`;

const Container = styled.div``;

const Form = styled.form`
  display: block;
  background: rgb(240, 240, 240);
  padding: 2rem 4rem;
  border: 3px solid black;
  box-shadow: 24px -24px 0 -3px #ccc, 24px -24px 0 0 #000;
  padding-bottom: 5rem;
`;

const TextArea = styled.textarea`
  background: transparent;
`;
const Input = styled.input`
  background: transparent;
`;

const Icon = styled(MdMail)`
  color: ${props => props.theme.colors.primary};
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  z-index: 0;
`;

const SendField = styled(Field)`
  position: relative;
`;

const SendContainer = styled.div`
  position: absolute;

  top: -25px;
  cursor: none;
  &:hover {
    ${Icon} {
      color: ${props => props.theme.colors.primaryDark};
    }
  }
`;

const SendButton = styled(ButtonStyle1)`
  position: absolute;
  font-size: 2rem;
  border-radius: 1px;
  transition: all 0.4s ease-in;
  padding: 3rem;
  font-weight: bold;
  border: none;
  color: transparent;
`;

const ContactBoxForm = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name,
      email,
      message,
    };

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name: userData.name,
        email: userData.email,
        message: userData.message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you/"
        onSubmit={handleSubmit}
      >
        <H2>{title}</H2>
        <Field className="hidden">
          <Label className="hidden">
            Hidden Honey Bot Spam Field: <input name="bot-field" />
          </Label>
        </Field>
        <Field>
          <Label>
            Your Name:
            <Input
              onChange={event => setName(event.target.value)}
              placeholder="Your Name"
              type="text"
              name="name"
              required
            />
          </Label>
        </Field>
        <Field>
          <Label>
            Your Email:
            <Input
              onChange={event => setEmail(event.target.value)}
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
          </Label>
        </Field>

        <Field>
          <Label>
            Message:
            <TextArea
              onChange={event => setMessage(event.target.value)}
              placeholder="Brief Note"
              name="message"
              required
              minLength="10"
              maxLength="1000"
            />
          </Label>
        </Field>
        <SendField>
          <SendContainer>
            <Icon />
            <SendButton type="submit">Send</SendButton>
          </SendContainer>
        </SendField>
      </Form>
    </Container>
  );
};

export { ContactBoxForm };
