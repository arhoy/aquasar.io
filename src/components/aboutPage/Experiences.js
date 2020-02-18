import React from 'react';

import styled from '@emotion/styled';

import Accordian from '../reusableStyles/accordian/Accordian';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 2rem;
`;

const SubContainer = styled.div``;

const TitleContainer = styled.div``;

const Title = styled.h4`
  font-weight: 500;
  font-size: 2.3rem;
  & .primaryBold {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
  }
  & .primary {
    margin-bottom: 2rem;
  }
`;

export const Experiences = () => {
  return (
    <Container>
      <SubContainer>
        <TitleContainer>
          <Title>
            <div className="primary">We don't want to deliver good.</div>
            <div className="secondary">
              We want to deliver <span className="primaryBold"> Amazing!</span>
            </div>
          </Title>
        </TitleContainer>
      </SubContainer>
      <SubContainer>
        <Accordian
          title={`Strategy`}
          text={`We want to work with you as a long term partner. We want to understand your business goals, your competitors, your pain points and identify some easy wins to get started. From here we develop a plan of action`}
        />
        <Accordian
          title={`Branding`}
          text={`A Brand is more than just a logo. A Brand is a customer experience, a journey and a feeling of associatied with your brand and identity. Here at Aquasar we want to help you build your brand online.`}
        />
        <Accordian
          title={`Experience`}
          text={`We create user experiences through blazingly fast and interactive websites. Through tailored ad copy, website optimization and split testing we are data and creative driven to deliver an amazing user experience`}
        />
        <Accordian
          title={`Customer Service`}
          text={`Delivering unparalled customer support and service. We don't just want to make you a regular website. Anyone can do that. We want to create a custom made site for you and help your brand grow online`}
        />
      </SubContainer>
    </Container>
  );
};
