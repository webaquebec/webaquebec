// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// utils
import randomString from '../../utils/math/randomString';

// styles
import StyledCheckbox, {
  HiddenCheckbox,
  CheckboxLabel,
  CheckMark,
} from './Checkbox.styles';
import colors from '../../styles/colors';

/**
 *
 * @module Checkbox
 *
 * @example
 * <Checkbox
 *    name='greeting'
 *    value='bonjour'
 *    checked={values.greeting === 'bonjour'}
 *    onChange={handleChange}
 *    primary
 * >
 *    Bonjour 👋
 * </Checkbox>
 *
 * <Checkbox
 *    name='greeting'
 *    value='aloha'
 *    checked={values.greeting === 'allo'}
 *    onChange={handleChange}
 * >
 *    Aloha 🌺
 * </Checkbox>
 */
const Checkbox = ({
  children,
  name,
  value,
  checked,
  disabled,
  onChange,
  onBlur,
  primary,
  ...rest
}) => {
  const customId = randomString();

  const defaultTheme = {
    color: {
      label: checked ? colors.blueberry : colors.gris80,
      checkmark: colors.white,
      background: checked ? colors.blueberry : 'transparent',
    },
  };

  const primaryTheme = {
    color: {
      label: checked ? colors.turquoise : colors.gris80,
      checkmark: colors.blueberry,
      background: checked ? colors.turquoise : 'transparent',
    },
  };

  const disabledTheme = {
    color: {
      label: colors.gris40,
      checkmark: colors.gris80,
      background: checked ? colors.gris40 : 'transparent',
    },
  };

  let theme;
  if (disabled) {
    theme = { ...disabledTheme };
  } else {
    theme = primary ? { ...primaryTheme } : { ...defaultTheme };
  }

  return (
    <ThemeProvider theme={theme}>
      <CheckboxLabel htmlFor={customId} disabled={disabled} {...rest}>
        <HiddenCheckbox
          id={customId}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
        <StyledCheckbox>
          <CheckMark />
        </StyledCheckbox>
        {children}
      </CheckboxLabel>
    </ThemeProvider>
  );
};

Checkbox.propTypes = {
  /**
   * Child node elements within the checkbox
   */
  children: PropTypes.node.isRequired,
  /**
   * The name of the checkbox
   */
  name: PropTypes.string.isRequired,
  /**
   * The value of the checkbox
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  /**
   * Specifies whether it is checked or not
   */
  checked: PropTypes.bool,
  /**
   * Specifies whether it is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * The event handler called when a value change
   */
  onChange: PropTypes.func,
  /**
   * The event handler called when the input loses focus
   */
  onBlur: PropTypes.func,
  /**
   * Specifies whether it is primary style or not (default)
   */
  primary: PropTypes.bool,
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  primary: false,
};

export default Checkbox;
