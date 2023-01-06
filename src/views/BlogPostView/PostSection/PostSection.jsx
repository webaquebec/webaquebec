// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';
import Stack from '../../../components/LayoutSections/Stack';
import Blocks from '../../../components/Blocks';

// styles
import { stackStyle, PublishDate } from './PostSection.styles';

const PostSection = ({ blocks, publishDate, author }) => (
  <Center
    maxWidth='var(--max-container-width)'
    gutters='var(--container-gutter)'
  >
    <Stack space='var(--space)' css={stackStyle}>
      <Blocks blocks={blocks} />
    </Stack>

    <PublishDate>
      <span>{`Publié le ${publishDate}`}</span>{' '}
      {author && <span>{`par ${author}`}</span>}
    </PublishDate>
  </Center>
);

PostSection.propTypes = {
  /**
   * Specifies content blocks from CMS
   */
  blocks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  /**
   * Specifies the date of publication
   */
  publishDate: PropTypes.string.isRequired,
  /**
   * Specifies the author of the post
   */
  author: PropTypes.string,
};
PostSection.defaultProps = {
  author: null,
};

export default PostSection;
