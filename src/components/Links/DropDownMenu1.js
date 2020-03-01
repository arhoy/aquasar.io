import React from 'react';
import styles from '../../scss/hover-drop-downs/hoverdropdown1.module.scss';
import styled from '@emotion/styled';

import { menuLinks1 } from '../../constants/menuLinks';
import NoStyleLink from './NoStyleLink';

const Container = styled.div`
  z-index: 100;
`;

const Navlink = styled(NoStyleLink)`
  color: ${props => props.theme.colors.primary};
  font-size: inherit;
`;

const Button = styled.div`
  color: ${props => props.theme.colors.primary};
  transform: translateY(-1px);
  font-size: 1.7rem;
  text-decoration: none;
  margin-right: 1rem;
  outline: none;
  border: none;
  background: transparent;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
  &:after {
    content: '▼';
    font-size: 1.3rem;
    transform: translate(-3px, 0px);
    display: inline-block;
  }
`;

const DropDownContent = styled.div`
  background: ${props => props.theme.colors.white};
  -webkit-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
  -moz-box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
  box-shadow: 10px 10px 18px -8px rgba(158, 150, 158, 1);
`;
const DropDownMenu1 = () => {
  return (
    <Container className={`${styles.dropdown}`}>
      <Button>Explore </Button>
      <DropDownContent className={styles.dropdownContent}>
        {menuLinks1.map((link, i) => (
          <Navlink key={i} to={link.path}>
            {link.text}
          </Navlink>
        ))}
      </DropDownContent>
    </Container>
  );
};

export default DropDownMenu1;
