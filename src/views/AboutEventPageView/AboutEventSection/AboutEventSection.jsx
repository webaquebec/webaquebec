// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// images
import pinkEllipse from '../../../images/textures/pink-ellipse.svg';
import aquaEllipse from '../../../images/textures/aqua-ellipse.svg';
import vectorStickerMegaphone from '../../../images/stickers/vectorStickerMegaphone.svg';
import vectorStickerSmiley from '../../../images/stickers/vectorStickerSmiley.svg';
import vectorStickerStars from '../../../images/stickers/vectorStickerStarsAndHourglass.svg';

// components
import Center from '../../../components/LayoutSections/Center';
import StickerAnimated from '../../../components/VectorAnimated';

// styles
import {
  atRight,
  Container,
  ContentWrapper,
  SectionPicture,
  SectionTitle,
  PinkDecoration,
  AquaDecoration,
} from './AboutEventSection.styles';

const stickers = [
  {
    src: vectorStickerSmiley,
    size: {
      minWidth: 58,
      maxWidth: 155,
    },
    position: {
      top: '15%',
      right: '-30px',
    },
    transform: {
      rotate: {
        initial: '12deg',
        final: '0deg',
      },
    },
    zIndex: '1',
  },
  {
    src: vectorStickerMegaphone,
    size: {
      minWidth: 85,
      maxWidth: 200,
    },
    position: {
      top: '10%',
      left: '-75px',
    },
    transform: {
      rotate: {
        initial: '-11deg',
        final: '0deg',
      },
    },
    zIndex: '1',
  },
  {
    src: vectorStickerStars,
    size: {
      minWidth: 100,
      maxWidth: 330,
    },
    position: {
      top: '10%',
      left: '95%',
    },
    transform: {
      rotate: {
        initial: '-11deg',
        final: '0deg',
      },
    },
    zIndex: '1',
  },
];

const AboutEventSection = ({ items }) => (
  <Container faded>
    <h3 css={hideVisually}>Points forts de l&apos;événement</h3>

    <Center maxWidth='1080px' gutters='16px'>
      {items.map((item, index) => (
        <div key={item.id}>
          <ContentWrapper css={index === 1 && atRight}>
            <div>
              <SectionPicture fluid={item.photoSrc} alt={item.title} />
              <SectionTitle>{item.title}</SectionTitle>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>

            <StickerAnimated vector={stickers[index]} />
          </ContentWrapper>

          {index === 0 && (
            <PinkDecoration src={pinkEllipse} alt='' role='presentation' />
          )}
          {index === 1 && (
            <AquaDecoration src={aquaEllipse} alt='' role='presentation' />
          )}
        </div>
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
