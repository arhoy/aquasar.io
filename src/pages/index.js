import React from 'react';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Insta from '../components/Insta';

import { Section } from '../components/reusableStyles/sections/Sections';
import { AboutMe } from '../components/home/AboutMe';
import { Portfolio } from '../components/home/Portfolio';
import { LatestArticles } from '../components/home/LatestArticles';
import { LatestBlogs } from '../components/home/LatestBlogs';

import { Companies } from '../components/home/Companies';
import Services from '../components/home/Services';
import Platforms from '../components/home/Platforms';
import { ContactBoxForm } from '../components/forms/ContactBoxForm';

export default () => {
  return (
    <Layout backgroundLayer={true}>
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
        <ContactBoxForm title={'Leave Us A Message'} />
      </Section>
      <Section>
        <Insta />
      </Section>
    </Layout>
  );
};
