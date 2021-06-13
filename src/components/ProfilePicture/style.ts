import styled from 'styled-components';

export const SVG = styled.svg`
  box-sizing: border-box;
  width: 7em;
  height: 7em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 2px solid #000000;
  border-radius: 50%;
  margin-right: 1em;
  display: inline;

  .right-eyebrow,
  .left-eyebrow {
    animation: lift-eyebrows 1.5s infinite;
  }

  @keyframes lift-eyebrows {
    0% {
      transform: rotateX(0deg);
    }
    12.5% {
      transform: rotateX(20deg);
    }
    25% {
      transform: rotateX(0deg);
    }
    37.5% {
      transform: rotateX(25deg);
    }
    50% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  .mustache,
  .dimple,
  .left-noose,
  .middle-noose,
  .right-noose,
  .right-noose-shadow,
  .middle-noose-shadow,
  .mouth-top,
  .mouth-bottom {
    animation: shake-mouth 1.5s infinite;
  }

  @keyframes shake-mouth {
    0% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-0.8deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
