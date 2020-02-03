import React from 'react';
import styles from '../../scss/hover-drop-downs/hoverdropdown1.module.scss';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { menuLinks1 } from '../../constants/menuLinks';

const Navlink = styled(Link)`
  color: ${props => props.theme.colors.primary};
`;

const NetlifyID = styled.span`
  .netlify-identity-user,
  .netlify-identity-button,
  .netlify-identity-menu {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
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
    <div className={`${styles.dropdown}`}>
      <Button className={styles.dropbtn}>Explore </Button>
      <DropDownContent className={styles.dropdownContent}>
        {menuLinks1.map((link, i) => (
          <Navlink key={i} to={link.path}>
            {link.text}
          </Navlink>
        ))}

        <NetlifyID data-netlify-identity-button></NetlifyID>
      </DropDownContent>
    </div>
  );
};

export default DropDownMenu1;
