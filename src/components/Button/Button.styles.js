// vendors
import styled, { css } from 'styled-components';
import { em } from 'polished';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';
import breakpointsRange from '../../utils/breakpointsRange';

export const IconContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: ${em(34, 22)};

  ${breakpointsRange(
    [{ prop: 'minWidth', sizes: [20, 27], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const TextWrapper = styled.span`
  flex-grow: 1;
`;

export const animatedPrimaryStyle = css`
  :focus,
  :hover:not([disabled]) {
    transform: rotate3d(0, 0, 1, 4deg);
  }
`;

export const primaryStyle = css`
  --btn-color: ${colors.blueberry10};
  --btn-bg-color: transparent;
  --btn-border-color: currentColor;

  &.active,
  :focus,
  :hover:not([disabled]) {
    --btn-color: ${colors.blueberry10};
    --btn-bg-color: transparent;
  }

  ${({ $animated }) => $animated && animatedPrimaryStyle}
`;

export const outlinedFocusHoverStyle = css`
  --btn-color: ${colors.peach};
  --btn-bg-color: ${colors.blueberry10};
  --btn-border-color: ${colors.blueberry10};
`;

export const outlinedIconStyle = css`
  ${IconContainer} {
    ${breakpointsRange(
      [{ prop: 'paddingLeft', sizes: [24, 24], bases: [16, 20] }],
      breakpoints.spacings
    )};

    ::before {
      position: absolute;
      left: 0;

      width: 2px;
      height: calc(100% + var(--padding-vertical) * 2 + 2 * 2px);

      background-color: currentColor;

      content: '';
    }
  }
`;

export const outlinedIconFirstStyle = css`
  ${IconContainer} {
    padding: 0;

    ${breakpointsRange(
      [{ prop: 'paddingRight', sizes: [24, 24], bases: [16, 20] }],
      breakpoints.spacings
    )};

    ::before {
      display: none;
    }

    ::after {
      position: absolute;
      right: 0;

      width: 2px;
      height: calc(100% + var(--padding-vertical) * 2 + 2 * 2px);

      background-color: currentColor;

      content: '';
    }
  }
`;

export const outlinedStyle = css`
  --btn-color: ${colors.blueberry10};
  --btn-bg-color: transparent;
  --btn-border-color: currentColor;

  ${breakpointsRange(
    [
      { prop: '--paddingVertical', sizes: [20, 20], bases: [16, 20] },
      { prop: '--paddingHorizontal', sizes: [24, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  padding: var('--paddingVertical') var('--paddingHorizontal');

  border-radius: 8px;

  &.active,
  :focus,
  :hover:not([disabled]) {
    ${outlinedFocusHoverStyle}
  }

  ${({ $hasIcon }) => $hasIcon && outlinedIconStyle};

  ${({ $iconFirst }) => $iconFirst && outlinedIconFirstStyle};
`;

export const invertedPrimaryStyle = css`
  --btn-color: ${colors.peach};
  --btn-bg-color: transparent;
  --btn-border-color: currentColor;

  &.active,
  &:focus,
  &:hover:not([disabled]) {
    --btn-color: ${colors.peach};
    --btn-border-color: currentColor;
  }
`;

export const invertedStyle = css`
  --btn-color: ${colors.blueberry10};
  --btn-bg-color: ${colors.peach};
  --btn-border-color: var(--btn-bg-color);

  &.active,
  &:focus,
  &:hover:not([disabled]) {
    --btn-color: ${colors.peach};
    --btn-bg-color: ${colors.blueberry};
    --btn-border-color: var(--btn-color);
  }

  &[disabled] {
    --btn-color: hsl(
      ${colors.blueberry80hsl.hue}deg ${colors.blueberry80hsl.saturation}% 76% /
        0.5
    );
    --btn-bg-color: hsl(
      ${colors.blueberry80hsl.hue}deg ${colors.blueberry80hsl.saturation}%
        ${colors.blueberry80hsl.lightness}% / 0.5
    );
    --btn-border-color: var(--btn-bg-color);
  }

  ${({ $primary }) => $primary && invertedPrimaryStyle}
`;

export const smallStyle = css`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 18], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [21, 21], bases: [18, 18], unit: '' },
      { prop: '--paddingVertical', sizes: [12, 12], bases: [16, 20] },
      { prop: '--paddingHorizontal', sizes: [30, 30], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  padding: var(--padding-vertical) var(--padding-horizontal);
`;

export const mediumStyle = css`
  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [14, 18], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [16, 20], bases: [14, 18], unit: '' },
      { prop: 'padding', sizes: [12, 24], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const iconFirstStyle = css`
  ${TextWrapper} {
    order: 1;

    margin: 0;
    ${breakpointsRange(
      [{ prop: 'marginLeft', sizes: [24, 24], bases: [16, 20] }],
      breakpoints.spacings
    )};

    text-align: right;
  }
`;

export const smallIconStyle = css`
  ${IconContainer} {
    margin: 0;

    border: 0;
  }
`;

export const iconStyle = css`
  ${TextWrapper} {
    order: -1;

    margin: 0;
    ${breakpointsRange(
      [{ prop: 'marginRight', sizes: [24, 24], bases: [16, 20] }],
      breakpoints.spacings
    )};

    text-align: left;
  }

  ${({ $iconFirst }) => $iconFirst && iconFirstStyle}

  ${({ $small }) => $small && smallIconStyle};
`;

export const animatedStyle = css`
  transform: rotate3d(0);

  will-change: transform;

  :focus,
  :hover:not([disabled]) {
    transform: rotate3d(0, 0, 1, -4deg);
  }
`;

/* Default button styled */
const StyledButton = styled.button`
  --btn-color: ${colors.peach};
  --btn-bg-color: ${colors.blueberry10};
  --btn-border-color: var(--btn-bg-color);

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 20], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 24], bases: [16, 20], unit: '' },
      { prop: '--paddingVertical', sizes: [16, 16], bases: [16, 20] },
      { prop: '--paddingHorizontal', sizes: [32, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  padding: var(--padding-vertical) var(--padding-horizontal);

  color: var(--btn-color);

  font-weight: ${fontWeights.bold};
  text-align: center;
  text-decoration: none;

  background-color: var(--btn-bg-color);

  border: 2px solid var(--btn-border-color);
  border-radius: 8px;
  outline: 0;
  cursor: pointer;

  appearance: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color ${speed.fast}, color ${speed.fast},
      transform ${speed.fast};
  }

  &.active,
  &:focus,
  &:hover:not([disabled]) {
    --btn-color: ${colors.blueberry10};
    --btn-bg-color: transparent;
    --btn-border-color: var(--btn-color);
  }

  &[disabled] {
    --btn-bg-color: ${colors.blueberry60};

    cursor: not-allowed;

    /* pointer-events: none; */
  }

  /* Apply animated style when animated props defined */
  ${({ $animated }) => $animated && animatedStyle}

  /* Apply primary style when primary props defined */
  ${({ $primary }) => $primary && primaryStyle}

  /* Apply inverted style when inverted props defined */
  ${({ $inverted }) => $inverted && invertedStyle}

  /* Apply small style when small props defined */
  ${({ $small }) => $small && smallStyle}

  /* Apply small style when medium props defined */
  ${({ $medium }) => $medium && mediumStyle}

  /* Apply outlined style when outlined props defined */
  ${({ $outlined }) => $outlined && outlinedStyle}

  /* Apply hasIcon style when hasIcon props defined */
  ${({ $hasIcon }) => $hasIcon && iconStyle}
`;

export default StyledButton;
