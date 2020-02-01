import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';

import { H1 } from '../components/reusableStyles/typography/Typography.js';
import Hero from '../components/heros/Hero.js';
import { Section } from '../components/reusableStyles/sections/Sections.js';

export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 60) {
          src
        }
      }
    }
  }
`;
const contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Aquasar Articles"
        description="Articles on Gatsby and Web Development for the freelance web developer"
        image={data.seo.childImageSharp.fluid.src}
      />
      <Section>
        <H1>Contact Page</H1>

        <SimpleNetlifyForm />
        <Hero />
      </Section>
    </Layout>
  );
};

export default contact;
