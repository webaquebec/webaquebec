// vendors
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { em } from 'polished';

// styles
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';
import { speed } from '../../styles/animation';
import breakpoints from '../../styles/breakpoints';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

export const floatingLabelStyle = css`
  span:first-of-type {
    position: absolute;
    top: 4px;

    z-index: 1;

    ${breakpointsRange(
      [
        { prop: 'left', sizes: [12, 21], bases: [16, 20] },
        { prop: 'fontSize', sizes: [14, 16], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [24, 22], bases: [14, 16] },
      ],
      breakpoints.spacings
    )};

    transform: translate3d(0, ${em(9)}, 0);

    @media (prefers-reduced-motion: no-preference) {
      transition: transform ${speed.fast};
    }

    will-change: transform;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 0;
  }

  :focus-within > span:first-of-type,
  input:not(:placeholder-shown) + span:first-of-type,
  textarea:not(:placeholder-shown) + span:first-of-type {
    ${breakpointsRange(
      [
        { prop: 'fontSize', sizes: [10, 11], bases: [16, 20] },
        { prop: 'lineHeight', sizes: [14, 13], bases: [11, 11] },
      ],
      breakpoints.spacings
    )};

    transform: translate3d(0, 0, 0);
  }
`;

const FormLabel = styled.label`
  position: relative;

  color: ${({ disabled }) => (disabled ? colors.gris100 : colors.blueberry)};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 22], bases: [16, 16] },
    ],
    breakpoints.spacings
  )};

  font-weight: ${fontWeights.regular};
`;

FormLabel.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};
FormLabel.defaultProps = {
  disabled: false,
};

export default FormLabel;
