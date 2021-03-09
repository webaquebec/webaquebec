// vendors
import React from 'react';
import { hideVisually } from 'polished';

// styles
import {
  ContactTitle,
  ContactText,
  MediaText,
  MediaList,
  BlocContainer,
  ContentContainer,
  SectionContainer,
} from './Contact.styles';
import colors from '../../styles/colors';

// components
import Switcher from '../LayoutSections/Switcher';
import Center from '../LayoutSections/Center';
import Paper from '../Paper';
import Button from '../Button';

// images
import facebook from '../../images/socialMedia/Facebook.svg';
import twitter from '../../images/socialMedia/Twitter.svg';
import instagram from '../../images/socialMedia/Instagram.svg';
import linkedin from '../../images/socialMedia/Linkedin.svg';

const Contact = () => {
  const socialMedia = [
    {
      name: 'Facebook',
      img: facebook,
      link: 'https://www.facebook.com/webaquebec/',
    },
    {
      name: 'Twitter',
      img: twitter,
      link: 'https://twitter.com/webaquebec',
    },
    {
      name: 'Instagram',
      img: instagram,
      link: 'https://www.instagram.com/webaquebec/',
    },
    {
      name: 'Linkedin',
      img: linkedin,
      link: 'https://www.linkedin.com/company/web-qu-bec',
    },
  ];

  return (
    <SectionContainer>
      <h2 css={hideVisually}>Pour rester en contact</h2>

      <Switcher threshold='832px' space='2rem' limit={2}>
        <Center maxWidth='1064px'>
          <Paper
            lightColor={colors.gris30}
            darkColor={colors.bleu80}
            rounded
            overlaid
            css={BlocContainer}
          >
            <Center maxWidth='290px' intrinsic css={ContentContainer}>
              <ContactTitle color={colors.gris90}>
                Suivez-nous sur les médias sociaux
              </ContactTitle>

              <ContactText css={MediaText}>
                Annonces, évènements à venir, Lorem ipsum dolor sit amet,
                consectetur.
              </ContactText>

              <MediaList>
                {socialMedia.map((media) => (
                  <li key={`media-item-${media.name}`}>
                    <a href={media.link}>
                      <img src={media.img} alt={media.name} />
                    </a>
                  </li>
                ))}
              </MediaList>
            </Center>
          </Paper>

          <Paper
            lightColor={colors.bleu80}
            darkColor={colors.gris30}
            rounded
            css={BlocContainer}
          >
            <Center maxWidth='290px' intrinsic css={ContentContainer}>
              <ContactTitle>Abonnes-toi à l’infolettre</ContactTitle>

              <ContactText>
                Pour une bonne dose de WAQ, inscris-toi à l’infolettre!
                Promotions et contenus exclusifs t’y attendent!
              </ContactText>

              {/* @TODO: Ajouter le lien vers l'abonnement */}
              <Button to='/' tag='href' primary small>
                Je veux m&apos;abonner!
              </Button>
            </Center>
          </Paper>
        </Center>
      </Switcher>
    </SectionContainer>
  );
};

export default Contact;
