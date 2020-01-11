import styled from '@emotion/styled';
import { Section, SectionGrey } from '../reusableStyles/sections/Sections';

// ABOUT ME

const CustomSection = styled(Section)`
  padding-top: 0rem;
  padding-bottom: 0rem;
`;

const Title = styled.h1`
  font-size: 3.8rem;
`;

const Blurb = styled.p`
  max-width: 450px;
  padding: 2rem 0;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.black};
`;

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CustomDivTopOne = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-bottom: 3rem;
  }
`;

const CustomDivTopTwo = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  & img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-size: contain;
  }
  h4 {
    padding: 1rem 0rem;
  }
  & p {
    text-align: center;
  }
`;

// PORTFOLIO

const CustomSectionPortfolio = styled(SectionGrey)`
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export {
  CustomSection,
  CustomSectionPortfolio,
  Title,
  Blurb,
  Social,
  CustomDivTopOne,
  CustomDivTopTwo,
};
