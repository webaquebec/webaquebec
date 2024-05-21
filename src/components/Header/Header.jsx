// vendors
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';

// components
import { useTranslation } from 'react-i18next';
import Center from '../LayoutSections/Center';
import Logo from './Logo';
import Menu from './Menu';

// styles
import {
  StyledHeader,
  Container,
  LogoWrapper,
  MenuButtonWrapper,
  LangSwitcher,
} from './Header.styles';
import BurgerButton from './BurgerButton';

const Header = ({ pathname }) => {
  const { t, i18n } = useTranslation();

  const primaryNavigation = [
    {
      id: 'Programmation',
      label: t('menu.program'),
      slug: '/programmation/2024',
      type: 'internal',
      color: 'pineapple',
    },
    {
      id: 'blog',
      label: t('menu.blog'),
      slug: '/blogue',
      type: 'internal',
      color: 'watermelon',
    },
    {
      id: 'tickets',
      label: t('menu.ticketing'),
      slug: '/billetterie',
      type: 'internal',
      color: 'kiwi',
    },
    {
      id: 'liveTheWAQ',
      label: t('menu.liveTheWAQ'),
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
      label: t('menu.about'),
      slug: '/a-propos/evenement',
      type: 'internal',
      color: 'plum',
    },
    {
      id: 'partners',
      label: t('menu.partners'),
      slug: '/partenaires',
      type: 'internal',
      color: 'pineapple',
    },
    {
      id: 'faq',
      label: t('menu.faq'),
      slug: '/faq',
      type: 'internal',
      color: 'plum',
    },
    {
      id: 'contact',
      label: t('menu.contact'),
      slug: '/contact',
      type: 'internal',
      color: 'watermelon',
    },
    {
      id: 'code-of-conduct',
      label: t('menu.codeOfConduct'),
      slug: '/code-de-conduite',
      type: 'internal',
      color: 'kiwi',
    },
    {
      id: 'edition2023',
      label: t('menu.previousEdition'),
      slug: '/programmation/2023',
      type: 'internal',
      color: 'pineapple',
    },
  ];

  const navigation = {
    primary: [...primaryNavigation],
    secondary: [...secondaryNavigation],
  };

  const [opened, setOpened] = useState(false);
  const [otherLocale, setOtherLocale] = useState(
    i18n.language === 'fr-CA' ? 'EN' : 'FR'
  );

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

  const handleClickLangSwitcher = () => {
    if (i18n.language === 'fr-CA') {
      i18n.changeLanguage('en-CA');
      setOtherLocale('FR');
    } else {
      i18n.changeLanguage('fr-CA');
      setOtherLocale('EN');
    }
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
            <LangSwitcher type='button' onClick={handleClickLangSwitcher}>
              {otherLocale}
            </LangSwitcher>
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
