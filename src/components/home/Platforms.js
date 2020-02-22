import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import { Section } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';
import mainTechList from '../../constants/mainTechList';

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
  float: left;
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
            {mainTechList.map(t => (
              <CustomTag key={t.title}>
                <Fade left cascade>
                  <a href={t.url} target="_blank" rel="noopener noreferrer">
                    {t.title}
                  </a>
                </Fade>
              </CustomTag>
            ))}
          </TagContainer>
        </Container>
      </CustomSection>
    </>
  );
};

export default Platforms;
