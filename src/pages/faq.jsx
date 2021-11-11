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

const FaqIntro = styled.p`
  margin-bottom: 0;
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
  margin: 0;

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
      question: 'Quelle sera la forme du WAQ22?',
      answer:
        "Le WAQ se tiendra du 24 au 26 mai 2022. Le format de l’événement sera annoncé dans les prochaines semaines (mais sois rassuré·e, c’est des bonnes nouvelles qui t’attendent!). D’ailleurs, les billets seront en vente au début de l’année 2022. Ouvre l'œil!",
    },
    {
      id: 2,
      question:
        'Comment est-ce que je peux utiliser mon crédit de l’édition 2020-2021?',
      answer:
        "Une communication par courriel te sera envoyée au moment de la mise en vente des billets. La procédure complète y sera expliquée. Si jamais tu ne reçois rien de notre part, tu peux nous écrire à <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>. Les crédits seront applicables uniquement sur les billets de cette édition-ci (WAQ22).",
    },
    {
      id: 3,
      question:
        'Est-ce possible de participer à la Semaine numériQC avec un billet du WAQ?',
      answer:
        'Non. Il s’agit de deux événements distincts, donc ça prend un billet pour la SNQC et un billet pour le WAQ.',
    },
    {
      id: 4,
      question:
        'Est-ce qu’il y a des chances que le WAQ22 soit annulé ou reporté?',
      answer:
        'Comme on n’a pas de boule de cristal, il est impossible de le confirmer. PAR CONTRE, on peut confirmer que l’événement aura lieu, peu importe la situation.',
    },
  ];

  return (
    <>
      <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ21.' />

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <FaqTitle css={h1AltStyle}>FAQ</FaqTitle>
        <FaqIntro css={introStyle}>
          L’édition 2022 du Web à Québec (WAQ) aura lieu les 24, 25 et 26 mai
          prochains. Si vous avez des questions sur l’événement et/ou sa forme,
          on tente d’y répondre ici! 👇
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
                <p
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
