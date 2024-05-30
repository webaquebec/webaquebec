// vendors
import React from 'react';

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
  TicketTitle,
  TicketPrice,
  TicketText,
  buttonStyle,
} from './Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';
import { fontWeights } from '../../../styles/typography';

const Prices = () => {
  const { t } = useTranslation();

  const completeAccessPrice = 595;
  const enterprisePrice = 795;

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
              <TicketTitle>
                <span
                  css={`
                    font-weight: ${fontWeights.regular};
                  `}
                >
                  {t(t('ticketing.earlyBird'))}
                </span>
                <br />
                {t('ticketing.fullAccess.name')}
              </TicketTitle>

              <TicketPrice>{completeAccessPrice}$</TicketPrice>

              <Button
                to='https://form.jotform.com/241493111485252'
                tag='href'
                inverted
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.reserveCta')}
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
              <TicketTitle>
                <span
                  css={`
                    font-weight: ${fontWeights.regular};
                  `}
                >
                  {t(t('ticketing.earlyBird'))}
                </span>
                <br />
                {t('ticketing.corporate.name')}
              </TicketTitle>

              <TicketPrice>{enterprisePrice}$</TicketPrice>

              <Button
                to='https://form.jotform.com/241493111485252'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                {t('ticketing.reserveCta')}
              </Button>

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
      </Switcher>
    </Center>
  );
};

export default Prices;
