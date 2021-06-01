// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import HeroGrid from '../components/HeroGrid/HeroGrid';
import CardGrid from '../components/CardGrid';
import Card from '../components/CardGrid/Card';

// views
import FeaturedBlogPost from '../views/BlogPageView/FeaturedBlogPost';

const BlogPage = ({ location }) => {
  const featuredPost = {
    title: 'Le WAQ a besoin de toi comme bénévole!',
    date: '6 avril 2021',
    content:
      'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed duom...',
    picture: {
      childImageSharp: {
        desktop: {
          aspectRatio: 1.38,
          src: 'https://via.placeholder.com/600x434',
          srcSet: '',
          srcSetWebp: '',
          srcWebp: '',
        },
        mobile: {
          aspectRatio: 1.38,
          src: 'https://via.placeholder.com/380x434',
          srcSet: '',
          srcSetWebp: '',
          srcWebp: '',
        },
      },
    },
    to: '/',
  };

  const data = [
    {
      title: 'Le WAQ a besoin de toi comme bénévole!',
      date: '6 avril 2021',
      content:
        'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed duom...',
      picture: {
        childImageSharp: {
          desktop: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
          mobile: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
        },
      },
      to: '/',
    },
    {
      title:
        'Le WAQ a besoin de toi comme bénévole! Le WAQ a besoin de toi comme bénévole!',
      date: '6 avril 2021',
      content:
        'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed duom...',
      picture: {
        childImageSharp: {
          desktop: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
          mobile: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
        },
      },
      to: '/',
    },
    {
      title: 'Le WAQ a besoin de toi comme bénévole!',
      date: '6 avril 2021',
      content:
        'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed duom...',
      picture: {
        childImageSharp: {
          desktop: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
          mobile: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
        },
      },
      to: '/',
    },
    {
      title: 'Le WAQ a besoin de toi comme bénévole!',
      date: '6 avril 2021',
      content:
        'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed duom...',
      picture: {
        childImageSharp: {
          desktop: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
          mobile: {
            aspectRatio: 1.89,
            src: 'https://via.placeholder.com/380x200',
            srcSet: '',
            srcSetWebp: '',
            srcWebp: '',
          },
        },
      },
      to: '/',
    },
  ];
  return (
    <Layout location={location}>
      <SEO
        title='Blogue'
        description='Tout ce que tu dois savoir sur le WAQ21.'
      />

      <HeroGrid title='le blogue' />

      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
      >
        <FeaturedBlogPost post={featuredPost} />
      </Center>

      <SectionContainer forwardedAs='div' faded>
        <Center
          maxWidth='var(--max-container-width)'
          gutters='var(--container-gutter)'
        >
          <CardGrid>
            {data.map((item) => (
              <Card
                title={item.title}
                titleAs='h2'
                date={item.date}
                content={item.content}
                picture={item.picture}
                to={item.to}
                buttonText='Lire l’article'
              />
            ))}
          </CardGrid>
        </Center>
      </SectionContainer>
    </Layout>
  );
};

BlogPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPage;
