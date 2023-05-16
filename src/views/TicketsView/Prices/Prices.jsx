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
} from './Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';

const Prices = () => (
  <Center maxWidth='1124px' gutters='var(--container-gutter)'>
    <Switcher
      threshold='992px'
      space='calc(var(--container-gutter) * 2)'
      limit={2}
    >
      <BlocksWrapper>
        <Paper
          lightColor={colors.earlyDawn}
          darkColor={colors.bleu100}
          rounded
          overlaid
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
            <TicketTitle color={colors.gris90}>Billet journalier</TicketTitle>

            <TicketPrice>395$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq23'
              tag='href'
              secondary
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
            >
              Réserver
            </Button>

            <TicketText>
              Envie de venir faire ton tour, mais tu es seulement disponible une
              journée? Choisis laquelle, on s&apos;occupe du reste!
            </TicketText>
          </Center>
        </Paper>

        <Paper
          lightColor={colors.bleu100}
          darkColor={colors.earlyDawn}
          rounded
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic css={ContentContainer} withText>
            <TicketTitle>Billet accès complet</TicketTitle>

            <TicketPrice>895$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq23'
              tag='href'
              inverted
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
            >
              Réserver
            </Button>

            <TicketText color={colors.white}>
              Pour t’assurer de ne rien manquer, tout au long du WAQ!
            </TicketText>
          </Center>
        </Paper>

        <Paper
          lightColor={colors.earlyDawn}
          darkColor={colors.bleu100}
          rounded
          overlaid
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic withText css={ContentContainer}>
            <TicketTitle color={colors.gris90}>Billet étudiant</TicketTitle>

            <TicketPrice>250$</TicketPrice>

            <Button secondary small disabled>
              Complet
            </Button>

            <TicketText>
              Pour participer aux activités et assister aux conférences tout en
              respectant ton budget étudiant!
            </TicketText>
          </Center>
        </Paper>
      </BlocksWrapper>
    </Switcher>
  </Center>
);

export default Prices;
