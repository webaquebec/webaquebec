// vendors
import styled, { keyframes } from 'styled-components';

const blobOne = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-50vh);
  }
`;

const blobTwo = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-120vh);
  }
`;

const blobThree = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-50vh);
  }
`;

const blobFour = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-100vh);
  }
`;

const blobFive = keyframes`
  0%,
  100% {
    transform: translatey(-);
  }

  50% {
     transform: translatey(-90vh);
  }
`;

const blobSix = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
     transform: translatey(-40vh);
  }
`;

const blobSeven = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
     transform: translatey(-30vh);
  }
`;

const wobble = keyframes`
  50% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }

  100% {
    border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
  }
`;

export const Lamp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: -1;

  width: 100vw;
  min-width: 100vw;
  height: 100vh;

  transform: translate(-50%, -50%);
`;

export const Lava = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0.75;

  filter: url('#goo') blur(3px);

  @media (prefers-reduced-motion: reduce) {
    && > * {
      animation: none;
    }
  }
`;

export const Blob = styled.div`
  position: absolute;

  border-radius: 50%;

  &.bottom {
    bottom: -3%;
    left: 0;

    width: 100%;
    height: 4%;

    border-radius: 50%;
  }

  &:nth-child(1) {
    bottom: -15vh;
    left: 35vw;

    width: 100px;
    height: 100px;

    animation: ${wobble} 10s ease-in-out alternate infinite,
      ${blobOne} ease-in-out 22s infinite;
  }

  &:nth-child(2) {
    right: 24vw;
    bottom: -65vh;

    width: 200px;
    height: 200px;

    animation: wobble 11s ease-in-out alternate infinite,
      ${blobTwo} ease-in-out 32s infinite;
  }

  &:nth-child(3) {
    bottom: -15vh;
    left: 54vw;

    width: 150px;
    height: 150px;

    animation: ${wobble} 12s ease-in-out alternate infinite,
      ${blobThree} ease-in-out 32s infinite;
  }

  &:nth-child(4) {
    bottom: -19vh;
    left: 20vw;

    width: 135px;
    height: 135px;

    animation: ${wobble} 13s ease-in-out alternate infinite,
      ${blobFour} ease-in-out 22s infinite;
  }

  &:nth-child(5) {
    bottom: -25vh;
    left: 34vw;

    width: 55px;
    height: 55px;

    animation: ${wobble} 14s ease-in-out alternate infinite,
      ${blobFive} ease-in-out 32s infinite;
  }

  &:nth-child(6) {
    right: 34vw;
    bottom: -25vh;

    width: 35px;
    height: 35px;

    animation: ${wobble} 15s ease-in-out alternate infinite,
      ${blobSix} ease-in-out 22s infinite;
  }

  &:nth-child(7) {
    right: 40vw;
    bottom: -85vh;

    width: 235px;
    height: 235px;

    animation: ${wobble} 16s ease-in-out alternate infinite,
      ${blobSeven} ease-in-out 32s infinite;
  }
`;
