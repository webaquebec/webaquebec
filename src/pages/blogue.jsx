// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// images
import VectorStar from '../images/VectorStar';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import CardGrid from '../components/CardGrid';
import Card from '../components/CardGrid/Card';

// views
import FeaturedBlogPost from '../views/BlogPageView/FeaturedBlogPost';
import breakpointsRange from '../utils/breakpointsRange';
import breakpoints from '../styles/breakpoints';

// styles
import { titleStyle } from '../styles/global';

const PageTitle = styled.h1`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [80, 200], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [80, 200], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [56, 72], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [158, 138], bases: [16, 20] },
    ],
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
        <PageTitle css={titleStyle}>blogue</PageTitle>
        <FeaturedBlogPost post={blogArchives[0]} />
      </Center>

      <Container forwardedAs='div' faded padded>
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
      </Container>
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
  }).isRequired,
};

export default BlogPage;

export const blogArchiveQuery = graphql`
  query blogArchives {
    allWpPost(sort: { order: DESC, fields: date }) {
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
  }
`;
