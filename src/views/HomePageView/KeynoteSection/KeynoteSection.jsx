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
        duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
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
    speakerFaraiMadzima: file(
      relativePath: { eq: "keynotes/speaker-farai-madzima.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerGregGifford: file(
      relativePath: { eq: "keynotes/speaker-greg-gifford.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerSnask: file(relativePath: { eq: "keynotes/speaker-snask.jpg" }) {
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
    speakerFaraiMadzima: {
      childImageSharp: { fluid: speakerFaraiMadzima },
    },
    speakerGregGifford: {
      childImageSharp: { fluid: speakerGregGifford },
    },
    speakerSnask: {
      childImageSharp: { fluid: speakerSnask },
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
      firstName: 'Farai',
      lastName: 'Madzima',
      organization: 'Shopify',
      detailPageUrl:
        '/programmation/the-only-one-of-your-kind-in-the-room-perils-and-opportunities/',
      picture: speakerFaraiMadzima,
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
      firstName: 'Freddie Öst &',
      lastName: 'Erik Kockum',
      organization: 'SNASK',
      detailPageUrl: '/programmation/change-is-fuking-inevitable/',
      picture: speakerSnask,
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
      <Title>conférenciers principaux</Title>

      <Center maxWidth='1024px'>
        <CardsWrapper>
          <KeynoteCard speaker={speakers[0]} mobileRotationAngle={-5} />
          <KeynoteCard speaker={speakers[1]} big mobileRotationAngle={5} />
          <KeynoteCard speaker={speakers[2]} />
          <KeynoteCard speaker={speakers[3]} big mobileRotationAngle={-10} />
        </CardsWrapper>
      </Center>

      <Button tag='link' to='/programmation/2023'>
        voir la programmation
      </Button>
    </Center>
  );
};

export default KeynoteSection;
