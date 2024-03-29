// vendors
import React, { useState, useEffect } from 'react';

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
  buttonStyle,
} from './Prices.styles';
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';

const Prices = () => {
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
              <TicketTitle>Billet accès complet</TicketTitle>
              {/* <TicketBadge>Complet</TicketBadge> */}

              <TicketPrice>{completeAccessPrice}$</TicketPrice>

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
                Acheter mon billet
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
              <TicketTitle color={colors.gris90}>Billet entreprise</TicketTitle>
              {/* <TicketBadge>Complet</TicketBadge> */}

              <TicketPrice>{enterprisePrice}$</TicketPrice>

              <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                Acheter mon billet
              </Button>

              <TicketText>
                <p>
                  Tu veux assister aux conférences du matin et passer le relais
                  à ta collègue en pm? C’est le billet qu’il vous faut!
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
              <TicketTitle color={colors.gris90}>Billet journalier</TicketTitle>
              {/* <TicketBadge>Complet</TicketBadge> */}

              <TicketPrice>450$</TicketPrice>

              <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                Disponible le 21 mars
              </Button>

              <TicketText>
                <p>Tu n’es pas disponible les 3 jours? On a pensé à toi.</p>
                <ul>
                  <li>une journée de conférence;</li>
                  <li>tes repas et boissons;</li>
                  <li>un 5 à 7 exceptionnel.</li>
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
              <TicketTitle color={colors.gris90}>Billet étudiant</TicketTitle>
              {/* <TicketBadge>Complet</TicketBadge> */}

              <TicketPrice>300$</TicketPrice>

              <Button
                to='https://ti.to/web-a-quebec/waq24/fr'
                tag='href'
                small
                animated
                rel='noopener noreferrer'
                target='_blank'
                css={buttonStyle}
              >
                Acheter mon billet
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
};

export default Prices;
