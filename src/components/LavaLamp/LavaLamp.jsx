// vendor
import React from 'react';
import PropTypes from 'prop-types';

// images
import VectorGoo from '../../images/VectorGoo';

// styles
import { Lamp, Lava, Blob } from './LavaLamp.styles';

const LavaLamp = ({ blobColor }) => (
  <>
    <Lamp>
      <Lava>
        {Array.from(Array(7), (e, i) => (
          <Blob
            key={i}
            css={`
              background: ${blobColor};
            `}
          />
        ))}
        <Blob
          className='top'
          css={`
            background: ${blobColor};
          `}
        />
        <Blob
          className='bottom'
          css={`
            background: ${blobColor};
          `}
        />
      </Lava>
    </Lamp>
    <VectorGoo
      css={`
        display: none;
      `}
    />
  </>
);

LavaLamp.propTypes = {
  /**
   * Specifies the color used for blobs
   */
  blobColor: PropTypes.string,
};

LavaLamp.defaultProps = {
  blobColor: '#ffb5af',
};

export default LavaLamp;
