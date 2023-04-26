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
    answer: `<p>Chaque personne qui sera sur place devra avoir son propre billet puisque les billets sont nominatifs. Ça nous permettra de t’offrir une meilleure expérience, notamment en te réservant un repas qui respecte des allergies et intolérances (si tu en as), en ayant un accès à l’application mobile (pour les rediffusions et créer des contacts) et de te créer un profil qui te correspond, et en ayant ton nom (oui, le tien!) sur ta cocarde pour les moments de réseautage. Bref, il est donc impossible de partager un billet présentiel. Si tes collègues et toi aviez l’habitude d’échanger un seul billet, sache que des <a href="https://ti.to/web-a-quebec/waq-2022/fr"  target="_blank" rel="noopener noreferrer">billets journaliers</a> sont disponibles!</p>`,
  },
  {
    id: 2,
    question: 'Comment transférer mon billet à une autre personne?',
    answer: `<p>Pour transférer votre billet à une autre personne, tu dois le faire AVANT que l’événement débute, car le billet ne peut pas être échangé entre personnes une fois que le WAQ a débuté. Tu dois repartir du courriel de confirmation reçu lors de la réservation de ton billet.</p>
             <p>Clique sur <b>Voir la commande</b><br />Clique sur <b>Voir/Éditer le billet à échanger</b><br />Dans le haut de la page qui s’ouvre, clique sur <b>Re-assigner</b><br />Coche <b>Supprimer les réponses associées</b><br />Sur la page qui s’affiche, clique sur <b>Billet complet</b> du billet surligné en jaune.<br />Clique sur le bouton bleu <b>Répondre</b>, et répondre à toutes les questions obligatoires</p>`,
  },
  {
    id: 3,
    question: 'Quel est le coût des billets?',
    answer: `<p>Billet présentiel : <br />Journalier : 395$ <br />Régulier : 895$ <br />Étudiant : 250$ <br /><br />Tous les prix sont avant taxes. Pour acheter ton billet, clique <a href="/billetterie">ici</a></p>`,
  },
  {
    id: 4,
    question: 'Y a-t-il des billets étudiants?',
    answer: `<p>Oui, les billets étudiants sont au coût de 250$ pour un accès complet au WAQ. Procure-toi ton billet dans notre billetterie. Les étudiants peuvent aussi avoir accès gratuitement aux rediffusions une fois le WAQ terminé. </p>`,
  },
  {
    id: 5,
    question: 'À quel endroit se déroule le WAQ?',
    answer: `<p>L’événement se déroule au <a href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492' target='_blank' rel='noopener noreferrer'>Terminal du Port de Québec, au 84 rue Dalhousie</a>, dans la ville de Québec.</p>`,
  },
  {
    id: 6,
    question:
      'Comment est-ce que je peux accéder à l’application mobile du WAQ?',
    answer: `<p>L’application sera disponible dans l’App Store et dans Google Play à compter du 15 mai. Si tu as déjà ton billet du WAQ, tu recevras un courriel pour t’informer de sa disponibilité. Si tu ne reçois pas de courriel, mais que tu as bien ton billet, écris-nous à <a href="mailto:info@webaquebec.org">info@webaquebec.org</a>.</p>`,
  },
  {
    id: 7,
    question: 'Est-ce qu’il y a des billets virtuels à l’édition 2023?',
    answer: `<p>Non, avec le retour à la normal, le WAQ a fait un retour dans le futur avec une édition 100% présentielle.</p>`,
  },
  {
    id: 8,
    question:
      'Comment dois-je faire pour soumettre une proposition de conférence?',
    answer: `<p>L’appel à conférences pour l’édition 2023 est terminé. Cependant, tu peux toujours nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> pour obtenir les détails reliés à l’édition 2024.</p>`,
  },
];

const FaqPage = () => (
  <>
    <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ22.' />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <FaqTitle css={titleStyle}>FAQ</FaqTitle>
      <FaqIntro css={introStyle}>
        L’édition 2023 du Web à Québec (WAQ) aura lieu les 23, 24 et 25 mai
        prochains. L&apos;évenement a fait un retour dans le futur avec une
        édition 100% présentielle 😎. On tente de répondre à toutes tes
        questions ici!
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
