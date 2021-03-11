// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    slug: '/foire-aux-questions',
  },
  {
    id: 'devenir-conferencier',
    label: 'devenir conférencier',
    slug: '/devenir-conferencier',
  },
  {
    id: 'covid-19',
    label: 'covid-19',
    slug: '/covid-19',
  },
];

const Header = ({ location }) => {
  const isHomePage = !!location.pathname && location.pathname === '/';

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <StyledHeader opened={opened}>
      <Center maxWidth='var(--max-container-width)' gutters='16px'>
        <Container>
          <StyledNav aria-label='Header Menu'>
            <PrimaryNavList>
              {primaryNavigation.map((item) => (
                <NavListItem key={item.id}>
                  <NavLink
                    to={item.slug}
                    activeClassName='active'
                    partiallyActive
                  >
                    {item.label}
                  </NavLink>
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Header.defaultProps = {
  location: {
    pathname: undefined,
  },
};

export default Header;