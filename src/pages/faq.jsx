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
import { titleStyle, introStyle, linkStyle } from '../styles/global';
import colors from '../styles/colors';

const FaqTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
    ${linkStyle};
  }
`;

const data = [
  {
    id: 1,
    question: `Quand et où se déroulera la prochaine édition du WAQ?`,
    answer: `<p>La prochaine édition se tiendra du <strong>28 au 30 mai 2024</strong>, au <a href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492' target='_blank' rel='noopener noreferrer'>Terminal - Port de Québec</a>, dans la buccolique ville de Québec.</p>`,
  },
  {
    id: 2,
    question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
    answer: `<p>Les billets pour le WAQ24 ne sont pas encore disponibles. Par contre, tu peux t’inscrire à notre liste d’attente - tu recevras un courriel aussitôt qu’il sera possible de réserver ta place!</p><p><a href="https://ti.to/web-a-quebec/waq24/fr" target="_blank">Je m’inscris</a></p>`,
  },
  {
    id: 3,
    question: `Comment faire pour que mon entreprise soit partenaire du WAQ?`,
    answer: `<p>Tout d’abord, bonne décision! Ensuite, écris à Dominic, notre directeur des partenariats stratégiques et du développement des affaires, à <a href="mailto:dominic.guay@quebecnumerique.com">dominic.guay@quebecnumerique.com</a>.</p>`,
  },
  {
    id: 4,
    question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
    answer: `<p>L’appel à conférences pour le WAQ24 est en cours jusqu'au 15 janvier 2024. Pour tous les détails de l’implication et le dépôt d’une candidature, consulte la page <a href="/appel-a-conferences">Appel à conférences.</a> Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  },
  // {
  //   id: 4,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 n’est pas encore en cours. Abonne-toi à l’infolettre, et tu seras informé·e aussitôt qu’il sera possible de déposer une proposition. Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
];

const FaqPage = () => (
  <>
    <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ.' />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <FaqTitle css={titleStyle}>FAQ</FaqTitle>
      <FaqIntro css={introStyle}>
        On tente de répondre à toutes tes questions ici!
        <br />
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
              color={colors.bleu100}
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

FaqPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FaqPage;
