// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import LazyAnimation from '../LazyAnimation';

// styles
import { easing } from '../../styles/animation';
import StickerImg from './Sticker.styles';

const Sticker = ({ sticker, index }) => (
  <LazyAnimation
    transition={{
      threshold: 1,
      duration: '400ms',
      delay: `${(index + 1) * 250}ms`,
      easing: easing.outCustom,
      scale: { initial: '0', final: '1' },
      rotate: {
        initial: sticker.transform.rotate.initial,
        final: sticker.transform.rotate.final,
      },
    }}
    css={`
      position: absolute;
      top: ${sticker.position.top || ''};
      right: ${sticker.position.right || ''};
      bottom: ${sticker.position.bottom || ''};
      left: ${sticker.position.left || ''};
      z-index: ${sticker.zIndex || ''};
    `}
  >
    <StickerImg
      src={sticker.src}
      role='presentation'
      alt=''
      $minWidth={sticker.size.minWidth}
      $maxWidth={sticker.size.maxWidth}
    />
  </LazyAnimation>
);

Sticker.propTypes = {
  /**
   * Specifies how the button itself should be rendered.
   */
  sticker: PropTypes.shape({
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
   * Specifies the index of the sticker for delay (if there is many in same view)
   */
  index: PropTypes.number,
};

Sticker.defaultProps = {
  index: 0,
};

export default Sticker;
