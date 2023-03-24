// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../components/SEO';
import LavaLamp from '../components/LavaLamp';
import Center from '../components/LayoutSections/Center';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';
import SectionContainer from '../components/SectionContainer';
import Stack from '../components/LayoutSections/Stack';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { titleStyle, introStyle } from '../styles/global';
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
    color: ${colors.bleu100};
  }
`;

const data = [
  {
    id: 1,
    question: 'Est-ce possible de partager un billet présentiel?',
    answer: `<p>Chaque personne qui sera sur place devra avoir son propre billet puisque les billets sont nominatifs. Ça nous permettra de t’offrir une meilleure expérience, notamment en te réservant un repas et des collations qui respectent des allergies et intolérances (si tu en as), en te permettant d’accéder à la plateforme virtuelle pour ré-écouter tes conférences préférées tout l’été, et en ayant ton nom (oui, le tien!) sur ta cocarde pour les moments de réseautage. Bref, il est donc impossible de partager un billet présentiel. Si tes collègues et toi aviez l’habitude d’échanger un seul billet, sache que des <a href="https://ti.to/web-a-quebec/waq-2022/fr" target="_blank" rel="noopener noreferrer">billets journaliers</a> sont disponibles!</p>`,
  },
  {
    id: 2,
    question: 'Quelles seront les mesures sanitaires en place au Terminal?',
    answer: `<p>Les mesures sanitaires qui seront appliquées seront celles émises par les instances gouvernementales au moment de l’événement. Les mesures en vigueur au moment de l’événement seront mises à jour dans la foire aux questions quelques jours avant le début de l’événement.</p>`,
  },
  {
    id: 3,
    question: 'Comment transférer mon billet à une autre personne?',
    answer: `<p>Pour transférer votre billet à une autre personne, tu dois le faire AVANT que l’événement débute, car le billet ne peut pas être échangé entre personnes une fois que le WAQ a débuté. Tu dois repartir du courriel de confirmation reçu lors de la réservation de ton billet.</p>
             <p>Clique sur <b>Voir la commande</b><br />Clique sur <b>Voir/Éditer le billet à échanger</b><br />Dans le haut de la page qui s’ouvre, clique sur <b>Re-assigner</b><br />Coche <b>Supprimer les réponses associées</b><br />Sur la page qui s’affiche, clique sur <b>Billet complet</b> du billet surligné en jaune.<br />Clique sur le bouton bleu <b>Répondre</b>, et répondre à toutes les questions obligatoires</p>`,
  },
  {
    id: 4,
    question:
      'Comment transformer un billet virtuel en billet présentiel (et vice-versa)?',
    answer: `<p><i>Billet virtuel à présentiel</i> — Pour transformer un billet virtuel à présentiel, il faut communiquer avec <a href="mailto:info@webaquebec.org">info@webaquebec.org</a>. Tu pourras choisir si tu souhaites avoir un billet journalier ou un accès complet. La différence de prix entre le billet présentiel et le billet virtuel pourra ensuite être payée avec une carte de crédit.</p>
             <p><i>Billet présentiel à virtuel</i> — Pour transformer ton billet présentiel en virtuel, ton événement ne doit PAS être commencé. Il faut procéder au changement avec notre service à la clientèle à <a href="mailto:info@webaquebec.org">info@webaquebec.org</a>. La différence entre les deux billets te sera remboursée sur la carte de crédit utilisée au moment de l’achat.</p>`,
  },
  {
    id: 5,
    question: 'Quel est le coût des billets?',
    answer: `<p>Le billet virtuel est à 195 $ et est GRATUIT pour les étudiant.es à temps plein.</p><p><strong>Billet présentiel :</strong><br />Journalier : 395 $<br />Régulier : 895 $</p>
             <p>Tous les prix sont avant taxes.</p>`,
  },
  {
    id: 6,
    question: 'Y a-t-il des billets étudiants?',
    answer:
      '<p>Nouveauté : les étudiant.es à temps plein auront accès gratuitement à la portion virtuelle de l’événement! Passe le mot.</p>',
  },
  {
    id: 7,
    question:
      'Quelle est la différence entre un billet présentiel et un billet virtuel?',
    answer: `<p>Le billet présentiel te permet d'assister à toutes les conférences au Terminal - Port de Québec et de participer aux activités du WAQ telles que tu les connais : conférences, 5 à 7, ateliers, activités de réseautage et plus encore. Bref, comme dans le bon vieux temps! Avec ton billet présentiel, tu as automatiquement accès à la portion virtuelle de l’événement.</p>
             <p>Le billet virtuel te permet d'assister, de la maison ou du bureau, à toutes les conférences diffusées en direct du Terminal! Tu pourras écouter TOUTES les conférences du WAQ, car elles seront disponibles en rediffusion sur la plateforme pendant 90 jours.</p>`,
  },
  {
    id: 8,
    question: 'Puis-je participer aux 5 à 7 avec mon billet virtuel?',
    answer:
      '<p>Non, malheureusement. Mais sois sans crainte, tu auras de belles opportunités d’échanger avec les autres participants et d’élargir ton réseau de contacts directement via la plateforme!</p>',
  },
  {
    id: 9,
    question:
      'Est-ce que les conférences en présentiel et en virtuel sont les mêmes?',
    answer: '<p>Les conférences sont les mêmes!</p>',
  },
  {
    id: 10,
    question:
      'Pourquoi est-ce que je vois un écran noir lorsque je tente d’écouter une conférence?',
    answer: `<p>Il pourrait s’agir d’un problème relié aux pare-feu. Pour résoudre le problème, vous pouvez demander à votre administrateur de réseau d’autoriser les contenus provenant de Vimeo, ou utiliser l’application mobile du Web à Québec sur votre téléphone cellulaire ou une tablette.</p>`,
  },
  {
    id: 11,
    question:
      'Est-ce qu’il y a des chances que le WAQ22 soit annulé ou reporté?',
    answer:
      '<p>Comme on n’a pas de boule de cristal, il est impossible de le confirmer. PAR CONTRE, on peut confirmer que l’événement aura lieu, peu importe la situation.</p>',
  },
];

const FaqPage = () => (
  <>
    <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ22.' />

    <LavaLamp blobColor={colors.darkBlue} />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <FaqTitle css={titleStyle}>FAQ</FaqTitle>
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

FaqPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FaqPage;
