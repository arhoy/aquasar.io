import React, { useState } from 'react';
import styled from '@emotion/styled';

import { A } from '../reusableStyles/typography/Typography';

const Container = styled(A)`
  margin: 3rem;
  text-decoration: none;
  width: 30rem;
  height: 20rem;
  object-fit: cover;
  perspective: 150rem;
  position: relative;
`;

const HoverDiv = styled.div`
  display: none;
  color: ${props => props.theme.colors.white};
`;

const StyledA = styled.a`
  color: ${props => props.theme.colors.white};
`;

const ContainerSide = styled.div`
  transition: all 0.6s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
    background: ${props => props.theme.colors.primaryDark};
    h2 {
      color: ${props => props.theme.colors.white};
    }
 
    button {
      outline: none;
      border: none;
      margin-top: 1rem;
      padding: 0.75rem 1.4rem;
      border-radius: 4px;
      background: ${props => props.theme.colors.white};
      cursor: pointer;
      &:hover {
        background: ${props => props.theme.colors.lightgrey};
      }
    }
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: rotateY(15deg);
    ${HoverDiv} {
      display:block;
    }
  }
`;

const Porfolio = ({ site }) => {
  const [text, setText] = useState('View Info');
  const [showInfo, setShowInfo] = useState(false);

  const seeMore = () => {
    setText('Hide Info');
    setShowInfo(true);
  };
  return (
    <Container>
      <ContainerSide>
        {showInfo ? (
          <>
            <h2>{site.title}</h2>
            <HoverDiv>
              <p>{site.description}</p>
              <StyledA
                rel="noreferrer noopener"
                target="_blank"
                href={site.url}
              >
                {site.displayUrl}
              </StyledA>
            </HoverDiv>
          </>
        ) : (
          <>
            <h2>{site.title}</h2>
            <HoverDiv>
              <button onClick={seeMore}> {text} </button>
            </HoverDiv>
          </>
        )}
      </ContainerSide>
    </Container>
  );
};

export default Porfolio;
