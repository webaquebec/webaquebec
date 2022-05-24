// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';
import CardGrid from '../../../components/CardGrid';
import Card from '../../../components/CardGrid/Card';

// styles
import { sectionWrapper, Title, Star } from './ReadAlsoSection.styles';

const ReadAlsoSection = ({ featuredPosts }) => {
  const posts = featuredPosts.map(({ node }) => {
    const pictures = node.featuredImage?.node?.localFile?.childImageSharp;

    return {
      ...node,
      pictures,
      to: `/blogue/${node.slug}`,
    };
  });

  return (
    <Center
      maxWidth='var(--max-container-width)'
      gutters='var(--container-gutter)'
      css={sectionWrapper}
    >
      <Title>À lire également</Title>

      <CardGrid>
        {posts.map((item) => {
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
              titleAs='h3'
              complement={
                <>
                  <Star /> {item.date}
                </>
              }
              content={item.excerpt}
              picture={picture}
              to={item.to}
              buttonText="Lire l'article"
            />
          );
        })}
      </CardGrid>
    </Center>
  );
};

export default ReadAlsoSection;

ReadAlsoSection.propTypes = {
  featuredPosts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        featuredImage: PropTypes.shape({
          node: PropTypes.shape({
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                featuredSmall: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                  srcSet: PropTypes.string.isRequired,
                  srcWebp: PropTypes.string.isRequired,
                  srcSetWebp: PropTypes.string.isRequired,
                  base64: PropTypes.string.isRequired,
                  aspectRatio: PropTypes.number.isRequired,
                  sizes: PropTypes.string.isRequired,
                }).isRequired,
              }),
            }),
          }),
        }),
      }),
    })
  ).isRequired,
};
