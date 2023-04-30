import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

// components
import Paper from '../Paper';

// utils
import { lessThan } from '../../utils/mediaQuery';
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import zIndexes from '../../styles/zIndexes';
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';

export const Container = styled(Paper)`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: ${zIndexes.tooltip};

  max-width: 584px;
  margin: var(--container-gutter);

  ::before {
    opacity: 0.98;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: var(--container-gutter);

  padding: 24px;

  ${lessThan(400)} {
    flex-direction: column;
  }
`;

export const Cookie = styled.div`
  line-height: 1;
  text-align: center;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [30, 40], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const contentStyle = css`
  color: ${colors.black};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [15, 15], bases: [16, 20] },
      {
        prop: 'lineHeight',
        sizes: [20, 20],
        bases: [15, 15],
        unit: '',
      },
    ],
    breakpoints.spacings
  )};
`;

export const noWrapStyle = css`
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  ${lessThan(580)} {
    flex-direction: column;
  }
`;

export const Link = styled(GatsbyLink)`
  position: relative;

  color: ${colors.bleu};
  text-decoration: none;

  border-bottom: 2px solid currentColor;

  ${noWrapStyle};

  :hover,
  :focus {
    color: ${colors.bleu90};
  }
`;
