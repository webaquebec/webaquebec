// vendors
import styled from 'styled-components';

// utils
// import { lessThan } from '@utils/mediaQuery';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import { magnifyStyle } from '../../styles/global';

export const StatsSection = styled.section`
  max-width: 1024px;
  margin: auto;
`;

export const StatsIntro = styled.p`
  max-width: 515px;
  margin: 130px auto;

  ${magnifyStyle};
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StatImg = styled.img`
  width: auto;
  height: 200px;
`;

export const StatDesc = styled.p`
  margin: -16px 0 0;

  color: ${colors.gris30};
  font-weight: ${fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  text-align: center;
`;
