// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import { fontWeights } from '../../../styles/typography';

// images
import vectorBlogPostHeroGrid from '../../../images/vectorBlogPostHeroGrid.svg';

export const TitleWrapper = styled.div`
  position: relative;

  margin-bottom: 62px;
`;

export const PostTitle = styled.h1`
  margin-top: 0;

  color: ${colors.gris90};

  text-align: center;
`;

export const PostDate = styled.small`
  color: ${colors.gris90};
  font-weight: ${fontWeights.bold};
  text-align: center;
`;

export const FeaturedPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${vectorBlogPostHeroGrid});
  background-position: center;
  background-size: cover;

  ${breakpointsRange(
    [{ prop: 'height', sizes: [300, 535], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const FeaturedPicture = styled.img`
  height: 100%;

  border-top: 4px solid ${colors.bleu80};
  border-bottom: 4px solid ${colors.bleu80};
`;
