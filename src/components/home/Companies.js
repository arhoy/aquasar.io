import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

import { SectionGrey } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';
import companiesList from '../../constants/companiesList';

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

const CustomSection2 = styled(CustomSection)`
  background: ${props => props.theme.colors.white};
  border: 1rem solid ${props => props.theme.colors.primaryDark};
`;

const CustomTag = styled(Tag)``;

export const Companies = () => {
  return (
    <>
      <CustomSection>
        <H2>Hello I'm Alex</H2>
        <p>
          I'm freelance web developer and ads consultant in Edmonton, Alberta. I
          specialize in providing online solutions to Realtors and Ecommerce
          sites.
          <br /> <br />I have worked with companies large & small, digital
          agencies and clients to provide them affordable, reliable and high
          quality online solutions for their business needs
        </p>
        {/* <Container>
          <TagContainer>
            {companiesList.map(company => (
              <CustomTag key={company}>
                <Fade left cascade>
                  {company}
                </Fade>
              </CustomTag>
            ))}
          </TagContainer>
        </Container> */}
      </CustomSection>
      <CustomSection2>
        <H2>Worked For</H2>
        <p>Companies I have worked for in full-time salaried positions:</p>
        <Container>
          <TagContainer>
            <CustomTag>Finning Canada</CustomTag>
            <CustomTag>Mindable</CustomTag>
            <CustomTag>Go Auto</CustomTag>
          </TagContainer>
        </Container>
      </CustomSection2>
    </>
  );
};
