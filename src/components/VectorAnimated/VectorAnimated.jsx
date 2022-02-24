// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import LazyAnimation from '../LazyAnimation';

// styles
import { easing } from '../../styles/animation';
import VectorImg from './VectorAnimated.styles';

const VectorAnimated = ({ vector, index }) => (
  <LazyAnimation
    transition={{
      threshold: 1,
      duration: '400ms',
      delay: `${(index + 1) * 250}ms`,
      easing: easing.outCustom,
      scale: { initial: '0', final: '1' },
      rotate: {
        initial: vector.transform.rotate.initial,
        final: vector.transform.rotate.final,
      },
    }}
    css={`
      position: absolute;
      top: ${vector.position.top || ''};
      right: ${vector.position.right || ''};
      bottom: ${vector.position.bottom || ''};
      left: ${vector.position.left || ''};
      z-index: ${vector.zIndex || ''};
    `}
  >
    <VectorImg
      src={vector.src}
      role='presentation'
      alt=''
      $minWidth={vector.size.minWidth}
      $maxWidth={vector.size.maxWidth}
    />
  </LazyAnimation>
);

VectorAnimated.propTypes = {
  /**
   * Specifies how the vector itself should be rendered.
   */
  vector: PropTypes.shape({
    src: PropTypes.string.isRequired,
    size: PropTypes.shape({
      minWidth: PropTypes.number.isRequired,
      maxWidth: PropTypes.number.isRequired,
    }),
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
    }),
    transform: PropTypes.shape({
      rotate: PropTypes.shape({
        initial: PropTypes.string.isRequired,
        final: PropTypes.string.isRequired,
      }),
    }),
    zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  /**
   * Specifies the index of the vector for delay (if there is many in same view)
   */
  index: PropTypes.number,
};

VectorAnimated.defaultProps = {
  index: 0,
};

export default VectorAnimated;
