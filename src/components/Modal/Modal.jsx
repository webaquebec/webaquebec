// vendors
import React from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '../../utils/math/randomString';

// styles
import colors from '../../styles/colors';
import {
  StyledModal,
  ActionButton,
  IconCross,
  ContentWrapper,
} from './Modal.styles';

const actionButtonId = randomString();

const Modal = ({
  fullScreen,
  noBorder,
  noClose,
  borderWidth,
  bgColor,
  color,
  invert,
  round,
  isOpen,
  onDismiss,
  onClose,
  children,
  ...props
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onDismiss}
      $fullScreen={fullScreen}
      $noBorder={noBorder}
      $borderWidth={borderWidth}
      $round={round}
      $bgColor={bgColor}
      $color={color}
      $invert={invert}
      {...props}
    >
      {!noClose && (
        <ActionButton onClick={onClose} aria-labelledby={actionButtonId}>
          <span id={actionButtonId}>Fermer</span>
          <IconCross aria-hidden='true' focusable='false' />
        </ActionButton>
      )}

      <ContentWrapper>{children}</ContentWrapper>
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func,
  onClose: PropTypes.func,
  fullScreen: PropTypes.bool,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
  noClose: PropTypes.bool,
  borderWidth: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  invert: PropTypes.bool,
};
Modal.defaultProps = {
  onDismiss: () => {},
  onClose: () => {},
  fullScreen: false,
  round: false,
  noBorder: false,
  noClose: false,
  borderWidth: '1px',
  bgColor: colors.white,
  color: colors.bleu,
  invert: false,
};

export default Modal;
