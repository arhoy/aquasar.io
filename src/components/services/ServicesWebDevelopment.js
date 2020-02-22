import React from 'react';
import styled from '@emotion/styled';
import Service from './Service';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.fourTwentyFive}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ServicesWebDevelopment = () => {
  return (
    <Container>
      <Service
        border={true}
        title={`Web Development`}
        items={[
          `Mobile Optimized`,
          `Blazingly Fast`,
          `Secure`,
          `SEO Friendly`,
          `Scalable`,
        ]}
      />
      <Service
        border={true}
        title={`Ecommerce`}
        items={[
          `Shopify`,
          `Snipcart`,
          `PayPal Button`,
          `Stripe Checkout`,
          `Amazon`,
        ]}
      />
      <Service
        border={true}
        title={`Technologies Used`}
        items={[
          `Gatsby`,
          `React`,
          `Algolia`,
          `JAM Stack`,
          `MERN Stack`,
          `Netlify`,
        ]}
      />
      <Service
        title={`Other Website Services`}
        items={[
          `WP Installs`,
          `Hosting`,
          `SSL Certificates`,
          `SSL Installs`,
          `Web Maintenance`,
          `SEO`,
          `Online Ads`,
        ]}
      />
    </Container>
  );
};
