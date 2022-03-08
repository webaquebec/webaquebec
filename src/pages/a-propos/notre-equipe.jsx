// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import SectionContainer from '../../components/SectionContainer';
import TeamMemberCard from '../../views/OurTeamPageView/TeamMemberCard';
import TeamGallery from '../../views/OurTeamPageView/TeamGallery';

// utils
import breakpointsRange from '../../utils/breakpointsRange';
import { greaterThan, lessThan } from '../../utils/mediaQuery';

// images
import stickerFlame from '../../images/stickers/vectorStickerFlame.svg';
import stickerBomb from '../../images/stickers/vectorStickerBomb.svg';
import pinkEllipse from '../../images/textures/pink-ellipse.svg';
import purpleEllipse from '../../images/textures/purple-ellipse.svg';

// styles
import breakpoints from '../../styles/breakpoints';
import { introStyle } from '../../styles/global';
import colors from '../../styles/colors';

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
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

const AboutIntro = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const PinkDecoration = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const PurpleDecoration = styled.img`
  position: absolute;
  left: 0;
`;

const sectionTitle = css`
  color: ${colors.bleu80};

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

  transform: rotate(-7deg);
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

const VolunteerSticker = styled.img`
  ${lessThan(832)} {
    position: absolute;
    top: -20px;
    right: 20px;
  }

  ${breakpointsRange(
    [{ prop: 'width', sizes: [50, 90], bases: [16, 20] }],
    breakpoints.spacings
  )};
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
  transform: rotate(3deg);
`;

const CASticker = styled.img`
  ${breakpointsRange(
    [
      { prop: 'width', sizes: [56, 140], bases: [16, 20] },
      { prop: 'marginRight', sizes: [10, 30], bases: [16, 20] },
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

      <Container forwardedAs='div' faded>
        <Center maxWidth='1080px' intrinsic>
          <PinkDecoration src={pinkEllipse} alt='' role='presentation' />

          <VolunteersTitle css={sectionTitle}>
            <TitleLines>
              <span>nos bénévoles</span>
              <span>annuels de feu</span>
            </TitleLines>
            <VolunteerSticker src={stickerFlame} alt='' role='presentation' />
          </VolunteersTitle>

          <GalleriesWrapper>
            {sectionsData.map((item) => (
              <>
                <TeamGallery key={`gallery${item.id}`} membersData={item} />
                {item.id === 0 && (
                  <PurpleDecoration
                    src={purpleEllipse}
                    alt=''
                    role='presentation'
                  />
                )}
              </>
            ))}
          </GalleriesWrapper>

          <CATitle css={sectionTitle}>
            <CASticker src={stickerBomb} alt='' role='presentation' />
            notre C.A.
          </CATitle>
          <CAList>
            {sectionCAData.map((item) => (
              <CAItem>
                <TeamMemberCard key={`ca-${item.id}`} member={item} />
              </CAItem>
            ))}
          </CAList>
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
