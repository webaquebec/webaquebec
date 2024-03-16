import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, rem } from 'polished';

// styles
import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import { fontWeights } from '../../styles/typography';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

const FormHelperText = styled.p`
  margin-top: ${rem(2)};
  margin-bottom: 0;

  color: ${colors.blueberry};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [12, 14], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [24, 22], bases: [14, 16] },
      { prop: 'paddingLeft', sizes: [12, 20], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  font-weight: ${fontWeights.regular};

  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.gris100};
    `}

  ${(props) =>
    props.error &&
    css`
      color: ${colors.cherry};
    `}

  ${(props) =>
    props.error &&
    props.disabled &&
    css`
      color: ${lighten(0.16, colors.cherry)};
    `}
`;

export default FormHelperText;

FormHelperText.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
};

FormHelperText.defaultProps = {
  disabled: false,
  error: false,
};
