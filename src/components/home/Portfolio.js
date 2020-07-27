import React from 'react';
import styled from '@emotion/styled';
import { Tag } from '../reusableStyles/tags/Tag';
import { ListInline } from '../reusableStyles/lists/List';
import currentWebsites from '../../constants/currentWebsites';
import { NavlinkButton } from '../Links/NavLinkButton';
import { H2 } from '../reusableStyles/typography/Typography';
import { Margin2V } from '../reusableStyles/modular/modularStyles';
import { SectionGrey } from '../reusableStyles/sections/Sections';

const CustomSectionPortfolio = styled(SectionGrey)`
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const Portfolio = () => {
  return (
    <CustomSectionPortfolio>
      <H2>What Can I Help?</H2>
      <p>Worked with clients below on one or more of the following:</p>
      <p>Websites | SEO | Online Ads | Online Ordering</p>
      <ListInline
        target="_blank"
        rel="no opener no referrer"
        urls={currentWebsites}
      />
      <Margin2V>
        <Tag>Digital Ads</Tag>
        <Tag>Web Development</Tag>
        <Tag>SEO</Tag>
        <Tag>Online Ordering</Tag>
        <Tag>Marketing Analytics</Tag>
        <Tag>Restaurant Consulting</Tag>
      </Margin2V>

      <NavlinkButton to="/about">Learn More</NavlinkButton>
    </CustomSectionPortfolio>
  );
};
