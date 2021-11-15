// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';
import AboutSection from '../views/AboutPageView/AboutSection';
import GallerySection from '../views/AboutPageView/GallerySection';
import SectionContainer from '../components/SectionContainer';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
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

const AboutTitle = styled.h1`
  color: ${colors.bleu80};
`;

const AboutIntro = styled.p`
  margin-bottom: 0;
`;

const AboutSectionContainer = styled.div`
  ${breakpointsRange(
    [
      { prop: 'maxWidth', sizes: [272, 732], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [64, 177], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  &:nth-child(even) {
    margin-left: auto;
  }
`;

const AboutPage = () => {
  const sectionsData = [
    {
      id: 0,
      photoUrl: 'https://via.placeholder.com/732x488',
      title: 'premier titre de la section',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue interdum velit euismod in.',
    },
    {
      id: 1,
      photoUrl: 'https://via.placeholder.com/732x488',
      title: 'deuxième titre de la section',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue interdum velit euismod in.',
    },
    {
      id: 2,
      photoUrl: 'https://via.placeholder.com/732x488',
      title: 'troisième titre de la section',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue interdum velit euismod in.',
    },
  ];

  return (
    <>
      <SEO
        title='À propos'
        description='Tout ce que tu dois savoir sur le WAQ.'
      />

      <Center
        maxWidth='770px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <AboutTitle css={h1AltStyle}>à propos</AboutTitle>
        <AboutIntro css={introStyle}>
          Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </AboutIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='1080px' gutters='16px'>
          {sectionsData.map((section) => (
            <AboutSectionContainer>
              <AboutSection
                key={`section-${section.id}`}
                photoUrl={section.photoUrl}
                title={section.title}
                text={section.text}
              />
            </AboutSectionContainer>
          ))}
        </Center>

        <GallerySection title='quatrième titre de la section'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
            aliquam eleifend mi in nulla posuere sollicitudin. Fringilla ut
            morbi tincidunt augue interdum velit euismod in. Et ultrices neque
            neque ornare ornare ornare ornare ornare ornare ornare aenean
            elementum tincidunt nunc pulvinar sapien.
          </p>
          <p>
            Eget arcu dictum varius duis at consectetur lorem donec massa.
            Bibendum enim facilisis gravida neque convallis a cras. Odio morbi
            quis commodo odio aenean sed adipiscing diam. Semper auctor neque
            vitae tempus quam pellentesque. Phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien. Neque ornare aenean euismod
            elementum nisi quis eleifend quam. Nunc aliquet bibendum enim
            facilisis gravida.
          </p>
        </GallerySection>
      </Container>
    </>
  );
};

AboutPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AboutPage;
