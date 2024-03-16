// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// utils
import randomString from '../../utils/math/randomString';

// styles
import StyledRadioButton, {
  RadioButtonLabel,
  HiddenRadioButton,
} from './RadioButton.styles';
import colors from '../../styles/colors';

/**
 *
 * @module Checkbox
 *
 * @example
 * <RadioButton
 *    name='excitement-level'
 *    value='chargedup'
 *    checked={values.excitementLevel === 'chargedup'}
 *    onChange={handleChange}
 *    primary
 * >
 *    Low 🙂
 * </RadioButton>
 *
 * <RadioButton
 *    name='excitement-level'
 *    value='thrilled'
 *    checked={values.excitementLevel === 'thrilled'}
 *    onChange={handleChange}
 * >
 *    Normal 😃
 * </RadioButton>
 *
 * <RadioButton
 *    name='excitement-level'
 *    value='wow'
 *    checked={values.excitementLevel === 'wow'}
 *    onChange={handleChange}
 * >
 *    Super 🤩
 * </RadioButton>
 */
const RadioButton = ({
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
      radio: checked && colors.blueberry,
    },
  };

  const primaryTheme = {
    color: {
      label: checked ? colors.turquoise : colors.gris80,
      radio: checked && colors.turquoise,
    },
  };

  const disabledTheme = {
    color: {
      label: colors.gris40,
      radio: colors.gris80,
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
      <RadioButtonLabel htmlFor={customId} disabled={disabled} {...rest}>
        <HiddenRadioButton
          id={customId}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
        <StyledRadioButton />
        {children}
      </RadioButtonLabel>
    </ThemeProvider>
  );
};

RadioButton.propTypes = {
  /**
   * Child node elements within the checkbox
   */
  children: PropTypes.node.isRequired,
  /**
   * The name of the radio button
   */
  name: PropTypes.string.isRequired,
  /**
   * The value of the radio button
   */
  value: PropTypes.string.isRequired,
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
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  primary: false,
};

export default RadioButton;
