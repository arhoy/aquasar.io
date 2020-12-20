import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';

const ThankyouStyled = styled.div`
  p {
    margin-top: 1rem;
  }
  h3 {
    margin: 4rem 0;
    margin-left: 1rem;
  }
  .container {
    border-left: 2px solid red;

  }

`;

const Thankyou = () => {
  return (
    <Layout>
      <ThankyouStyled>
        <SEO title="Thank you form" description="This is the thank you page." />
        <div className = "container">
        <h3>
        Thank you for your inquiry a representative will follow up with your shortly
        </h3>
        </div>
     

        <Hero />
      </ThankyouStyled>
    </Layout>
  );
};

export default Thankyou;
