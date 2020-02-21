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
  background: ${props => props.theme.colors.red};
  &:hover {
    background: ${props => props.theme.colors.redDark};
  }
`;

const Grid1 = styled(Grid)`
  grid-column: 1/ 2;
  grid-row: 1 / 5;
`;

const Grid2 = styled(Grid)`
  grid-column: 2 / 3;
  grid-row: 3 / 4;
`;

const Grid3 = styled(Grid)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const Grid4 = styled(Grid)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const Grid5 = styled(Grid)`
  grid-column: 3 / 4;
  grid-row: 1 / 4;
`;

const Grid6 = styled(Grid)``;

const Grid7 = styled(Grid)`
  grid-column: 2 / 4;
  grid-row: 6 / 8;
`;

const Grid8 = styled(Grid)`
  grid-column: 4 / 5;
  grid-row: 4 / 6;
`;

const Grid9 = styled(Grid)`
  grid-column: 8 / 9;
  grid-row: 5 / 6;
`;

const Grid10 = styled(Grid)`
  grid-column: 5 / 8;
  grid-row: 3 / 6;
`;

const Grid11 = styled(Grid)`
  grid-column: 4 / 9;
  grid-row: 1 / 3;
`;

const Grid12 = styled(Grid)`
  grid-column: 4 / 9;
  grid-row: 6 / 8;
`;

const Grid13 = styled(Grid)`
  grid-column: 8 / 9;
  grid-row: 3 / 5;
`;

const Grid15 = styled(Grid)`
  grid-column: 1 / 2;
  grid-row: 5 / 8;
`;

const Grid17 = styled(Grid)`
  grid-column: 2 / 3;
  grid-row: 4 / 6;
`;

const Grid18 = styled(Grid)`
  grid-column: 3 / 4;
  grid-row: 4 / 6;
`;

const Grid20 = styled(Grid)`
  grid-column: 2 / 3;
  grid-row: 4 / 6;
`;

const GalleryPattern2 = () => {
  return (
    <Container>
      <Grid1></Grid1>
      <Grid2></Grid2>
      <Grid3></Grid3>
      <Grid4></Grid4>
      <Grid5></Grid5>
      <Grid6></Grid6>
      <Grid7></Grid7>
      <Grid8></Grid8>
      <Grid9></Grid9>
      <Grid10></Grid10>
      <Grid11></Grid11>
      <Grid12></Grid12>
      <Grid13></Grid13>

      <Grid15></Grid15>

      <Grid17></Grid17>
      <Grid18></Grid18>

      <Grid20></Grid20>
    </Container>
  );
};

export default GalleryPattern2;
