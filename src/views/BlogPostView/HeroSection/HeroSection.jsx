// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// styles
import {
  TitleWrapper,
  BackButton,
  PostTitle,
  PostDate,
  FeaturedPictureWrapper,
  FeaturedPicture,
} from './HeroSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';

// images
import IconArrow from '../../../images/IconArrow';

const backArrow = css`
  transform: rotate3d(0, 0, 1, 180deg);
`;

const HeroSection = ({ title, publishDate, featuredPicture }) => {
  return (
    <>
      <Center maxWidth='var(--max-container-width)' gutters='16px'>
        <TitleWrapper>
          <BackButton
            outlined
            iconFirst
            renderIcon={<IconArrow css={backArrow} />}
          >
            Retour
          </BackButton>
          <Center maxWidth='640px' intrinsic>
            <PostTitle>{title}</PostTitle>
            <PostDate>Publié le {publishDate}</PostDate>
          </Center>
        </TitleWrapper>
      </Center>
      <FeaturedPictureWrapper>
        <FeaturedPicture src={featuredPicture} alt='' />
      </FeaturedPictureWrapper>
    </>
  );
};

HeroSection.propTypes = {
  /**
   * Specifies the post title
   */
  title: PropTypes.string,
  /**
   * Specifies the post publish date
   */
  publishDate: PropTypes.string,
  /**
   * Specifies the post featured picture
   */
  featuredPicture: PropTypes.string,
};

HeroSection.defaultProps = {
  title: '',
  publishDate: '',
  featuredPicture: undefined,
};

export default HeroSection;
