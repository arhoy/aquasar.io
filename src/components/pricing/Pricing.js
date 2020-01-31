import React from 'react';
import styled from '@emotion/styled';
import PriceCard from '../reusableStyles/cards/PriceCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const starterFeatures = [
  'Fast turn around',
  'Provide Own Content',
  'Mostly unchanging content',
  'Contact Form',
  'Google Analytics',
];

const advancedFeatures = [
  'Basic Ecommerce',
  'Constantly updating content',
  'Starter SEO',
  'Contact Form',
  'Content Management System',
];

const customFeatures = [
  'Ecommerce (large inventory)',
  'Shopify CMS Integration',
  'Intermediate SEO',
  'Custom requirements',
  '1 Year Premium Support',
];

const Pricing = () => {
  return (
    <Container>
      <PriceCard
        title="Starter"
        price={300}
        features={starterFeatures}
        priceText={`+`}
      />
      <PriceCard
        title="Advanced"
        price={500}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+`}
      />
      <PriceCard
        title="Custom Quote"
        price={1000}
        features={customFeatures}
        priceText={`+`}
      />
    </Container>
  );
};

export default Pricing;
