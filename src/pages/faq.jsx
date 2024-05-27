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

  ul {
    ${breakpointsRange(
      [{ prop: 'paddingLeft', sizes: [24, 32], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

const data = [
  {
    id: 1,
    question: `Quelles sont les dates de l’événement?`,
    answer: `<p>La 13e édition du WAQ se tiendra du <strong>28 au 30 mai 2024</strong></p>`,
  },
  {
    id: 2,
    question: `Où se déroule l’événement?`,
    answer: `<p>Au <a href='https://www.google.com/maps/place/84+Rue+Dalhousie,+Québec,+QC+G1K+8M5/@46.8165604,-71.2004492,17z/data=!3m1!4b1!4m5!3m4!1s0x4cb895e7bbc6a0fb:0x1ca117d2a8f16a27!8m2!3d46.8165604!4d-71.2004492' target='_blank' rel='noopener noreferrer'>Terminal de croisière - Port de Québec</a>. Il est situé au 84, rue Dalhousie dans la bucolique ville de Québec.</p>`,
  },
  {
    id: 3,
    question: `Comment se rendre au Terminal de croisière - Port de Québec?`,
    answer: `<h3>Voiture</h3><p>Tu peux utiliser <a href='https://www.google.com/maps/dir//terminal+port+de+qu%C3%A9bec/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4cb8966218a3e10b:0x62fa4b27e447d885?sa=X&ved=2ahUKEwiqm4DN7c31AhUilYkEHVJ9C5EQ9Rd6BAhBEAQ' target='_blank' rel='noopener noreferrer'>Google Maps</a> pour y faire ton trajet.</p><p>Plusieurs stationnements publics sont disponibles dans les alentours. La tarification varie d’une place à l’autre. Le stationnement est aux frais de la ou du participant(e).</p><ul><li><a href='https://www.google.com/maps/place/Stationnement+Indigo+Qu%C3%A9bec+QU048+-+Terrasses+du+Vieux-Port/@46.8156836,-71.2035849,17z/data=!3m2!4b1!5s0x4cb895e7a4acf683:0x7dde4abb1ffdf034!4m6!3m5!1s0x4cb895e70e359271:0x22ec20225fa642f3!8m2!3d46.81568!4d-71.20101!16s%2Fg%2F11f3rgckw2?entry=tts' target='_blank' rel='noopener noreferrer'>Indigo – Terrasses du Vieux-Port</a></li><li><a href='https://www.google.com/maps/place/Stationnement+SPAQ+-+Dalhousie/@46.8152856,-71.2066033,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb895dd41c760b9:0x49b183a8ebb66949!8m2!3d46.815282!4d-71.2017324!16s%2Fg%2F1vd75jbg?entry=tts' target='_blank' rel='noopener noreferrer'>SPAQ – Place des Canotiers</a></li><li><a href='https://www.portquebec.ca/stationnements/saint-andre' target='_blank' rel='noopener noreferrer'>Quai Saint-André</a></li><li><a href='https://www.google.com/maps/place/125+Rue+Dalhousie,+Qu%C3%A9bec,+QC+G1K+4C5/@46.8174357,-71.2075531,17z/data=!3m1!4b1!4m6!3m5!1s0x4cb895e719271c21:0x15bc8f1b215f84a8!8m2!3d46.8174321!4d-71.2026822!16s%2Fg%2F11c2gj7pp2?hl=fr&entry=tts' target='_blank' rel='noopener noreferrer'>GESPARC – de la Promenade</a></li></ul><p>Plusieurs stationnements payants avec Copilote + dans les rues avoisinantes.</p><h3>Autobus</h3><p>Plusieurs <a href='https://www.google.com/maps/dir//terminal+port+de+qu%C3%A9bec/@46.7972618,-71.3292697,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4cb8966218a3e10b:0x62fa4b27e447d885!2m2!1d-71.200621!2d46.8167138!3e3?shorturl=1' target='_blank' rel='noopener noreferrer'>autobus du RTC</a> servent également le secteur.</p><h3>àVélo</h3><p>Il y a 5 bornes <a href='https://aveloquebec.ca/' target='_blank' rel='noopener noreferrer'>àVélo</a> situées à quelques minutes de marche du Terminal de croisière - Port de Québec. Les vélos sont beaucoup utilisés pendant l’événement, assure-toi de valider avec l’application àVélo les ancrages disponibles.</p><h3>Trottinettes et motos</h3><p>Il n’y a pas de vestiaire ou d’endroit verrouillé pour y laisser des trottinettes et les casques de motos.</p>`,
  },
  {
    id: 4,
    question: `Comment participer au Show de fermeture - DJ set du 30 mai 2024 au Grizzly Fuzz?`,
    answer: `<p>L'entrée est incluse dans le prix de ton billet, mais attention, les places sont très limitées (ouin 🥲). Un accès au party par billet acheté.</p><p>Seules les personnes avec un billet accès complet ou un billet entreprise pourront réserver leur place.</p><p>Pour les billets entreprise, seule une (1) personne par billet pourra avoir accès au show (si elle réserve sa place, bien sûr). Si tu as la chance d’avoir ton billet pour le show de fermeture, tu dois impérativement avoir ton bracelet ET ta cocarde du WAQ24 pour accéder à la salle.</p><p>Si malheureusement, tu n'arrives pas à avoir une place, inscris-toi à la liste d'attente, et qui sait, avec un peu de chance, tu pourrais peut-être te joindre à la fête!</p><p>Le billet n’inclut aucune consommation, donc si tu veux te désaltérer, ce sera à tes frais.</p>`,
  },
  {
    id: 5,
    question: `Quel est le fonctionnement pour le partage d’un billet entreprise?`,
    answer: `<p>Pour accéder à l'événement, la personne qui y participera doit obligatoirement avoir la cocarde ET le bracelet.</p><p>Une seule personne sera autorisée à la fois dans le Terminal de croisière - Port de Québec, autant pour les conférences que pour les 5 à 7.</p><p>Nous ne pourrons pas assurer la gestion des allergies et des restrictions alimentaires puisque le billet n'est pas nominatif. Il sera important d'en aviser chacune des personnes qui se déplacera à l'événement.</p><h3>Récupération de la cocarde</h3><p>Toutes les personnes participant à l'événement doivent présenter la preuve d'achat. Assure-toi donc d'avoir reçu la preuve d'achat du billet entreprise de la part de l’acheteur·euse.</p><p>À l'arrivée de la première personne qui participera au WAQ, on lui remettra une cocarde portant le nom de l’entreprise, un bracelet, et six macarons (2 par 5 à 7) pour les consommations.</p><h3>Échange de la cocarde et du bracelet</h3><p>Les échanges de cocardes et de bracelets entre collègues peuvent se faire de manière autonome. Les participant·es doivent s'arranger directement ensemble pour échanger la cocarde et le bracelet. Lors de l’échange, la prochaine personne utilisant le billet doit obligatoirement posséder la cocarde et le bracelet pour accéder au Terminal.</p><p><strong>Les échanges de billets entreprise peuvent être effectués à tout moment de la journée.</strong></p><h3>Consigne pour la cocarde et le bracelet</h3><p>La cocarde et le bracelet pourront être déposés en consigne au Service à la clientèle pour la prochaine personne qui participera à l'événement. Elle pourra les récupérer au même endroit. La consigne ne sera plus disponible après 21h. Après cette heure, les personnes devront s'organiser ensemble pour les échanges.</p><h3>Oubli ou perte de la cocarde et du bracelet</h3><p>Si la cocarde ou le bracelet sont perdus ou oubliés plus d'une fois, le billet entreprise sera facturé à nouveau dans son intégralité, au tarif en vigueur pendant l'événement. Il est impératif que le bracelet ET la cocarde soient échangés ensemble.</p>`,
  },
  {
    id: 6,
    question: `Où puis-je accéder à l’application du WAQ?`,
    answer: `<p>Elle est disponible gratuitement dans <a href='https://play.google.com/store/apps/details?id=com.swapcard.apps.android.snqc21&pcampaignid' target='_blank' rel='noopener noreferrer'>Google Play</a> et dans l’<a href='https://apps.apple.com/ca/app/waq-web-%C3%A0-qu%C3%A9bec/id1559771285?l=fr-CA&utm_source=dialoginsight&utm_medium=infolettre&utm_campaign=B185' target='_blank' rel='noopener noreferrer'>App store</a>.</p><p>Tu peux aussi utiliser la <a href='https://app.swapcard.com/event/web-a-quebec-waq24' target='_blank' rel='noopener noreferrer'>web app</a>.</p>`,
  },
  {
    id: 7,
    question: `Comment se connecter une première fois à l’application?`,
    answer: `<p>Tu dois te connecter à l’aide du courriel d’accueil qui a été envoyé quelques jours avant le début de l’événement.</p><p>Le courriel utilisé doit correspondre à celui indiqué lorsque l’attribution du billet a été faite par l’acheteur. Si tu souhaites réinitialiser ton mot de passe, tu dois cliquer sur ENVOYER UN LIEN MAGIQUE. À partir de ce lien, tu seras en mesure de changer ton mot de passe, et ainsi te connecter.</p><p>Une procédure détaillée sera indiquée dans le courriel que tu recevras.</p>`,
  },
  {
    id: 8,
    question: `Est-ce que les conférences seront disponibles en rediffusion?`,
    answer: `<p>Les conférences de la Salle Cossette seront disponibles pendant 90 jours à partir du 31 mai 2024.</p><p>Seules les personnes détentrices d’un billet pour l’événement auront accès aux conférences.</p><p>Elles seront accessibles dans l’application.</p>`,
  },
  {
    id: 9,
    question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
    answer: `<p>Des billets accès complet du WAQ sont encore disponibles. Réserve ta place maintenant en te procurant ton billet ici 👉 <a href="/billetterie">Acheter mon billet</a>.</p><p>Les billets entreprise sont tous vendus, ils ne sont donc plus disponibles.</p>`,
  },
  {
    id: 10,
    question: `Y a-t’il des billets étudiants?`,
    answer: `<p>Oui, mais tous les billets étudiants disponibles ont trouvé preneurs!</p>`,
  },
  {
    id: 11,
    question: `Est-ce possible de partager un billet?`,
    answer: `<p>Un nouveau billet est disponible pour l’édition 2024; le billet entreprise! Tu peux assister aux conférences du matin et passer le relais à ta collègue en après-midi. Ce billet permet aussi 6 accès à la plateforme événementielle pour réseauter et écouter les contenus de la salle principale en rediffusion après l’événement.</p><p>Les billets accès complet à 995 $ + taxes ne sont pas partageables entre participant·e.</p>`,
  },
  {
    id: 12,
    question: `Est-ce que je peux me faire rembourser mon billet?`,
    answer: `<p>Les billets sont des ventes finales. Cependant, ils peuvent être transférés à une autre personne si la cocarde de la personne participant à l’événement n’a pas été récupérée. Pour transférer ton billet à une autre personne, communique avec le service à la clientèle à <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>.</p>`,
  },
  {
    id: 13,
    question: `Comment faire pour que mon entreprise soit partenaire du WAQ?`,
    answer: `<p>Tout d’abord, bonne décision! Écris-nous à <a href='mailto:partenariats@webaquebec.org'>partenariats@webaquebec.org</a>.</p>`,
  },
  {
    id: 14,
    question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
    answer: `<p>L’appel à conférences pour le WAQ24 est terminé. Tu peux toujours nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  },
  // Prévente non débutée
  // {
  //   id: X,
  //   question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
  //   answer: `<p>Les billets pour le WAQ24 ne sont pas encore disponibles. Par contre, tu peux t’inscrire à notre liste d’attente - tu recevras un courriel aussitôt qu’il sera possible de réserver ta place!</p><p><a href="https://ti.to/web-a-quebec/waq24/fr" target="_blank">Je m’inscris</a></p>`,
  // },
  // Prévente en cours
  // {
  //   id: X,
  //   question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
  //   answer: `<p>La prévente du WAQ est officiellement lancée! Réserve ta place maintenant en te procurant ton billet pour 2024 ici 👉 <a href="/billetterie">Acheter mon billet</a>.</p>`,
  // },
  // Vente en cours
  // {
  //   id: X,
  //   question: `Comment est-ce que je peux réserver ma place pour le WAQ24?`,
  //   answer: `<p>Des billets accès complet du WAQ sont encore disponibles. Réserve ta place maintenant en te procurant ton billet ici 👉 <a href="/billetterie">Acheter mon billet</a>.</p>`,
  // },
  // Appel à conférence non débuté
  // {
  //   id: X,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 n’est pas encore en cours. Abonne-toi à l’infolettre, et tu seras informé·e aussitôt qu’il sera possible de déposer une proposition. Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
  // Appel à conférence en cours
  // {
  //   id: X,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 est en cours jusqu'au 15 janvier 2024. Pour tous les détails de l’implication et le dépôt d’une candidature, consulte la page <a href="/appel-a-conferences">Appel à conférences.</a> Tu peux aussi nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
  // Appel à conférence terminé
  // {
  //   id: X,
  //   question: `J’aimerais soumettre une proposition de conférence. Comment faire?`,
  //   answer: `<p>L’appel à conférences pour le WAQ24 est terminé. Tu peux toujours nous écrire à <a href="mailto:conferences@quebecnumerique.com">conferences@quebecnumerique.com</a> si tu as des questions!</p>`,
  // },
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
