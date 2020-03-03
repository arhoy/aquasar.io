import React from 'react';
import styled from '@emotion/styled';
import { FaUserAstronaut } from 'react-icons/fa';

import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';

import {
  H2,
  Bold,
  Ul,
  Li,
} from '../components/reusableStyles/typography/Typography';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';

import StyledHero2 from '../components/heros/StyledHero2';
import {
  Section,
  Container800,
  SectionGrey,
  Container1200,
  ContainerCenterFlex,
} from '../components/reusableStyles/sections/Sections';

import FeatureSection from '../components/features/FeatureSection';
import BasicFeatureSection from '../components/features/BasicFeatureSection';
import currentWebsites from '../constants/currentWebsites';
import Porfolio from '../components/portfolio/Portfolio';
import NoStyleLink from '../components/Links/NoStyleLink';

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Poppins;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const CustomLayout = styled(Layout)`
  background-color: #ff7700;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23b58080' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23876a6a' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e04765' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e3c6cc' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%238b6a75' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%237a5b66' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%2394245d' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23a10554' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23963d7d' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239d1176' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23692069' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%239b4a9b' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const textAbout = () => (
  <>
    <P>
      <Bold>
        <i>
          This is a growing and changing list of some of the work I can provide
          for you.
        </i>
      </Bold>
    </P>
  </>
);

const textWordpress = () => (
  <>
    <P>
      If you are looking for a WordPress site that you want to manage yourself
      overtime, such as a blog site or small business site than I can help you
      get through the initial hurdles
    </P>
    <Ul>
      <Li> Domain name purchase (domain price not included) </Li>
      <Li>
        Help you find and install a WordPress theme that you like (additional
        theme costs not included)
      </Li>
      <Li> Hostings set up, to make site live </Li>
    </Ul>

    <P>
      This does not include building and managing your WordPress site once it is
      live. It only includes the initial setup of domain name, hostings and
      WordPress theme. This option also does not include hosting.
    </P>
    <P>
      I recommend this option if you need help with a WordPress site, would like
      to manage your own content and are low on budget to hire a developer
    </P>
  </>
);

const textCustomSite = () => (
  <>
    <P>
      If you are looking to hire a developer to build your next site, whether
      that is your custom blog site, a local business website or a ecommerce
      site than please visit my pricing page, and view all the advantages of
      doing so right <NoStyleLink to="/pricing"> here </NoStyleLink>
    </P>
  </>
);

const helpWithExistingSite = () => (
  <>
    <P>
      Depending on the website, ie. how it is made, I may be able to help with
      support of the site, including landing page add ons, bug fixes, or adding
      images, content or functionality. I support websites made with
    </P>
    <Ul>
      <Li>Gatsby</Li>
      <Li>WordPress</Li>
      <Li>React</Li>
    </Ul>
  </>
);
export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/portfolio.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 60) {
          src
        }
      }
    }
    aboutImage1: file(relativePath: { eq: "astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 60) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const portfolio = ({ data }) => {
  return (
    <CustomLayout full={true}>
      <SEO
        title="Website portfolio | Aquasar Inc"
        description="Website portfolio on Aquasar Inc. Get your amazing website today"
        image={data.seo.childImageSharp.fluid.src}
      />
      <StyledHero2 img={data.aboutImage1.childImageSharp.fluid}>
        <Section>
          <Container1200>
            <FeatureSection
              icon={FaUserAstronaut()}
              rotate="rotate(15deg)"
              iconSize="14rem"
              heading="Portfolio"
              subheading="Some live sites and demos"
              text={textAbout()}
            />
          </Container1200>
        </Section>
      </StyledHero2>

      <Section>
        <ContainerCenterFlex>
          {currentWebsites.map(site => (
            <Porfolio
              key={site.title}
              site={site}
              rel="noreferrer noopener"
              target="_blank"
            />
          ))}
        </ContainerCenterFlex>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection
            heading="Working with Wordpress"
            subheading="Helping you get set up starting at $50"
            text={textWordpress()}
          />
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <BasicFeatureSection
            heading="Custom Build Gatsby or React site"
            subheading="Very affordable custom built sites with developer support"
            text={textCustomSite()}
          ></BasicFeatureSection>
        </Container800>
      </Section>

      <SectionGrey>
        <Container800>
          <BasicFeatureSection
            heading="Need Web Support?"
            subheading="Offering some support for exisiting websites"
            text={helpWithExistingSite()}
          ></BasicFeatureSection>
        </Container800>
      </SectionGrey>

      <Section>
        <Container800>
          <H2>Contact Me</H2>
          <SimpleNetlifyForm />
        </Container800>
      </Section>

      <Hero />
    </CustomLayout>
  );
};

export default portfolio;
