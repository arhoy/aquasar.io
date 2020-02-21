import React from 'react';
import styled from '@emotion/styled';
import PriceCard from '../reusableStyles/cards/PriceCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const starterFeatures = [
  'Ad Spend up to $500/month',
  'Facebook Ad Management',
  'Google Ad Management',
  'Show up in Google Search',
  'Boosted Posts and Ad Optimization',
  'Ad Copy and Ad Targeting',
  'Monthly Email Reports',
];

const advancedFeatures = [
  'Ad Spend up to $4000/month',
  'Facebook Ad Management',
  'Google Ad Management',
  'Continuous Google Ad Optimization',
  'Lead Generation Campaigns',
  'Ad Copy and Ad Targeting',
  'Monthly Reports',
  'Bi Weekly Calls to discuss Ad Strategy',
  'Content Creation and Brand Building',
];

const customFeatures = [
  'High Ad Spend',
  'Advanced Facebook Ad Management',
  'Advanced Google Ad Management',
  'Continuous Google Ad Optimization',
  'Lead Generation Campaigns',
  'Ad Copy and Ad Targeting',
  'Advanced Monthly Reports',
  'Weekly Calls to discuss Ad Strategy',
  'Content Creation and Brand Building',
  '24/7 Support or as needed',
  'Ad Split Testing and Conversion Rate Optimization',
];

const DigitalAdsPricing = () => {
  return (
    <Container>
      <PriceCard
        title="Starter"
        price={50}
        features={starterFeatures}
        priceText={`+/month`}
      />
      <PriceCard
        title="Advanced"
        price={300}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+/month`}
      />
      <PriceCard
        title="Custom Quote"
        price={`1000`}
        features={customFeatures}
        priceText={`+/month`}
      />
    </Container>
  );
};

export default DigitalAdsPricing;
