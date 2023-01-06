// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import TeamMemberCard from '../../views/OurTeamPageView/TeamMemberCard';
import TeamGallery from '../../views/OurTeamPageView/TeamGallery';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { greaterThan, lessThan } from '../../utils/mediaQuery';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';

// images
import alexisRodrigue from '../../images/about/volunteers/alexis_rodrigue.jpg';
import annieDeshaies from '../../images/about/volunteers/annie_deshaies.jpg';
import bertrandLirette from '../../images/about/volunteers/bertrand_lirette.jpg';
import claudieMathieu from '../../images/about/volunteers/claudie_mathieu.jpg';
import florianMartin from '../../images/about/volunteers/florian_martin.jpg';
import inconnu from '../../images/about/volunteers/inconnu.jpg';
import jeanDavidRheaume from '../../images/about/volunteers/jean-david_rheaume.jpg';
import jeanNicolasGauthier from '../../images/about/volunteers/jean-nicolas_gauthier.jpg';
import jeanPhilippeBougie from '../../images/about/volunteers/jean-philippe_bougie.jpg';
import josiannePicard from '../../images/about/volunteers/josianne_picard.jpg';
import julieRoyer from '../../images/about/volunteers/julie_royer.jpg';
import krystinaHamel from '../../images/about/volunteers/krystina_hamel.jpg';
import laurentHarel from '../../images/about/volunteers/laurent_harel.jpg';
import marcVincentLetellier from '../../images/about/volunteers/marc-vincent_letellier.jpg';
import marieMicheleBouchard from '../../images/about/volunteers/marie-michele_bouchard.jpg';
import mariePierAmyot from '../../images/about/volunteers/marie-pier_amyot.jpg';
import mariePierRoyDube from '../../images/about/volunteers/marie-pier_roy_dube.jpg';
import maryElizabethLagace from '../../images/about/volunteers/mary-elizabeth_lagace.jpg';
import mathieuLarouche from '../../images/about/volunteers/mathieu_larouche.jpg';
import oceaneColling from '../../images/about/volunteers/oceane_colling.jpg';
import rosalieSimard from '../../images/about/volunteers/rosalie_simard.jpg';
import vincentBissonnette from '../../images/about/volunteers/vincent_bissonnette.jpg';

// styles
import breakpoints from '../../styles/breakpoints';
import { introStyle } from '../../styles/global';
import colors from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';

const AboutIntro = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const sectionTitle = css`
  color: ${colors.bleu80};

  font-family: ${fontFamilies.redaction};
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [36, 60], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [40, 66], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const VolunteersTitle = styled.h2`
  position: relative;

  display: inline-flex;
  justify-content: center;

  font-family: ${fontFamilies.redaction};
`;

const TitleLines = styled.div`
  text-align: left;

  span {
    position: relative;

    display: block;

    &:last-child {
      ${breakpointsRange(
        [{ prop: 'marginLeft', sizes: [70, 150], bases: [16, 20] }],
        breakpoints.spacings
      )};
    }
  }
`;

const GalleriesWrapper = styled.div`
  width: 100%;
  padding: 0 var(--container-gutter);

  overflow: visible;

  text-align: center;

  && > * + * {
    margin-top: calc(0.5 * var(--container-gutter));
  }
`;

const CATitle = styled.h2`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [24, 64], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 64], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const CAList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  list-style: none;

  ${greaterThan(832)} {
    flex-wrap: nowrap;
  }
`;

const CAItem = styled.li`
  max-width: 80%;
  margin-bottom: 50px;
  padding-bottom: 114px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [30, 50], bases: [16, 20] }],
    breakpoints.spacings
  )};

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(odd) {
    ${greaterThan(832)} {
      margin-top: 10%;
    }
  }

  &:nth-child(even) {
    ${lessThan(832)} {
      margin-left: auto;
    }
  }

  ${greaterThan(832)} {
    margin: 0 16px;
  }
