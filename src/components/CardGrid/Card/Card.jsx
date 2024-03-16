// vendors
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// images
import IconArrow from '../../../images/IconArrow';

// styles
import colors from '../../../styles/colors';
import { pictureFilter } from '../../../styles/global';
import {
  cardBoxStyle,
  contentBoxStyle,
  StyledCard,
  Title,
  Complement,
  Content,
  CardButton,
} from './Card.styles';

// Components
import Box from '../../LayoutSections/Box';
import Stack from '../../LayoutSections/Stack';

const Card = ({
  title,
  titleAs,
  complement,
  complementAs,
  content,
  contentAs,
  color,
  bgColor,
  buttonText,
  picture,
  to,
}) => (
  <StyledCard to={to}>
    <Box
      padding='0'
      borderWidth='2px'
      darkColor={color}
      lightColor={bgColor}
      css={cardBoxStyle}
    >
      <Img css={pictureFilter} fluid={picture} role='presentation' alt='' />

      <Box
        noBorder
        padding='2rem'
        darkColor={color}
        lightColor={bgColor}
        css={contentBoxStyle}
      >
        <Stack>
          <Title as={titleAs}>{title}</Title>

          <Complement as={complementAs}>{complement}</Complement>

          <Content
            as={contentAs}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Stack>
      </Box>

      <CardButton tag='div' outlined renderIcon={<IconArrow />}>
        {buttonText}
      </CardButton>
    </Box>
  </StyledCard>
);
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
   * Specifies a complement of information of the card. Could be a simple string, a single or multiple HTML element(s) or custom React component(s)
   */
  complement: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specifies a different HTML tag applied to the complement information of the card
   */
  complementAs: PropTypes.string,
  /**
   * Specifies the content of the card. Could be a simple string, a single or multiple HTML element(s) or custom React component(s)
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specifies a different HTML tag applied to the content of the card
   */
  contentAs: PropTypes.string,
  /**
   * Specifies the text color of the card
   */
  color: PropTypes.string,
  /**
   * Specifies the background color of the card
   */
  bgColor: PropTypes.string,
  /**
   *  Specifies the text of the button of the card
   */
  buttonText: PropTypes.string.isRequired,
  /**
   * Specifies a single or multiple picture sources
   */
  picture: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
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
  complement: null,
  complementAs: null,
  color: colors.blueberry,
  bgColor: colors.peach,
};

export default Card;
