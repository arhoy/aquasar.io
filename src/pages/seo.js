import React from 'react';

import styled from '@emotion/styled';

import { graphql } from 'gatsby';

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

import { ServicesSEO } from '../components/services/ServicesSEO';
import SEOPricing from '../components/pricing/SEOPricing';
import { SeoGraph } from '../components/graphs/seoGraph';

export const query = graphql`
  query {
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    seoImage: file(relativePath: { eq: "seovector.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const CustomP = styled.p`
  font-size: 1.5rem;
  text-align: center;

  margin: 0 auto;
`;

const StyledH1 = styled(H1)`
  text-align: center;
  font-size: 3rem;
  & .primaryGreen {
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

const SEOPage = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="SEO Services | Aquasar Inc"
        description="We offer SEO services for small to medium size businesses here in Edmonton Alberta. These include Google My Business Optimization, Technical SEO, Link Building, Content Writing and other online optimizations to ensure your site remains fresh, relevant and up to date for users and for Google indexing "
      />

      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container800>
            <StyledH1>
              We want to help you <span className="primaryGreen"> Grow </span>{' '}
              your site organically
            </StyledH1>
          </Container800>
        </Section>
      </StyledHero2>

      <Section>
        <Container800>
          <ServicesSEO />
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <StyledH2>GROW YOUR TRAFFIC</StyledH2>
          <CustomP>
            Grow Your Traffic organically. Make sense of your data and where
            your users are coming from
          </CustomP>
          <SeoGraph />
        </Container800>
      </SectionGrey>

      <Section>
        <Container1200>
          <H2Box>
            <StyledH2>SEO PRICING</StyledH2>
            <CustomP>
              *Prices will vary depending on custom client requirements and are
              subject to change*
            </CustomP>
          </H2Box>

          <SEOPricing />
        </Container1200>
      </Section>

      <StyledHero2 img={data.seoImage.childImageSharp.fluid}></StyledHero2>

      <Section>
        <Container800>
          <ContactBoxForm title={'Leave Us A Message'} />
        </Container800>
      </Section>
    </Layout>
  );
};

export default SEOPage;
