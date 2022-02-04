// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';
import SectionContainer from '../components/SectionContainer';
import Stack from '../components/LayoutSections/Stack';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const FaqTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
`;

const FaqIntro = styled.div`
  margin-top: 1rem;
`;

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 68], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;

const faqItem = css`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 19], bases: [16, 16] },
    ],
    breakpoints.spacings
  )};

  a {
    color: ${colors.bleu};
  }
`;

const FaqPage = () => {
  const data = [
    {
      id: 1,
      question:
        'Quelle est la différence entre un billet présentiel et un billet virtuel?',
      answer:
        "<p>Le billet présentiel te permet d'assister à toutes les conférences au Terminal - Port de Québec et de participer aux activités du WAQ telles que tu les connais : conférences, 5 à 7, ateliers, activités de réseautage et plus encore. Bref, comme dans le bon vieux temps! Avec ton billet présentiel, tu as automatiquement accès à la portion virtuelle de l’événement.</p><p>Le billet virtuel te permet d'assister, de la maison ou du bureau, aux conférences keynote diffusées en direct du Terminal! Tu pourras écouter TOUTES les conférences du WAQ, car elles seront disponibles en rediffusion sur la plateforme.</p>",
    },
    {
      id: 2,
      question: 'Y a-t-il un nombre limité de places en présentiel?',
      answer:
        '<p>Dès que tu achètes ton billet présentiel, tu es certain d’avoir une place en personne! Le nombre de billets disponibles est toutefois limité, ne tarde pas à te le procurer dès janvier!</p><p>D’ailleurs, selon la situation épidémiologique actuelle, il n’y a plus de limite de capacité pour les événements. Cette règle est évidemment sujette à changement, mais on reste à l’affût et on se croise les doigts pour que notre belle communauté puisse se rassembler de nouveau en mai. 🤞</p>',
    },
    {
      id: 3,
      question:
        'Est-ce que les conférences en présentiel et en virtuel sont les mêmes?',
      answer: '<p>Les conférences sont les mêmes!</p>',
    },
    {
      id: 4,
      question: 'Est-ce possible de partager un billet présentiel? ',
      answer:
        '<p>Chaque personne qui sera sur place devra avoir son propre billet, notamment pour des raisons de logistique (commande de boîtes à lunch, passeport vaccinal, registre des personnes sur les lieux chaque jour, etc.).</p>',
    },
    {
      id: 5,
      question: 'Quel est le coût des billets?',
      answer:
        '<p>Le billet virtuel est à 195 $ et est GRATUIT pour les étudiant.es à temps plein.</p><p><strong>Billet présentiel :</strong><br />Prévente : 595 $<br />Régulier : 895 $</p><p>Tous les prix sont avant taxes.</p>',
    },
    {
      id: 6,
      question: 'Y a-t-il des billets étudiants?',
      answer:
        '<p>Nouveauté : les étudiant.es à temps plein auront accès gratuitement à la portion virtuelle de l’événement! Passe le mot.</p>',
    },
    {
      id: 7,
      question: 'Puis-je participer aux 5 à 7 avec mon billet virtuel?',
      answer:
        '<p>Non, malheureusement. Mais sois sans crainte, tu auras de belles opportunités d’échanger avec les autres participants et d’élargir ton réseau de contacts directement via la plateforme!</p>',
    },
    {
      id: 8,
      question: 'Quelles seront les mesures sanitaires en place au Terminal?',
      answer:
        '<p>Le passeport vaccinal sera exigé pour entrer dans le Terminal. Le port du couvre-visage sera obligatoire en tout temps, sauf pour boire et manger.</p><p>Toute personne qui présente des symptômes de la COVID-19, qui est en attente d’un résultat de test ou qui a obtenu un résultat positif ne sera pas admis dans le Terminal.</p>',
    },
    {
      id: 9,
      question:
        'Comment est-ce que je peux utiliser mon crédit de l’édition 2020-2021?',
      answer:
        "<p>Une communication par courriel te sera envoyée au moment de la mise en vente des billets. La procédure complète y sera expliquée. Si jamais tu ne reçois rien de notre part, tu peux nous écrire à <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>. Les crédits seront applicables uniquement sur les billets de cette édition-ci (WAQ22).</p>",
    },
    {
      id: 10,
      question:
        'Est-ce possible de participer à la Semaine numériQC avec un billet du WAQ?',
      answer:
        '<p>Non. Il s’agit de deux événements distincts, donc ça prend un billet pour la SNQC et un billet pour le WAQ.</p>',
    },
    {
      id: 11,
      question:
        'Est-ce qu’il y a des chances que le WAQ22 soit annulé ou reporté?',
      answer:
        '<p>Comme on n’a pas de boule de cristal, il est impossible de le confirmer. PAR CONTRE, on peut confirmer que l’événement aura lieu, peu importe la situation.</p>',
    },
  ];

  return (
    <>
      <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ22.' />

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <FaqTitle css={h1AltStyle}>FAQ</FaqTitle>
        <FaqIntro css={introStyle}>
          <p>
            L’édition 2022 du Web à Québec (WAQ) aura lieu les 24, 25 et 26 mai
            prochains.
          </p>
          <p>
            Ce sera un événement hybride : tu as le choix d’y participer en
            présentiel ou en virtuel! 😎
          </p>
          <p>On tente de répondre à toutes tes questions ici!</p>
          <span>👇</span>
        </FaqIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='850px' gutters='var(--container-gutter)'>
          <Accordion multiple collapsible>
            {data.map((item) => (
              <AccordionItem
                key={`faq-${item.id}`}
                titleAs='h2'
                title={item.question}
                bordered
                rounded
              >
                <Stack
                  css={faqItem}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </Center>
      </Container>
    </>
  );
};

FaqPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FaqPage;
