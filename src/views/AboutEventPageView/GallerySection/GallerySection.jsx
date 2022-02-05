// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Marquee from 'react-fast-marquee';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import Modal from '../../../components/Modal';

// utils
import randomString from '../../../utils/math/randomString';

// styles
import {
  GalleryContainer,
  GalleryTitle,
  GalleryText,
  GalleryItem,
  GalleryPicture,
  // ButtonWrapper,
  // GalleryOverlay,
  ActiveMedia,
} from './GallerySection.styles';

const customId = randomString();

const GallerySection = ({ title, pictures, children }) => {
  const [activeMedia, setActiveMedia] = useState('');
  const [activeMediaVisible, setActiveMediaVisible] = useState(false);

  const onViewMedia = (media) => {
    setActiveMedia(media);
    setActiveMediaVisible(true);
  };

  const onCloseActiveMedia = () => {
    setActiveMediaVisible(false);
  };

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

  return (
    <>
      <GalleryContainer>
        <h3 css={hideVisually}>Galerie d&apos;images</h3>

        <div>
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
                  onClick={() => onViewMedia(item.picture)}
                >
                  <span css={hideVisually}>Voir en grand</span>

                  <GalleryPicture fluid={item.thumbnail} alt='' />
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
                  onClick={() => onViewMedia(item.picture)}
                >
                  <span css={hideVisually}>Voir en grand</span>

                  <GalleryPicture fluid={item.thumbnail} alt='' />
                </GalleryItem>
              ))}
            </Marquee>
          )}
        </div>
      </GalleryContainer>

      {activeMediaVisible && (
        <Modal
          isOpen={activeMediaVisible}
          aria={{ labelledby: customId }}
          onClose={onCloseActiveMedia}
          closeTimeoutMS={200}
          fullScreen
          noBorder
          noTransition
        >
          <ActiveMedia fluid={activeMedia} alt='' />
        </Modal>
      )}
    </>
  );
};

GallerySection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      thumbnail: PropTypes.shape({
        src: PropTypes.string,
        srcSet: PropTypes.string,
        srcSetWebp: PropTypes.string,
        aspecRatio: PropTypes.number,
        base64: PropTypes.string,
      }),
      picture: PropTypes.shape({
        src: PropTypes.string,
        srcSet: PropTypes.string,
        srcSetWebp: PropTypes.string,
        aspecRatio: PropTypes.number,
        base64: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default GallerySection;
