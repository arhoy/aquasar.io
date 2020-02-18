import React from 'react';
import styled from '@emotion/styled';
import { H2 } from '../reusableStyles/typography/Typography';

const CustomWrapper = styled.div`
  display: inline-block;
  background-color: #789;
  padding: 2rem;
  border: 3px solid black;
  box-shadow: 14px -14px 0 -3px #ccc, 14px -14px 0 0 #000;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 0.5rem;
  }

  & ${H2} {
    color: ${props => props.theme.colors.lightgrey};
  }
`;
const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
`;

const ContactBox = ({ text }) => {
  return (
    <CustomWrapper>
      <CustomDiv>
        <H2>{text}</H2>
      </CustomDiv>
    </CustomWrapper>
  );
};

export default ContactBox;
