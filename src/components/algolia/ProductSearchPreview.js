import React from 'react';
import styled from '@emotion/styled';

import NoStyleLink from '../Links/NoStyleLink';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  list-style: none;
`;

const CustomLink = styled(NoStyleLink)`
  & h4 {
    font-size: 1.6rem;
  }
`;

const ProductSearchPreview = ({ hit }) => {
  console.log('HIT is', hit);
  if (hit) {
    return (
      <Container>
        <CustomLink to={`/articles/${hit.productSlug}`}>
          <h4>{hit.productName}</h4>
        </CustomLink>
      </Container>
    );
  } else {
    return null;
  }
};

export default ProductSearchPreview;
