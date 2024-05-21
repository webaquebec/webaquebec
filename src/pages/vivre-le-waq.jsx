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
              <li>
                <a
                  href='https://hotel71.ca/?gclid=CjwKCAiA_vKeBhAdEiwAFb_nrXGP73ERo9V2B50lx_djtw-nQPs7LZfmpF-sOFpstzBAOwOJPpk7pxoCzRAQAvD_BwE'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hôtel 71
                </a>
              </li>
              <li>
                <a
                  href='https://auberge.qc.ca/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Auberge Saint-Pierre
                </a>
              </li>
              <li>
                <a
                  href='https://bookings.travelclick.com/12418?groupID=4216751&hotelID=12418&languageid=3#/guestsandrooms'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hôtel Le Germain Québec
                </a>
              </li>
              <li>
                <a
                  href='https://www.leportroyal.com/fr'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hôtel Port Royal
                </a>
              </li>
              <li>
                <a
                  href='https://loftsvieuxquebec.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Les Lofts Vieux-Québec
                </a>
              </li>
              <li>
                <a
                  href='https://www.bestwestern.com/fr_FR/book/hotel-rooms.67020.html?promoCode=ECBXIGJ'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Hôtel Québec Centre-Ville – Best Western Plus
                </a>
              </li>
            </ul>
            <h2>{t('liveTheWAQ.eat.title')}</h2>
            <p>{t('liveTheWAQ.eat.text')}</p>
            <ul>
              <li>
                <a
                  href='https://www.lecafedumonde.com/#/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Café du Monde
                </a>{' '}
                ($$$)
              </li>
              <li>
                <a
                  href='http://restopubqdesac.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Q-de-Sac Resto-Pub
                </a>{' '}
                ($$)
              </li>
              <li>
                <a
                  href='https://www.cochondingue.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Le Cochon Dingue
                </a>{' '}
                ($$)
              </li>
              <li>
                <a
                  href='https://www.archibaldmicrobrasserie.ca/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Archibald
                </a>{' '}
                ($$)
              </li>
              <li>
                <a
                  href='https://sapristi.ca/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Sapristi
                </a>{' '}
                ($$)
              </li>
              <li>
                <a
                  href='https://ilmatto.ca/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Il Matto
                </a>{' '}
                ($$$)
              </li>
              <li>
                <a
                  href='https://chezriouxetpettigrew.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Chez Rioux et Pettigrew
                </a>{' '}
                ($$$)
              </li>
              <li>
                <a
                  href='https://donresto.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Don Vegan
                </a>{' '}
                ($$$)
              </li>
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
