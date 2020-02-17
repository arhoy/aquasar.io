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

export const Services = () => {
  return (
    <Container>
      <Service
        border={true}
        title={`Web Development`}
        items={[
          `Websites`,
          `Ecommerce`,
          `Web Apps`,
          `WordPress Installs`,
          `Hosting`,
        ]}
      />
      <Service
        border={true}
        title={`Digital Ads`}
        items={[
          `Google Ads`,
          `Facebook Ads`,
          `Instagram Ads`,
          `Lead Generation`,
          `Ad Copy`,
        ]}
      />
      <Service
        border={true}
        title={`SEO`}
        items={[
          `Traditional SEO`,
          `Technical SEO`,
          `Link Building`,
          `Content Writing`,
          `SSL Certificates`,
        ]}
      />
      <Service
        title={`Marketing Science`}
        items={[
          `Split Testing`,
          `Optimization`,
          `Data Visualization`,
          `Tableau`,
        ]}
      />
    </Container>
  );
};
