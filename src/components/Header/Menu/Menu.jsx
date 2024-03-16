// vendors
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from 'styled-components';

// components
import Center from '../../LayoutSections/Center';
import Grid from '../../LayoutSections/Grid';
import Stack from '../../LayoutSections/Stack';
import Cluster from '../../LayoutSections/Cluster';
// import CloseButton from '../../CloseButton';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// images
import facebook from '../../../images/socialMedia/facebook.svg';
import twitter from '../../../images/socialMedia/twitter.svg';
import youtube from '../../../images/socialMedia/youtube.svg';
import instagram from '../../../images/socialMedia/instagram.svg';
import linkedin from '../../../images/socialMedia/linkedin.svg';
import tiktok from '../../../images/socialMedia/tiktok.svg';

// styles
import colors from '../../../styles/colors';
import {
  containerStyle,
  navStyle,
  primaryNavListStyle,
  secondaryNavListStyle,
  MenuWrapper,
  Container,
  Top,
  ListItem,
  NavPrimaryLink,
  NavSecondaryLink,
  SocialLink,
} from './Menu.styles';

const socialMedia = [
  {
    name: 'Facebook',
    img: facebook,
    link: 'https://www.facebook.com/webaquebec/',
  },
  {
    name: 'Twitter',
    img: twitter,
    link: 'https://twitter.com/webaquebec',
  },
  {
    name: 'Youtube',
    img: youtube,
    link: 'https://www.youtube.com/@waqwebaquebec/videos',
  },
  {
    name: 'Instagram',
    img: instagram,
    link: 'https://www.instagram.com/webaquebec/',
  },
  {
    name: 'Linkedin',
    img: linkedin,
    link: 'https://www.linkedin.com/company/web-qu-bec',
  },
  {
    name: 'Tiktok',
    img: tiktok,
    link: 'https://www.tiktok.com/@webaquebec',
  },
];

