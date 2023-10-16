// vendors
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';

// components
import Center from '../LayoutSections/Center';
import Logo from './Logo';
import Menu from './Menu';

// images
// import vectorBurgerMenu from '../../images/vectorBurgerMenu.svg';

// styles
import {
  StyledHeader,
  Container,
  LogoWrapper,
  MenuButtonWrapper,
  // BurgerButton,
  // BurgerImg,
} from './Header.styles';
import BurgerButton from './BurgerButton';

const primaryNavigation = [
  // {
  //   id: 'Programmation',
  //   label: 'programmation',
  //   slug: '/programmation/2023',
  //   type: 'internal',
  //   color: 'apricot',
  // },
  {
    id: 'blog',
    label: 'blogue',
    slug: '/blogue',
    type: 'internal',
    color: 'apricot',
  },
  {
    id: 'tickets',
    label: 'billetterie',
    slug: '/billetterie',
    type: 'internal',
    color: 'cherry',
  },
  {
    id: 'speakers',
    label: 'appel à conférences',
    slug: '/appel-a-conferences',
    type: 'internal',
    color: 'cherry',
  },
  // {
  //   id: 'waqademy',
  //   label: 'WAQadémie',
  //   slug: '/waqademie',
  //   type: 'internal',
  //   color: 'cherry',
  // },
];

const secondaryNavigation = [
  {
    id: 'about',
    label: 'à propos',
    slug: '/a-propos/evenement',
    type: 'internal',
    color: 'apricot',
  },
  {
    id: 'partners',
    label: 'partenaires',
    slug: '/partenaires',
    type: 'internal',
  },
  {
    id: 'faq',
    label: 'FAQ',
    slug: '/faq',
    type: 'internal',
  },
  {
    id: 'contact',
    label: 'nous joindre',
    slug: '/contact',
    type: 'internal',
  },
  {
    id: 'code-of-conduct',
    label: 'code de conduite',
    slug: '/code-de-conduite',
    type: 'internal',
  },
  {
    id: 'edition2023',
    label: 'édition 2023',
    slug: '/programmation/2023',
    type: 'internal',
  },
  // {
  //   id: 'edition2021',
  //   label: 'édition 2021',
  //   slug: '/programmation/2021',
  //   type: 'internal',
  // },
];

const navigation = {
  primary: [...primaryNavigation],
  secondary: [...secondaryNavigation],
};

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

  const handleClickLogo = () => {
    setOpened(false);
    document.body.removeAttribute('style');
  };

  return (
    <StyledHeader opened={opened}>
      <Center
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
      >
        <Container>
          <LogoWrapper>
            <Logo isHomePage={isHomePage} onClick={handleClickLogo} />
          </LogoWrapper>

          <MenuButtonWrapper>
            {/* <BurgerButton onClick={handleClick}>
              <BurgerImg src={vectorBurgerMenu} alt='Menu' focusable='false' />
            </BurgerButton> */}
            <BurgerButton onClick={handleClick} opened={opened} />
          </MenuButtonWrapper>
        </Container>
      </Center>

      <Menu
        pathname={pathname}
        opened={opened}
        onClose={handleClick}
        navigation={navigation}
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
