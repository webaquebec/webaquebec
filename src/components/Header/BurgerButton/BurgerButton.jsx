// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import { useTranslation } from 'react-i18next';

// styles
import { Button, Lines, Line } from './BurgerButton.styles';

const BurgerButton = ({ opened, onClick, ...rest }) => {
  const { t } = useTranslation();

  return (
    <Button
      aria-label={
        opened ? t('menu.closeBurgerLabel') : t('menu.openBurgerLabel')
      }
      aria-expanded={opened}
      onClick={onClick}
      $active={opened}
      {...rest}
    >
      <Lines>
        <Line />
        <Line />
        <Line />
      </Lines>
    </Button>
  );
};

BurgerButton.propTypes = {
  opened: PropTypes.bool,
  onClick: PropTypes.func,
};
BurgerButton.defaultProps = {
  opened: false,
  onClick: () => {},
};

export default BurgerButton;