const Menu = ({ pathname, opened, onClose, navigation }) => {
  const navLinkRefs = useRef([]);
  const [backgroundColor, setBackgroundColor] = useState({
    hasChanged: false,
    defaultColor: '',
    color: '',
  });

  const hasMounted = useHasMounted();

  // Set default background color based on active pathname
  useEffect(() => {
    const navItems = [...navigation.primary, ...navigation.secondary];
    const navItem = navItems.find((current) => {
      if (pathname === '/') return false;
      return current.slug.includes(pathname);
    });

    if (hasMounted) {
      setBackgroundColor((state) => ({
        ...state,
        defaultColor: navItem ? navItem.color : 'kiwi',
        color: navItem ? navItem.color : 'kiwi',
      }));
    }
  }, [hasMounted, pathname, navigation]);

  const handleMouseOver = (color) => (e) => {
    setBackgroundColor((state) => ({
      ...state,
      hasChanged: state.defaultColor !== color,
      color,
    }));

    setTimeout(() => {
      setBackgroundColor((state) => ({
        ...state,
        hasChanged: false,
      }));
    }, 100);

    e.preventDefault();
  };

  const handleMouseOut = (color) => (e) => {
    e.preventDefault();

    setBackgroundColor((state) => ({
      ...state,
      hasChanged: state.defaultColor !== color,
      color: state.defaultColor,
    }));

    setTimeout(() => {
      setBackgroundColor((state) => ({
        ...state,
        hasChanged: false,
      }));
    }, 100);
  };

  return (
    <Container
      padding='0'
      noBorder
      lightColor={colors.white}
      darkColor={colors.bleu}
      $opened={opened}
      css={[
        containerStyle,
        `background-color: ${colors[backgroundColor.color]};`,
      ]}
    >
      <MenuWrapper
        css={`
          background-color: ${colors[backgroundColor.color]};
        `}
      >
        <Center maxWidth='var(--max-container-width)'>
          <Top />

          <Grid
            as='nav'
            space='0 38px'
            minWidth='300px'
            collapsed
            css={navStyle}
          >
            <Stack as='ul' css={primaryNavListStyle}>
              {navigation.primary.map((item) => (
                <ListItem key={item.id}>
                  {item.type === 'internal' ? (
                    <NavPrimaryLink
                      ref={(el) => {
                        navLinkRefs.current[item.id] = el;
                        return navLinkRefs.current[item.id];
                      }}
                      as={Link}
                      to={item.slug}
                      activeClassName='active'
                      partiallyActive
                      data-text={item.label}
                      css={`
                        --sticker-color: ${colors[item.color]};
                      `}
                      onClick={onClose}
                      onMouseOver={handleMouseOver(item.color)}
                      onMouseOut={handleMouseOut(item.color)}
                      onFocus={handleMouseOver(item.color)}
                      onBlur={handleMouseOut(item.color)}
                    >
                      {item.label}
                    </NavPrimaryLink>
                  ) : (
                    <NavPrimaryLink
                      ref={(el) => {
                        navLinkRefs.current[item.id] = el;
                        return navLinkRefs.current[item.id];
                      }}
                      href={item.slug}
                      activeClassName='active'
                      partiallyActive
                      onClick={onClose}
                      onMouseOver={handleMouseOver(item.color)}
                      onMouseOut={handleMouseOut(item.color)}
                      onFocus={handleMouseOver(item.color)}
                      onBlur={handleMouseOut(item.color)}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {item.label}
                    </NavPrimaryLink>
                  )}
                </ListItem>
              ))}
            </Stack>
            <Stack as='ul' css={secondaryNavListStyle}>
              {navigation.secondary.map((item) => (
                <ListItem
                  key={item.id}
                  css={`
                    --transition-additional-delay: 300ms;
                    --translate-y: -20px;

                    ${opened &&
                    css`
                      transition-delay: 0ms;
                    `}
                  `}
                >
                  {item.type === 'internal' ? (
                    <NavSecondaryLink
                      ref={(el) => {
                        navLinkRefs.current[item.id] = el;
                        return navLinkRefs.current[item.id];
                      }}
                      as={Link}
                      to={item.slug}
                      activeClassName='active'
                      partiallyActive
                      onClick={onClose}
                      onMouseOver={handleMouseOver(item.color)}
                      onMouseOut={handleMouseOut(item.color)}
                      onFocus={handleMouseOver(item.color)}
                      onBlur={handleMouseOut(item.color)}
                    >
                      {item.label}
                    </NavSecondaryLink>
                  ) : (
                    <NavSecondaryLink
                      ref={(el) => {
                        navLinkRefs.current[item.id] = el;
                        return navLinkRefs.current[item.id];
                      }}
                      href={item.slug}
                      activeClassName='active'
                      partiallyActive
                      onClick={onClose}
                      onMouseOver={handleMouseOver(item.color)}
                      onMouseOut={handleMouseOut(item.color)}
                      onFocus={handleMouseOver(item.color)}
                      onBlur={handleMouseOut(item.color)}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {item.label}
                    </NavSecondaryLink>
                  )}
                </ListItem>
              ))}

              <Cluster as='li' space='1.5rem'>
                <ul>
                  {socialMedia.map((media) => (
                    <ListItem
                      key={`media-item-${media.name}`}
                      css={`
                        --transition-additional-delay: 300ms;

                        ${opened &&
                        css`
                          transition-delay: 0ms;
                        `}
                      `}
                    >
                      <SocialLink
                        href={media.link}
                        rel='noopener noreferrer'
                        target='_blank'
                      >
                        <img src={media.img} alt={media.name} />
                      </SocialLink>
                    </ListItem>
                  ))}
                </ul>
              </Cluster>
            </Stack>
          </Grid>
        </Center>
      </MenuWrapper>
    </Container>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string,
  navigation: PropTypes.shape({
    primary: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        slug: PropTypes.string,
      })
    ).isRequired,
    secondary: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        slug: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};

Menu.defaultProps = {
  pathname: undefined,
  opened: false,
  onClose: () => {},
};

export default Menu;
