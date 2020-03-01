import React from 'react';
import styled from '@emotion/styled';

import NoStyleLink from '../Links/NoStyleLink';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0;
  list-style: none;
`;

const CustomLink = styled(NoStyleLink)`
  & h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const ProductSearchPreview = ({ hit }) => {
  if (hit && hit.__position < 9) {
    return (
      <Container>
        <CustomLink to={`/articles/${hit.slug}`}>
          <h4>{hit.title}</h4>
        </CustomLink>
      </Container>
    );
  } else {
    return null;
  }
};

export default ProductSearchPreview;
