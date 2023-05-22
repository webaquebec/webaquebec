import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import zIndexes from '../../styles/zIndexes';

export const invertStyle = css`
  --color: ${({ $darkColor }) => $darkColor};

  &.active {
    --color: ${({ $lightColor }) => $lightColor};
    --bg-color: ${({ $darkColor }) => $darkColor};
    --border-color: var(--bg-color);
  }
`;

export const Wrapper = styled.span`
  position: absolute;
`;

export const Button = styled.button`
  --color: ${({ $lightColor }) => $lightColor};
  --bg-color: transparent;
  --border-color: currentColor;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  margin: 0;
  padding: 0;
  padding-bottom: 1px;

  color: var(--color);
  font-size: 0.875rem;
  line-height: 1;

  background-color: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: 50px;

  cursor: pointer;

  appearance: none;

  &.active {
    --color: ${({ $darkColor }) => $darkColor};
    --bg-color: ${({ $lightColor }) => $lightColor};
    --border-color: var(--bg-color);
  }

  ${({ $invert }) => $invert && invertStyle};
`;
export const Bubble = styled.span`
  position: absolute;
  top: 0px;
  left: 100%;

  z-index: ${zIndexes.popover};

  display: inline-block;
  width: 30ch;
  padding: 8px;

  color: ${colors.white};
  font-size: 0.6rem;
  line-height: 1.2;
  letter-spacing: 0.3px;

  background: ${colors.black};
`;
