import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

import {
  FaTwitterSquare,
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';

import { TagContainer, Tag } from '../reusableStyles/tags/Tag';

const Container = styled.div``;

const IconLink = styled.a`
  cursor: pointer;
  font-size: 4rem;
  margin-left: 1rem;
`;

const GitHubStyle = styled(FaGithub)`
  color: ${props => props.theme.colors.black};
`;

const TwitterStyle = styled(FaTwitterSquare)`
  color: #1da1f2;
`;

const FBStyle = styled(FaFacebookSquare)`
  color: rgb(66, 103, 178);
`;

const FaLinkedinStyled = styled(FaLinkedin)`
  color: rgb(0, 119, 181);
`;

const Social = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: flex-start;
  margin-bottom: -1rem;
`;

const SocialTagsHome = () => {
  useEffect(() => {
    const master = new gsap.timeline({ delay: 0.5 });

    function socialIntro() {
      const tl = new gsap.timeline();
      tl.from('.circle', {
        duration: 2,
        x: '1000',
        y: 'random(-400,400)',
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

    // adding timeline functions
    master.add(socialIntro());

    console.log(master.duration());
  }, []);

  return (
    <Container>
      <Social>
        <IconLink
          className="circle"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/arhoy"
        >
          <GitHubStyle title="Star Repo" />
        </IconLink>

        <IconLink
          className="circle"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_aquasar"
        >
          <TwitterStyle title="Follow Me" />
        </IconLink>
        <IconLink
          className="circle"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Aquasar-Web-Development-111600506937750/"
        >
          <FBStyle title="Like Page" />
        </IconLink>
        <IconLink
          className="circle"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aquasar/"
        >
          <FaLinkedinStyled title="Like Page" />
        </IconLink>
      </Social>
      <TagContainer>
        <Tag>Google Partner</Tag>
        <Tag>Shopify Parnter</Tag>
      </TagContainer>
    </Container>
  );
};

export default SocialTagsHome;
