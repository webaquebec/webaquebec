// vendors
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// components
import Button from '../../../components/Button/Button';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

export const TitleWrapper = styled.div`
  position: relative;
`;

export const BackButton = styled(Button)`
  margin-bottom: 24px;

  ${greaterThan(1150)} {
    position: absolute;

    margin-bottom: 0;
  }
`;

export const PostTitle = styled.h1`
  margin-top: 0;

  color: ${colors.blueberry10};
  font-weight: ${fontWeights.medium};

  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [28, 40], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [33, 48], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const PostDate = styled.small`
  color: ${colors.gris90};
  font-weight: ${fontWeights.bold};
  text-align: center;
`;

export const FeaturedPictureWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;

export const FeaturedPicture = styled(GatsbyImage)`
  width: 100%;
  max-width: 998px;
  height: 100%;
  min-height: inherit;
`;
