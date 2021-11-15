// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { SectionPicture, SectionTitle } from './AboutSection.styles';

const AboutSection = ({ photoUrl, title, text }) => {
  return (
    <div>
      <SectionPicture alt='' src={photoUrl} />
      <SectionTitle>{title}</SectionTitle>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

AboutSection.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutSection;
