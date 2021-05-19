// vendors
import React, { useState } from 'react';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';

// styles
import { DateList, DateTab } from './Hero.styles';

const Hero = () => {
  const dates = [
    { id: 0, date: 'mardi 15 juin' },
    { id: 1, date: 'mercredi 16 juin' },
    { id: 2, date: 'jeudi 17 juin' },
    { id: 3, date: 'bonus!' },
  ];

  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <div>
      <HeroGrid title='programmation' displayYear />
      <Center maxWidth='736px' gutters='var(--container-gutter)'>
        <DateList>
          {dates.map((item) => (
            <li key={`date-${item.id}`}>
              <Button
                onClick={() => setSelectedDate(item.id)}
                outlined
                medium
                css={DateTab}
                className={selectedDate === item.id && 'active-date-tab'}
              >
                {item.date}
              </Button>
            </li>
          ))}
        </DateList>
        <Dropdown title={dates[selectedDate].date}>
          <ul>
            {dates.map((item) => (
              <li key={`date-${item.id}`}>
                <Button
                  onClick={() => setSelectedDate(item.id)}
                  outlined
                  medium
                >
                  {item.date}
                </Button>
              </li>
            ))}
          </ul>
        </Dropdown>
      </Center>
    </div>
  );
};

export default Hero;
