import React from 'react';
import {
  StatsSection,
  StatsIntro,
  StatsList,
  StatItem,
  StatImg,
  StatDesc,
} from './Stats.styles';
import { grid } from '../../styles/layouts';
import stat80 from '../../images/stats/80.svg';
import stat3 from '../../images/stats/3.svg';
import stat50 from '../../images/stats/50.svg';

const Stats = () => {
  const data = [
    { number: 80, img: stat80, description: 'conférences, ateliers et plus' },
    { number: 3, img: stat3, description: 'journées intensives' },
    { number: 50, img: stat50, description: 'bénévoles annuels passionnés' },
  ];

  return (
    <StatsSection>
      <StatsIntro>
        le plus grand évènement numérique francophone en Amérique du Nord
      </StatsIntro>
      <StatsList css={grid('30%', '20px', 3)}>
        {data.map((stat) => (
          <StatItem key={`stat-item-${stat.number}`}>
            {
              // eslint-disable-next-line global-require
            }
            <StatImg src={stat.img} alt={stat.number} />
            <StatDesc>{stat.description}</StatDesc>
          </StatItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

export default Stats;
