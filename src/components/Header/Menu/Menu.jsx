// vendors
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// components
import Center from '../../LayoutSections/Center';
import Grid from '../../LayoutSections/Grid';
import Stack from '../../LayoutSections/Stack';
import Cluster from '../../LayoutSections/Cluster';
import CloseButton from '../../CloseButton';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// images
import logoSVG from '../../../images/logo-waq-22-sticker.svg';
import facebook from '../../../images/socialMedia/facebook.svg';
import twitter from '../../../images/socialMedia/twitter.svg';
import instagram from '../../../images/socialMedia/instagram.svg';
import linkedin from '../../../images/socialMedia/linkedin.svg';

// styles
import colors from '../../../styles/colors';
import {
  closeButtonStyle,
  primaryNavListStyle,
  Container,
  Gradient,
  Top,
  LogoWrapper,
  Logo,
  ListItem,
  NavLink,
  ButtonWrapper,
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
    name: 'Instagram',
    img: instagram,
    link: 'https://www.instagram.com/webaquebec/',
  },
  {
    name: 'Linkedin',
    img: linkedin,
    link: 'https://www.linkedin.com/company/web-qu-bec',
  },
];

const Menu = ({ pathname, opened, onClose, primaryNavigation }) => {
  const navLinkRefs = useRef([]);
  const gradientRef = useRef(null);
  const [gradient, setGradient] = useState({
    isVisible: false,
    hasChanged: false,
    defaultColor: '',
    color: '',
  });

  const hasMounted = useHasMounted();

  // Set default gradient color based on active pathname
  useEffect(() => {
    const navItem = primaryNavigation.find((current) =>
      current.slug.includes(pathname)
    );

    if (navItem && hasMounted) {
      setGradient((state) => ({
        ...state,
        isVisible: true,
        defaultColor: navItem.color,
      }));
    }
  }, [hasMounted, pathname, primaryNavigation]);

  const handleMouseOver = (color) => (e) => {
    setGradient((state) => ({
      ...state,
      isVisible: true,
      hasChanged: state.defaultColor !== color,
      color,
    }));

    setTimeout(() => {
      setGradient((state) => ({
        ...state,
        hasChanged: false,
      }));
    }, 100);

    e.preventDefault();
  };

  const handleMouseOut = (color) => (e) => {
    e.preventDefault();

    setGradient((state) => ({
      ...state,
      isVisible: !!state.defaultColor,
      hasChanged: state.defaultColor !== color,
      color: '',
    }));

    setTimeout(() => {
      setGradient((state) => ({
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
    >
      <Gradient
        ref={gradientRef}
        isActive={opened}
        isVisible={gradient.isVisible}
        restartAnimation={gradient.hasChanged}
        color={gradient.color ? gradient.color : gradient.defaultColor}
      />

      <Center maxWidth='var(--max-container-width)' gutters='16px'>
        <Top>
          <LogoWrapper>
            <Logo src={logoSVG} alt='' role='presentation' />
          </LogoWrapper>

          <ButtonWrapper>
            <CloseButton onClose={onClose} darked css={closeButtonStyle} />
          </ButtonWrapper>
        </Top>

        <Grid as='nav' space='38px' minWidth='300px'>
          <Stack as='ul' css={primaryNavListStyle}>
            {primaryNavigation.map((item) => (
              <ListItem key={item.id}>
                {item.type === 'internal' ? (
                  <NavLink
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
                  </NavLink>
                ) : (
                  <NavLink
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
                  </NavLink>
                )}
              </ListItem>
            ))}

            <Cluster space='2rem'>
              <ul>
                {socialMedia.map((media) => (
                  <ListItem key={`media-item-${media.name}`}>
                    <a
                      href={media.link}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <img src={media.img} alt={media.name} />
                    </a>
                  </ListItem>
                ))}
              </ul>
            </Cluster>
          </Stack>
        </Grid>
      </Center>
    </Container>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string,
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
  pathname: undefined,
  opened: false,
  onClose: () => {},
};

export default Menu;
