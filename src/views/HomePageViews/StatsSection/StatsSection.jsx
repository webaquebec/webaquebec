import React from 'react';
import {
  StatsIntro,
  StatsList,
  StatItem,
  StatImg,
  StatDescription,
} from './StatsSection.styles';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import stat80 from '../../../images/stats/80.svg';
import stat3 from '../../../images/stats/3.svg';
import stat50 from '../../../images/stats/50.svg';

const Stats = () => {
  const data = [
    { number: 80, img: stat80, description: 'conférences, ateliers et plus' },
    { number: 3, img: stat3, description: 'journées<br />intensives' },
    { number: 50, img: stat50, description: 'bénévoles annuels passionnés' },
  ];

  return (
    <Center
      maxWidth='var(--max-container-width)'
      gutters='50px'
      withText
      intrinsic
    >
      <StatsIntro>
        le plus grand évènement numérique francophone en Amérique du Nord
      </StatsIntro>
      <Switcher threshold='768px' space='2rem' limit={3}>
        <StatsList>
          {data.map((stat) => (
            <StatItem key={`stat-item-${stat.number}`}>
              <StatImg src={stat.img} alt={stat.number} />
              <StatDescription
                dangerouslySetInnerHTML={{ __html: stat.description }}
              />
            </StatItem>
          ))}
        </StatsList>
      </Switcher>
    </Center>
  );
};

export default Stats;
