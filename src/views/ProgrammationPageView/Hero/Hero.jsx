// vendors
import React from 'react';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';

// styles
import { DateList, DateListItem, DateTab } from './Hero.styles';

const Hero = () => {
  const dates = [
    { id: 1, date: 'mardi 15 juin' },
    { id: 2, date: 'mercredi 16 juin' },
    { id: 3, date: 'jeudi 17 juin' },
    { id: 4, date: 'bonus!' },
  ];

  return (
    <div>
      <HeroGrid title='programmation' displayYear />
      <Center maxWidth='736px' gutters='var(--container-gutter)'>
        <DateList>
          {dates.map((item) => (
            <DateListItem key={`date-${item.id}`}>
              <Button
                to={`/programmation?d=${item.id}`}
                outlined
                medium
                tag='link'
                css={DateTab}
              >
                {item.date}
              </Button>
            </DateListItem>
          ))}
        </DateList>
      </Center>
    </div>
  );
};

export default Hero;
