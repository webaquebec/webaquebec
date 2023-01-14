// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import TeamGallery from '../../views/OurTeamPageView/TeamGallery';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';

// images
import alexisRodrigue from '../../images/about/volunteers/alexis_rodrigue.jpg';
import annieDeshaies from '../../images/about/volunteers/annie_deshaies.jpg';
import bertrandLirette from '../../images/about/volunteers/bertrand_lirette.jpg';
import claudieMathieu from '../../images/about/volunteers/claudie_mathieu.jpg';
import florianMartin from '../../images/about/volunteers/florian_martin.jpg';
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
import vincentBissonnette from '../../images/about/volunteers/vincent_bissonnette.jpg';
import placeholder from '../../images/about/volunteers/placeholder.jpg';

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

const OurTeamPage = () => {
  const sectionsData = [
    {
      id: 0,
      name: 'comité de programmation',
      members: [
        {
          id: 0,
          photoUrl: annieDeshaies,
          name: 'Annie Deshaies',
          job: 'Piste développement',
        },
        {
          id: 1,
          photoUrl: placeholder,
          name: 'Antoine Lefrançois',
          job: 'Piste développement',
        },
        {
          id: 2,
          photoUrl: jeanPhilippeBougie,
          name: 'Jean-Philippe Bougie',
          job: 'Piste développement',
        },
        {
          id: 3,
          photoUrl: mathieuLarouche,
          name: 'Mathieu Larouche',
          job: 'Piste développement',
        },
        {
          id: 4,
          photoUrl: bertrandLirette,
          name: 'Bertrand Lirette',
          job: 'Piste design',
        },
        {
          id: 5,
          photoUrl: placeholder,
          name: 'Chany Lagueux',
          job: 'Piste design',
        },
        {
          id: 6,
          photoUrl: julieRoyer,
          name: 'Julie Royer',
          job: 'Piste design',
        },
        {
          id: 7,
          photoUrl: placeholder,
          name: 'Olivier Caron',
          job: 'Piste design',
        },
        {
          id: 8,
          photoUrl: alexisRodrigue,
          name: 'Alexis Rodrigue',
          job: 'Piste communication',
        },
        {
          id: 9,
          photoUrl: placeholder,
          name: 'Jean-François Verville',
          job: 'Piste communication',
        },
        {
          id: 10,
          photoUrl: mariePierRoyDube,
          name: 'Marie-Pier Roy Dubé',
          job: 'Piste communication',
        },
        {
          id: 11,
          photoUrl: placeholder,
          name: 'Martine Rioux',
          job: 'Piste communication',
        },
        {
          id: 12,
          photoUrl: placeholder,
          name: 'Claudine Beaudoin',
          job: 'Piste innovation',
        },
        {
          id: 13,
          photoUrl: placeholder,
          name: 'Élodie Monette',
          job: 'Piste innovation',
        },
        {
          id: 14,
          photoUrl: placeholder,
          name: 'Hugues Foltz',
          job: 'Piste innovation',
        },
        {
          id: 15,
          photoUrl: placeholder,
          name: 'Pierre Prévot',
          job: 'Piste innovation',
        },
      ],
    },
    {
      id: 1,
      name: 'comité des communications',
      members: [
        {
          id: 0,
          photoUrl: mariePierAmyot,
          name: 'Marie-Pier Amyot',
          job: 'Responsable du comité',
        },
        {
          id: 1,
          photoUrl: oceaneColling,
          name: 'Océane Colling',
        },
        {
          id: 2,
          photoUrl: placeholder,
          name: 'Karianne Giroux',
        },
        {
          id: 3,
          photoUrl: placeholder,
          name: 'Alexandra Plante',
        },
        {
          id: 4,
          photoUrl: placeholder,
          name: 'Nadia Chih',
        },
        {
          id: 5,
          photoUrl: marcVincentLetellier,
          name: 'Marc-Vincent Letellier',
        },
        {
          id: 6,
          photoUrl: maryElizabethLagace,
          name: 'Mary-Élizabeth Lagacé',
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
          job: 'Responsable du comité',
        },
        {
          id: 1,
          photoUrl: jeanNicolasGauthier,
          name: 'Jean-Nicolas Gauthier',
          job: 'Responsable du comité',
        },
        {
          id: 3,
          photoUrl: josiannePicard,
          name: 'Josianne Picard',
        },
        {
          id: 4,
          photoUrl: claudieMathieu,
          name: 'Claudie Mathieu',
        },
        {
          id: 5,
          photoUrl: vincentBissonnette,
          name: 'Vincent Bissonnette',
        },
        {
          id: 6,
          photoUrl: placeholder,
          name: 'Léane Mei Dostie Chalifour',
        },
      ],
    },
    {
      id: 3,
      name: 'comité web',
      members: [
        {
          id: 0,
          photoUrl: jeanDavidRheaume,
          name: 'Jean-David Rhéaume',
          job: 'Responsable du comité',
        },
        {
          id: 1,
          photoUrl: florianMartin,
          name: 'Florian Martin',
        },
        {
          id: 2,
          photoUrl: krystinaHamel,
          name: 'Krystina Hamel',
        },
        {
          id: 3,
          photoUrl: laurentHarel,
          name: 'Laurent Harel',
        },
      ],
    },
    {
      id: 4,
      name: 'comité VIP',
      members: [
        {
          id: 0,
          photoUrl: placeholder,
          name: 'Jessica Sinclair',
        },
        {
          id: 1,
          photoUrl: placeholder,
          name: 'Cynthia Lafontaine',
        },
      ],
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
    </>
  );
};

OurTeamPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurTeamPage;
