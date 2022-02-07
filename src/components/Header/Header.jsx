// vendors
import React, { memo, useState } from 'react';
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
    id: 'prog',
    label: 'édition 2021',
    slug: '/programmation/2021',
    type: 'internal',
    color: 'jaune',
  },
  // {
  //   id: 'blog',
  //   label: 'blogue',
  //   slug: '/blogue',
  //   type: 'internal',
  // },
  {
    id: 'about',
    label: 'à propos',
    slug: '/a-propos/evenement',
    type: 'internal',
    color: 'turquoise',
  },
  {
    id: 'faq',
    label: 'FAQ',
    slug: '/faq',
    type: 'internal',
    color: 'rose',
  },
  {
    id: 'tickets',
    label: 'billetterie',
    slug: '/billetterie',
    type: 'internal',
    color: 'ciel',
  },
  // {
  //   id: 'covid-19',
  //   label: 'covid-19',
  //   slug:
  //     'https://archives.webaquebec.org/blogue/on-va-se-dire-les-vraies-affaires',
  //   type: 'external',
  //   color: 'ciel',
  // },
];

const Header = ({ pathname }) => {
  const [opened, setOpened] = useState(false);

  const isHomePage = !!pathname && pathname === '/';

  const handleClick = () => {
    setOpened(!opened);

    if (!opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
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
                      rel='noopener noreferrer'
                      target='_blank'
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
        pathname={pathname}
        opened={opened}
        onClose={handleClick}
        primaryNavigation={primaryNavigation}
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  pathname: PropTypes.string,
};

Header.defaultProps = {
  pathname: undefined,
};

export default memo(Header);
