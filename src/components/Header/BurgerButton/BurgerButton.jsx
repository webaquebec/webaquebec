// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Button, Lines, Line } from './BurgerButton.styles';

const BurgerButton = ({ opened, onClick, ...rest }) => (
  <Button
    aria-label={
      opened ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'
    }
    aria-expanded={opened}
    onClick={onClick}
    $active={opened}
    {...rest}
  >
    <span>{opened && `Fermer`}</span>

    <Lines>
      <Line />
      <Line />
      <Line />
    </Lines>
  </Button>
);

BurgerButton.propTypes = {
  opened: PropTypes.bool,
  onClick: PropTypes.func,
};
BurgerButton.defaultProps = {
  opened: false,
  onClick: () => {},
};

export default BurgerButton;
