// vendors
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';

// components
import Center from '../LayoutSections/Center';
import Logo from './Logo';
import Menu from './Menu';

// styles
import {
  StyledHeader,
  Container,
  LogoWrapper,
  MenuButtonWrapper,
} from './Header.styles';
import BurgerButton from './BurgerButton';

const primaryNavigation = [
  {
    id: 'Programmation',
    label: 'programmation',
    slug: '/programmation/2024',
    type: 'internal',
    color: 'pineapple',
  },
  {
    id: 'blog',
    label: 'blogue',
    slug: '/blogue',
    type: 'internal',
    color: 'watermelon',
  },
  {
    id: 'tickets',
    label: 'billetterie',
    slug: '/billetterie',
    type: 'internal',
    color: 'kiwi',
  },
  {
    id: 'liveTheWAQ',
    label: 'vivre le WAQ',
    slug: '/vivre-le-waq',
    type: 'internal',
    color: 'pineapple',
  },
  // {
  //   id: 'speakers',
  //   label: 'appel à conférences',
  //   slug: '/appel-a-conferences',
  //   type: 'internal',
  //   color: 'pineapple',
  // },
  // {
  //   id: 'waqademy',
  //   label: 'WAQadémie',
  //   slug: '/waqademie',
  //   type: 'internal',
  //   color: 'watermelon',
  // },
];

const secondaryNavigation = [
  {
    id: 'about',
    label: 'à propos',
    slug: '/a-propos/evenement',
    type: 'internal',
    color: 'plum',
  },
  {
    id: 'partners',
    label: 'partenaires',
    slug: '/partenaires',
    type: 'internal',
    color: 'pineapple',
  },
  {
    id: 'faq',
    label: 'FAQ',
    slug: '/faq',
    type: 'internal',
    color: 'plum',
  },
  {
    id: 'contact',
    label: 'nous joindre',
    slug: '/contact',
    type: 'internal',
    color: 'watermelon',
  },
  {
    id: 'code-of-conduct',
    label: 'code de conduite',
    slug: '/code-de-conduite',
    type: 'internal',
    color: 'kiwi',
  },
  {
    id: 'edition2023',
    label: 'édition 2023',
    slug: '/programmation/2023',
    type: 'internal',
    color: 'pineapple',
  },
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
