import styled from 'styled-components';

export const Wrapper = styled.div``;

export const StyledAnimation = styled.div`
  position: relative;

  transform: translate3d(var(--tx, 0), var(--ty, 0), var(--tz, 0))
    scale3d(var(--scale, 1), var(--scale, 1), 1)
    rotate3d(0, 0, 1, var(--rotate, 0deg));

  opacity: var(--opacity);

  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    transition-delay: var(--delay, 0ms);
    transition-timing-function: var(--easing, 'easing');
    transition-duration: var(--duration, 0ms);
    transition-property: opacity, transform;
  }

  will-change: opacity, transform;
`;
