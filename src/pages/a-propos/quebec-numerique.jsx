// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// components
import SEO from '../../components/SEO';
import LavaLamp from '../../components/LavaLamp';
import SectionContainer from '../../components/SectionContainer';

// views
import AboutTabs from '../../views/AboutPagesView/AboutTabs';
import IntroSection from '../../views/AboutEventPageView/IntroSection';
import ImagesSection from '../../views/AboutQuebecNumeriquePageView/ImagesSection';
import JoinUsSection from '../../views/AboutQuebecNumeriquePageView/JoinUsSection';
import WhoWeAreSection from '../../views/AboutQuebecNumeriquePageView/WhoWeAreSection';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';
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

const AboutQuebecNumeriquePage = ({ data }) => {
  const intro =
    'Synergie et partage sont l’essence de la mission de Québec numérique (QN). Plus qu’une simple organisation sans but lucratif, Québec numérique joue un rôle rassembleur auprès de l’ensemble des acteurs et actrices du numérique à Québec. Depuis 10 ans, Québec numérique s’engage à rassembler, innover, accompagner et former la communauté du numérique.';

  const images = {
    first: data?.QN01Picture?.childImageSharp?.fluid,
    second: data?.QN02Picture?.childImageSharp?.fluid,
  };

  return (
    <>
      <SEO title='Québec numérique' description={intro} />

      <LavaLamp blobColor={colors.apricot} />

      <AboutTabs activeTabId={2} />

      <IntroSection title='Québec numérique' text={intro} />

      <ImagesSection images={images} />

      <Container forwardedAs='div' faded>
        <WhoWeAreSection />

        <JoinUsSection />
      </Container>
    </>
  );
};

export default AboutQuebecNumeriquePage;

AboutQuebecNumeriquePage.propTypes = {
  data: PropTypes.shape({
    QN01Picture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
    QN02Picture: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({}).isRequired,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  fragment ImageSection on File {
    childImageSharp {
      fluid(
        maxWidth: 621
        maxHeight: 465
        quality: 99
        duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    QN01Picture: file(
      relativePath: { eq: "about/quebec-numerique/img-QN01.jpg" }
    ) {
      ...ImageSection
    }
    QN02Picture: file(
      relativePath: { eq: "about/quebec-numerique/img-QN02.jpg" }
    ) {
      ...ImageSection
    }
  }
`;
