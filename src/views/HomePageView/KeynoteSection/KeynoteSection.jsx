// vendors
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// styles
import { wrapper, CardsWrapper, Title } from './KeynoteSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import KeynoteCard from '../../../components/KeynoteCard';

const speakersPictureQuery = graphql`
  fragment speakerPhotoFragment on File {
    childImageSharp {
      fluid(
        quality: 100
        maxWidth: 425
        duotone: { highlight: "#EBEBEB", shadow: "#262626" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    speakerJoshuaDavis: file(
      relativePath: { eq: "keynotes/speaker-joshua-davis.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerSnask: file(relativePath: { eq: "keynotes/speaker-snask.jpg" }) {
      ...speakerPhotoFragment
    }
    speakerGregGifford: file(
      relativePath: { eq: "keynotes/speaker-greg-gifford.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerFaraiMadzima: file(
      relativePath: { eq: "keynotes/speaker-farai-madzima.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerMariePierStHilaire: file(
      relativePath: { eq: "keynotes/speaker-marie-pier-st-hilaire.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerSashaLuccioni: file(
      relativePath: { eq: "keynotes/speaker-sasha-luccioni.jpg" }
    ) {
      ...speakerPhotoFragment
    }
  }
`;

const KeynoteSection = () => {
  const data = useStaticQuery(speakersPictureQuery);

  const {
    speakerJoshuaDavis: {
      childImageSharp: { fluid: speakerJoshuaDavis },
    },
    speakerSnask: {
      childImageSharp: { fluid: speakerSnask },
    },
    speakerGregGifford: {
      childImageSharp: { fluid: speakerGregGifford },
    },
    speakerFaraiMadzima: {
      childImageSharp: { fluid: speakerFaraiMadzima },
    },
    speakerMariePierStHilaire: {
      childImageSharp: { fluid: speakerMariePierStHilaire },
    },
    speakerSashaLuccioni: {
      childImageSharp: { fluid: speakerSashaLuccioni },
    },
  } = data;

  const speakers = [
    {
      firstName: 'Joshua',
      lastName: 'Davis',
      organization: 'Joshua Davis Studios',
      detailPageUrl: '/programmation/26-years-of-random/',
      picture: speakerJoshuaDavis,
    },
    {
      firstName: 'Freddie Öst &',
      lastName: 'Erik Kockum',
      organization: 'SNASK',
      detailPageUrl: '/programmation/change-is-fuking-inevitable/',
      picture: speakerSnask,
    },
    {
      firstName: 'Greg',
      lastName: 'Gifford',
      organization: 'Search Lab Digital',
      detailPageUrl:
        '/programmation/a-tactical-guide-to-superhero-level-local-seo/',
      picture: speakerGregGifford,
    },
    {
      firstName: 'Farai',
      lastName: 'Madzima',
      organization: 'Shopify',
      detailPageUrl:
        '/programmation/the-only-one-of-your-kind-in-the-room-perils-and-opportunities/',
      picture: speakerFaraiMadzima,
    },
    {
      firstName: 'Marie-Pier',
      lastName: 'St-Hilaire',
      organization: 'Edgenda/AFI',
      detailPageUrl:
        '/programmation/competences-transversales-a-lere-numerique-es-tu-strategique/',
      picture: speakerMariePierStHilaire,
    },
    {
      firstName: 'Sasha',
      lastName: 'Luccioni',
      organization: 'Hugging Face',
      detailPageUrl:
        '/programmation/generative-ai-the-good-the-bad-and-the-bias/',
      picture: speakerSashaLuccioni,
    },
  ];

  return (
    <Center
      as='section'
      css={wrapper}
      maxWidth='var(--max-container-width)'
      gutters='16px'
      intrinsic
    >
      <Title>conférences vedettes</Title>

      <CardsWrapper>
        <KeynoteCard speaker={speakers[0]} mobileRotationAngle={-5} />
        <KeynoteCard speaker={speakers[1]} big mobileRotationAngle={5} />
        <KeynoteCard speaker={speakers[2]} />
        <KeynoteCard speaker={speakers[3]} mobileRotationAngle={-10} />
        <KeynoteCard speaker={speakers[4]} />
        <KeynoteCard speaker={speakers[5]} big mobileRotationAngle={5} />
      </CardsWrapper>

      <Button tag='link' to='/programmation/2023'>
        voir la programmation
      </Button>
    </Center>
  );
};

export default KeynoteSection;
