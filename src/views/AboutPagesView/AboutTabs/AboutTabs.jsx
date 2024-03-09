// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Center from '../../../components/LayoutSections/Center';

// images
import plasticBag from '../../../images/textures/plasticBag.png';

// styles
import {
  PageTitle,
  TextureWrapper,
  PlasticTexture,
  AboutNav,
  AboutList,
  AboutItem,
  AboutLink,
} from './AboutTabs.styles';
import { h1AltStyle } from '../../../styles/global';

const AboutTabs = ({ activeTabId }) => {
  const tabs = [
    {
      id: 0,
      name: 'l’événement',
      pageUrl: '/a-propos/evenement',
    },
    {
      id: 1,
      name: 'notre équipe',
      pageUrl: '/a-propos/notre-equipe',
    },
    {
      id: 2,
      name: 'Québec numérique',
      pageUrl: '/a-propos/quebec-numerique',
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
        <PageTitle css={h1AltStyle}>à propos</PageTitle>

        <TextureWrapper>
          <PlasticTexture src={plasticBag} alt='' />
        </TextureWrapper>

        <AboutNav>
          <AboutList>
            {tabs.map((tab) => (
              <AboutItem key={tab.id}>
                <AboutLink to={tab.pageUrl} $isActive={activeTabId === tab.id}>
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
   * Specifies the active tab id
   */
  activeTabId: PropTypes.number.isRequired,
};

export default AboutTabs;
