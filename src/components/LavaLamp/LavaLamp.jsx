// vendor
import React from 'react';
import PropTypes from 'prop-types';
import { isChrome, isEdge } from 'react-device-detect';

// images
import VectorGoo from '../../images/VectorGoo';

// styles
import { Lamp, Lava, Blob } from './LavaLamp.styles';
import colors from '../../styles/colors';

const optionsByLocation = {
  home: 'cherry',
  programmation: 'apricot',
  blogue: 'apricot',
  faq: 'mauve',
  billetterie: 'cherry',
  partenaires: 'mauve',
  'a-propos': 'apricot',
  waqademie: 'cherry',
};

const LavaLamp = ({ pathname }) => {
  const getOptionsByLocation = () => {
    if (pathname === undefined || pathname === '/')
      return optionsByLocation.home;

    return optionsByLocation[pathname];
  };

  const current = getOptionsByLocation() || optionsByLocation.home;

  return (
    <Lamp>
      <Lava $hasGoo={isChrome || isEdge}>
        {Array.from(Array(7), (e, i) => (
          <Blob
            key={i}
            css={`
              background: ${colors[current]};
            `}
          />
        ))}
        <Blob
          className='bottom'
          css={`
            background: ${colors[current]};
          `}
        />
      </Lava>

      <VectorGoo
        css={`
          display: none;
        `}
      />
    </Lamp>
  );
};

LavaLamp.propTypes = {
  /**
   * Specifies the pathname of the page
   */
  pathname: PropTypes.string,
};

LavaLamp.defaultProps = {
  pathname: undefined,
};

export default LavaLamp;
