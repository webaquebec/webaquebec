// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// styles
import {
  TitleWrapper,
  PostTitle,
  PostDate,
  FeaturedPictureWrapper,
  FeaturedPicture,
} from './HeroSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button/Button';

// images
import IconArrow from '../../../images/IconArrow';

const backArrow = css`
  transform: rotate3d(0, 0, 1, 180deg);
`;

const HeroSection = ({ title, publishDate, featuredPicture }) => {
  return (
    <div>
      <TitleWrapper>
        <Button outlined iconFirst renderIcon={<IconArrow css={backArrow} />}>
          Retour
        </Button>
        <Center maxWidth='640px' gutters='16px' intrinsic>
          <PostTitle>{title}</PostTitle>
          <PostDate>Publié le {publishDate}</PostDate>
        </Center>
      </TitleWrapper>
      <FeaturedPictureWrapper>
        <FeaturedPicture src={featuredPicture} alt='' />
      </FeaturedPictureWrapper>
    </div>
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
