// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// images
import VectorStar from '../images/VectorStar';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import CardGrid from '../components/CardGrid';
import Card from '../components/CardGrid/Card';

// views
import FeaturedBlogPost from '../views/BlogPageView/FeaturedBlogPost';
import breakpointsRange from '../utils/breakpointsRange';
import breakpoints from '../styles/breakpoints';

// styles
import { h1AltStyle } from '../styles/global';

const PageTitle = styled.h1`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [80, 110], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [80, 110], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const TextureWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'left', sizes: [0, 400], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const Star = styled(VectorStar)`
  margin-right: 8px;

  ${breakpointsRange(
    [
      { prop: 'width', sizes: [16, 16], bases: [16, 20] },
      { prop: 'height', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const BlogPage = ({ data }) => {
  const {
    allWpPost: { edges = [] },
  } = data;

  const blogArchives = edges.map(({ node }) => {
    const pictures = node.featuredImage?.node?.localFile?.childImageSharp;

    return {
      ...node,
      pictures,
      to: `/blogue/${node.slug}`,
    };
  });

  return (
    <>
      <SEO
        title='Blogue'
        description='Tout ce que tu dois savoir sur le WAQ22.'
      />

      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
        intrinsic
      >
        <PageTitle css={h1AltStyle}>blogue</PageTitle>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
      >
        <FeaturedBlogPost post={blogArchives[0]} />
      </Center>

      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
      >
        <CardGrid>
          {blogArchives.map((item) => {
            const picture = {
              ...item.pictures?.featuredSmall,
              sizes: `
                (min-width: 576px) ${(695 / 734) * 100}vw,
                (min-width: 734px) ${(516 / 1138) * 100}vw,
                (min-width: 1138px) ${(378 / 1280) * 100}vw,
                (min-width: 1280px) 378px,
                ${(538 / 576) * 100}vw`,
            };

            return (
              <Card
                key={item.id}
                title={item.title}
                titleAs='h2'
                complement={
                  <>
                    <Star /> {item.date}
                  </>
                }
                content={item.excerpt}
                picture={picture}
                to={item.to}
                buttonText={`Lire l'article`}
              />
            );
          })}
        </CardGrid>
      </Center>
    </>
  );
};

BlogPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allWpPost: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    plasticTexture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default BlogPage;

export const blogArchiveQuery = graphql`
  query blogArchives {
    allWpPost(sort: { date: DESC }) {
      edges {
        node {
          id
          title
          date(formatString: "D MMMM YYYY", locale: "fr-CA")
          excerpt
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  featuredLarge: fluid(
                    maxWidth: 800
                    maxHeight: 434
                    quality: 100
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
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
    plasticTexture: file(relativePath: { eq: "textures/plasticWrap.png" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
