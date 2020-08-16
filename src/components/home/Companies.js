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
          I'm online ordering and website consultant in Edmonton, Alberta. I
          specialize in providing a complete online ordering solution for
          restaurants including all online marketing and web development
          aspects.
          <br /> <br />I work with small restaurants, large companies, digital
          agencies and individual clients. My goal is to provide affordable,
          effective and reliable solutions for everyone I work with.
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
        <H2>Worked For and With</H2>
        <p>
          Local companies I have worked for directly or indirectly include:{' '}
        </p>
        <Container>
          <TagContainer>
            <CustomTag>Finning Canada</CustomTag>
            <CustomTag>Mindable</CustomTag>
            <CustomTag>Go Auto</CustomTag>
            <CustomTag>Devebyte</CustomTag>
            <CustomTag>The Order Guys</CustomTag>
            <CustomTag>Crystal Glass</CustomTag>
            <CustomTag>New Image Cosmetic</CustomTag>
            <CustomTag>Khrome Beauty Lounge</CustomTag>
            <CustomTag>Nurse Next Door</CustomTag>
            <CustomTag>Von's Steak House</CustomTag>
            <CustomTag>Rice Bowl Deluxe</CustomTag>
            <CustomTag>New Everest Mulit Bar and Kitchen</CustomTag>
            <CustomTag>Sumo Sumo Sushi</CustomTag>
            <CustomTag>Neverland Tea</CustomTag>
            <CustomTag>Contact Instruments</CustomTag>
            <CustomTag>Northlink Supply</CustomTag>
            <CustomTag>Soul 2 Sole</CustomTag>
          </TagContainer>
        </Container>
      </CustomSection2>
    </>
  );
};
