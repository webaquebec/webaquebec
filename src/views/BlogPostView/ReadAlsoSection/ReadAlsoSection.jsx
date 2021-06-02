// vendors
import React from 'react';

// styles
import { Title, Container } from './ReadAlsoSection.styles';

// components
import CardGrid from '../../../components/CardGrid';
import Card from '../../../components/CardGrid/Card';

const ReadAlsoSection = () => {
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
  ];
  return (
    <Container
      maxWidth='var(--max-container-width)'
      gutters='var(--container-gutter)'
    >
      <Title>À lire également</Title>
      <CardGrid>
        {data.map((item) => (
          <Card
            title={item.title}
            titleAs='h3'
            date={item.date}
            content={item.content}
            picture={item.picture}
            to={item.to}
            buttonText='Lire l’article'
          />
        ))}
      </CardGrid>
    </Container>
  );
};

export default ReadAlsoSection;
