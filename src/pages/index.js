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

export default () => {
  return (
    <Layout>
      <SEO
        title="Explore Gatsby"
        description="MERN, Gatsby and other cool stuff"
      />

      <AboutMe />

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
