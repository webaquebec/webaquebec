// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// components
import Center from '../LayoutSections/Center';
import Logo from './Logo';
import Menu from './Menu';

// images
import vectorBurgerMenu from '../../images/vectorBurgerMenu.svg';

// styles
import {
  StyledHeader,
  Container,
  LogoWrapper,
  StyledNav,
  PrimaryNavList,
  NavListItem,
  NavLink,
  MenuButtonWrapper,
  BurgerButton,
  BurgerImg,
} from './Header.styles';

const primaryNavigation = [
  {
    id: 'faq',
    label: 'FAQ',
    slug: '/faq',
    type: 'internal',
  },
  {
    id: 'covid-19',
    label: 'covid-19',
    slug:
      'https://archives.webaquebec.org/blogue/on-va-se-dire-les-vraies-affaires',
    type: 'external',
  },
];

const Header = ({ isHomePage }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);

    if (!opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <StyledHeader opened={opened}>
      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
      >
        <Container>
          <StyledNav aria-label='Header Menu'>
            <PrimaryNavList>
              {primaryNavigation.map((item) => (
                <NavListItem key={item.id}>
                  {item.type === 'internal' ? (
                    <NavLink
                      as={Link}
                      to={item.slug}
                      activeClassName='active'
                      partiallyActive
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <NavLink
                      href={item.slug}
                      activeClassName='active'
                      partiallyActive
                    >
                      {item.label}
                    </NavLink>
                  )}
                </NavListItem>
              ))}
            </PrimaryNavList>
          </StyledNav>

          <LogoWrapper>
            <Logo isHomePage={isHomePage} />
          </LogoWrapper>

          <MenuButtonWrapper>
            <BurgerButton onClick={handleClick}>
              <BurgerImg src={vectorBurgerMenu} alt='Menu' focusable='false' />
            </BurgerButton>
          </MenuButtonWrapper>
        </Container>
      </Center>

      <Menu
        opened={opened}
        onClose={handleClick}
        primaryNavigation={primaryNavigation}
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  isHomePage: PropTypes.bool,
};

Header.defaultProps = {
  isHomePage: false,
};

export default Header;
