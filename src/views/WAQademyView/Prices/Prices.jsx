// vendors
import React from 'react';

// components
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
} from '../../TicketsView/Prices/Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';
import Section from './Prices.styles';

const Prices = () => (
  <Section>
    <Center maxWidth='1124px' gutters='var(--container-gutter)'>
      <Switcher
        threshold='992px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <BlocksWrapper>
          <Paper
            lightColor={colors.gris30}
            darkColor={colors.bleu80}
            rounded
            overlaid
            elevation={elevation.large}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
              <TicketTitle color={colors.gris90}>
                Déjeuner-conférence
              </TicketTitle>

              <TicketPrice>30$</TicketPrice>

              <Button
                to='https://ti.to/web-a-quebec/waq-2022'
                tag='href'
                secondary
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
              >
                Réserver ma place
              </Button>

              <TicketText>
                Inclus le petit-déjeuner et 45 minutes de conférences
              </TicketText>
            </Center>
          </Paper>

          <Paper
            lightColor={colors.bleu80}
            darkColor={colors.gris30}
            rounded
            elevation={elevation.large}
            css={blockContainerStyle}
          >
            <Center maxWidth='320px' intrinsic css={ContentContainer} withText>
              <TicketTitle>Formations complète</TicketTitle>

              <TicketPrice>320$</TicketPrice>

              <Button
                to='https://ti.to/web-a-quebec/waq-2022'
                tag='href'
                inverted
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
              >
                Assister à la formation
              </Button>

              <TicketText>
                Inclus le petit-déjeuner, 45 minutes de conférence et 3 heures
                de formation
              </TicketText>
            </Center>
          </Paper>
        </BlocksWrapper>
      </Switcher>
    </Center>
  </Section>
);

export default Prices;
