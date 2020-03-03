import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';

import {
  H1,
  H2,
  A,
} from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Section } from '../components/reusableStyles/sections/Sections.js';
import { ButtonStyle2 } from '../components/reusableStyles/buttons/Button';
import ContactBox from '../components/contactPage/ContactBox';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }
  }
`;

const CustomH1 = styled(H1)`
  display: inline;
  background-image: linear-gradient(
    0deg,
    ${props => props.theme.colors.primaryVeryLight} 50%,
    transparent 50%
  );
`;

const CustomH2 = styled(H2)`
  color: ${props => props.theme.colors.black};
`;

const P = styled.p`
  margin-bottom: 2rem;
`;

const Div = styled.div`
  margin: 4rem 0;
  & span {
    background-image: linear-gradient(
      0deg,
      ${props => props.theme.colors.primaryVeryLight} 50%,
      transparent 50%
    );
  }
`;

const CustomButton = styled(ButtonStyle2)``;

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact Us for your Website Development needs in Edmonton"
        description="Contact your Edmonton Professional Gatsby Web Developer, SEO and Facebook Ads"
        image={data.seo.childImageSharp.fluid.src}
      />
      <Section>
        <CustomH1>Contact Page</CustomH1>
        <P>
          We want to help grow your online business. Web Developer specializing
          in Gastby, Ecommerce, SEO and Online Advertising
        </P>

        <Div>
          <CustomH2>
            Schedule on <span>Appointment</span> with Us
          </CustomH2>
          <CustomButton>
            <A
              href="https://calendly.com/aquasar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule A Time
            </A>
          </CustomButton>
        </Div>
        <ContactBox text={`Leave Us a Message Below`} />

        <SimpleNetlifyForm />
        <Hero />
      </Section>
    </Layout>
  );
};

export default contact;
