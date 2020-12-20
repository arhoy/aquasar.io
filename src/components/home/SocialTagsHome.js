import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

import {


  FaFacebookSquare,
} from 'react-icons/fa';
import { TagContainer, Tag } from '../reusableStyles/tags/Tag';


const Container = styled.div``;

const IconLink = styled.a`
  cursor: pointer;
  font-size: 4rem;
  margin-left: 1rem;
`;



const FBStyle = styled(FaFacebookSquare)`
  color: rgb(66, 103, 178);
`;


const Social = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: flex-start;
  margin-bottom: -1rem;
`;


const SocialTagsHome = () => {
  useEffect(() => {
    const master = new gsap.timeline({ delay: -1 });

    function socialIntro() {
      const tl = new gsap.timeline();
      tl.from('.circle', {
        duration: 3,
        x: '600',
        y: 'random(-600,600)',
        opacity: 0,
        ease: 'power3.inOut',
        stagger: '0.25',
      });
      tl.to('.circle', {
        duration: 0.9,
        borderRadius: '0',
        margin: 2,
        rotateY: 360,
        ease: 'bounce',
        stagger: '0.15',
      });
      return tl;
    }

    function tagAnimation() {
      const tl = new gsap.timeline();
      tl.from('.tag', {
        duration: 3,
        y: 200,
        opacity: 0,
        stagger: '0.4',
      });
    }

    // adding timeline functions
    master.add(socialIntro());
    master.add(tagAnimation());
  }, []);

  return (
    <Container>
      <Social>
        <IconLink
          className="circle"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/theorderguys/?ref=aquasar"
        >
          <FBStyle title="Like Page" />
        </IconLink>
  
      </Social>
  
    </Container>
  );
};

export default SocialTagsHome;
