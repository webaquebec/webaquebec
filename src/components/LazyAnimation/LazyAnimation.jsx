// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { css } from 'styled-components';

// components
// import LazyAnimation from '../LazyAnimation';

import { StyledAnimation, Wrapper } from './LazyAnimation.styles';

const LazyAnimation = ({
  rootMargin,
  threshold,
  transition,
  children,
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin,
    threshold,
  });

  const {
    duration,
    delay,
    easing,
    opacity,
    translateX,
    translateY,
    translateZ,
    scale,
    rotate,
  } = transition;

  const transitionStyle = css`
    --duration: ${duration};
    --delay: ${delay};
    --easing: ${easing};
  `;

  const initialStatePropertiesStyle = css`
    --tx: ${translateX && translateX.initial};
    --ty: ${translateY && translateY.initial};
    --tz: ${translateZ && translateZ.initial};
    --scale: ${scale && scale.initial};
    --rotate: ${rotate && rotate.initial};
    --opacity: ${opacity && opacity.initial};
  `;

  const finalStatePropertiesStyle = css`
    --tx: ${translateX && translateX.final};
    --ty: ${translateY && translateY.final};
    --tz: ${translateZ && translateZ.final};
    --scale: ${scale && scale.final};
    --rotate: ${rotate && rotate.final};
    --opacity: ${opacity && opacity.final};
  `;

  return (
    <Wrapper {...rest}>
      <StyledAnimation
        ref={ref}
        css={`
          ${transitionStyle};

          ${inView ? finalStatePropertiesStyle : initialStatePropertiesStyle}
        `}
      >
        {children}
      </StyledAnimation>
    </Wrapper>
  );
};

LazyAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  rootMargin: PropTypes.string,
  threshold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  transition: PropTypes.shape({
    duration: PropTypes.string,
    delay: PropTypes.string,
    easing: PropTypes.string,
    opacity: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
    translateX: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
    translateY: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
    translateZ: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
    scale: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
    rotate: PropTypes.shape({
      initial: PropTypes.string.isRequired,
      final: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

LazyAnimation.defaultProps = {
  rootMargin: undefined,
  threshold: 0,
};

export default LazyAnimation;
