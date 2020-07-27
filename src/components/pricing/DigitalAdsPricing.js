import React from 'react';
import styled from '@emotion/styled';
import PriceCard from '../reusableStyles/cards/PriceCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const DigitalAdsPricing = () => {
  return (
    <Container>
      <h3>Simple pricing, fantastic results.</h3> <br />
      <p>Flat 10% of ad spend across all advertising channels</p>
    </Container>
  );
};

export default DigitalAdsPricing;
