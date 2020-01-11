import React from 'react';
import styled from '@emotion/styled';
import useLatestBlogs from '../../hooks/useLatestBlogs';
import Articles from '../articles/Articles';
import { H2 } from '../reusableStyles/typography/Typography';
import { NavlinkButton2 } from '../Links/NavLinkButton';
import { SectionGrey } from '../reusableStyles/sections/Sections';

const CustomSectionBlogs = styled(SectionGrey)`
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const LatestBlogs = () => {
  return (
    <CustomSectionBlogs>
      <H2>
        Latest Blogs <NavlinkButton2 to="/blog"> View More</NavlinkButton2>
      </H2>
      <Articles articles={useLatestBlogs()} />
    </CustomSectionBlogs>
  );
};
