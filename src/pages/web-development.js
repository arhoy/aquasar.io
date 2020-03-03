import React from 'react';

import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import { FaUserAstronaut } from 'react-icons/fa';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { H1, H2 } from '../components/reusableStyles/typography/Typography';

import { ListVertical as ListWithDescription } from '../components/reusableStyles/lists/ListWithDescription';

import { Margin2 } from '../components/reusableStyles/modular/modularStyles';
import currentlyUsing from '../constants/currentlyUsing';
import onlineResources from '../constants/onlineResources';
import StyledHero2 from '../components/heros/StyledHero2';

import {
  Section,
  Container800,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import { ServicesWebDevelopment } from '../components/services/ServicesWebDevelopment';

import { ContactBoxForm } from '../components/forms/ContactBoxForm';
import Websites from '../components/aboutPage/Websites';
import BasicFeatureSection from '../components/features/BasicFeatureSection';
import FeatureSectionIconLeft from '../components/features/FeatureSectionIconLeft';
import FeatureSectionWithFixedImage from '../components/features/FeatureSectionWithFixedImage';
import Pricing from '../components/pricing/Pricing';
import {
  textGatsby,
  textContentful,
  textNetlify,
  textReact,
} from '../content/web-development/content';
import NonStretchImage from '../components/heros/NonStretchImage';

export const query = graphql`
  query {
    seo: file(relativePath: { eq: "seo/web-development.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
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

    aboutImage4: file(relativePath: { eq: "telescope.png" }) {
      childImageSharp {
        fixed(width: 350, height: 350) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }

    webDevelopmentAds: file(
      relativePath: { eq: "web-development-vector.png" }
    ) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const CustomP = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;

const Ul1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin: 1rem 0;
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

const H2Box = styled.div`
  margin-bottom: 2rem;
`;

const StyledH2 = styled(H2)`
  text-align: center;
  font-size: 4.4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 3.4rem;
  }
`;

const WebDevelopment = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Custom Professional Web Development | Aquasar Inc"
        description="Custom and professional web development using React, Gatsby and other modern web technologies like Contentful and Shopify. We are a web development company in Edmonton Alberta specializing in websites for small businesses"
      />

      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container800>
            <StyledH1>
              We offer <span className="redbold"> CUSTOM </span> mobile
              optimized websites for your{' '}
              <span className="greenbold"> GROWING </span> online business
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <Section>
        <Container800>
          <ServicesWebDevelopment />
        </Container800>
      </Section>

      <Websites />

      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container800>
            <StyledH1>
              Blazingly Fast. We will build you a site that is faster than any
              other agency using WordPress
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <SectionGrey>
        <Container1200>
          <H2Box>
            <StyledH2>Website Pricing</StyledH2>
            <CustomP>*Prices Will Vary and Subject To Change*</CustomP>
          </H2Box>

          <Pricing />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container800>
          <FeatureSectionWithFixedImage
            heading="Current Workflow"
            subheading="List of web development tools"
            text={
              <Margin2>
                <ListWithDescription items={currentlyUsing} />
              </Margin2>
            }
            fixed={data.aboutImage2.childImageSharp.fixed}
          />
        </Container800>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSectionWithFixedImage
            heading="Why Gatsby"
            subheading="Amazing React Framework"
            text={textGatsby()}
            fixed={data.aboutImage4.childImageSharp.fixed}
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection
            heading="Why Contentful"
            text={textContentful()}
          />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection heading="Why Netlify" text={textNetlify()} />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection heading="Why React" text={textReact()} />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <FeatureSectionIconLeft
            icon={FaUserAstronaut()}
            rotate="rotate(-15deg)"
            iconSize="14rem"
            heading="Online Developer Resources"
            subheading="List of my go to learning resources for web development"
            text={
              <Ul1>
                <ListWithDescription items={onlineResources} />
              </Ul1>
            }
          />
        </Container800>
      </SectionGrey>

      <NonStretchImage
        height={'40vh'}
        alt={'Web Development Edmonton Alberta'}
        fluid={data.webDevelopmentAds.childImageSharp.fluid}
      ></NonStretchImage>

      <Section>
        <Container800>
          <ContactBoxForm title={'Leave Us A Message'} />
        </Container800>
      </Section>
    </Layout>
  );
};

export default WebDevelopment;
