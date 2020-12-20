import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap, Bounce } from 'gsap';

import profileImage from '../../../images/logo.png';

import { ButtonSweepToRight } from '../reusableStyles/buttons/Button';

import { Section } from '../reusableStyles/sections/Sections';
import SocialTagsHome from './SocialTagsHome';
import { A } from '../reusableStyles/typography/Typography';

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

const TitleContainer = styled.div``;

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
  background: ${props => props.theme.colors.white};
  padding: 3rem;
  display: flex;
  height: max-content;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  & img {
  
  }
  h4 {
    padding: 1rem 0rem;
  }
  & p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const BlurbContainer = styled.div`
  border-left: thick double ${props => props.theme.colors.primaryDark};
  padding-left: 1rem;
`;

const CustomButton = styled(ButtonSweepToRight)`
  background: ${props => props.theme.colors.primaryLight};

  ${A} {
    color: ${props => props.theme.colors.white};
  }
`;

export const AboutMe = () => {
  useEffect(() => {
    const master = new gsap.timeline({});

    function logoBounce() {
      const tl = new gsap.timeline();
      tl.from('.logo', 3, { y: -600, ease: Bounce.easeOut, opacity: 0 });
      return tl;
    }
    function staggerText() {
      const tl = new gsap.timeline();
      tl.staggerFrom(
        '.textContainer .mainText',
        1.1,
        { y: -50, opacity: 0, ease: 'power1.inOut' },
        0.1,
      );
      return tl;
    }

    function nextButton() {
      const tl = new gsap.timeline();
      tl.from('.nextButton', 2.4, {
        y: -100,
        opacity: 0,
        ease: 'elastic.out(1,0.4)',
      });
      return tl;
    }

    function subscribeMe() {
      const tl = new gsap.timeline();
      tl.to('.subscribeMe', 1, {
        duration: 0.2,
        ease: 'bounce.out',
        y: 18,
      });
      return tl;
    }

    // adding timeline functions
    master.add(staggerText());
    master.add('logoFall');
    master.add(logoBounce());
    master.add(subscribeMe(), '-=2');
    master.add(nextButton(), '-=1.4');
  }, []);

  const [blurb, setBlurb] = useState(0);

  const blurbHandler = blurb => {
    if (blurb > 2) {
      setBlurb(0);
    } else {
      setBlurb(prev => prev + 1);
    }
  };
  return (
    <Container>
      <SubContainerOne>
        <TitleContainer>
          <Title className="textContainer">
            <span className="mainText">A</span>
            <span className="mainText">L</span>
            <span className="mainText">E</span>
            <span className="mainText">X</span>
 
            <span style={{ marginLeft: '8px' }} className="mainText" />
            <span className="mainText">H</span>
            <span className="mainText">O</span>
            <span className="mainText">Y</span>
          </Title>

          <Blurb className="blurbText">
            {blurb === 0 && (
              <BlurbContainer>
               I set up online ordering and restuarant websites using modern tech from the big third party apps but for no commmission fees
              </BlurbContainer>
            )}

            {blurb === 1 && (
              <BlurbContainer>
                I create beautiful modern looking websites for a fraction of agency prices and cost.
              </BlurbContainer>
            )}

            {blurb === 2 && (
              <BlurbContainer>
               I provide bluetooth thermal receipt printing and full support for restaurants with all their online needs
              </BlurbContainer>
            )}
             {blurb === 3 && (
              <BlurbContainer>
               Data driven marketing and online advertising to track the effectiveness of each ad impression
              </BlurbContainer>
            )}
          </Blurb>
     
        </TitleContainer>
        <ButtonSweepToRight
            className="nextButton"
            onClick={() => blurbHandler(blurb)}
          >
            NEXT
          </ButtonSweepToRight>
        <SocialTagsHome />
      </SubContainerOne>
      <SubContainerTwo>
        <SubscribeSection>
          <img className="logo" alt="The Order Guys Logo" src={profileImage} />
          <h4>Sign Up Your Restaurant</h4>
          <p> 0% Commission Online Ordering With The Order Guys  </p>
          <CustomButton className="subscribeMe">
            <A href="https://admin.theorderguys.com/register"> SIGN UP  </A>
          </CustomButton>
        </SubscribeSection>
      </SubContainerTwo>
    </Container>
  );
};
