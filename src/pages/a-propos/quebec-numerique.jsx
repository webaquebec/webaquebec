// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// components
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
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
  const { t } = useTranslation();

  const intro = t('about.qn.intro');

  const images = {
    first: data?.QN01Picture?.childImageSharp?.fluid,
    second: data?.QN02Picture?.childImageSharp?.fluid,
  };

  return (
    <>
      <SEO title={t('about.qn.title')} description={intro} />

      <AboutTabs activeTabId={2} />

      <Container forwardedAs='div' faded>
        <IntroSection title={t('about.qn.title')} text={intro} />

        <ImagesSection images={images} />

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
        duotone: { highlight: "#EBEBEB", shadow: "#262626" }
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
