// vendors
import React from 'react';
import { hideVisually } from 'polished';

// components
import { useTranslation } from 'react-i18next';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import LazyAnimation from '../../../components/LazyAnimation';

// styles
import { easing } from '../../../styles/animation';
import {
  SectionContainer,
  StatsList,
  StatItem,
  StatImg,
  StatDescription,
} from './StatsSection.styles';

// images
import imgStat80 from '../../../images/stats/imgStat80.svg';
import imgStat3 from '../../../images/stats/imgStat3.svg';
import imgStat50 from '../../../images/stats/imgStat50.svg';

const Stats = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 0,
      number: 80,
      img: imgStat80,
      description: t('home.statistics.conferences'),
    },
    {
      id: 1,
      number: 3,
      img: imgStat3,
      description: t('home.statistics.days'),
    },
    {
      id: 2,
      number: 50,
      img: imgStat50,
      description: t('home.statistics.volunteers'),
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
                  <StatImg src={stat.img} alt={stat.number} />
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
