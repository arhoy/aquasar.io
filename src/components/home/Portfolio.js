import React from 'react';
import { CustomSectionPortfolio } from './HomeStyles';
import { Tag } from '../reusableStyles/tags/Tag';
import { ListInline } from '../reusableStyles/lists/List';
import currentWebsites from '../../constants/currentWebsites';
import { NavlinkButton } from '../Links/NavLinkButton';
import { H2 } from '../reusableStyles/typography/Typography';
import { Margin2V } from '../reusableStyles/modular/modularStyles';

export const Portfolio = () => {
  return (
    <CustomSectionPortfolio>
      <H2>Web Porfolio</H2>
      <p>Select Samples</p>
      <ListInline
        target="_blank"
        rel="no opener no referrer"
        urls={currentWebsites}
      />
      <Margin2V>
        <Tag>Blazingly Fast</Tag>
        <Tag>Modern</Tag>
        <Tag>SEO Optimized</Tag>
        <Tag>Completely Customized</Tag>
        <p>Professional web development at fraction of the cost. </p>
        <p>
          Will price match <i>any</i> local web development or design agency{' '}
        </p>
      </Margin2V>

      <NavlinkButton to="/about">Learn More</NavlinkButton>
    </CustomSectionPortfolio>
  );
};
