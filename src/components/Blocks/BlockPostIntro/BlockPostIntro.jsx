// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// utils
import stripHtmlTags from '../../../utils/strings/stripHtmlTags';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { fontWeights } from '../../../styles/typography';
import breakpoints from '../../../styles/breakpoints';
import { contentStyle } from '../Blocks.styles';

const Introduction = styled.p`
  ${contentStyle};

  font-weight: ${fontWeights.medium};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 33], bases: [20, 24], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

const BlockPostIntro = (props) => {
  const { order, saveContent } = props;

  return (
    <Introduction
      key={order}
      dangerouslySetInnerHTML={{ __html: stripHtmlTags(saveContent) }}
    />
  );
};

BlockPostIntro.propTypes = {
  order: PropTypes.number.isRequired,
  saveContent: PropTypes.string.isRequired,
};

export default BlockPostIntro;

export const query = graphql`
  fragment WpBlockPostIntro on WpWaqPostIntroBlock {
    order
    name
    saveContent
  }
`;
