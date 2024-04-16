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
        La grande aventure de Québec numérique débuta en 2010 grâce au Web à
        Québec, un événement unique imaginé par des passionné(e)s du numérique
        qui ont eu la folle idée d’organiser un événement pour rassembler la
        communauté des créateur(rice)s du Web. La première édition a attiré plus
        de 200 personnes!
      </Paragraph>
      <Paragraph>
        Avec le succès grandissant du WAQ, l’organisation se structure
        officiellement, et c’est la naissance officielle de l’OBNL Québec
        numérique qui est connu aujourd’hui. À ce jour, Québec numérique est
        derrières les initiatives de la Semaine numériQC, de 42 Québec, de
        Virage numériQC, et bien évidemment, le Web à Québec.
      </Paragraph>
    </Container>
  </Center>
);

export default WhoWeAreSection;
