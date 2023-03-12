// vendors
import styled, { keyframes } from 'styled-components';

// styles
import colors from '../../styles/colors';

const blobOne = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-800%);
  }
`;

const blobTwo = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-420%);
  }
`;

const blobThree = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-305%);
  }
`;

const blobFour = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
    transform: translatey(-605%);
  }
`;

const blobFive = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
     transform: translatey(-700%);
  }
`;

const blobSix = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
     transform: translatey(-700%);
  }
`;

const blobSeven = keyframes`
  0%,
  100% {
    transform: translatey(0);
  }

  50% {
     transform: translatey(-300%);
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

  filter: url('#goo');
`;

export const Blob = styled.div`
  position: absolute;

  background: ${colors.turquoise20};
  border-radius: 50%;

  &.top {
    top: -3%;
    left: 0;

    width: 100%;
    height: 4%;

    border-radius: 50%;
  }

  &.bottom {
    bottom: -3%;
    left: 0;

    width: 100%;
    height: 4%;

    border-radius: 50%;
  }

  &:nth-child(1) {
    bottom: -15%;
    left: 35%;

    width: 100px;
    height: 100px;

    animation: ${wobble} 10s ease-in-out alternate infinite,
      ${blobOne} ease-in-out 22s infinite;
  }

  &:nth-child(2) {
    right: 24%;
    bottom: -65%;

    width: 200px;
    height: 200px;

    animation: wobble 11s ease-in-out alternate infinite,
      ${blobTwo} ease-in-out 32s infinite;
  }

  &:nth-child(3) {
    bottom: -15%;
    left: 54%;

    width: 150px;
    height: 150px;

    animation: ${wobble} 12s ease-in-out alternate infinite,
      ${blobThree} ease-in-out 32s infinite;
  }

  &:nth-child(4) {
    bottom: -19%;
    left: 30%;

    width: 135px;
    height: 135px;

    animation: ${wobble} 13s ease-in-out alternate infinite,
      ${blobFour} ease-in-out 22s infinite;
  }

  &:nth-child(5) {
    bottom: -25%;
    left: 34%;

    width: 55px;
    height: 55px;

    animation: ${wobble} 14s ease-in-out alternate infinite,
      ${blobFive} ease-in-out 32s infinite;
  }

  &:nth-child(6) {
    right: 34%;
    bottom: -25%;

    width: 35px;
    height: 35px;

    animation: ${wobble} 15s ease-in-out alternate infinite,
      ${blobSix} ease-in-out 22s infinite;
  }

  &:nth-child(7) {
    right: 40%;
    bottom: -85%;

    width: 235px;
    height: 235px;

    animation: ${wobble} 16s ease-in-out alternate infinite,
      ${blobSeven} ease-in-out 32s infinite;
  }
`;
