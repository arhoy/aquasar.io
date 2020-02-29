import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap, Bounce } from 'gsap';

import Fade from 'react-reveal/Fade';

import profileImage from '../../../images/logo.jpg';

import { ButtonStyle2, ButtonStyle1 } from '../reusableStyles/buttons/Button';

import { Section } from '../reusableStyles/sections/Sections';
import SocialTagsHome from './SocialTagsHome';

const Container = styled(Section)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
`;

const Blurb = styled.div`
  max-width: 450px;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.black};
`;

const SubContainerOne = styled.div`
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-bottom: 3rem;
  }
`;

const SubContainerTwo = styled.div``;

const SubscribeSection = styled.div`
  background: ${props => props.theme.colors.primaryTransparent};
  padding: 2rem;
  display: flex;
  height: max-content;
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

const BlurbContainer = styled.div`
  border-left: thick double ${props => props.theme.colors.primaryDark};
  padding-left: 1rem;
`;

const CustomButton = styled(ButtonStyle2)``;

export const AboutMe = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function logoBounce() {
      const tl = new gsap.timeline();
      tl.from('.logo', 3, { y: -600, ease: Bounce.easeOut, opacity: 0 });
      return tl;
    }

    // adding timeline functions
    master.add(logoBounce());
  }, []);

  const [blurb, setBlurb] = useState(0);

  const blurbHandler = blurb => {
    console.log(blurb);
    if (blurb > 1) {
      setBlurb(0);
    } else {
      setBlurb(prev => prev + 1);
    }
  };
  return (
    <Container>
      <SubContainerOne>
        <Title>
          Hello I'm Alex
          <Blurb>
            {blurb === 0 && (
              <Fade left>
                <BlurbContainer>
                  I am modern web developer, data analyst and digital marketing
                  expert in Edmonton, Alberta.
                </BlurbContainer>
              </Fade>
            )}

            {blurb === 1 && (
              <Fade left>
                <BlurbContainer>
                  I create websites using the latest modern technologies in
                  React and Gatsby.
                </BlurbContainer>
              </Fade>
            )}

            {blurb === 2 && (
              <Fade left>
                <BlurbContainer>
                  I write articles, develop websites, and help companies grow
                  their online business
                </BlurbContainer>
              </Fade>
            )}
            <ButtonStyle1 onClick={() => blurbHandler(blurb)}>
              Next
            </ButtonStyle1>
          </Blurb>
        </Title>
        <SocialTagsHome />
      </SubContainerOne>
      <SubContainerTwo>
        <SubscribeSection>
          <img className="logo" alt="Aquasar Logo" src={profileImage} />
          <h4>New Content Weekly</h4>
          <p> Developer tutorials and new websites </p>
          <CustomButton>
            <a href="https://aquasar.substack.com"> Subscribe Me </a>
          </CustomButton>
        </SubscribeSection>
      </SubContainerTwo>
    </Container>
  );
};
