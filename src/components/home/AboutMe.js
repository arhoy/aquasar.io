import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap, Bounce } from 'gsap';

import profileImage from '../../../images/logo.jpg';

import { ButtonSweepToRight } from '../reusableStyles/buttons/Button';

import { Section } from '../reusableStyles/sections/Sections';
import SocialTagsHome from './SocialTagsHome';
import { A } from '../reusableStyles/typography/Typography';

const Container = styled(Section)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

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
  background: ${props => props.theme.colors.lightgrey};
  padding: 3rem;
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
    if (blurb > 1) {
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
            <span className="mainText">Q</span>
            <span className="mainText">U</span>
            <span className="mainText">A</span>
            <span className="mainText">S</span>
            <span className="mainText">A</span>
            <span className="mainText">R</span>
            <span style={{ marginLeft: '8px' }} className="mainText" />
            <span className="mainText">I</span>
            <span className="mainText">N</span>
            <span className="mainText">C</span>
          </Title>

          <Blurb className="blurbText">
            {blurb === 0 && (
              <BlurbContainer>
                Custom web development, digital marketing and SEO in Edmonton,
                Alberta.
              </BlurbContainer>
            )}

            {blurb === 1 && (
              <BlurbContainer>
                I create websites using the latest modern technologies in React
                and Gatsby.
              </BlurbContainer>
            )}

            {blurb === 2 && (
              <BlurbContainer>
                Through digital ads and SEO we strive to help companies grow
                their online business
              </BlurbContainer>
            )}
          </Blurb>
          <ButtonSweepToRight
            className="nextButton"
            onClick={() => blurbHandler(blurb)}
          >
            NEXT
          </ButtonSweepToRight>
        </TitleContainer>
        <SocialTagsHome />
      </SubContainerOne>
      <SubContainerTwo>
        <SubscribeSection>
          <img className="logo" alt="Aquasar Logo" src={profileImage} />
          <h4>New Content Weekly</h4>
          <p> Developer tutorials and new websites </p>
          <CustomButton className="subscribeMe">
            <A href="https://aquasar.substack.com"> SIGN UP </A>
          </CustomButton>
        </SubscribeSection>
      </SubContainerTwo>
    </Container>
  );
};
