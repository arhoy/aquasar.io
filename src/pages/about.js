import React from 'react';
import styled from '@emotion/styled';
import { FaFighterJet, FaCode } from 'react-icons/fa';

import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';

import { H1, H2 } from '../components/reusableStyles/typography/Typography';
import { ListInline } from '../components/reusableStyles/lists/List';
import { ListVertical as ListWithDescription } from '../components/reusableStyles/lists/ListWithDescription';
import currentWebsites from '../constants/currentWebsites';

import dataVisuals from '../constants/data-visuals';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import StyledHero2 from '../components/heros/StyledHero2';
import {
  Section,
  Container800,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import FeatureSection from '../components/features/FeatureSection';
import { Services } from '../components/services/Services';

import { Experiences } from '../components/aboutPage/Experiences';

import StarterPackage from '../components/aboutPage/StarterPackage';
import ContactBox from '../components/contactPage/ContactBox';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const Ul1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin: 1rem 0;
  }
`;

const Div2 = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const textPorfolio = () => (
  <>
    <Div2>
      <ListInline urls={currentWebsites} />
    </Div2>
    <P>
      We would like to partner with you to make an affordable, fast, secure and
      amazing website. Unlike most agencies web have multiple payment options
      and will work with you to create a custom solution within your budget
    </P>
  </>
);

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    aboutImage2: file(relativePath: { eq: "rocket.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    aboutImage3: file(relativePath: { eq: "satelite.png" }) {
      childImageSharp {
        fixed(width: 256, height: 256) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    aboutImage4: file(relativePath: { eq: "telescope.png" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    background: file(relativePath: { eq: "svg/mountainbcg" }) {
      childImageSharp {
        fluid {
          src
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

const about = ({ data }) => {
  console.log('data visuals', dataVisuals);
  return (
    <Layout full={true}>
      <SEO
        title="About Aquasar Inc"
        description="Aquasar Inc is a web development, seo and digital ads company in Edmonton Alberta. View our services and portfolio and learn about what we have to offer you"
      />

      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container800>
            <StyledH1>
              We would <span className="redbold"> LOVE </span> to help your
              business expand and <span className="greenbold"> GROW </span>
              online
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <Section>
        <Container800>
          <Services />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <FeatureSection
            icon={FaCode()}
            rotate="rotate(8deg)"
            iconSize="14rem"
            heading="Websites"
            subheading="View some of our sample sites"
            text={textPorfolio()}
          />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <Experiences />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <FeatureSection
            icon={FaFighterJet()}
            rotate="rotate(15deg)"
            iconSize="14rem"
            heading="Popular Package Deals"
            subheading="We Want To Get You OFF to a Flying Start"
            text={<StarterPackage />}
          />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <ContactBox text={`Leave Us A Message Below`} />
          <SimpleNetlifyForm />
        </Container800>
      </Section>

      <Hero />
    </Layout>
  );
};

export default about;
