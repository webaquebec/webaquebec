// vendors
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

// components
import { useTranslation } from 'react-i18next';
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

const AboutIntro = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const sectionTitle = css`
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

  color: ${colors.blueberry};
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

const OurTeamPage = () => {
  const { t } = useTranslation();

  const sectionsData = useMemo(
    () => [
      {
        id: 0,
        name: t('about.team.programCommittee'),
        members: [
          {
            id: 0,
            pictureId: 'annie_deshaies',
            name: 'Annie Deshaies',
            job: t('about.team.developmentTrack'),
          },
          {
            id: 1,
            pictureId: 'antoine_lefrancois',
            name: 'Antoine Lefrançois',
            job: t('about.team.developmentTrack'),
          },
          {
            id: 2,
            pictureId: 'jean-philippe_bougie',
            name: 'Jean-Philippe Bougie',
            job: t('about.team.developmentTrack'),
          },
          {
            id: 3,
            pictureId: 'mathieu_larouche',
            name: 'Mathieu Larouche',
            job: t('about.team.developmentTrack'),
          },
          {
            id: 4,
            pictureId: 'bertrand_lirette',
            name: 'Bertrand Lirette',
            job: t('about.team.designTrack'),
          },
          {
            id: 5,
            pictureId: 'chany_lagueux',
            name: 'Chany Lagueux',
            job: t('about.team.designTrack'),
          },
          {
            id: 6,
            pictureId: 'julie_royer',
            name: 'Julie Royer',
            job: t('about.team.designTrack'),
          },
          {
            id: 7,
            pictureId: 'placeholder',
            name: 'Olivier Caron',
            job: t('about.team.designTrack'),
          },
          {
            id: 8,
            pictureId: 'alexis_rodrigue',
            name: 'Alexis Rodrigue',
            job: t('about.team.communicationTrack'),
          },
          {
            id: 9,
            pictureId: 'placeholder2',
            name: 'Jean-François Verville',
            job: t('about.team.communicationTrack'),
          },
          {
            id: 10,
            pictureId: 'marie-pier_roy_dube',
            name: 'Marie-Pier Roy Dubé',
            job: t('about.team.communicationTrack'),
          },
          {
            id: 11,
            pictureId: 'placeholder2',
            name: 'Jean Benoît Dubé',
            job: t('about.team.communicationTrack'),
          },
          {
            id: 12,
            pictureId: 'placeholder2',
            name: 'Claudine Beaudoin',
            job: t('about.team.innovationTrack'),
          },
          {
            id: 13,
            pictureId: 'placeholder',
            name: 'Élodie Monette',
            job: t('about.team.innovationTrack'),
          },
          {
            id: 14,
            pictureId: 'placeholder2',
            name: 'Rosalie Simard',
            job: t('about.team.innovationTrack'),
          },
          {
            id: 15,
            pictureId: 'placeholder',
            name: 'Pierre Prévot',
            job: t('about.team.innovationTrack'),
          },
        ],
      },
      {
        id: 1,
        name: t('about.team.communicationsCommittee'),
        members: [
          {
            id: 0,
            pictureId: 'marie-pier_amyot',
            name: 'Marie-Pier Amyot',
            job: t('about.team.committeeLeader'),
          },
          {
            id: 1,
            pictureId: 'oceane_colling',
            name: 'Océane Colling',
            job: t('about.team.committeeLeader'),
          },
          {
            id: 2,
            pictureId: 'kariann_giroux',
            name: 'Kariann Giroux',
          },
          {
            id: 3,
            pictureId: 'alexandra_plante',
            name: 'Alexandra Plante',
          },
          {
            id: 4,
            pictureId: 'nadia_chih',
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
          {
            id: 7,
            pictureId: 'placeholder',
            name: 'Léanne Deblois',
          },
          {
            id: 8,
            pictureId: 'placeholder2',
            name: 'Sandrine Thivierge',
          },
        ],
      },
      {
        id: 2,
        name: t('about.team.designCommittee'),
        members: [
          {
            id: 0,
            pictureId: 'marie-michele_bouchard',
            name: 'Marie-Michèle Bouchard',
            job: t('about.team.committeeLeader'),
          },
          {
            id: 1,
            pictureId: 'jean-nicolas_gauthier',
            name: 'Jean-Nicolas Gauthier',
            job: t('about.team.committeeLeader'),
          },
          {
            id: 2,
            pictureId: 'josianne_picard',
            name: 'Josianne Picard',
          },
          {
            id: 3,
            pictureId: 'claudie_mathieu',
            name: 'Claudie Mathieu',
          },
          {
            id: 4,
            pictureId: 'placeholder2',
            name: 'Geneviève Nadeau',
          },
          {
            id: 5,
            pictureId: 'placeholder',
            name: 'Miguël Lapointe Duchesne',
          },
          {
            id: 6,
            pictureId: 'placeholder2',
            name: 'Kathleen Higgins',
          },
          {
            id: 7,
            pictureId: 'placeholder',
            name: 'Andréanne Boucher',
          },
        ],
      },
      {
        id: 3,
        name: t('about.team.webCommittee'),
        members: [
          {
            id: 0,
            pictureId: 'jean-david_rheaume',
            name: 'Jean-David Rhéaume',
            job: t('about.team.committeeLeader'),
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
      // {
      //   id: 4,
      //   name: 'comité VIP',
      //   members: [
      //     {
      //       id: 0,
      //       pictureId: 'placeholder2',
      //       name: 'Jessica Sinclair',
      //     },
      //     {
      //       id: 1,
      //       pictureId: 'placeholder',
      //       name: 'Cynthia Lafontaine',
      //     },
      //   ],
      // },
    ],
    [t]
  );

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
    [picturesData.allFile.edges, sectionsData]
  );

  return (
    <>
      <SEO
        title={t('about.team.title')}
        description={t('about.team.description')}
      />

      <AboutTabs activeTabId={1} />

      <Container forwardedAs='div' faded>
        <Center
          maxWidth='736px'
          gutters='var(--container-gutter)'
          withText
          intrinsic
        >
          <AboutIntro css={introStyle}>{t('about.team.intro')}</AboutIntro>
        </Center>

        <Center maxWidth='1080px' intrinsic>
          <VolunteersTitle css={sectionTitle}>
            <TitleLines
              dangerouslySetInnerHTML={{ __html: t('about.team.subtitle') }}
            />
          </VolunteersTitle>
        </Center>

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

export default OurTeamPage;
