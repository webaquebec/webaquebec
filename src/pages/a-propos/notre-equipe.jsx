// vendors
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../../components/SEO';
import SectionContainer from '../../components/SectionContainer';
import Center from '../../components/LayoutSections/Center';
import TeamGallery from '../../views/OurTeamPageView/TeamGallery';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';

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
  color: ${colors.bleu90};

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

const Container = styled(SectionContainer)`
  padding-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [90, 242] }],
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

const GalleriesWrapper = styled.div`
  width: 100%;
  padding: 0 var(--container-gutter);

  overflow: visible;

  text-align: center;

  && > * + * {
    margin-top: calc(0.5 * var(--container-gutter));
  }
`;

const volunteersPictureQuery = graphql`
  fragment volunteerPhotoFragment on File {
    childImageSharp {
      fluid(quality: 99, maxWidth: 500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  query {
    allFile(filter: { dir: { regex: "/volunteers/" } }) {
      edges {
        node {
          name
          ...volunteerPhotoFragment
        }
      }
    }
  }
`;

const sectionsData = [
  {
    id: 0,
    name: 'comité de programmation',
    members: [
      {
        id: 0,
        pictureId: 'annie_deshaies',
        name: 'Annie Deshaies',
        job: 'Piste développement',
      },
      {
        id: 1,
        pictureId: 'placeholder',
        name: 'Antoine Lefrançois',
        job: 'Piste développement',
      },
      {
        id: 2,
        pictureId: 'jean-philippe_bougie',
        name: 'Jean-Philippe Bougie',
        job: 'Piste développement',
      },
      {
        id: 3,
        pictureId: 'mathieu_larouche',
        name: 'Mathieu Larouche',
        job: 'Piste développement',
      },
      {
        id: 4,
        pictureId: 'bertrand_lirette',
        name: 'Bertrand Lirette',
        job: 'Piste design',
      },
      {
        id: 5,
        pictureId: 'placeholder2',
        name: 'Chany Lagueux',
        job: 'Piste design',
      },
      {
        id: 6,
        pictureId: 'julie_royer',
        name: 'Julie Royer',
        job: 'Piste design',
      },
      {
        id: 7,
        pictureId: 'placeholder',
        name: 'Olivier Caron',
        job: 'Piste design',
      },
      {
        id: 8,
        pictureId: 'alexis_rodrigue',
        name: 'Alexis Rodrigue',
        job: 'Piste communication',
      },
      {
        id: 9,
        pictureId: 'placeholder2',
        name: 'Jean-François Verville',
        job: 'Piste communication',
      },
      {
        id: 10,
        pictureId: 'marie-pier_roy_dube',
        name: 'Marie-Pier Roy Dubé',
        job: 'Piste communication',
      },
      {
        id: 11,
        pictureId: 'placeholder',
        name: 'Martine Rioux',
        job: 'Piste communication',
      },
      {
        id: 12,
        pictureId: 'placeholder2',
        name: 'Claudine Beaudoin',
        job: 'Piste innovation',
      },
      {
        id: 13,
        pictureId: 'placeholder',
        name: 'Élodie Monette',
        job: 'Piste innovation',
      },
      {
        id: 14,
        pictureId: 'placeholder2',
        name: 'Hugues Foltz',
        job: 'Piste innovation',
      },
      {
        id: 15,
        pictureId: 'placeholder',
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
        pictureId: 'marie-pier_amyot',
        name: 'Marie-Pier Amyot',
        job: 'Responsable du comité',
      },
      {
        id: 1,
        pictureId: 'oceane_colling',
        name: 'Océane Colling',
      },
      {
        id: 2,
        pictureId: 'placeholder2',
        name: 'Karianne Giroux',
      },
      {
        id: 3,
        pictureId: 'placeholder',
        name: 'Alexandra Plante',
      },
      {
        id: 4,
        pictureId: 'placeholder2',
        name: 'Nadia Chih',
      },
      {
        id: 5,
        pictureId: 'marc-vincent_letellier',
        name: 'Marc-Vincent Letellier',
      },
      {
        id: 6,
        pictureId: 'mary-elizabeth_lagace',
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
        pictureId: 'marie-michele_bouchard',
        name: 'Marie-Michèle Bouchard',
        job: 'Responsable du comité',
      },
      {
        id: 1,
        pictureId: 'jean-nicolas_gauthier',
        name: 'Jean-Nicolas Gauthier',
        job: 'Responsable du comité',
      },
      {
        id: 3,
        pictureId: 'josianne_picard',
        name: 'Josianne Picard',
      },
      {
        id: 4,
        pictureId: 'claudie_mathieu',
        name: 'Claudie Mathieu',
      },
      {
        id: 5,
        pictureId: 'vincent_bissonnette',
        name: 'Vincent Bissonnette',
      },
      {
        id: 6,
        pictureId: 'placeholder',
        name: 'Léane Mei Dostie Chalifour',
      },
      {
        id: 7,
        pictureId: 'placeholder2',
        name: 'Geneviève Nadeau',
      },
    ],
  },
  {
    id: 3,
    name: 'comité web',
    members: [
      {
        id: 0,
        pictureId: 'jean-david_rheaume',
        name: 'Jean-David Rhéaume',
        job: 'Responsable du comité',
      },
      {
        id: 1,
        pictureId: 'florian_martin',
        name: 'Florian Martin',
      },
      {
        id: 2,
        pictureId: 'krystina_hamel',
        name: 'Krystina Hamel',
      },
      {
        id: 3,
        pictureId: 'laurent_harel',
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
        pictureId: 'placeholder2',
        name: 'Jessica Sinclair',
      },
      {
        id: 1,
        pictureId: 'placeholder',
        name: 'Cynthia Lafontaine',
      },
    ],
  },
];

const OurTeamPage = () => {
  const picturesData = useStaticQuery(volunteersPictureQuery);

  const data = useMemo(
    () =>
      sectionsData.map((section) => ({
        ...section,
        members: section.members.map((member) => {
          const pictureData = picturesData.allFile.edges.find(
            ({ node }) => node.name === member.pictureId
          );

          return {
            ...member,
            picture: pictureData?.node.childImageSharp.fluid,
          };
        }),
      })),
    [picturesData.allFile.edges]
  );

  return (
    <>
      <SEO title='Notre équipe' description='Nos bénévoles annuels de feu' />

      <AboutTabs activeTabId={1} />

      <Center
        maxWidth='736px'
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
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='1080px' intrinsic>
          <GalleriesWrapper>
            {data.map((item) => (
              <TeamGallery key={`gallery${item.id}`} membersData={item} />
            ))}
          </GalleriesWrapper>
        </Center>
      </Container>
    </>
  );
};

OurTeamPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurTeamPage;
