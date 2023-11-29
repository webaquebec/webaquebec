// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { Container, Title, Paragraph } from './WhoWeAreSection.styles';

const WhoWeAreSection = () => (
  <Center maxWidth='840px' gutters='var(--container-gutter)'>
    <Container>
      <Title>Qui sommes-nous?</Title>
      <Paragraph>
        Cette grande aventure débuta en 2010 grâce au Web à Québec, un événement
        unique imaginé par des mordus du numérique qui ont eu la folle idée
        d’organiser un événement pour rassembler les acteurs du Web. La première
        édition a attiré plus de 200 personnes!
      </Paragraph>
      <Paragraph>
        Avec le succès grandissant du WAQ, l’organisation se structure
        officiellement. C’est la naissance de l’OBNL Québec numérique.
      </Paragraph>
    </Container>
  </Center>
);

export default WhoWeAreSection;
