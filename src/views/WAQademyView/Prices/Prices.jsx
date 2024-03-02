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

const Prices = () => (
  <Center maxWidth='850px' gutters='var(--container-gutter)'>
    <Switcher
      threshold='800px'
      space='calc(var(--container-gutter) * 2)'
      limit={2}
    >
      <BlocksWrapper>
        {/* <Paper
          lightColor={colors.gris30}
          darkColor={colors.blueberry}
          rounded
          overlaid
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
            <TicketTitle color={colors.gris90}>Déjeuner-conférence</TicketTitle>

            <TicketPrice>30$</TicketPrice>

            <Button
              to='https://my.weezevent.com/waqademie-tony-aube'
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
        </Paper> */}

        <Paper
          lightColor={colors.blueberry}
          darkColor={colors.gris30}
          rounded
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic css={ContentContainer} withText>
            <TicketTitle>Formation</TicketTitle>

            <TicketPrice>320$</TicketPrice>

            <Button
              to='https://my.weezevent.com/google-analytics-4'
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
              Inclus le petit-déjeuner, des collations, du réseautage et 3
              heures de formation
            </TicketText>
          </Center>
        </Paper>
      </BlocksWrapper>
    </Switcher>
  </Center>
);

export default Prices;
