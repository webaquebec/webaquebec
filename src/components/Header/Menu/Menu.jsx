// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// components
import Center from '../../LayoutSections/Center';
import Grid from '../../LayoutSections/Grid';

// images
import logoSVG from '../../../images/logo-waq-21-sticker.svg';

// styles
import colors from '../../../styles/colors';
import {
  Container,
  Top,
  LogoWrapper,
  Logo,
  PrimaryNavList,
  NavLink,
  ButtonWrapper,
  CloseButton,
  IconCross,
} from './Menu.styles';

const Menu = ({ opened, onClose, primaryNavigation }) => {
  return (
    <Container
      padding='0'
      noBorder
      lightColor={colors.white}
      darkColor={colors.bleu}
      $opened={opened}
    >
      <Center maxWidth='var(--max-container-width)' gutters='32px'>
        <Top>
          <LogoWrapper>
            <Logo src={logoSVG} alt='' role='presentation' />
          </LogoWrapper>

          <ButtonWrapper>
            <CloseButton onClick={onClose}>
              <span>Fermer</span>
              <IconCross aria-hidden='true' focusable='false' />
            </CloseButton>
          </ButtonWrapper>
        </Top>

        <Grid as='nav' space='38px' minWidth='300px'>
          <PrimaryNavList>
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                {item.type === 'internal' ? (
                  <NavLink
                    as={Link}
                    to={item.slug}
                    activeClassName='active'
                    partiallyActive
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <NavLink
                    href={item.slug}
                    activeClassName='active'
                    partiallyActive
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </PrimaryNavList>
        </Grid>
      </Center>
    </Container>
  );
};

Menu.propTypes = {
  primaryNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};

Menu.defaultProps = {
  opened: false,
  onClose: () => {},
};

export default Menu;
