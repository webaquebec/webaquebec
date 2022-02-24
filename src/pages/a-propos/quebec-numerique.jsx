// vendors
import React from 'react';
import styled from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import SectionContainer from '../../components/SectionContainer';
import ImagesSection from '../../views/AboutQuebecNumeriquePageView/ImagesSection';
import JoinUsSection from '../../views/AboutQuebecNumeriquePageView/JoinUsSection';
import WhoWeAreSection from '../../views/AboutQuebecNumeriquePageView/WhoWeAreSection';

// styles
import { h1AltStyle } from '../../styles/global';
import colors from '../../styles/colors';

const AboutTitle = styled.h1`
  ${h1AltStyle}
  color: ${colors.bleu80};
`;

const AboutQuebecNumeriquePage = () => {
  const intro =
    'Coutre intro lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

  const description = {
    p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. Fringilla ut morbi tincidunt augue interdum velit euismod in. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Quis imperdiet massa tincidunt nunc pulvinar sapien.',
    p2: 'Eget arcu dictum varius duis at consectetur lorem donec massa. Bibendum enim facilisis gravida neque convallis a cras. Odio morbi quis commodo odio aenean sed adipiscing diam. Semper auctor neque vitae tempus quam pellentesque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Neque ornare aenean euismod elementum nisi quis eleifend quam. Nunc aliquet bibendum enim facilisis gravida.',
  };

  const joinUs =
    'Texte standard lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';

  return (
    <>
      <SEO title='Québec Numérique' description='' />

      <header>
        <Center
          maxWidth='770px'
          gutters='var(--container-gutter)'
          withText
          intrinsic
        >
          <AboutTitle>à propos</AboutTitle>

          {/* TODO: Tabs come here */}
        </Center>
      </header>

      <SectionContainer faded>
        <IntroSection title='Québec Numérique' text={intro} />
        <ImagesSection />
        <WhoWeAreSection part1={description.p1} part2={description.p2} />
        <JoinUsSection text={joinUs} />
      </SectionContainer>
    </>
  );
};

export default AboutQuebecNumeriquePage;