`;

const OurTeamPage = () => {
  const sectionsData = [
    {
      id: 0,
      name: 'responsables',
      members: [
        {
          id: 0,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
      ],
    },
    {
      id: 1,
      name: 'comité de programmation',
      members: [
        {
          id: 0,
          photoUrl: alexisRodrigue,
          name: 'Alexis Rodrigue',
          job: '???',
          email: 'alexis@alexisrodrigue.com',
        },
      ],
    },
    {
      id: 1,
      name: 'comité des communications',
      members: [
        {
          id: 0,
          photoUrl: jeanDavidRheaume,
          name: 'Jean-David Rhéaume',
          job: 'Chargé de projet Web',
          email: 'jean-david@webaquebec.org',
        },
        {
          id: 1,
          photoUrl: mariePierAmyot,
          name: 'Marie-Pier Amyot',
          job: '???',
          email: 'marie-pier@webaquebec.org',
        },
        {
          id: 2,
          photoUrl: mariePierRoyDube,
          name: 'Marie-Pier Roy Dubé',
          job: '???',
          email: 'mariepier.roydube@gmail.com',
        },
      ],
    },
    {
      id: 2,
      name: 'comité design',
      members: [
        {
          id: 0,
          photoUrl: marieMicheleBouchard,
          name: 'Marie-Michèle Bouchard',
          job: 'Designer graphique',
          email: 'marie-michele@webaquebec.org',
        },
        {
          id: 1,
          photoUrl: jeanNicolasGauthier,
          name: 'Jean-Nicolas Gauthier',
          job: 'Designer graphique',
          email: 'jean-nicolas@webaquebec.org',
        },
        {
          id: 2,
          photoUrl: bertrandLirette,
          name: 'Bertrand Lirette',
          job: 'Curateur design',
          email: 'blirette@webaquebec.org',
        },
        {
          id: 3,
          photoUrl: josiannePicard,
          name: 'Josianne Picard',
          job: '???',
          email: 'josianne.picard@webaquebec.org',
        },
        {
          id: 4,
          photoUrl: marcVincentLetellier,
          name: 'Marc-Vincent Letellier',
          job: 'Designer graphique',
          email: 'marc-vincent@webaquebec.org',
        },
        {
          id: 5,
          photoUrl: vincentBissonnette,
          name: 'Vincent Bissonnette',
          job: 'Designer graphique',
          email: 'vincent.bissonnette@webaquebec.org',
        },
      ],
    },
    {
      id: 3,
      name: 'comité web',
      members: [
        {
          id: 0,
          photoUrl: florianMartin,
          name: 'Florian Martin',
          job: 'Développeur Web Frontend',
          email: 'florian.martin@webaquebec.org',
        },
        {
          id: 1,
          photoUrl: krystinaHamel,
          name: 'Krystina Hamel',
          job: 'Développeur Web Frontend',
          email: 'krystina@webaquebec.org',
        },
        {
          id: 2,
          photoUrl: laurentHarel,
          name: 'Laurent Harel',
          job: 'Développeur Web Fullstack',
          email: 'laurent@webaquebec.org',
        },
      ],
    },
    {
      id: 4,
      name: 'divers',
      members: [
        {
          id: 0,
          photoUrl: annieDeshaies,
          name: 'Annie Deshaies',
          job: '???',
          email: 'annie.deshaies@gmail.com',
        },
        {
          id: 1,
          photoUrl: claudieMathieu,
          name: 'Claudie Mathieu',
          job: '???',
          email: 'claudie.mathieu@webaquebec.org',
        },
        {
          id: 3,
          photoUrl: inconnu,
          name: 'Inconnu',
          job: '???',
          email: '???@webaquebec.org',
        },
        {
          id: 4,
          photoUrl: jeanPhilippeBougie,
          name: 'Jean-Philippe Bougie',
          job: '???',
          email: 'jp.bougie@gmail.com',
        },
        {
          id: 5,
          photoUrl: julieRoyer,
          name: 'Julie Royer',
          job: '???',
          email: 'julie.royer@design.ulaval.ca',
        },
        {
          id: 6,
          photoUrl: maryElizabethLagace,
          name: 'Mary-Élizabeth Lagacé',
          job: '???',
          email: 'mary-elizabeth@webaquebec.org',
        },
        {
          id: 7,
          photoUrl: mathieuLarouche,
          name: 'Mathieu Larouche',
          job: '???',
          email: 'matdube@gmail.com',
        },
        {
          id: 8,
          photoUrl: oceaneColling,
          name: 'Océane Colling',
          job: '???',
          email: 'oceane.colling@webaquebec.org',
        },
        {
          id: 9,
          photoUrl: rosalieSimard,
          name: 'Rosalie Simard',
          job: '???',
          email: 'rosalie.simard1@gmail.com',
        },
      ],
    },
  ];

  const sectionCAData = [
    {
      id: 0,
      photoUrl: jeanDavidRheaume,
      name: 'Jean-David Rhéaume',
      job: 'Responsable de lorem',
      email: 'email@webaquebec.org',
    },
    {
      id: 1,
      photoUrl: jeanDavidRheaume,
      name: 'Jean-David Rhéaume',
      job: 'Responsable de ipsum',
      email: 'email@webaquebec.org',
    },
    {
      id: 2,
      photoUrl: jeanDavidRheaume,
      name: 'Jean-David Rhéaume',
      job: 'Responsable de lorem ipsum',
      email: 'email@webaquebec.org',
    },
  ];

  return (
    <>
      <SEO title='Notre équipe' description='Nos bénévoles annuels de feu' />

      <AboutTabs activeTabId={1} />

      <Center
        maxWidth='770px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <AboutIntro css={introStyle}>
          Donner vie au WAQ, c’est beaucoup de travail. Une chance qu’on peut
          compter sur une fabuleuse équipe de bénévoles qui investit temps et
          amour. ❤️ Chaque personne qui s&apos;implique amène son talent, son
          expertise et sa personnalité. C’est ce qui fait du WAQ un événement
          aussi exceptionnel!
        </AboutIntro>
      </Center>

      <Center maxWidth='1080px' intrinsic>
        <VolunteersTitle css={sectionTitle}>
          <TitleLines>
            <span>nos bénévoles</span>
            <span>annuels de feu</span>
          </TitleLines>
        </VolunteersTitle>

        <GalleriesWrapper>
          {sectionsData.map((item) => (
            <TeamGallery key={`gallery${item.id}`} membersData={item} />
          ))}
        </GalleriesWrapper>
      </Center>

      <Center maxWidth='1080px' intrinsic gutters='var(--container-gutter)'>
        <CATitle css={sectionTitle}>notre C.A.</CATitle>
        <CAList>
          {sectionCAData.map((item) => (
            <CAItem>
              <TeamMemberCard key={`ca-${item.id}`} member={item} />
            </CAItem>
          ))}
        </CAList>
      </Center>
    </>
  );
};

OurTeamPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurTeamPage;
