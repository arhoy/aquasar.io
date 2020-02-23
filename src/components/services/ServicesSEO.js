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

export const ServicesSEO = () => {
  return (
    <Container>
      <Service
        border={true}
        title={`Content`}
        items={[
          `Content Writing`,
          `Articles`,
          `Blogs`,
          `Social Posts`,
          `Google My Business Posts`,
        ]}
      />
      <Service
        border={true}
        title={`Research and Optimization`}
        items={[
          `Keyword Research`,
          `Google Analytics`,
          `Website Audit`,
          `Site Recommendations`,
          `Conversion Rate Optimization`,
          `Keyword Planner`,
        ]}
      />
      <Service
        border={true}
        title={`Link Building`}
        items={[
          `Directory Submissions`,
          `Classifieds`,
          `Community Participation Links`,
          `Internal Link Building`,
        ]}
      />
      <Service
        title={`Technical SEO`}
        items={[
          `Title Tag Optimization`,
          `Description Tags`,
          `Alt Tags`,
          `Page Speed`,
          `404 Removals`,
          `SSL`,
          `Site Maps`,
        ]}
      />
    </Container>
  );
};
