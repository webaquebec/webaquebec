import React from 'react';
import PropTypes from 'prop-types';

import StyledRadioButton, {
  RadioButtonLabel,
  HiddenRadioButton,
} from './RadioButton.styles';

import randomString from '../../utils/math/randomString';

const customId = randomString();

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
 *    darkTheme
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
  darkTheme,
  ...rest
}) => {
  return (
    <RadioButtonLabel
      $darkTheme={darkTheme}
      $checked={checked}
      htmlFor={customId}
      disabled={disabled}
      {...rest}
    >
      <HiddenRadioButton
        id={customId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      <StyledRadioButton $darkTheme={darkTheme} $checked={checked} />
      {children}
    </RadioButtonLabel>
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
   * Specifies whether it is for dark theme or not (default for light)
   */
  darkTheme: PropTypes.bool,
};
RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  darkTheme: false,
};

export default RadioButton;
