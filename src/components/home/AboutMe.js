import React from 'react';
import styled from '@emotion/styled';
import {
  FaTwitterSquare,
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
} from 'react-icons/fa';
import profileImage from '../../../images/logo.jpg';

import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import {
  CustomSection,
  Title,
  Blurb,
  Social,
  CustomDivTopOne,
  CustomDivTopTwo,
} from './HomeStyles';
import { TagContainer, Tag } from '../reusableStyles/tags/Tag';

const IconLink = styled.a`
  cursor: pointer;
  font-size: 4rem;
  margin-left: 1rem;
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

const GitHubStyle = styled(FaGithub)`
  color: ${props => props.theme.colors.black};
`;

const CustomDiv = styled.div`
  display: flex;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-wrap: wrap;
  }
`;

const CustomDivTop = styled(CustomDiv)`
  margin: 0 auto;
`;

export const AboutMe = () => {
  return (
    <CustomSection>
      <CustomDivTop>
        <CustomDivTopOne>
          <Title>
            Hello I'm Alex
            <Blurb>
              I create websites and web apps using modern technologies like
              React and Gatsby and then write about by learnings along the way.
            </Blurb>
          </Title>

          <Social>
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/arhoy"
            >
              <GitHubStyle title="Star Repo" />
            </IconLink>

            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/_aquasar"
            >
              <TwitterStyle title="Follow Me" />
            </IconLink>
            <IconLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/Aquasar-Web-Development-111600506937750/"
            >
              <FBStyle title="Like Page" />
            </IconLink>
            <IconLink
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
        </CustomDivTopOne>
        <CustomDivTopTwo>
          <img alt="" src={profileImage} />
          <h4>New Content Weekly</h4>
          <p> Developer tutorials and new websites </p>
          <ButtonStyle2>
            <a href="https://aquasar.substack.com"> Subscribe Me </a>
          </ButtonStyle2>
        </CustomDivTopTwo>
      </CustomDivTop>
    </CustomSection>
  );
};
