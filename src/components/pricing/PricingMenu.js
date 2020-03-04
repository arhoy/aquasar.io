import React from 'react';
import styled from '@emotion/styled';
import { ButtonSweepToRight } from '../reusableStyles/buttons/Button';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled(ButtonSweepToRight)`
  margin-right: 4px;
`;

const PricingMenu = ({ menu, setMenu }) => {
  const menuHandler = id => {
    setMenu(prev => id);
  };
  return (
    <Container>
      <Button id="web-development" onClick={e => menuHandler(e.target.id)}>
        DEVELOPMENT
      </Button>
      <Button id="digital-ads" onClick={e => menuHandler(e.target.id)}>
        ADS
      </Button>
      <Button id="seo" onClick={e => menuHandler(e.target.id)}>
        SEO
      </Button>
    </Container>
  );
};

export default PricingMenu;
