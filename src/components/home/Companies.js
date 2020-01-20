import React from 'react';
import styled from '@emotion/styled';

import { SectionGrey } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';

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
        <H2>Worked with</H2>
        <p>
          Companies I have done online digital adversting, web development or
          consulting for:
        </p>
        <Container>
          <TagContainer>
            <CustomTag>Go Auto</CustomTag>
            <CustomTag>Crystal Glass</CustomTag>
            <CustomTag>New Image Cosmetic</CustomTag>
            <CustomTag>Devebyte Marketing</CustomTag>
            <CustomTag>Royal Dragon Vodka</CustomTag>
            <CustomTag>Food Invite</CustomTag>
            <CustomTag>Diamonds Consulting</CustomTag>
            <CustomTag>A & J Driving School</CustomTag>
            <CustomTag>Neverland Tea</CustomTag>
            <CustomTag>Porch Pirate Chest</CustomTag>
            <CustomTag>Sumo Sumo</CustomTag>
            <CustomTag>Point Green Gardening</CustomTag>
          </TagContainer>
        </Container>
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
