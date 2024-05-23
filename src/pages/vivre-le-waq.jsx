// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Center from '../components/LayoutSections/Center';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import Stack from '../components/LayoutSections/Stack';
import colors from '../styles/colors';

// images
// import imgTerminal from '../images/liveTheWAQ/img-terminal.jpg';
// import img5a7 from '../images/liveTheWAQ/img-5-a-7.jpg';
// import imgGrizzlyFuzz from '../images/liveTheWAQ/img-grizzly-fuzz.jpg';

const LiveTheWAQTitle = styled.h1`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [60, 150], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] },
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
    [
      { prop: 'top', sizes: [0, 200], bases: [16, 20] },
      { prop: 'right', sizes: [0, 400], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const LiveTheWAQIntro = styled.div`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 16] }],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};
`;

const Container = styled(SectionContainer)`
  padding-bottom: 0;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105] },
      { prop: 'marginBottom', sizes: [202, 242] },
    ],
    breakpoints.spacings,
    { bases: [16, 20] }
  )};

  ::before {
    top: -60vh;

    height: 60vh;
  }

  ::after {
    bottom: -40vh;

    height: 40vh;
  }
`;

const TextContent = styled.div`
  color: ${colors.gris100};

  h2 {
    ${breakpointsRange(
      [
        { prop: 'marginTop', sizes: [60, 90], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  p {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }

  ul {
    ${breakpointsRange(
      [
        { prop: 'marginLeft', sizes: [16, 24], bases: [16, 20] },
        { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
      ],
      breakpoints.spacings
    )};
  }
`;

const LiveTheWAQ = () => {
  const data = useStaticQuery(
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

  const hotels = [
    {
      id: 1,
      name: 'Hôtel 71',
      link: 'https://hotel71.ca/?gclid=CjwKCAiA_vKeBhAdEiwAFb_nrXGP73ERo9V2B50lx_djtw-nQPs7LZfmpF-sOFpstzBAOwOJPpk7pxoCzRAQAvD_BwE',
    },
    {
      id: 2,
      name: 'Auberge Saint-Pierre',
      link: 'https://auberge.qc.ca/',
    },
    {
      id: 3,
      name: 'Hôtel Le Germain Québec',
      link: 'https://bookings.travelclick.com/12418?groupID=4216751&hotelID=12418&languageid=3#/guestsandrooms',
    },
    {
      id: 4,
      name: 'Hôtel Port Royal',
      link: 'https://www.leportroyal.com/fr',
    },
    {
      id: 5,
      name: 'Les Lofts Vieux-Québec',
      link: 'https://loftsvieuxquebec.com/',
    },
    {
      id: 6,
      name: 'Hôtel Québec Centre-Ville – Best Western Plus',
      link: 'https://www.bestwestern.com/fr_FR/book/hotel-rooms.67020.html?promoCode=ECBXIGJ',
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: 'Café du Monde',
      price: '($$$)',
      link: 'https://www.lecafedumonde.com/#/',
    },
    {
      id: 2,
      name: 'Q-de-Sac Resto-Pub',
      price: '($$)',
      link: 'http://restopubqdesac.com/',
    },
    {
      id: 3,
      name: 'Le Cochon Dingue',
      price: '($$)',
      link: 'https://www.cochondingue.com/',
    },
    {
      id: 4,
      name: 'Archibald',
      price: '($$)',
      link: 'https://www.archibaldmicrobrasserie.ca/',
    },
    {
      id: 5,
      name: 'Sapristi',
      price: '($$)',
      link: 'https://sapristi.ca/',
    },
    {
      id: 6,
      name: 'Il Matto',
      price: '($$$)',
      link: 'https://ilmatto.ca/',
    },
    {
      id: 7,
      name: 'Chez Rioux et Pettigrew',
      price: '($$$)',
      link: 'https://chezriouxetpettigrew.com/',
    },
    {
      id: 8,
      name: 'Don Vegan',
      price: '($$$)',
      link: 'https://donresto.com/',
    },
  ];

  return (
    <>
      <SEO
        title='Vivre le WAQ'
        description='Plonge dans l’expérience WAQ à 100%! Besoin de conseils pour dormir, manger ou optimiser ta participation? Trouve toutes les réponses ici.'
      />

      <Center
        maxWidth='1240px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <LiveTheWAQTitle css={h1AltStyle}>vivre le waq</LiveTheWAQTitle>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center
        maxWidth='850px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <LiveTheWAQIntro css={introStyle}>
          <Stack>
            <p>
              Plonge dans l’expérience WAQ à 100%! Besoin de conseils pour
              dormir, manger ou optimiser ta participation? Trouve toutes les
              réponses ici.
            </p>
          </Stack>
        </LiveTheWAQIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='850px' gutters='var(--container-gutter)'>
          <TextContent>
            <h2>Au coeur de la ville</h2>
            <p>
              En plein centre-ville de Québec, le Web à Québec est un événement
              numérique local de calibre international. Dans une ambiance
              électrique et festive, une communauté fidèle se rassemble pendant
              3 jours intenses de rencontres, de conférences de haut calibre et
              de festivités. Situé au Terminal de croisière - Port de Québec,
              l’événement est un incontournable pour tous les créateurs et
              créatrices du Web d’ici et d’ailleurs.
            </p>
            <h2>Où dormir ?</h2>
            <p>
              Envie de vivre l’expérience du WAQ en mode touriste? Regarde ces
              options d’hébergement juste à côté de l’événement. On te
              recommande de vérifier les disponibilités aux endroits suivants :
            </p>
            <ul>
              {hotels.map((hotel) => (
                <li key={`hotel-${hotel.id}`}>
                  <a
                    href={hotel.link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {hotel.name}
                  </a>
                </li>
              ))}
            </ul>
            <h2>Où manger ?</h2>
            <p>
              Ton billet de l’événement inclut les repas du midi, cafés, thés,
              collations, bouchées et boissons sans frais. Tenté par les saveurs
              locales du quartier Petit-Champlain? Voici notre sélection de
              favoris à ne pas manquer :
            </p>
            <ul>
              {restaurants.map((restaurant) => (
                <li key={`restaurant-${restaurant.id}`}>
                  <a
                    href={restaurant.link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {restaurant.name}
                  </a>{' '}
                  {restaurant.price}
                </li>
              ))}
            </ul>
            <h2>Comment s’y rendre ?</h2>
            <p>
              Le{' '}
              <a
                href='https://goo.gl/maps/WK7R5d4oBHQgyhHT6'
                rel='noopener noreferrer'
                target='_blank'
              >
                Terminal de croisière – Port de Québec
              </a>{' '}
              est très accessible. Arrive tôt pour ne pas manquer la première
              conférence vedette du matin, qui attire toujours une grande foule.
            </p>
            <ul>
              <li>
                Le Terminal est bien desservi par plusieurs lignes de bus du
                Réseau de transport de la Capitale (RTC), dont les lignes #1 et
                #11. Pour plus de détails, visite le site Web ou installe
                l’application.
              </li>
              <li>
                Un parking payant est disponible au coût de 20$ par jour : on
                encourage le covoiturage entre collègues ou amis.
              </li>
              <li>
                Les{' '}
                <a
                  href='http://www.taxiscoop-quebec.com/?q=en'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Taxis Coop Québec
                </a>{' '}
                ou Uber sont aussi d’excellentes options, sans oublier la{' '}
                <a
                  href='https://aveloquebec.ca/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  station àVélo
                </a>{' '}
                à deux minutes à pied, une alternative écologique et pratique!
              </li>
            </ul>
            <h2>Faire la fête</h2>
            <p>
              Chaque journée bien remplie se termine par un 5 à 7 dans le Bistro
              WAQ, avec une vue imprenable sur le Fleuve Saint-Laurent. La
              terrasse est l’endroit parfait pour prendre un verre à l’extérieur
              et faire des rencontres professionnelles dans une atmosphère
              décontractée.
            </p>
            <p>
              Le WAQ est bien connu pour ses apéros festifs. Tu ne veux
              absolument pas manquer ses soirées légendaires animées par ses
              partenaires! Et surtout, sois responsable et n’utilise pas ta
              voiture si tu consommes de l’alcool.
            </p>
            <h2>Show de fermeture - DJ set</h2>
            <p>
              Clôture ton WAQ24 en grand avec le tout premier show de fermeture
              à la nouvelle salle de BLEUFEU, le Grizzly Fuzz, situé en plein
              cœur de St-Roch ! Cet événement exclusif pour les participants du
              WAQ promet d’être incroyable.
            </p>
            <p>
              Ton billet d’entrée n’inclut pas les consommations. Les places
              sont limitées et sont disponibles aux détenteurs d’un billet Accès
              complet pour le WAQ, la réservation requise.
            </p>
            <p>
              Prépare-toi à danser sur les DJ sets de Claude Bégin (Alaclair
              Ensemble), Dominic Pelletier (Caravane, Bonanza) et Raphaël Potvin
              (Caravane). Les portes ouvrent à 19h, après le dernier 5 à 7 du
              WAQ au Terminal de croisière - Port de Québec. Le DJ set commence
              à 20h. La soirée se poursuit dans une ambiance-bar pour fêter
              jusqu’aux petites heures avec tes nouvelles connaissances et amis
              du WAQ.
            </p>
            <h2>Mobilité réduite</h2>
            <p>
              Dans le but de faciliter l’accès à l’événement, le WAQ propose un
              ascenseur pour les conférences au deuxième étage, des
              stationnements réservés près de l’entrée et des aménagements pour
              les fauteuils roulants. Pour toute assistance supplémentaire,
              contacte-nous à{' '}
              <a href='mailto:info@webaquebec.org'>info@webaquebec.org</a>.
            </p>
            <h2>Le Web à Québec en bref…</h2>
            <p>
              Le WAQ est une expérience inoubliable de 3 jours, alliant
              conférences de haute qualité, rencontres inspirantes et
              divertissements. L’édition 2024 se déroule exclusivement en
              personne pour offrir un événement plus humain et chaleureux. Les
              conférences de la salle principale (Cossette) seront disponibles
              en rediffusion après l’événement. Ne rate pas cette occasion de
              découvrir les dernières tendances du numérique et de réseauter
              dans une ambiance conviviale ! Des événements comme celui-là, il
              n’en existe pas d’autres… 👀
            </p>
          </TextContent>
        </Center>
      </Container>
    </>
  );
};

LiveTheWAQ.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default LiveTheWAQ;
