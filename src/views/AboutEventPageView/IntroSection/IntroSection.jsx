// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { AboutIntro, Container } from './IntroSection.styles';
import { introStyle } from '../../../styles/global';

const IntroSection = ({ title, text, children }) => (
  <Container>
    <h2 css={hideVisually}>{title}</h2>

    <Center
      maxWidth='770px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <AboutIntro css={introStyle} dangerouslySetInnerHTML={{ __html: text }} />
    </Center>

    {children}
  </Container>
);

IntroSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
IntroSection.defaultProps = {
  children: undefined,
};

export default IntroSection;
