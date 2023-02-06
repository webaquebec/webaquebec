/* eslint-disable react/jsx-no-useless-fragment */
// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';

// components
import Button from '../Button';
// import Paper from '../Paper';

// hooks
import useStickyState, { isBrowser } from '../../hooks/useStickyState';

// styles
import colors from '../../styles/colors';
import elevation from '../../styles/elevation';
import Stack from '../LayoutSections/Stack';
import {
  ButtonContainer,
  Container,
  Cookie,
  Wrapper,
  contentStyle,
} from './CookieBanner.styles';

const CookieBanner = ({ location }) => {
  if (isBrowser) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden'
  );

  const enableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  return (
    <>
      {!bannerHidden && (
        <Container
          lightColor={colors.white}
          darkColor={colors.bleu80}
          rounded
          overlaid
          elevation={elevation.large}
        >
          <Wrapper>
            <Cookie>🍪</Cookie>

            <Stack css={contentStyle}>
              <p>
                Le site du Web à Québec (WAQ) utilise des cookies pour te
                garantir une meilleure expérience de navigation. Si tu continues
                à utiliser ce site, on suppose que tu es d’accord avec cela!
              </p>

              <ButtonContainer>
                <Button onClick={enableAnalytics} small>
                  Accepter
                </Button>

                <Button to='/' tag='link' small primary>
                  Politique de confidentialité
                </Button>
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
