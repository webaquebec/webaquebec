// vendors
import React, { useState, useEffect } from 'react';

// components
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import Paper from '../../../components/Paper';

// styles
import {
  blockContainerStyle,
  BlocksWrapper,
  ContentContainer,
  TicketBadge,
  TicketTitle,
  TicketPrice,
  TicketText,
  buttonStyle,
} from './Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';

const Prices = () => {
  const { t } = useTranslation();

  const [isRegularPrice, setIsRegularPrice] = useState(true);

  useEffect(() => {
    const currentDate = new Date().getTime();
    const targetDate = new Date('2024-03-21').setHours(24, 0, 0, 0); // set for midnight
    const isAfter = currentDate > targetDate;
    setIsRegularPrice(isAfter);
  }, []);

  const completeAccessPrice = isRegularPrice ? 995 : 695;
  const enterprisePrice = isRegularPrice ? 1205 : 905;

  return (
    <Center maxWidth='1124px' gutters='var(--container-gutter)'>
      <Switcher
        threshold='1080px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <BlocksWrapper>
          <Paper
            lightColor={colors.blueberry10}
            darkColor={colors.peach}
            rounded
            elevation={elevation.none}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic css={ContentContainer} withText>
              <TicketTitle>{t('ticketing.fullAccess.name')}</TicketTitle>

              <TicketPrice>{completeAccessPrice}$</TicketPrice>

              {/* <TicketBadge>{t('ticketing.soldOut')}</TicketBadge> */}

              <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                inverted
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.buyCta')}
              </Button>

              <TicketText color={colors.white}>
                <p>{t('ticketing.fullAccess.description')}</p>
                <ul>
                  <li>{t('ticketing.fullAccess.bullet1')}</li>
                  <li>{t('ticketing.fullAccess.bullet2')}</li>
                  <li>{t('ticketing.fullAccess.bullet3')}</li>
                  <li>{t('ticketing.fullAccess.bullet4')}</li>
                </ul>
              </TicketText>
            </Center>
          </Paper>
          <Paper
            lightColor={colors.peach}
            darkColor={colors.blueberry10}
            rounded
            outlined
            elevation={elevation.none}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
              <TicketTitle color={colors.gris90}>
                {t('ticketing.corporate.name')}
              </TicketTitle>

              <TicketPrice>{enterprisePrice}$</TicketPrice>

              <TicketBadge>{t('ticketing.soldOut')}</TicketBadge>

              {/* <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.buyCta')}
              </Button> */}

              <TicketText>
                <p>{t('ticketing.corporate.description')}</p>
                <ul>
                  <li>{t('ticketing.corporate.bullet1')}</li>
                  <li>{t('ticketing.corporate.bullet2')}</li>
                  <li>{t('ticketing.corporate.bullet3')}</li>
                  <li>{t('ticketing.corporate.bullet4')}</li>
                  <li>{t('ticketing.corporate.bullet5')}</li>
                </ul>
              </TicketText>
            </Center>
          </Paper>
        </BlocksWrapper>

        <BlocksWrapper>
          <Paper
            lightColor={colors.peach}
            darkColor={colors.blueberry10}
            rounded
            outlined
            elevation={elevation.none}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
              <TicketTitle color={colors.gris90}>
                {t('ticketing.daily.name')}
              </TicketTitle>

              <TicketPrice>450$</TicketPrice>

              {/* <TicketBadge>{t('ticketing.soldOut')}</TicketBadge> */}

              <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.buyCta')}
              </Button>

              <TicketText>
                <p>{t('ticketing.daily.description')}</p>
                <ul>
                  <li>{t('ticketing.daily.bullet1')}</li>
                  <li>{t('ticketing.daily.bullet2')}</li>
                  <li>{t('ticketing.daily.bullet3')}</li>
                  <li>{t('ticketing.daily.bullet4')}</li>
                </ul>
              </TicketText>
            </Center>
          </Paper>
          <Paper
            lightColor={colors.peach}
            darkColor={colors.blueberry10}
            rounded
            outlined
            elevation={elevation.none}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
              <TicketTitle color={colors.gris90}>
                {t('ticketing.student.name')}
              </TicketTitle>

              <TicketPrice>300$</TicketPrice>

              <TicketBadge>{t('ticketing.soldOut')}</TicketBadge>

              {/* <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.buyCta')}
              </Button> */}

              <TicketText>
                <p>{t('ticketing.student.description')}</p>
                <ul>
                  <li>{t('ticketing.student.bullet1')}</li>
                  <li>{t('ticketing.student.bullet2')}</li>
                  <li>{t('ticketing.student.bullet3')}</li>
                  <li>{t('ticketing.student.bullet4')}</li>
                  <li>{t('ticketing.student.bullet5')}</li>
                </ul>
              </TicketText>
            </Center>
          </Paper>
        </BlocksWrapper>
      </Switcher>
    </Center>
  );
};

export default Prices;
