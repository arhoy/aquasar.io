import React from 'react';
import styled from '@emotion/styled';
import PriceCard from '../reusableStyles/cards/PriceCard';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const starterFeatures = [
  'Website Audit',
  'Keyword Research',
  'Weekly Blog Articles',
  'Weekly Facebook Posting',
  'High Quality Backlinks',
  '5 Classifieds',
  'Local SEO via Google My Business',
  'Weekly Calls/ Updates',
  'Monthly Reports',
];

const advancedFeatures = [
  'Website Audit',
  'Keyword Research',
  'Weekly Blog Articles',
  'Additional Content',
  'Weekly Facebook Posting',
  'High Quality Backlinks',
  'Kijiji / LinkedIn Posting',
  'Local SEO via Google My Business',
  'Internal Link Building',
  'Directory Submissions',
  '24/7 Support',
];

const customFeatures = [
  'Website Audit',
  'Keyword Research',
  'Weekly Blog Articles',
  'Additional Content',
  'Weekly Facebook Posting',
  'High Quality Backlinks',
  'Kijiji / LinkedIn Posting',
  'Local SEO via Google My Business',
  'Internal Link Building',
  'Directory Submissions',
  'Business Profiles',
  'Custom Reports',
  '24/7 Support',
];

const SEOPricing = () => {
  return (
    <Container>
      <PriceCard
        title="Tier I"
        price={300}
        features={starterFeatures}
        priceText={`+`}
      />
      <PriceCard
        title="Tier II"
        price={500}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+`}
      />
      <PriceCard
        title="Tier III"
        price={800}
        features={customFeatures}
        priceText={`+`}
      />
    </Container>
  );
};

export default SEOPricing;
