// vendors
import React from 'react';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import LazyAnimation from '../../../components/LazyAnimation';

// images
import vectorStickerStat3 from '../../../images/stats/vectorStickerStat3.svg';
import vectorStickerStat50 from '../../../images/stats/vectorStickerStat50.svg';

// styles
import { easing } from '../../../styles/animation';
import {
  SectionContainer,
  StatsIntro,
  StatsList,
  StatItem,
  StatImg,
  StatDescription,
} from './StatsSection.styles';

const Stats = () => {
  const data = [
    {
      id: 0,
      number: 50,
      img: {
        src: vectorStickerStat50,
        transform: {
          rotate: { initial: '-12deg', final: '-24deg' },
        },
      },
      description: 'conférences, ateliers et plus',
    },
    {
      id: 1,
      number: 3,
      img: {
        src: vectorStickerStat3,
        transform: {
          rotate: { initial: '0deg', final: '0.1deg' }, // Fix weird glow effect when no rotation defined on Firefox
        },
      },
      description: 'journées<br />intensives',
    },
    {
      id: 2,
      number: 50,
      img: {
        src: vectorStickerStat50,
        transform: {
          rotate: { initial: '-12deg', final: '0deg' },
        },
      },
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
        <StatsIntro>
          Le plus grand événement numérique francophone en Amérique du Nord
        </StatsIntro>

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
                    rotate: {
                      initial: stat.img.transform.rotate.initial,
                      final: stat.img.transform.rotate.final,
                    },
                  }}
                >
                  <StatImg src={stat.img.src} alt={stat.number} />
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
