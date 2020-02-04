import React from 'react';

import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';
import NoStyleLink from '../Links/NoStyleLink';

const ModalBackground = styled.div`
  transition: all 0.6s ease-in;
  visibility: ${props => (props.display !== 'false' ? 'block' : 'hidden')};
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => (props.display !== 'false' ? 'black' : 'transparent')};
  opacity: 0.7;
`;

const MobileMenuContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  margin: 0;

  transition: all 0.4s ease-in;
  z-index: 11;
  background: ${props => props.theme.colors.white};
  visibility: ${props => (props.display !== 'false' ? 'block' : 'hidden')};
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  position: fixed;
  font-size: 2.2rem;
  top: 0;
  right: ${props => (props.display !== 'false' ? '0' : '-100%')};
  width: 80%;
`;

const LinkContainerUl = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const LinkWrapper = styled.li`
  padding: 1rem;
  border-bottom: 2px solid black;
`;

const CloseIcon = styled(FaTimes)`
  font-size: 3rem;
  margin-right: 4px;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    transform: rotateZ(90deg);
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.lightgrey};
  padding: 1rem 1rem;
`;

const StyledLink = styled(NoStyleLink)`
  width: 100%;
  color: ${props => props.theme.colors.black};
  padding: 0 1rem;
  background-image: linear-gradient(
    110deg,
    transparent,
    transparent 50%,
    #eee 0
  );
  transition: all 0.25s;
  background-size: 235%;
  margin: 1.5rem 0;
  text-align: right;
  &:hover {
    background-position: 100%;
    -webkit-transform: translateX(0.5rem);
    transform: translateX(0.5rem);
  }
`;

export const MobileMenu1 = ({ mobileMenuHandler, display }) => {
  return (
    <>
      <ModalBackground display={display} onClick={mobileMenuHandler} />
      <MobileMenuContainer display={display}>
        <CloseIconContainer>
          <CloseIcon onClick={mobileMenuHandler} />
        </CloseIconContainer>

        <LinkContainerUl>
          <LinkWrapper>
            {' '}
            <StyledLink to="/"> Home </StyledLink>{' '}
          </LinkWrapper>
          <LinkWrapper>
            {' '}
            <StyledLink to="/portfolio"> Portfolio </StyledLink>{' '}
          </LinkWrapper>
          <LinkWrapper>
            {' '}
            <StyledLink to="/articles"> Articles </StyledLink>{' '}
          </LinkWrapper>
          <LinkWrapper>
            {' '}
            <StyledLink to="/pricing"> Pricing </StyledLink>{' '}
          </LinkWrapper>
          <LinkWrapper>
            {' '}
            <StyledLink to="/about"> About </StyledLink>{' '}
          </LinkWrapper>
          <LinkWrapper style={{ borderBottom: 'none' }}>
            {' '}
            <StyledLink to="/contact"> Contact </StyledLink>{' '}
          </LinkWrapper>
        </LinkContainerUl>
      </MobileMenuContainer>
    </>
  );
};
