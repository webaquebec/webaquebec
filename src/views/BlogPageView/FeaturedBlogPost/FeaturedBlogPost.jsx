// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Switcher from '../../../components/LayoutSections/Switcher';
import Button from '../../../components/Button';
import Paper from '../../../components/Paper';

// styles
import {
  PostWrapper,
  PostContent,
  PostPicture,
  PostTitle,
  Star,
  PostDate,
  PostSummary,
} from './FeaturedBlogPost.styles';
import colors from '../../../styles/colors';

const FeaturedBlogPost = ({ post }) => {
  const {
    childImageSharp: { desktop, mobile },
  } = post.picture;

  const sources = [
    {
      ...desktop,
    },
    { ...mobile },
  ];

  return (
    <Paper
      lightColor={colors.bleu80}
      darkColor={colors.gris30}
      rounded
      css={PostWrapper}
    >
      <Switcher threshold='768px' space='2rem' limit={2}>
        <div>
          <PostPicture fluid={sources} role='presentation' alt='' />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>
              <Star color={colors.yellow80} />
              {post.date}
            </PostDate>
            <PostSummary>{post.content}</PostSummary>
            <Button to={post.to} tag='href' primary small>
              lire l&apos;article
            </Button>
          </PostContent>
        </div>
      </Switcher>
    </Paper>
  );
};

FeaturedBlogPost.propTypes = {
  /**
   * Specifies the post to be featured
   */
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    picture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        desktop: PropTypes.shape({
          aspectRatio: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          srcSetWebp: PropTypes.string.isRequired,
          srcWebp: PropTypes.string.isRequired,
        }).isRequired,
        mobile: PropTypes.shape({
          aspectRatio: PropTypes.number.isRequired,
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          srcSetWebp: PropTypes.string.isRequired,
          srcWebp: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }).isRequired,
    to: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedBlogPost;
