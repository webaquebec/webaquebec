// vendor
import React from 'react';
// import PropTypes from 'prop-types';

// images
import VectorGoo from '../../images/VectorGoo';

// styles
import { Lamp, Lava, Blob } from './LavaLamp.styles';

const LavaLamp = () => (
  <>
    <Lamp>
      <Lava>
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob />
        <Blob className='top' />
        <Blob className='bottom' />
      </Lava>
    </Lamp>
    <VectorGoo
      css={`
        display: none;
      `}
    />
  </>
);

// LavaLamp.propTypes = {
//   /**
//    * Specifies the primary color used for blobs
//    */
//   primaryColor: PropTypes.string,
//   /**
//    * Specifies the primary color used for blobs
//    */
//   secondaryColor: PropTypes.string,
// };

// LavaLamp.defaultProps = {
//   primaryColor: 'turquoise30',
//   secondaryColor: 'turquoise10',
// };

export default LavaLamp;
