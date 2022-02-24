// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { Container, Title, Paragraph } from './WhoWeAreSection.styles';

const WhoWeAreSection = ({ part1, part2 }) => (
  <Center maxWidth='840px' gutters='var(--container-gutter)'>
    <Container>
      <Title>qui sommes-nous?</Title>
      <Paragraph>{part1}</Paragraph>
      <Paragraph>{part2}</Paragraph>
    </Container>
  </Center>
);

WhoWeAreSection.propTypes = {
  part1: PropTypes.string,
  part2: PropTypes.string,
};

WhoWeAreSection.defaultProps = {
  part1: '',
  part2: '',
};

export default WhoWeAreSection;
