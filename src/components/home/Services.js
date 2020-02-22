import React from 'react';

import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import { SectionGrey } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';
import mainServicesList from '../../constants/mainServicesList';

const Container = styled.div`
  display: flex;
  height: 100%;

  align-items: center;
`;

const CustomSection = styled(SectionGrey)`
  padding: 4rem 4rem;
  margin-bottom: 2rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const CustomTag = styled(Tag)`
  float: right;
`;

const Services = () => {
  return (
    <>
      <CustomSection>
        <H2>Services</H2>
        <p>Services Provided: </p>
        <Container>
          <TagContainer>
            <TagContainer>
              {mainServicesList.map(company => (
                <CustomTag key={company}>
                  <Fade right cascade>
                    {company}
                  </Fade>
                </CustomTag>
              ))}
            </TagContainer>
          </TagContainer>
        </Container>
      </CustomSection>
    </>
  );
};

export default Services;
