import styled from '@emotion/styled';

const ButtonStyle1 = styled.button`
  outline: none;
  margin: 1rem 0;
  border: none;
  padding: 0.7rem 1rem;
  border: 3px solid ${props => props.theme.colors.primary};
  background: transparent;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
  }
`;

const ButtonStyle2 = styled.button`
  outline: none;
  margin: 1.2rem 0.5rem;
  border: none;
  padding: 0.7rem 1rem;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    font-weight: bold;
    background: ${props => props.theme.colors.primaryDark};
  }
  & a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`;

const ButtonSweepToRight = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-weight: bold;
  text-align: center;
  background: ${props => props.theme.colors.lightgrey};
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.primary};
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  &:hover:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export { ButtonStyle1, ButtonStyle2, ButtonSweepToRight };
