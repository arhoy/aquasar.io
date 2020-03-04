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
        price={`3,000`}
        features={starterFeatures}
        priceText={`+`}
      />
      <PriceCard
        title="Advanced"
        price={`5,000`}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+`}
      />
      <PriceCard
        title="Custom Quote"
        price={`10,000`}
        features={customFeatures}
        priceText={`+`}
      />
      <CustomP>
        We create custom websites from scratch using React and Gatsby. No cookie
        cutter WP templates or WIX sites
      </CustomP>
    </Container>
  );
};

export default Pricing;
