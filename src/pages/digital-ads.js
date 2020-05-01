import React from 'react';

import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import { FaUserAstronaut } from 'react-icons/fa';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { H1, H2 } from '../components/reusableStyles/typography/Typography';

import StyledHero2 from '../components/heros/StyledHero2';

import {
  Section,
  Container800,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import { ContactBoxForm } from '../components/forms/ContactBoxForm';

import FeatureSectionIconLeft from '../components/features/FeatureSectionIconLeft';

import { ServicesDigitalAds } from '../components/services/ServicesDigitalAds';
import DigitalAdsPricing from '../components/pricing/DigitalAdsPricing';
import { Companies } from '../components/home/Companies';
import NonStretchImage from '../components/heros/NonStretchImage';

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    digitalAds: file(relativePath: { eq: "digital-ads-vector.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
          presentationWidth
        }
      }
    }
    seoImage: file(relativePath: { eq: "seo/digital-ads.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
          presentationWidth
        }
      }
    }
  }
`;

const CustomP = styled.p`
  font-size: 1.3rem;
  text-align: center;
`;

const StyledH1 = styled(H1)`
  text-align: center;
  font-size: 3rem;
  & .primaryDark {
    color: ${props => props.theme.colors.primaryDark};
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

const DigitalAds = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Digital Ad Services | Aquasar Inc"
        description="We offer digital ad services for small to medium size businesses here in Edmonton Alberta. We are experts in Facebook Ads, Google Ads, Instagram Ads, Split Testing, Conversion Rate Optimization. We want to help grow and build your online business presence "
        pathname="digital-ads"
        image={data.seoImage.childImageSharp.fluid.src}
      />

      <StyledHero2
        alt={'Grow your business through digital Ads in Edmonton AB'}
        img={data.aboutImage1.childImageSharp.fluid}
      >
        <Section>
          <Container800>
            <StyledH1>
              Through <span className="primaryDark"> Digital Ads </span> we will
              help you grow your online presence
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <Section>
        <Container800>
          <ServicesDigitalAds />
        </Container800>
      </Section>

      <StyledHero2
        alt={`As a digital Agency we let the results speak for themselves`}
        img={data.aboutImage1.childImageSharp.fluid}
      >
        <Section>
          <Container800>
            <StyledH1>
              We let the results speak for themselves. Reduce your wasted ad
              spend, and increase your marketing effectiveness.
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <SectionGrey>
        <Container1200>
          <H2Box>
            <StyledH2>Ads Pricing</StyledH2>
            <CustomP>
              *Prices will vary depending on custom client requirements and are
              subject to change*
            </CustomP>
          </H2Box>

          <DigitalAdsPricing />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container800>
          <Companies />
        </Container800>
      </Section>

      <NonStretchImage
        height={'40vh'}
        alt={'Digital Marketing Edmonton Alberta'}
        fluid={data.digitalAds.childImageSharp.fluid}
      ></NonStretchImage>

      <Section>
        <Container800>
          <FeatureSectionIconLeft
            icon={FaUserAstronaut()}
            rotate="rotate(-15deg)"
            iconSize="14rem"
            heading="Google Ad Certified"
            subheading="Google Ads Certified through the Google Ad Certified Program"
            text={
              'We have managed several million dollars in ad spend over the years for various companies. We want to help you manage ad spend effectively and efficiently through our data driven and customized approach'
            }
          />
        </Container800>
      </Section>

      <Section>
        <Container800>
          <ContactBoxForm title={'Leave Us A Message'} />
        </Container800>
      </Section>
    </Layout>
  );
};

export default DigitalAds;
