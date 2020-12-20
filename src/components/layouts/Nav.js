/* eslint-disable */
import React, { useState } from 'react';

import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import Search from '../algolia/Search';
import { MobileMenu1 } from '../menus/mobileMenu1';

import Navlink from '../Links/Navlink';
import links from '../../constants/navLinks';
import DropDownMenu1 from '../Links/DropDownMenu1';
import NoStyleLink from '../Links/NoStyleLink';

const Header = styled.header`
  position: relative;
  padding: 1rem 0;
  background: ${props => props.theme.colors.lightgrey};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    padding: 3rem 0;
  }
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderSearch = styled.div`
  padding: 3px 0;
  grid-column: 1/-1;
  margin: 0 auto;
  width: 80%;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
  }
`;

const HeaderNav = styled.div`
  grid-column: 1/-1;
  margin-bottom: 1rem;
`;
const LogoLink = styled(Link)`
  padding: 0;
  margin: 0;
`;
const Logo = styled.span`
  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
  & ${LogoLink} {
    text-decoration: none !important;
    font-size: 3rem;
    line-height: 2.4rem;
  }
`;

const LogoSpan2 = styled.span``;

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const BurgerIcon = styled(FaAlignRight)`
  cursor: pointer;
  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    display: none;
  }
`;

const Tagline = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 1rem;
  }
`;

const CustomLink = styled(NoStyleLink)`
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
   
    </>
  );
};

export default Nav;
