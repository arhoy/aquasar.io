import React from 'react';
import styled from '@emotion/styled';

import { Section } from '../reusableStyles/sections/Sections';
import { H2 } from '../reusableStyles/typography/Typography';
import { NavlinkButton2 } from '../Links/NavLinkButton';
import Articles from '../articles/Articles';
import useLatestArticles from '../../hooks/useLatestArticles';

const Container = styled(Section)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${props => props.theme.colors.white};
  margin: 2rem 0;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const LatestArticles = () => {
  return (
    <Container>
      <H2>
        Lastest Articles
        <NavlinkButton2 to="/articles"> View All</NavlinkButton2>
      </H2>
      <Articles articles={useLatestArticles()} />
    </Container>
  );
};
