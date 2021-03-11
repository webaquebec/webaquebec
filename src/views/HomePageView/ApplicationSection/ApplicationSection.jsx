import React from 'react';
// import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

import SectionContainer from './ApplicationSection.styles';

const SpeakersSection = () => {
  return (
    <SectionContainer>
      <h2 css={hideVisually}>Candidature</h2>
    </SectionContainer>
  );
};

// SpeakersSection.propTypes = {};

export default SpeakersSection;
