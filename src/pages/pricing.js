import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import styled from '@emotion/styled';
import {
  FaBolt,
  FaCrown,
  FaHome,
  FaCode,
  FaLeaf,
  FaLock,
  FaHandHoldingHeart,
} from 'react-icons/fa';

import SEO from '../hooks/SEO';

import Pricing from '../components/pricing/Pricing';
import DigitalAdsPricing from '../components/pricing/DigitalAdsPricing';
import { H2 } from '../components/reusableStyles/typography/Typography';
import FeatureSection from '../components/features/FeatureSection';
import {
  Section,
  SectionGrey,
  Container1200,
} from '../components/reusableStyles/sections/Sections';

import { Margin1V } from '../components/reusableStyles/modular/modularStyles';
import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Hero from '../components/heros/Hero';
import { DefaultPageContainer } from '../components/layouts/PageContainers';

import SEOPricing from '../components/pricing/SEOPricing';
import PricingMenu from '../components/pricing/PricingMenu';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/pricing.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
  }
`;

const StyledH2 = styled(H2)`
  text-align: center;
  padding: 2rem 0;
  font-size: 4.4rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    font-size: 3.4rem;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const CustomMargin = styled.div`
  margin: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 1rem;
  }
`;

const textSEO = () => (
  <p>
    Your site will be build on a <Bold>Gatsby framework</Bold> and will be
    server rendered and available to Google and search engines. Performance
    optimization incorporated using the PRPL pattern and advanced image
    optimization. SEO meta tags including description and title tags on each
    page.
  </p>
);

const textFast = () => (
  <p>
    Google rewards speed with improved search rankings. Your site is guaranteed
    to be
    <Bold> faster </Bold>
    than any agency developing in Wordpress, Shopify, Drupal or other monolithic
    system. Using a modern approach to web development with best practices and
    leveraging the latest technologies like React, Gatsby and GraphQL. Your site
    is built for the future in mind
  </p>
);

const textHosting = () => (
  <p>
    Unlike many agencies, we offer affordable hostings with all of our sites.
    Starting at <Bold> $10/month </Bold> for non-ecommerce sites and
    <Bold> $20/month </Bold>
    for Shopify ecommerce sites.
  </p>
);

const textCustomization = () => (
  <p>
    100% customizable, custom coded with no bloated unnecessary code or plugins
    that slow your site down. Designed in mind to suit <Italic> your </Italic>
    brand. I will work with you to create the site you want.
  </p>
);

const textGrowth = () => (
  <p>
    After your beautiful new website is done, the journey for your online
    business has just started. I want to be there every step of the way to help
    your business grow and succeed in the competitive landscape. We can provide
    short term marketing and sustained long term growth through SEO, Facebook
    Ads, Google Search Ads and consulting.
  </p>
);

const textSSL = () => (
  <p>
    All of our sites are SSL certified by default. SSL creates a secure
    connection and builds a foundation of trust for your users. SSL stands for
    "Secure Sockets Layer" and creates an encrypted connection to ensure your
    user data is kept safe.
  </p>
);

const textSupport = () => (
  <>
    <h4>Standard Support</h4>
    <p>
      Support for all of our websites including minor website changes and up to
      2 standard pages free for any additional content you want to add afterward
    </p>
    <Margin1V />
    <h4>Premium Support</h4>
    <p>
      Priority response times to changes on websites and three additional pages
      or templates. Premium support for $60.
    </p>
  </>
);

const PricingPage = ({ data }) => {
  const [menu, setMenu] = useState('web-development');

  return (
    <Layout full={true}>
      <SEO
        title="Pricing Page | Aquasar Inc"
        description="View our Pricing Page for Websites, SEO and Digital Ads. Our pricing is estimates and not final quotes. Pricing will be determined based on your business requirements and will discuss the best service and pricing for your business requirments"
        pathname="pricing"
        image={data.seo.childImageSharp.fluid.src}
      />

      <Section style={{ paddingTop: '4rem' }}>
        <Container1200>
          <PricingMenu menu={menu} setMenu={setMenu} />
          {menu === 'web-development' && (
            <>
              <StyledH2>WEB DEVELOPMENT</StyledH2>
              <Pricing />
            </>
          )}
          {menu === 'digital-ads' && (
            <>
              <StyledH2>DIGITAL ADS</StyledH2>
              <DigitalAdsPricing />
            </>
          )}
          {menu === 'seo' && (
            <>
              <StyledH2>SEO</StyledH2>
              <SEOPricing />
            </>
          )}
        </Container1200>
      </Section>

      <SectionGrey>
        <StyledH2>The Aquasar Advantage</StyledH2>
        <Container1200>
          <FeatureSection
            heading="SEO Optimized"
            subheading="Built with SEO as a priority"
            text={textSEO()}
            icon={FaCrown()}
            rotate="rotate(15deg)"
            iconSize="10rem"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container1200>
          <FeatureSection
            heading="Hosting"
            subheading="Affordable Hosting"
            text={textHosting()}
            icon={FaHome()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Blazingly Fast"
            subheading="Google rewards faster sites"
            text={textFast()}
            icon={FaBolt()}
            rotate="rotate(20deg)"
          />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <FeatureSection
            heading="Endless Customization"
            subheading="Completely customized"
            text={textCustomization()}
            icon={FaCode()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="Grow Your Online Presence"
            subheading="We want to help you businesss grow"
            text={textGrowth()}
            icon={FaLeaf()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <Container1200>
          <FeatureSection
            heading="SSL Certificate"
            subheading="Make your site trusted"
            text={textSSL()}
            icon={FaLock()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </Section>

      <SectionGrey>
        <Container1200>
          <FeatureSection
            heading="6 months support free"
            subheading="Never feel abandoned after a project"
            text={textSupport()}
            icon={FaHandHoldingHeart()}
            rotate="rotate(0deg)"
          />
        </Container1200>
      </SectionGrey>

      <Section>
        <DefaultPageContainer>
          <Container1200>
            <CustomMargin>
              <H2>Contact Me</H2>
              <SimpleNetlifyForm />
            </CustomMargin>
          </Container1200>
        </DefaultPageContainer>
      </Section>

      <SectionGrey>
        <Container1200>
          <Hero />
        </Container1200>
      </SectionGrey>
    </Layout>
  );
};

export default PricingPage;
