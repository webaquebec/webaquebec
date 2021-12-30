import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconCross } from './CloseButton.styles';

const CloseButton = ({ buttonId, onClose, darkVersion }) => {
  return (
    <div $darkVersion={darkVersion}>
      <Button onClick={onClose} aria-labelledby={buttonId} type='button'>
        <span id={buttonId}>Fermer</span>
        <IconCross aria-hidden='true' focusable='false' />
      </Button>
    </div>
  );
};

CloseButton.propTypes = {
  /**
   * Specifies the id of the button
   */
  buttonId: PropTypes.string.isRequired,
  /**
   * Specifies the function to be called on close
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Specifies wether the button is dark or not
   */
  darkVersion: PropTypes.bool,
};

CloseButton.defaultProps = {
  darkVersion: true,
};

export default CloseButton;
