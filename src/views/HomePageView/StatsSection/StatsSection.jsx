// vendors
import React from 'react';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import LazyAnimation from '../../../components/LazyAnimation';

// styles
import { easing } from '../../../styles/animation';
import { billboardStyle, billboardAltStyle } from '../../../styles/global';
import {
  SectionContainer,
  StatsList,
  StatItem,
  StatDescription,
} from './StatsSection.styles';

const Stats = () => {
  const data = [
    {
      id: 0,
      number: 80,
      description: 'conférences, ateliers et plus',
    },
    {
      id: 1,
      number: 3,
      description: 'journées<br />intensives',
    },
    {
      id: 2,
      number: 50,
      description: "bénévoles fantastiques à l'année",
    },
  ];

  return (
    <SectionContainer>
      <h2 css={hideVisually}>Statistiques</h2>

      <Center
        maxWidth='var(--max-container-width)'
        gutters='50px'
        withText
        intrinsic
      >
        <Switcher threshold='768px' space='2rem' limit={3}>
          <StatsList>
            {data.map((stat, index) => (
              <StatItem key={`stat-item-${stat.id}`}>
                <LazyAnimation
                  transition={{
                    duration: '400ms',
                    delay: `${index * 300}ms`,
                    easing: easing.outCustom,
                    scale: { initial: '0', final: '1' },
                  }}
                >
                  <span css={billboardStyle}>
                    {index === 0 ? (
                      <span css={billboardAltStyle}>{stat.number}</span>
                    ) : (
                      stat.number
                    )}
                  </span>
                </LazyAnimation>

                <LazyAnimation
                  transition={{
                    duration: '250ms',
                    delay: `${(index + 1) * 300}ms`,
                    easing: easing.outCustom,
                    translateY: { initial: '-40px', final: '0' },
                    opacity: { initial: '0', final: '1' },
                  }}
                >
                  <StatDescription
                    dangerouslySetInnerHTML={{ __html: stat.description }}
                  />
                </LazyAnimation>
              </StatItem>
            ))}
          </StatsList>
        </Switcher>
      </Center>
    </SectionContainer>
  );
};

export default Stats;
