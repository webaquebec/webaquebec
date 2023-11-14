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

// Apply Layout component to every page and template
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    <ModalProvider>
      <ProgramFiltersProvider>{element}</ProgramFiltersProvider>
    </ModalProvider>
  </GlobalProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  // Preload fonts to improve performances
  // See more https://www.gatsbyjs.com/docs/how-to/styling/using-local-fonts/#preload-your-fonts
  const preloadFonts = [
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redactionFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redactionBoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redactionItalicFont'
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
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_20-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction20Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_20-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction20BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_20-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction20ItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_35-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction35Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_35-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction35BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_35-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction35ItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_50-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction50Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_50-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction50BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_50-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction50ItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_70-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction70Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_70-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction70BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_70-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction70ItalicFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_100-Regular.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction100Font'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_100-Bold.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction100BoldFont'
    />,
    <link
      rel='preload'
      href='/fonts/Redaction/Redaction_100-Italic.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='redaction100ItalicFont'
    />,
  ];

  setHeadComponents([...preloadFonts]);
};

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
