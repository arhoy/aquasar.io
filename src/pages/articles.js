import React from 'react';
import Layout from '../components/layouts/Layout';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';

import { H1 } from '../components/reusableStyles/typography/Typography';
import {
  Container800,
  Section,
} from '../components/reusableStyles/sections/Sections';

const CustomTopSection = styled(Section)`
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.colors.white},
    ${props => props.theme.colors.white}
  );
`;

export const getArticles = graphql`
  {
    seo: file(relativePath: { eq: "seo/articles.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 60) {
          src
        }
      }
    }
    allArticles: allContentfulAlexQuasarArticles(
      sort: { fields: publishDate, order: DESC }
    ) {
      nodes {
        slug
        title
        publishDate(formatString: "MMM Do YYYY")
        author {
          name
        }
        heroImage {
          fluid {
            src
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const articles = ({ data }) => {
  return (
    <Layout full={true}>
      <SEO
        title="Aquasar Articles"
        description="Articles on Gatsby and Web Development for the freelance web developer"
        pathname="articles"
        image={data.seo.childImageSharp.fluid.src}
      />
      <CustomTopSection>
        <Container800>
          <H1>Articles</H1>
          <Articles articles={data.allArticles.nodes} />
        </Container800>
      </CustomTopSection>
    </Layout>
  );
};

export default articles;
