import React from 'react';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Insta from '../components/Insta';

import { SimpleNetlifyForm } from '../components/forms/SimpleNetlifyForm';
import Hero from '../components/heros/Hero';

import { Section } from '../components/reusableStyles/sections/Sections';
import { AboutMe } from '../components/home/AboutMe';
import { Portfolio } from '../components/home/Portfolio';
import { LatestArticles } from '../components/home/LatestArticles';
import { LatestBlogs } from '../components/home/LatestBlogs';
import { H2 } from '../components/reusableStyles/typography/Typography';
import { Companies } from '../components/home/Companies';
import Services from '../components/home/Services';
import Platforms from '../components/home/Platforms';

export default () => {
  return (
    <Layout>
      <SEO
        title="Web Development, SEO and Digital Ads in Edmonton AB | Aquasar Inc"
        description="Web Development, SEO and Digital Ads. Helping businesses with Gatsby websites, SEO and Digital Ads"
      />

      <AboutMe />

      <Companies />

      <Services />

      <Platforms />

      <Portfolio />

      <LatestArticles />

      <LatestBlogs />

      <Section>
        <H2>Contact Me</H2>
        <SimpleNetlifyForm />
        <Hero />
      </Section>
      <Section>
        <Insta />
      </Section>
    </Layout>
  );
};
