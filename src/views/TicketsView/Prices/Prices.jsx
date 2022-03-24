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

const Prices = () => (
  <Center maxWidth='1064px' gutters='32px'>
    <Switcher threshold='768px' space='2rem' limit={2}>
      <BlocksWrapper>
        <Paper
          lightColor={colors.gris30}
          darkColor={colors.bleu80}
          rounded
          overlaid
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic withText css={ContentContainer}>
            <TicketTitle color={colors.gris90}>Billet virtuel</TicketTitle>

            <TicketPrice>195$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq-2022'
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
              Pour écouter les conférences en direct ou en rediffusion. En
              pantalon, pas de pantalon. On n&apos;arrête pas le progrès comme
              on dit!
            </TicketText>
          </Center>
        </Paper>

        <Paper
          lightColor={colors.bleu80}
          darkColor={colors.gris30}
          rounded
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic css={ContentContainer} withText>
            <TicketTitle>Billet présentiel</TicketTitle>

            <TicketPrice>895$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq-2022'
              tag='href'
              primary
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
            >
              Réserver
            </Button>

            <TicketText color={colors.white}>
              Pour participer aux activités en personne et voir les
              conférencier.ère.s qui pourront être avec nous. Vous pourrez pas
              les toucher, mais presque!
            </TicketText>
          </Center>
        </Paper>
      </BlocksWrapper>
    </Switcher>
  </Center>
);

export default Prices;
