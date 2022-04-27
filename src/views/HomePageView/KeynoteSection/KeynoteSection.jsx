// vendors
import React from 'react';

// styles
import { wrapper, CardsWrapper, Title, Intro } from './KeynoteSection.styles';
import { magnifyStyle, introStyle } from '../../../styles/global';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import KeynoteCard from '../../../components/KeynoteCard';

const KeynoteSection = () => {
  const speaker = {
    firstName: 'Benoit',
    lastName: 'Petit',
    organization: 'Coveo',
    photoUrl: 'https://via.placeholder.com/425x425',
    photoUrlSharp: {
      childImageSharp: {
        fixed: {
          src: 'https://via.placeholder.com/425x425',
          srcSet: 'https://via.placeholder.com/425x425',
          srcSetWebp: 'https://via.placeholder.com/425x425',
        },
      },
    },
  };

  return (
    <Center
      css={wrapper}
      maxWidth='var(--max-container-width)'
      gutters='16px'
      intrinsic
    >
      <Title css={magnifyStyle}>conférenciers principaux</Title>
      <Center maxWidth='640px'>
        <Intro css={introStyle}>
          Le WAQ veut vous connaître! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Intro>
      </Center>
      <CardsWrapper>
        <KeynoteCard speaker={speaker} mobileRotationAngle={-5} />
        <KeynoteCard big speaker={speaker} mobileRotationAngle={5} />
        <KeynoteCard speaker={speaker} />
        <KeynoteCard speaker={speaker} mobileRotationAngle={-10} />
        <KeynoteCard speaker={speaker} />
        <KeynoteCard big speaker={speaker} mobileRotationAngle={5} />
      </CardsWrapper>
      <Button tag='link' to='/programmation/2021'>
        voir la programmation
      </Button>
    </Center>
  );
};

export default KeynoteSection;
