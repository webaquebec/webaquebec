// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import {
  PageTitle,
  AboutNav,
  AboutList,
  AboutItem,
  AboutLink,
} from './AboutTabs.styles';
import { h1AltStyle } from '../../../styles/global';

const AboutTabs = ({ title, activeTabId }) => {
  const tabs = [
    {
      id: 0,
      name: 'l’événement',
      pageUrl: 'a-propos/evenement',
    },
    {
      id: 1,
      name: 'notre équipe',
      pageUrl: 'a-propos/notre-equipe',
    },
    {
      id: 2,
      name: 'Québec Numérique',
      pageUrl: 'a-propos/quebec-numerique',
    },
  ];

  return (
    <header>
      <Center
        maxWidth='770px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <h1 css={hideVisually}>{title}</h1>
        <PageTitle css={h1AltStyle}>à propos</PageTitle>

        <AboutNav>
          <AboutList>
            {tabs.map((tab) => (
              <AboutItem key={tab.id}>
                <AboutLink
                  href={tab.pageUrl}
                  $isActive={activeTabId === tab.id}
                >
                  {tab.name}
                </AboutLink>
              </AboutItem>
            ))}
          </AboutList>
        </AboutNav>
      </Center>
    </header>
  );
};

AboutTabs.propTypes = {
  /**
   * Specifies the active page title
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies the active tab id
   */
  activeTabId: PropTypes.number.isRequired,
};

export default AboutTabs;
