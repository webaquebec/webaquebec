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
  ContentContainer,
  TicketTitle,
  TicketPrice,
  TicketText,
} from './Prices.styles';
import colors from '../../../styles/colors';

const Prices = () => (
  <Center maxWidth='1064px' gutters='32px'>
    <Switcher threshold='768px' space='2rem' limit={2}>
      <div>
        <Paper
          lightColor={colors.gris30}
          darkColor={colors.bleu80}
          rounded
          overlaid
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic css={ContentContainer} withText>
            <TicketTitle color={colors.gris90}>Édition virtuelle</TicketTitle>

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
              Ce tarif permet d&apos;accéder à toutes les activités virtuelles
              du 24 au 26 mai 2022.
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
            <TicketTitle>Prévente Accès complet</TicketTitle>

            <TicketPrice>595$</TicketPrice>

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
              Ce tarif permet d&apos;accéder à toutes les activités
              présentielles et virtuelles du 24 au 26 mai 2022.
            </TicketText>
          </Center>
        </Paper>
      </div>
    </Switcher>
  </Center>
);

export default Prices;
