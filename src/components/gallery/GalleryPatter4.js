import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-gap: 0.5rem;
    padding: 0.5rem;
  }
`;

const Grid = styled.div`
  background: ${props => props.theme.colors.lightGreen};
  &:hover {
    background: ${props => props.theme.colors.green};
  }
`;

const Grid1 = styled(Grid)`
  grid-column: 5/ -1;
  grid-row: 1 / 3;
`;

const Grid2 = styled(Grid)`
  grid-column: 1/ 6;
  grid-row: 3 / 5;
`;

const Grid3 = styled(Grid)`
  grid-column: 4/-1;
  grid-row: 5/8;
`;

const Grid4 = styled(Grid)``;

const GalleryPattern4 = () => {
  return (
    <Container>
      <Grid1></Grid1>
      <Grid2></Grid2>
      <Grid3></Grid3>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
      <Grid4></Grid4>
    </Container>
  );
};

export default GalleryPattern4;
