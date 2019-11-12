import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import ArticleCode from '../components/articles/ArticleCode';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { H1 } from '../components/reusableStyles/typography/Typography';
import { TagContainer, Tag } from '../components/reusableStyles/tags/Tag';
import { Section } from '../components/reusableStyles/sections/Sections';

// run template query
export const query = graphql`
  query getFullArticle($slug: String!) {
    article: contentfulAlexQuasarArticles(slug: { eq: $slug }) {
      title
      description {
        description
      }
      author {
        name
      }
      publishDate(formatString: "MMM Do, Y")
      bodyRichText {
        json
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
    }
  }
`;

const AritlceHeader = styled.div`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  @media (max-width: 750px) {
    display: flex;
  }
`;

const ArticleHeaderImage = styled(Image)`
  width: 15rem;
  height: 15rem;
  margin-right: 1rem;
  justify-self: center;
  align-self: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ArticleHeaderContent = styled.div`
  padding: 1rem;
  & p {
    font-size: 1.3rem;
  }
`;

const ArticleContainer = styled.article`
  max-width: 75rem;
  margin: 0 auto;
  & li {
    margin-left: 4rem;
  }

  ul {
    list-style: disk;
  }
`;

const ArticleP = styled.p`
  padding: 1rem 0rem;
  font-size: 1.6rem;
`;

const ArticleHighlight = styled.span`
  display: inline-block;
  padding: 1px 2px;
  border-radius: 3px;
  font-size: 1.5rem;
  background: ${props => props.theme.colors.primaryTransparent};
  color: ${props => props.theme.colors.black};
`;

const BoldStyle = styled.span`
  font-weight: bold;
`;

const CodeStyle = styled.div`
display:block;
  overflow-auto;
`;

const ArticleH6 = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.red};
  background: ${props => props.theme.colors.lightRed};
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

const Bold = ({ children }) => <BoldStyle>{children}</BoldStyle>;
const Text = ({ children }) => <ArticleP>{children}</ArticleP>;

const Code = ({ children }) => <CodeStyle>{children}</CodeStyle>;
const Heading6 = ({ children }) => <ArticleH6>{children}</ArticleH6>;
const Italic = ({ children }) => (
  <ArticleHighlight>{children}</ArticleHighlight>
);

const AricleTemplate = ({ data: { article } }) => {
  const {
    title,
    description: { description },
    bodyRichText: { json },
    publishDate,
    author,
    heroImage: { fluid },
    tags,
  } = article;

  // determine which prism to render based on tags
  let language = 'sql';

  if (tags.includes('javascript') || tags.includes('mongo')) {
    language = 'javascript';
  }
  if (tags.includes('python')) {
    language = 'python';
  }

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
      [MARKS.CODE]: text => (
        <Code>
          <ArticleCode language={language} code={text} />
        </Code>
      ),
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,

      'embedded-asset-block': node => {
        const { file, title } = node.data.target.fields;
        return (
          <div>
            <img width="400" src={file['en-US'].url} alt={title} />
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { name, images, description } = node.data.target.fields;
        return (
          <div>
            <h3>{name['en-US']}</h3>
            <img
              width="400"
              src={
                images['en-US'][0].fields.file['en-US'].url ||
                images['en-US'].fields.file['en-US'].url
              }
              alt={description['en-US']}
            />
            <p> {description['en-US']}</p>
          </div>
        );
      },
    },
  };

  console.log('json is', json);

  return (
    <Layout full={true}>
      <SEO title={title} description={description} />
      <Section>
        <ArticleContainer>
          <AritlceHeader>
            <ArticleHeaderImage fluid={fluid} />

            <ArticleHeaderContent>
              <H1>{title}</H1>
              <p>{publishDate}</p>
              <p>{author ? author.name : 'Anonymous'}</p>
              <TagContainer>
                {tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
            </ArticleHeaderContent>
          </AritlceHeader>
          <main>{documentToReactComponents(json, options)}</main>
        </ArticleContainer>
      </Section>
    </Layout>
  );
};

export default AricleTemplate;
