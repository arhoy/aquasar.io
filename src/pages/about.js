import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { H1 } from '../components/reusableStyles/typography/Typography';

import StyledHero2 from '../components/heros/StyledHero2';

import {
  Section,
  Container800,
} from '../components/reusableStyles/sections/Sections';

import { Services } from '../components/services/Services';

import { Experiences } from '../components/aboutPage/Experiences';

import StarterPack from '../components/aboutPage/StarterPack';
import { ContactBoxForm } from '../components/forms/ContactBoxForm';
import Websites from '../components/aboutPage/Websites';

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    aboutImage2: file(relativePath: { eq: "space.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const StyledH1 = styled(H1)`
  text-align: center;
  font-size: 3rem;
  & .redbold {
    color: ${props => props.theme.colors.red};
  }
  & .greenbold {
    color: ${props => props.theme.colors.green};
  }
`;

const About = ({ data }) => {
  const [positionJet, setPositionJet] = useState(false);
  const onChangeHandler = () => {
    setPositionJet(true);
  };
  return (
    <Layout full={true}>
      <SEO
        title="About Us | Aquasar Inc"
        description="Aquasar Inc is a web development, seo and digital ads company in Edmonton Alberta. View our services and portfolio and learn about what we have to offer you"
        pathname="about"
      />

      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container800>
            <StyledH1>What Can I Do </StyledH1>
            <StyledH1>For Your Online Business Today?</StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <Section>
        <Container800>
          <Services />
        </Container800>
      </Section>

      <Websites />

      <Section>
        <Container800>
          <Experiences />
        </Container800>
      </Section>

      <VisibilitySensor>
        {({ isVisible }) => {
          console.log(isVisible);
          if (isVisible) {
            onChangeHandler();
          }
          return <StarterPack positionJet={positionJet} />;
        }}
      </VisibilitySensor>

      <Section>
        <Container800>
          <ContactBoxForm title={'Leave Us A Message'} />
        </Container800>
      </Section>
    </Layout>
  );
};

export default About;
