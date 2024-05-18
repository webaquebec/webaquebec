import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// components
import Center from '../../components/LayoutSections/Center';
import Button from '../../components/Button/Button';

// views
import HeroSection from '../../views/BlogPostView/HeroSection';
import ReadAlsoSection from '../../views/BlogPostView/ReadAlsoSection';

// images
import IconArrow from '../../images/IconArrow';
import SEO from '../../components/SEO';
import PostSection from '../../views/BlogPostView/PostSection/PostSection';
import Stack from '../../components/LayoutSections/Stack';

// styles
import { backArrowStyle, spaceStyle, Container } from './BlogPost.styles';

const BlogPost = ({ data }) => {
  const {
    post: {
      title,
      date,
      blocks,
      author: {
        node: { firstName, lastName, name },
      },
      featuredImage: image,
      seo,
    },
    featuredPosts: { edges: featuredPosts },
  } = data;

  const author = firstName && lastName ? `${firstName} ${lastName}` : name;
  const featuredImage = image?.node?.localFile?.childImageSharp?.fluid;

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.metaDesc}
        image={featuredImage?.src}
      />

      <Container forwardedAs='div' faded padded>
        <Stack space='var(--space)' css={spaceStyle}>
          <HeroSection
            title={title}
            publishDate={date}
            featuredImage={featuredImage}
          />

          <PostSection blocks={blocks} publishDate={date} author={author} />

          <Center intrinsic>
            <Button
              to='/blogue/'
              tag='link'
              outlined
              iconFirst
              renderIcon={<IconArrow css={backArrowStyle} />}
            >
              Retour au blogue
            </Button>
          </Center>

          {featuredPosts && featuredPosts.length > 0 && (
            <ReadAlsoSection featuredPosts={featuredPosts} />
          )}
        </Stack>
      </Container>
    </>
  );
};

export default BlogPost;

BlogPost.propTypes = {
  data: PropTypes.shape(
    PropTypes.shape({
      post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        blocks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        author: PropTypes.shape({
          node: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            name: PropTypes.string,
          }),
        }),
        featuredImage: PropTypes.shape({
          node: PropTypes.shape({
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                  srcSet: PropTypes.string.isRequired,
                  srcWebp: PropTypes.string.isRequired,
                  srcSetWebp: PropTypes.string.isRequired,
                  base64: PropTypes.string.isRequired,
                  aspectRatio: PropTypes.string.isRequired,
                  sizes: PropTypes.string.isRequired,
                }).isRequired,
              }),
            }),
          }),
        }),
        seo: PropTypes.shape({
          title: PropTypes.string,
          metaDesc: PropTypes.string,
        }),
      }).isRequired,
      featuredPosts: PropTypes.shape({
        edges: PropTypes.arrayOf({}),
      }),
    })
  ).isRequired,
};

export const blogPostQuery = graphql`
  query BlogPostById($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      date(formatString: "D MMMM YYYY", locale: "fr-CA")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 998, maxHeight: 531, quality: 99) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      blocks {
        ...WpBlockContent
      }
      author {
        node {
          firstName
          lastName
          name
        }
      }
      seo {
        title
        metaDesc
      }
    }
    featuredPosts: allWpPost(
      filter: { id: { nin: [$id] } }
      sort: { date: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "D MMMM YYYY", locale: "fr-CA")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  featuredSmall: fluid(
                    maxWidth: 695
                    maxHeight: 370
                    quality: 100
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
