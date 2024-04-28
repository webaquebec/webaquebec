// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Switcher from '../../../components/LayoutSections/Switcher';
import Button from '../../../components/Button';
import Paper from '../../../components/Paper';

// styles
import {
  postWrapperStyle,
  Content,
  Picture,
  Title,
  Star,
  Date,
  Excerpt,
} from './FeaturedBlogPost.styles';
import colors from '../../../styles/colors';

const FeaturedBlogPost = ({ post }) => {
  const { pictures, title, date, excerpt, to } = post;

  const picture = pictures?.featuredLarge;

  return (
    <Paper
      lightColor={colors.blueberry10}
      darkColor={colors.peach}
      rounded
      css={postWrapperStyle}
    >
      <Switcher
        threshold='768px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <div>
          <Picture fluid={picture} alt='' role='presentation' />

          <Content>
            <Title>{title}</Title>

            <Date>
              <Star color={colors.yellow80} />
              {date}
            </Date>

            <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />

            <Button to={to} tag='link' inverted small>
              lire l&apos;article
            </Button>
          </Content>
        </div>
      </Switcher>
    </Paper>
  );
};

FeaturedBlogPost.propTypes = {
  /**
   * Specifies the featured post
   */
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    pictures: PropTypes.shape({
      featuredLarge: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        srcSetWebp: PropTypes.string.isRequired,
        srcWebp: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedBlogPost;
