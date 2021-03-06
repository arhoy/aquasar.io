import React from 'react';
import Layout from '../components/layouts/Layout';
import { graphql } from 'gatsby';
import SEO from '../hooks/SEO';
import Articles from '../components/articles/Articles';

import { H1 } from '../components/reusableStyles/typography/Typography';
import { Section } from '../components/reusableStyles/sections/Sections';

export const getArticles = graphql`
  query {
    blogArticles: allContentfulBlogPost {
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

const blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Alex Quasar Articles on Gatsby and Full Stack React"
        description="Please see all the articles below, articles on Full Stack React and Gatsby and more"
      />
      <Section>
        <H1>Blog Posts</H1>
        <Articles articles={data.blogArticles.nodes} />
      </Section>
    </Layout>
  );
};

export default blog;
