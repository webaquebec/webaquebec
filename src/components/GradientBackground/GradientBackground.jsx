// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

// styles
import { Container, StyledBackground } from './GradientBackground.styles';

/**
 * @deprecated Replaced by [PixelGradient](/Users/lornz/Sites/clients/webaquebec/src/components/PixelGradient/PixelGradient.jsx)
 * component
 */
const GradientBackground = ({ position, pathName, ...rest }) => {
  const data = useStaticQuery(
    graphql`
      query {
        topDefault: file(
          relativePath: { eq: "img-gradient-background-top-default.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        topFaq: file(relativePath: { eq: "img-gradient-background-top.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        topHome: file(
          relativePath: { eq: "img-gradient-background-top-home.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bottom: file(
          relativePath: { eq: "img-gradient-background-bottom.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1439) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const {
    topDefault: {
      childImageSharp: { fluid: topDefaultBackground },
    },
    topFaq: {
      childImageSharp: { fluid: topFaqBackground },
    },
    topHome: {
      childImageSharp: { fluid: topHomeBackground },
    },
    bottom: {
      childImageSharp: { fluid: bottomBackground },
    },
  } = data;

  // const initTopBackground = isHomePage ? topHomeBackground : topBackground;

  // const source = position === 'top' ? initTopBackground : bottomBackground;

  const isHomePage = !!pathName && pathName === '/';

  const initTopBackground = () => {
    if (isHomePage) {
      return topHomeBackground;
    }

    return pathName === '/faq' ? topFaqBackground : topDefaultBackground;
  };

  const source = position === 'top' ? initTopBackground() : bottomBackground;

  return (
    <Container isHomePage={isHomePage} position={position} {...rest}>
      <StyledBackground fluid={source} />
    </Container>
  );
};

export default GradientBackground;

GradientBackground.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  // isHomePage: PropTypes.bool,

  pathName: PropTypes.string,
};

GradientBackground.defaultProps = {
  position: 'top',
  // isHomePage: false,

  pathName: undefined,
};
