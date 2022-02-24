// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Switcher from '../../../components/LayoutSections/Switcher/Switcher';

// images
import QNLogo from '../../../images/about/quebec-numerique/QNLogo.png';

// styles
import {
  Section,
  QuebecNumeriqueLogo,
  Column,
  Title,
  Paragraph,
} from './JoinUsSection.styles';

const JoinUsSection = ({ text }) => (
  <Section>
    <Center maxWidth='840px' gutters='var(--container-gutter)'>
      <Switcher threshold='750px' space='24px'>
        <div>
          <QuebecNumeriqueLogo src={QNLogo} alt='Québec Numérique' />
          <Column>
            <Title>pour nous joindre</Title>
            <Paragraph>{text}</Paragraph>
            <Button small primary animated>
              en savoir plus
            </Button>
          </Column>
        </div>
      </Switcher>
    </Center>
  </Section>
);

JoinUsSection.propTypes = {
  text: PropTypes.string,
};

JoinUsSection.defaultProps = {
  text: '',
};

export default JoinUsSection;
