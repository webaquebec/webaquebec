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
  // TicketBadge,
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
          lightColor={colors.bleu100}
          darkColor={colors.earlyDawn}
          rounded
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='320px' intrinsic css={ContentContainer} withText>
            <TicketTitle>Billet accès complet</TicketTitle>
            {/* <TicketBadge>Complet</TicketBadge> */}

            <TicketPrice>695$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq24/fr?waiting_list_id=zuq7qid1eyq'
              tag='href'
              inverted
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              M’inscrire à la liste d’attente
            </Button>

            <TicketText color={colors.white}>
              <p>Tu ne veux rien manquer du WAQ? </p>
              <ul>
                <li>3 journées de conférences;</li>
                <li>
                  un accès pour écouter les contenus de la salle principale en
                  rediffusion; les meilleurs 5 à 7 en ville;
                </li>
                <li>tes repas et boissons durant les 3 jours.</li>
              </ul>
              <small>
                *Tarif valide jusqu’au 20 mars inclusivement. Ensuite, il sera
                de 995 $.
              </small>
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
            <TicketTitle color={colors.gris90}>Billet journalier</TicketTitle>
            {/* <TicketBadge>Complet</TicketBadge> */}

            <TicketPrice>450$</TicketPrice>

            {/* <Button
              to='https://ti.to/web-a-quebec/waq23'
              tag='href'
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              Acheter mon billet
            </Button> */}

            <TicketText>
              <p>Tu n’es pas disponible les 3 jours? On a pensé à toi.</p>
              <ul>
                <li>une journée de conférence;</li>
                <li>tes repas et boissons;</li>
                <li>un 5 à 7 exceptionnel.</li>
              </ul>
              <small>
                *Disponible dès le 21 mars 2024. Après tout, pourquoi choisir un
                billet journalier sans connaître la programmation!
              </small>
            </TicketText>
          </Center>
        </Paper>
      </BlocksWrapper>

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
            <TicketTitle color={colors.gris90}>Billet entreprise</TicketTitle>
            {/* <TicketBadge>Complet</TicketBadge> */}

            <TicketPrice>905$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq24/fr?waiting_list_id=ojjloxhqez4'
              tag='href'
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              M’inscrire à la liste d’attente
            </Button>

            <TicketText>
              <p>
                Tu veux assister aux conférences du matin et passer le relais à
                ta collègue en pm ? C’est le billet qu’il vous faut !
              </p>
              <ul>
                <li>3 journées de conférences;</li>
                <li>
                  6 accès pour écouter les contenus de la salle principale en
                  rediffusion;
                </li>
                <li>les meilleurs 5 à 7 en ville;</li>
                <li>tes repas et boissons durant les 3 jours;</li>
                <li>
                  une gestion des billets pour faciliter la cueillette de ta
                  cocarde.
                </li>
              </ul>
              <small>
                *Tarif valide jusqu’au 20 mars inclusivement. Ensuite, il sera
                de 1205 $. Ce billet peut être partagé entre plusieurs
                personnes, mais une seule personne à la fois peut être dans le
                Terminal - Port de Québec et participer aux activités de
                l’événement.
              </small>
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
            {/* <TicketBadge>Complet</TicketBadge> */}

            <TicketPrice>300$</TicketPrice>

            <Button
              to='https://ti.to/web-a-quebec/waq24/fr?waiting_list_id=ojjloxhqez4'
              tag='href'
              small
              animated
              rel='noopener noreferrer'
              target='_blank'
              css={buttonStyle}
            >
              M’inscrire à la liste d’attente
            </Button>

            <TicketText>
              <p>Te former, réseauter et 5à7ter. Quoi demander de plus?</p>
              <ul>
                <li>un billet à un prix réduit;</li>
                <li>3 journées de conférences;</li>
                <li>tes repas et boissons durant les 3 jours;</li>
                <li>
                  un accès pour écouter les contenus de la salle principale en
                  rediffusion;
                </li>
                <li>les meilleurs 5 à 7 en ville.</li>
              </ul>
            </TicketText>
          </Center>
        </Paper>
      </BlocksWrapper>
    </Switcher>
  </Center>
);

export default Prices;
