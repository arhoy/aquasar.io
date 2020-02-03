import React, { useState } from 'react';

import { Link } from 'gatsby';

import { FaAlignRight } from 'react-icons/fa';

import styled from '@emotion/styled';

import Search from '../algolia/Search';
import { MobileMenu1 } from '../menus/mobileMenu1';

import Navlink from '../Links/Navlink';
import links from '../../constants/navLinks';
import DropDownMenu1 from '../Links/DropDownMenu1';

const Header = styled.header`
  position: relative;

  background: ${props => props.theme.colors.lightgrey};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  padding: 1rem 0;
`;

const HeaderTop = styled.div`
  grid-column: 1/-1;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const HeaderMid = styled.div`
  padding: 3px 0;
  grid-column: 1/-1;
  margin: 0 auto;
  width: 80%;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    width: 90%;
  }
`;

const HeaderBottom = styled.div`
  grid-column: 1/-1;
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

const Nav = () => {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderTop>
          <Logo>
            <LogoLink to="/">
              <i>
                <LogoSpan2>Aquasar</LogoSpan2>
              </i>
            </LogoLink>
          </Logo>

          <BurgerIcon onClick={mobileMenuHandler} />

          <MobileMenu1
            display={mobileMenuOpen.toString()}
            mobileMenuHandler={mobileMenuHandler}
          />
        </HeaderTop>

        <HeaderMid>
          <Search />
        </HeaderMid>

        <HeaderBottom>
          <Tagline> WEB DEVELOPMENT | SEO | DIGITAL ADS</Tagline>

          <NavContainer>
            {links.map(link => (
              <Navlink
                key={link.path}
                activeClassName="currentPage"
                to={link.path}
              >
                {link.text}
              </Navlink>
            ))}
            <DropDownMenu1 />
          </NavContainer>
        </HeaderBottom>
      </Header>
    </>
  );
};

export default Nav;
