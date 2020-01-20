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

const CustomTag = styled(Tag)``;

const Services = () => {
  return (
    <>
      <CustomSection>
        <H2>Services</H2>
        <p>Services Provided: </p>
        <Container>
          <TagContainer>
            <CustomTag>Web Development</CustomTag>
            <CustomTag>Digital Marketing</CustomTag>
            <CustomTag>Analytics</CustomTag>
            <CustomTag>Ecommerce</CustomTag>
            <CustomTag>Small Business Brand Growth</CustomTag>
            <CustomTag>Lead Generation</CustomTag>
            <CustomTag>Facebook Ads</CustomTag>
            <CustomTag>Google Ads</CustomTag>
            <CustomTag>Full Stack Development</CustomTag>
          </TagContainer>
        </Container>
      </CustomSection>
    </>
  );
};

export default Services;
