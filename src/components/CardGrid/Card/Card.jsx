// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// images
import IconArrow from '../../../images/IconArrow';

// styles
import colors from '../../../styles/colors';
import { StyledCard, Title, Content, CardButton } from './Card.styles';

// Components
import Box from '../../LayoutSections/Box';
import Stack from '../../LayoutSections/Stack';

const Card = ({
  title,
  titleAs,
  content,
  contentAs,
  buttonText,
  picture,
  to,
}) => {
  const {
    childImageSharp: { desktop, mobile },
  } = picture;

  const sources = [
    {
      ...desktop,
    },
    { ...mobile },
  ];

  return (
    <StyledCard to={to}>
      <Box
        padding='0'
        borderWidth='3px'
        darkColor={colors.bleu}
        lightColor={colors.gris}
      >
        <Img fluid={sources} role='presentation' alt='' />

        {/* Use default Box padding props or custom padding with css attribute */}
        {/* <Box
          noBorder
          css={`
            padding-top: ...;
            padding-Bottom: ...;
            ...
          `}
        >
          ...Box content
        </Box> */}
        <Box
          noBorder
          padding='2.5rem'
          darkColor={colors.bleu}
          lightColor={colors.gris}
        >
          <Stack>
            <Title as={titleAs}>{title}</Title>

            <Content as={contentAs}>{content}</Content>
          </Stack>
        </Box>

        <CardButton tag='div' outlined renderIcon={<IconArrow />}>
          {buttonText}
        </CardButton>
      </Box>
    </StyledCard>
  );
};

Card.propTypes = {
  /**
   * Specifies the title of the card.
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies a different HTML tag applied to the title.
   * When using an HTML heading tag, choose wisely to respect the semantic of the document for accessibility reasons.
   * @see [https://www.w3.org/WAI/tutorials/page-structure/headings/](https://www.w3.org/WAI/tutorials/page-structure/headings/)
   */
  titleAs: PropTypes.string,
  /**
   * Specifies the content of the card. Could be a simple string, a single or multiple HTML element(s) or custom React component(s)
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specifies a different HTML tag applied to the content of the card
   */
  contentAs: PropTypes.string,
  /**
   *  Specifies the text of the button of the card
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Specifies a single or multiple picture sources
   */
  picture: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      desktop: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        srcSetWebp: PropTypes.string.isRequired,
        srcWebp: PropTypes.string.isRequired,
      }).isRequired,
      mobile: PropTypes.shape({
        aspectRatio: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        srcSetWebp: PropTypes.string.isRequired,
        srcWebp: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  /**
   * Specifies the reference to a local page (i.e. /about) used with Gatsby Link tag
   */
  to: PropTypes.string.isRequired,
};
Card.defaultProps = {
  titleAs: null,
  content: null,
  contentAs: null,
};

export default Card;

/**
 * Defines grapqhl fragments used by gatsby image
 * to handle different picture sources and related metadata to apply lazy loading
 */
export const query = graphql`
  fragment CardLongPicture on ImageSharp {
    mobile: fluid(maxWidth: 554, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp
      ...GatsbyImageSharpFluidLimitPresentationSize
    }
  }

  fragment CardShortPicture on ImageSharp {
    desktop: fluid(maxWidth: 368, quality: 100) {
      ...GatsbyImageSharpFluid_withWebp
      ...GatsbyImageSharpFluidLimitPresentationSize
    }
  }
`;
