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
  '1 Article',
  '5 Social Posts',
  '10 Directory Submissions',
  '5 Classifieds',
  'Google My Business Optimization',
  '3 pages Technical SEO',
];

const advancedFeatures = [
  'Website Audit',
  'Keyword Research',
  '2 Articles',
  '10 Social Posts',
  '10 Directory Submissions',
  '10 Classifieds',
  'Google My Business Optimization',
  '10 pages Technical SEO',
  '5 Google My Business Posts',
  'Internal Link Building',
];

const customFeatures = [
  'Website Audit',
  'Keyword Research',
  '3 Articles',
  '20 Social Posts',
  '15 Directory Submissions',
  '15 Classifieds',
  'Google My Business Optimization',
  '20 pages Technical SEO',
  '10 Google My Business Posts',
  'Internal Link Building',
  '3 Business Profiles',
  '1 Infographic',
];

const SEOPricing = () => {
  return (
    <Container>
      <PriceCard
        title="Tier I"
        price={150}
        features={starterFeatures}
        priceText={`+`}
      />
      <PriceCard
        title="Tier II"
        price={300}
        features={advancedFeatures}
        backgroundColor="rgba(92, 52, 145,0.2)"
        topBarBackgroundColor="rgb(73, 35, 122)"
        topBarColor="rgb(240,240,240)"
        priceText={`+`}
      />
      <PriceCard
        title="Tier III"
        price={600}
        features={customFeatures}
        priceText={`+`}
      />
    </Container>
  );
};

export default SEOPricing;
