// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconCross } from './CloseButton.styles';

// utils
import randomString from '../../utils/math/randomString';

const CloseButton = ({ id, onClose, darked, ...rest }) => {
  const buttonId = id || randomString();

  return (
    <Button
      aria-labelledby={buttonId}
      onClick={onClose}
      $darked={darked}
      {...rest}
    >
      <span id={buttonId}>Fermer</span>
      <IconCross aria-hidden='true' focusable='false' />
    </Button>
  );
};

CloseButton.propTypes = {
  /**
   * Specifies the id of the button
   */
  id: PropTypes.string,
  /**
   * Specifies the function to be called on close
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Specifies wether the button is dark or not
   */
  darked: PropTypes.bool,
};

CloseButton.defaultProps = {
  id: undefined,
  darked: false,
};

export default CloseButton;
