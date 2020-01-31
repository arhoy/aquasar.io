import React from 'react';
import styled from '@emotion/styled';

import { Section } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';

const Container = styled.div`
  display: flex;
  height: 100%;

  align-items: center;
`;

const CustomSection = styled(Section)`
  padding: 4rem 4rem;
  margin-bottom: 2rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 1rem solid ${props => props.theme.colors.primaryDark};
`;

const CustomTag = styled(Tag)`
  float: right;
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;

const Platforms = () => {
  return (
    <>
      <CustomSection>
        <H2>Technologies</H2>
        <p>
          Working with the following techonlogies, services and libraries to
          provide the best results for clients and future customers.
        </p>
        <Container>
          <TagContainer>
            <CustomTag>
              <a
                href={`https://www.gatsbyjs.org/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://reactjs.org/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://www.netlify.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </CustomTag>

            <CustomTag>
              <a
                href={`https://www.contentful.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contentful
              </a>
            </CustomTag>

            <CustomTag>
              <a
                href={`https://www.adobe.com/ca/creativecloud.html`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Adobe Creative Cloud
              </a>
            </CustomTag>

            <CustomTag>
              <a
                href={`https://snipcart.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                SnipCart
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://expressjs.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                ExpressJS
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://shopify.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://www.mongodb.com/cloud/atlas`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mongo DB Atlas
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://crisp.chat/en/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Crisp
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://zapier.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zapier
              </a>
            </CustomTag>

            <CustomTag>
              <a
                href={`https://elements.envato.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Envato Elements
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://www.hubspot.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubspot
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://www.algolia.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Algolia
              </a>
            </CustomTag>
            <CustomTag>
              <a
                href={`https://www.mapbox.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                MapBox
              </a>
            </CustomTag>
          </TagContainer>
        </Container>
      </CustomSection>
    </>
  );
};

export default Platforms;
