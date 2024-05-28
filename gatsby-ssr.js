/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
// vendors
import React from 'react';
import PropTypes from 'prop-types';

// contexts
import { GlobalProvider } from './src/contexts/GlobalContext';
import { ModalProvider } from './src/contexts/ModalContext';
import { ProgramFiltersProvider } from './src/contexts/ProgramFiltersContext';

// components
import Layout from './src/components/Layout/Layout';
import LanguageProvider from './src/contexts/LanguageContext/LanguageContext';

// Apply Layout component to every page and template
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    <LanguageProvider>
      <ModalProvider>
        <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
      </ModalProvider>
    </LanguageProvider>
  </GlobalProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  // Preload fonts to improve performances
  // See more https://www.gatsbyjs.com/docs/how-to/styling/using-local-fonts/#preload-your-fonts
  const preloadFonts = [
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Thin.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskThinFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-ThinItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskThinItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Ultralight.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskUltralightFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-UltralightItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskUltralightItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Light.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskLightFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-LightItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskLightItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-RegularItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Medium.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskMediumFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-MediumItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskMediumItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskBoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-BoldItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskBoldItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Ultrabold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskUltraboldFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-UltraboldItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskUltraboldItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-Black.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskBlackFont'
    />,
    <link
      rel='preload'
      href='/fonts/PPRadioGrotesk/PPRadioGrotesk-BlackItalic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='radioGroteskBlackItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_10-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction10Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_10-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction10BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_10-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction10ItalicFont'
    />,
  ];

  const scripts = [
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.axeptioSettings = {
          clientId: "66449091b18ff7b3e3ed5f8b",
          cookiesVersion: "webaquebecorg-fr-EU",
          };
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `,
      }}
    />,
  ];

  setHeadComponents([...preloadFonts, ...scripts]);
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
