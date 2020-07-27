import React from 'react';
import styled from '@emotion/styled';
import { SectionGrey, Container800 } from '../reusableStyles/sections/Sections';
import WebsiteFeatureSection from '../features/WebsiteFeatureSection';
import currentWebsites from '../../constants/currentWebsites';
import { FaCode } from 'react-icons/fa';
import { ListInline } from '../reusableStyles/lists/List';

const Div2 = styled.div`
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const P = styled.p`
  margin: 1.5rem 0rem;
  font-family: Montserrat;
  font-size: 1.7rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
    margin: 3rem 0rem;
  }
`;

const textPorfolio = () => (
  <>
    <Div2>
      <ListInline urls={currentWebsites} />
    </Div2>
  </>
);

const Websites = () => {
  return (
    <SectionGrey>
      <Container800>
        <WebsiteFeatureSection
          icon={FaCode()}
          animate={true}
          rotate="rotate(8deg)"
          iconSize="14rem"
          heading="Clients"
          subheading="Some clients I have worked with"
          text={textPorfolio()}
        />
      </Container800>
    </SectionGrey>
  );
};

export default Websites;
