import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .demo-order-button {
    border: 2px solid ${props => props.theme.colors.black};
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  }
  & p {
    max-width: 60rem;
    margin: 1rem 0;
    text-align: center;
  }
`;

export const OrderingApp = () => {
  return (
    <Container>
      <span
        className="demo-order-button"
        data-glf-cuid="ab1f1475-0630-46d9-acad-01ad52fa87d4"
        data-glf-ruid="1a3856ff-681d-4ef4-80a3-6727617d5cbb"
      >
        Open Demo Menu & Order
      </span>
      <p>
        No Commission and unlimted orders. Greatly reduce your online pickup
        fees from Skip the Dishes and start taking orders from your website and
        facebook businesss page
      </p>
    </Container>
  );
};
