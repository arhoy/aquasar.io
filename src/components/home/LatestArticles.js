import React from 'react';

import { Section } from '../reusableStyles/sections/Sections';
import { H2 } from '../reusableStyles/typography/Typography';
import { NavlinkButton2 } from '../Links/NavLinkButton';
import Articles from '../articles/Articles';
import useLatestArticles from '../../hooks/useLatestArticles';

export const LatestArticles = () => {
  return (
    <Section>
      <H2>
        Lastest Articles
        <NavlinkButton2 to="/articles"> View All</NavlinkButton2>
      </H2>
      <Articles articles={useLatestArticles()} />
    </Section>
  );
};
