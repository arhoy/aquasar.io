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
    <P>
      We would like to partner with you to make an affordable, fast, secure and
      amazing website. Unlike most agencies web have multiple payment options
      and will work with you to create a custom solution within your budget
    </P>
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
          heading="Websites"
          subheading="View some of our sample sites"
          text={textPorfolio()}
        />
      </Container800>
    </SectionGrey>
  );
};

export default Websites;
