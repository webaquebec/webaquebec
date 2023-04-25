// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import {
  atRight,
  Container,
  ContentWrapper,
  SectionParagraph,
  SectionPicture,
  SectionTitle,
} from './AboutEventSection.styles';

const AboutEventSection = ({ items }) => (
  <Container faded>
    <h3 css={hideVisually}>Points forts de l&apos;événement</h3>

    <Center maxWidth='1080px' gutters='16px'>
      {items.map((item, index) => (
        <ContentWrapper key={item.id} css={index === 1 && atRight}>
          <div>
            <SectionPicture fluid={item.photoSrc} alt={item.title} />
            <SectionTitle>{item.title}</SectionTitle>
            <SectionParagraph dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        </ContentWrapper>
      ))}
    </Center>
  </Container>
);

AboutEventSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      photoSrc: PropTypes.shape({
        src: PropTypes.string,
        srcSet: PropTypes.string,
        srcSetWebp: PropTypes.string,
        aspecRatio: PropTypes.number,
        base64: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default AboutEventSection;
