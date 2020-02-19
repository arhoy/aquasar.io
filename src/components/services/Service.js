import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-right: 1px solid
    ${props => (props.border ? props.theme.colors.grey : 'transparent')};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    border-right: none;
    text-align: center;
  }
`;

const Title = styled.h4`
  text-transform: uppercase;
  line-height: 1.8rem;
`;

const SubContainer = styled.ul`
  list-style: none;

  & li {
    font-size: 1.5rem;
  }
`;

const HR = styled.div`
  background: ${props => props.theme.colors.primaryDark};
  width: 5rem;
  height: 3px;
  margin: 1rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 1rem auto;
  }
`;

const Service = ({ title, items, border }) => {
  return (
    <Container border={border}>
      <Title>{title}</Title>
      <HR />
      <SubContainer>
        {items && items.map(item => <li key={item}>{item}</li>)}
      </SubContainer>
    </Container>
  );
};
export default Service;
