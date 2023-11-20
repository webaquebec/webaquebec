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
  TicketBadge,
  TicketPrice,
  TicketText,
  buttonStyle,
} from './Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';

const Prices = () => (
  <Center maxWidth='1124px' gutters='var(--container-gutter)'>
    <Switcher
      threshold='1080px'
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
            <TicketBadge>Complet</TicketBadge>

            <TicketPrice>395$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq23'
              tag='href'
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              Joindre la liste d&apos;attente
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
            <TicketBadge>Complet</TicketBadge>

            <TicketPrice>895$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq23/fr?waiting_list_id=zuq7qid1eyq'
              tag='href'
              inverted
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              Joindre la liste d&apos;attente
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
            <TicketBadge>Complet</TicketBadge>

            <TicketPrice>250$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq23/fr?waiting_list_id=ojjloxhqez4'
              tag='href'
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              Joindre la liste d&apos;attente
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
