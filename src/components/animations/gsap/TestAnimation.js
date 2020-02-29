import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

const Container = styled.div`
  & .circle {
    background: black;
    &.black {
      background: black;
    }
    &.white {
      background: white;
    }
    &.green {
      background: green;
    }
    &.blue {
      background: blue;
    }
  }
`;

const Square = styled.div`
  background: red;
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const TestAnimation = () => {
  let square = useRef(null);

  useEffect(() => {
    const master = new gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    function squareIntro() {
      const tl = new gsap.timeline();

      tl.to([square], {
        duration: 2,
        x: '100',
        backgroundColor: 'red',
        borderRadius: '20%',
        border: '5px solid black',
        ease: 'power4.inOut',
      });
      return tl;
    }

    function circleIntro() {
      const tl = new gsap.timeline();
      tl.from('.circle', {
        duration: 2,
        x: '1000',
        y: 'random(-400,400)',
        opacity: 0,
        ease: 'power3.inOut',
        stagger: '0.25',
      });
      tl.to('.circle', {
        duration: 0.9,
        borderRadius: '0',
        margin: 2,
        rotation: 360,
        ease: 'bounce',
        stagger: '0.15',
      });
      return tl;
    }

    // adding timeline functions
    master.add(squareIntro());

    master.add('circleIntroStart');
    master.add(circleIntro(), '-=2');

    console.log(master.duration());
  }, []);

  const clickHandler = () => {
    gsap.to([square], { duration: 2, x: 0 });
  };
  return (
    <Container>
      <Square onClick={clickHandler} ref={el => (square = el)}>
        <CircleContainer>
          <Circle className="circle white" />
          <Circle className="circle blue" />
          <Circle className="circle green" />
          <Circle className="circle black" />
        </CircleContainer>
      </Square>
    </Container>
  );
};

export default TestAnimation;
