import React from 'react';
import Layout from '../components/layouts/Layout';

import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
`;

const Success = () => {
  return (
    <Layout>
      <Container>
        <h1>A rep will follow up shortly</h1>
      </Container>
    </Layout>
  );
};

export default Success;
