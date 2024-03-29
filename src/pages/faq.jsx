// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';
import Stack from '../components/LayoutSections/Stack';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle, linkStyle } from '../styles/global';
import colors from '../styles/colors';

const FaqTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 110], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const FaqIntro = styled.div`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [16, 24], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 100], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const TextureWrapper = styled.div`
  position: absolute;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'top', sizes: [100, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
  // Prévente non débutée
  // {
  //   id: 2,
  //   question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
  //   answer: `<p>Les billets pour le WAQ24 ne sont pas encore disponibles. Par contre, tu peux t’inscrire à notre liste d’attente - tu recevras un courriel aussitôt qu’il sera possible de réserver ta place!</p><p><a href="https://ti.to/web-a-quebec/waq24/fr" target="_blank">Je m’inscris</a></p>`,
  // },
  // Prévente en cours
  {
    id: 2,
    question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
    answer: `<p>La prévente du WAQ est officiellement lancée! Réserve ta place maintenant en te procurant ton billet pour 2024 ici 👉 <a href="/billetterie">Acheter mon billet</a>.</p>`,
  },
  {
    id: 3,
    question: `Y a-t-il des billets étudiants?`,
    answer: `<p>Oui, les billets étudiants sont au coût de 300$ pour un accès complet au WAQ. Procure-toi ton billet dans la billetterie.</p><p><a href="/billetterie">Acheter mon billet</a></p>`,
  },
  {
    id: 4,
    question: `Est-ce possible de partager un billet?`,
    answer: `<p>Un nouveau billet est disponible pour l’édition 2024; le billet entreprise! Tu peux assister aux conférences du matin et passer le relais à ta collègue en après-midi. Ce billet permet aussi 6 accès à la plateforme événementielle pour réseauter et écouter les contenus de la salle principale en rediffusion après l’événement.</p><p><a href="/billetterie">Acheter mon billet</a></p>`,
  },
  {
    id: 5,
    question: `Comment faire pour que mon entreprise soit partenaire du WAQ?`,
    answer: `<p>Tout d’abord, bonne décision! Ensuite, écris à Dominic, notre directeur des partenariats stratégiques et du développement des affaires, à <a href="mailto:dominic.guay@quebecnumerique.com">dominic.guay@quebecnumerique.com</a>.</p>`,
  },
  // Appel à conférence non débuté
  // {
  //   id: 6,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 n’est pas encore en cours. Abonne-toi à l’infolettre, et tu seras informé·e aussitôt qu’il sera possible de déposer une proposition. Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
  // Appel à conférence en cours
  // {
  //   id: 6,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 est en cours jusqu'au 15 janvier 2024. Pour tous les détails de l’implication et le dépôt d’une candidature, consulte la page <a href="/appel-a-conferences">Appel à conférences.</a> Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
  // Appel à conférence terminé
  {
    id: 6,
    question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
    answer: `<p>L’appel à conférences pour le WAQ24 est terminé. Tu peux toujours nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  },
];

const FaqPage = () => {
  const texture = useStaticQuery(
    graphql`
      query {
        plasticTexture: file(relativePath: { eq: "textures/plasticWrap.png" }) {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ.' />

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <FaqTitle css={h1AltStyle}>FAQ</FaqTitle>
        <FaqIntro css={introStyle}>
          On tente de répondre à toutes tes questions ici!
          <br />
          <span>👇</span>
        </FaqIntro>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={texture.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center maxWidth='850px' gutters='var(--container-gutter)'>
        <Accordion multiple collapsible>
          {data.map((item) => (
            <AccordionItem
              key={`faq-${item.id}`}
              titleAs='h2'
              title={item.question}
              color={colors.blueberry10}
              lightColor={colors.peach}
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
    </>
  );
};

FaqPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FaqPage;
