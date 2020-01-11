import React, { useEffect } from 'react';

import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaBeer } from 'react-icons/fa';
import links from '../../constants/navLinks';
import DropDownMenu1 from '../Links/DropDownMenu1';
import Navlink from '../Links/Navlink';

const Header = styled.header`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 10rem;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
  }
`;

const Logo = styled.span`
  color: ${props => props.theme.colors.primary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 1.2rem;
  }

  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
  }
  & ${Navlink} {
    text-decoration: none !important;
    font-size: 3rem;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  &.hideNav {
    display: none;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: row;
    margin-top: 5rem;
    position: absolute;
  }
  &.hideMe {
    display: none;
  }
`;

const BurgerIcon = styled(FaBeer)`
  cursor: pointer;
  font-size: 20px;
  color: ${props => props.theme.colors.primaryDark};
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 0;
  }
`;

const Nav = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return (
    <Header>
      <Logo>
        <Navlink to="/">
          <i>A</i>quasar.io
        </Navlink>
      </Logo>

      <NavContainer>
        {links.map(link => (
          <Navlink key={link.path} activeClassName="currentPage" to={link.path}>
            {link.text}
          </Navlink>
        ))}
        <DropDownMenu1 />

        <a
          href="https://ko-fi.com/aquasar"
          target="_blank"
          rel="noopener noreferrer"
          title="Buy me a Kofi-Beer!"
        >
          <BurgerIcon />
        </a>
      </NavContainer>
    </Header>
  );
};

export default Nav;
