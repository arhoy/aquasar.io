import React from 'react';

import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';

import { Section } from '../components/reusableStyles/sections/Sections';
import { AboutMe } from '../components/home/AboutMe';


import { Companies } from '../components/home/Companies';
import Services from '../components/home/Services';

import { ContactBoxForm } from '../components/forms/ContactBoxForm';

export default () => {
  return (
    <Layout backgroundLayer={true}>
      <SEO
        title="Web Development, SEO and Digital Ads in Edmonton AB | Aquasar Inc"
        description="Aquasar Inc specializes in Web Development, SEO and Digital Ads. Helping customers with their online business, ecommerce websites, SEO and Digital Ads. Delivering exceptional work and affordable prices. Check out our latest portfolios, services, articles and blogs. We want to help you succeed and grow your website and business online"
      />

      <AboutMe />

      <Companies />

      <Services />


      <Section>
        <ContactBoxForm title={'More Orders, Phone Calls and Leads'} />
      </Section>
    </Layout>
  );
};
