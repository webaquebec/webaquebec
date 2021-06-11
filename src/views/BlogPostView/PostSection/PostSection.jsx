// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { PostWrapper } from './PostSection.styles';

const PostSection = ({ content }) => {
  return <PostWrapper dangerouslySetInnerHTML={{ __html: content }} />;
};

PostSection.propTypes = {
  /**
   * Specifies the post title
   */
  content: PropTypes.string,
};

PostSection.defaultProps = {
  content: '',
};

export default PostSection;
