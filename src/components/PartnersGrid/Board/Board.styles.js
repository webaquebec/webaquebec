import styled from 'styled-components';

import Box from '../../LayoutSections/Box';
import colors from '../../../styles/colors';

import { lessThan } from '../../../utils/mediaQuery';

import breakpoints from '../../../styles/breakpoints';

// 576, 768, 1280
export const selfBreakpoints = [breakpoints[0], breakpoints[2], breakpoints[6]];

export const Container = styled.div``;

export const Wrapper = styled.div`
  --border-width: 4px;

  display: grid;
  grid-auto-flow: row;
  grid-gap: 0;
  grid-template-columns: repeat(
    12,
    calc((var(--max-container-width) - var(--border-width)) / 12)
  );

  border-top: var(--border-width) solid ${colors.bleu};
  border-left: var(--border-width) solid ${colors.bleu};

  ${lessThan(selfBreakpoints[2])} {
    --max-container-width: ${selfBreakpoints[1]}px;

    grid-template-columns: repeat(
      6,
      calc((var(--max-container-width) - var(--border-width)) / 6)
    );
  }

  ${lessThan(selfBreakpoints[1])} {
    --max-container-width: ${360 - 2 * 16}px;
    --border-width: 2px;

    grid-template-columns: repeat(
      6,
      calc((var(--max-container-width) - var(--border-width)) / 6)
    );

    border-width: var(--border-width);
  }
`;

export const Square = styled(Box)`
  position: relative;

  min-height: calc((var(--max-container-width) - 4px) / 12);

  border-right: var(--border-width) solid ${colors.bleu};
  border-bottom: var(--border-width) solid ${colors.bleu};

  ${lessThan(selfBreakpoints[2])} {
    --max-container-width: ${selfBreakpoints[1]}px;

    min-height: calc((var(--max-container-width) - var(--border-width)) / 6);
  }

  ${lessThan(selfBreakpoints[1])} {
    --max-container-width: ${360 - 2 * 16}px;

    min-height: calc((var(--max-container-width) - var(--border-width)) / 6);

    border-width: var(--border-width);
  }
`;
