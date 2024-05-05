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
  transform: rotate(180deg);
`;

const HeroSection = ({ title, publishDate, featuredImage }) => (
  <>
    <Center
      maxWidth='var(--max-container-width)'
      gutters='var(--container-gutter)'
      css={`
        width: calc(100% - 2 * var(--container-gutter));
      `}
    >
      <TitleWrapper>
        <BackButton
          to='/blogue/'
          tag='link'
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
      <FeaturedPicture fluid={featuredImage} alt='' role='presentation' />
    </FeaturedPictureWrapper>
  </>
);

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
  featuredImage: PropTypes.shape({}),
};

HeroSection.defaultProps = {
  title: '',
  publishDate: '',
  featuredImage: undefined,
};

export default HeroSection;
