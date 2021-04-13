// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

// styles
import { Container, StyledBackground } from './GradientBackground.styles';

const GradientBackground = ({ position, isHomePage, ...rest }) => {
  const data = useStaticQuery(
    graphql`
      query {
        top: file(relativePath: { eq: "img-gradient-background-top.jpg" }) {
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
    top: {
      childImageSharp: { fluid: topBackground },
    },
    topHome: {
      childImageSharp: { fluid: topHomeBackground },
    },
    bottom: {
      childImageSharp: { fluid: bottomBackground },
    },
  } = data;

  const initTopBackground = isHomePage ? topHomeBackground : topBackground;

  const source = position === 'top' ? initTopBackground : bottomBackground;

  return (
    <Container isHomePage={isHomePage} position={position} {...rest}>
      <StyledBackground fluid={source} />
    </Container>
  );
};

export default GradientBackground;

GradientBackground.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
  isHomePage: PropTypes.bool,
};

GradientBackground.defaultProps = {
  position: 'top',
  isHomePage: false,
};
