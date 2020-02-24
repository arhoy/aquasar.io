import React, { useState } from 'react';
import styled from '@emotion/styled';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2rem;
  &: hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Title = styled.h3`
  margin-right: 4px;
`;

const IconUp = styled(FaChevronUp)`
  font-size: 1rem;
`;

const IconDown = styled(FaChevronDown)`
  font-size: 1rem;
`;
const SubContainer = styled.div`
  height: ${props => (props.show ? props.height || '22rem' : '0')};

  transition: all 1s ease-in-out;
`;

const Text = styled.p`
  display: inline-block;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(-5rem)')};
  opacity: ${props => (props.show ? '1' : '0')};

  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;
`;

const Accordian = ({ title, text, height }) => {
  const [open, setOpen] = useState(false);
  const buttonClick = () => {
    console.log('I was clicked', open);
    setOpen(prev => !prev);
  };
  return (
    <Container>
      <TitleContainer onClick={buttonClick}>
        <Title>{title}</Title>
        {open ? <IconUp /> : <IconDown />}
      </TitleContainer>

      <SubContainer height={height} show={open}>
        <Text show={open}>{text}</Text>
      </SubContainer>
    </Container>
  );
};

export default Accordian;
