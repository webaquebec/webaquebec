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

  overflow: hidden;

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
  margin-bottom: 50px;

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
        {
          id: 1,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 2,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 3,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 4,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
        {
          id: 5,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 6,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 7,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 8,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
        {
          id: 9,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 10,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 11,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 12,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
        {
          id: 13,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 14,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
      ],
    },
    {
      id: 1,
      name: 'comité design',
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
        {
          id: 1,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 2,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 3,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 4,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
        {
          id: 5,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
      ],
    },
    {
      id: 2,
      name: 'comité web',
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
        {
          id: 1,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 2,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 3,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 4,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Amélie Bissonnette-Montminy',
          job: 'Design et communication',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
          twitter: 'https://twitter.com/',
          website: 'https://google.com/',
        },
        {
          id: 5,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          email: 'email@webaquebec.org',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: 6,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
        {
          id: 7,
          photoUrl: 'https://via.placeholder.com/250',
          name: 'Krystina Hamel',
          job: 'Développeur web front-end',
          website: 'https://google.com/',
        },
      ],
    },
  ];

  const sectionCAData = [
    {
      id: 0,
      photoUrl: 'https://via.placeholder.com/400',
      name: 'Amélie Bissonnette-Montminy',
      job: 'Design et communication',
      email: 'email@webaquebec.org',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://twitter.com/',
      website: 'https://google.com/',
    },
    {
      id: 1,
      photoUrl: 'https://via.placeholder.com/400',
      name: 'Krystina Hamel',
      job: 'Développeur web front-end',
      email: 'email@webaquebec.org',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      id: 2,
      photoUrl: 'https://via.placeholder.com/400',
      name: 'Krystina Hamel',
      job: 'Développeur web front-end',
      website: 'https://google.com/',
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
