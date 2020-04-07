import React from 'react';
import styled from '@emotion/styled';
import PriceCard from '../reusableStyles/cards/PriceCard';
import { P } from '../reusableStyles/typography/Typography';

const CustomP = styled(P)`
  margin-top: 4rem;
  padding: 1rem 8px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  border-radius: 10px;

  background-image: linear-gradient(
    0deg,
    ${props => props.theme.colors.primary} 100%,
    transparent 0%
  );
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const starterFeatures = [
  'Marketing Websites',
  'Branding Experience',
  'Wireframe Mockups',
  'Contact Form',
  'Google Analytics',
  '1 Year Full Developer Support',
];

const advancedFeatures = [
  'Ecommerce Websites',
  'Branding Experience',
  'Wireframe Mockups',
  'Contact Form',
  'Google Analytics',
  '1 Year Full Developer Support',
];

const customFeatures = [
  'FullStack Websites',
  'Branding Experience',
  'Wireframe Mockups',
  'Contact Form',
  'Google Analytics',
  '1 Year Full Developer Support',
];

const Pricing = () => {
  return (
    <Container>
      <PriceCard
        title="FROM"
        price={`3,000`}
        features={starterFeatures}
        priceText={`+`}
      />
      <PriceCard
        title="STARTING AT"
        price={`5,000`}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+`}
      />
      <PriceCard
        title="FROM"
        price={`10,000`}
        features={customFeatures}
        priceText={`+`}
      />
    </Container>
  );
};

export default Pricing;
