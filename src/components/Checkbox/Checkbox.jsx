import React from 'react';
import PropTypes from 'prop-types';

import randomString from '../../utils/math/randomString';

import StyledCheckbox, {
  HiddenCheckbox,
  CheckboxLabel,
  CheckMark,
} from './Checkbox.styles';

const customId = randomString();

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
  ...rest
}) => {
  return (
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
};
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
};

export default Checkbox;
