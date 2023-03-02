/* eslint-disable react/jsx-no-useless-fragment */
// vendors
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

// components
import Button from '../Button';

// hooks
import useStickyState from '../../hooks/useStickyState';

// styles
import colors from '../../styles/colors';
import elevation from '../../styles/elevation';
import Stack from '../LayoutSections/Stack';
import {
  ButtonContainer,
  Container,
  Cookie,
  Link,
  Wrapper,
  contentStyle,
  noWrapStyle,
} from './CookieBanner.styles';

const CookieBanner = ({ location }) => {
  // if (isBrowser()) {
  //   initializeAndTrack(location);
  // }
  initializeAndTrack(location);

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden'
  );

  const setCookie = (key, value) => {
    document.cookie = `${key}=${value}`;
  };

  const enableAnalytics = useCallback(() => {
    setCookie('gatsby-gdpr-google-analytics', true);
    setCookie('gatsby-gdpr-google-tagmanager', true);
    setCookie('gatsby-gdpr-facebook-pixel', true);

    setBannerHidden(true);
  }, [setBannerHidden]);

  const disableAnalytics = useCallback(() => {
    setCookie('gatsby-gdpr-google-analytics', false);
    setCookie('gatsby-gdpr-google-tagmanager', false);
    setCookie('gatsby-gdpr-facebook-pixel', false);

    setBannerHidden(true);
  }, [setBannerHidden]);

  return (
    <>
      {!bannerHidden && (
        <Container
          lightColor={colors.white}
          darkColor={colors.bleu80}
          elevation={elevation.large}
          rounded
          overlaid
        >
          <Wrapper>
            <Cookie>🍪</Cookie>

            <Stack space='var(--container-gutter)' css={contentStyle}>
              <p>
                Le site du Web à Québec (WAQ) utilise des cookies pour te
                garantir une meilleure expérience de navigation. En cliquant sur{' '}
                <span css={noWrapStyle}>&laquo; Accepter &raquo;</span>, on
                suppose que tu es d&apos;accord avec cela!{' '}
                <Link to='/politique-et-confidentialite'>En savoir plus</Link>
              </p>

              <ButtonContainer>
                <Button onClick={enableAnalytics} small>
                  Accepter
                </Button>
                <Button onClick={disableAnalytics} primary small>
                  Refuser
                </Button>

                {/* <Button
                  to='/politique-et-confidentialite'
                  tag='link'
                  small
                  primary
                >
                  Plus d&apos;information
                </Button> */}
              </ButtonContainer>
            </Stack>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

CookieBanner.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default CookieBanner;
