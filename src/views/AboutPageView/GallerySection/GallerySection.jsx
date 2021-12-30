// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { hideVisually } from 'polished';
import { RemoveScroll } from 'react-remove-scroll';

// components
import Center from '../../../components/LayoutSections/Center';
import CloseButton from '../../../components/CloseButton';

// styles
import {
  GalleryContent,
  GalleryTitle,
  GalleryText,
  GalleryItem,
  GalleryPicture,
  ButtonWrapper,
  GalleryOverlay,
  ActiveMedia,
} from './GallerySection.styles';

const GallerySection = ({ title, pictures, children }) => {
  let firstMarqueePictures;
  let secondMarqueePictures;
  if (pictures.length > 0) {
    if (pictures.length > 8) {
      firstMarqueePictures = pictures.slice(0, pictures.length / 2);
      secondMarqueePictures = pictures.slice(
        pictures.length / 2,
        pictures.length
      );
    } else {
      firstMarqueePictures = pictures;
    }
  }
  const [activeMedia, setActiveMedia] = useState('');
  const [activeMediaVisible, setActiveMediaVisible] = useState(false);
  const onViewMedia = (media) => {
    setActiveMedia(media);
    setActiveMediaVisible(true);
  };
  const onCloseActiveMedia = () => {
    setActiveMediaVisible(false);
  };

  return (
    <RemoveScroll enabled={activeMediaVisible}>
      <GalleryContent>
        <Center maxWidth='840px' gutters='var(--container-gutter)' intrinsic>
          <GalleryTitle>{title}</GalleryTitle>
          <GalleryText>{children}</GalleryText>
        </Center>

        {firstMarqueePictures && (
          <Marquee gradient={false} speed={25}>
            {firstMarqueePictures.map((item) => (
              <GalleryItem
                type='button'
                key={`img-${item.id}`}
                onClick={() => onViewMedia(item.src)}
              >
                <span css={hideVisually}>Voir en grand</span>
                <GalleryPicture src={item.thumbnail} alt='' />
              </GalleryItem>
            ))}
          </Marquee>
        )}

        {secondMarqueePictures && (
          <Marquee gradient={false} speed={25} direction='right'>
            {secondMarqueePictures.map((item) => (
              <GalleryItem
                type='button'
                key={`img-${item.id}`}
                onClick={() => onViewMedia(item.src)}
              >
                <span css={hideVisually}>Voir en grand</span>
                <GalleryPicture src={item.thumbnail} alt='' />
              </GalleryItem>
            ))}
          </Marquee>
        )}
      </GalleryContent>

      {activeMediaVisible && (
        <GalleryOverlay>
          <ButtonWrapper>
            <CloseButton onClose={onCloseActiveMedia} buttonId='galeryButton' />
          </ButtonWrapper>
          <ActiveMedia src={activeMedia} alt='' />
        </GalleryOverlay>
      )}
    </RemoveScroll>
  );
};

GallerySection.propTypes = {
  title: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default GallerySection;
