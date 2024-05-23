// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
        title={t('liveTheWAQ.title')}
        description={t('liveTheWAQ.description')}
      />

      <Center
        maxWidth='1240px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <LiveTheWAQTitle css={h1AltStyle}>
          {t('liveTheWAQ.title')}
        </LiveTheWAQTitle>
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
            <p>{t('liveTheWAQ.intro')}</p>
          </Stack>
        </LiveTheWAQIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='850px' gutters='var(--container-gutter)'>
          <TextContent>
            <h2>{t('liveTheWAQ.city.title')}</h2>
            <p>{t('liveTheWAQ.city.text')}</p>
            <h2>{t('liveTheWAQ.sleep.title')}</h2>
            <p>{t('liveTheWAQ.sleep.text')}</p>
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
            <h2>{t('liveTheWAQ.eat.title')}</h2>
            <p>{t('liveTheWAQ.eat.text')}</p>
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
            <h2>{t('liveTheWAQ.getThere.title')}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t('liveTheWAQ.getThere.text'),
              }}
            />
            <ul>
              <li
                dangerouslySetInnerHTML={{
                  __html: t('liveTheWAQ.getThere.bullet1'),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t('liveTheWAQ.getThere.bullet2'),
                }}
              />
              <li
                dangerouslySetInnerHTML={{
                  __html: t('liveTheWAQ.getThere.bullet3'),
                }}
              />
            </ul>
            <h2>{t('liveTheWAQ.party.title')}</h2>
            <p>{t('liveTheWAQ.party.text1')}</p>
            <p>{t('liveTheWAQ.party.text2')}</p>
            <h2>{t('liveTheWAQ.closing.title')}</h2>
            <p>{t('liveTheWAQ.closing.text1')}</p>
            <p>{t('liveTheWAQ.closing.text2')}</p>
            <p>{t('liveTheWAQ.closing.text3')}</p>
            <h2>{t('liveTheWAQ.accessibility.title')}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t('liveTheWAQ.accessibility.text'),
              }}
            />
            <h2>{t('liveTheWAQ.nutshell.title')}</h2>
            <p>{t('liveTheWAQ.nutshell.text')}</p>
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
