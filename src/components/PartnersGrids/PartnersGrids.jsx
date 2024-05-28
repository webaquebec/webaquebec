// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import LogoCard from './LogoCard';
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';

// images
import logoCossette from '../../images/logoPartners/logo-cossette.svg';
import logoAxeptio from '../../images/logoPartners/expert/logo-axeptio.svg';
import logoUbisoft from '../../images/logoPartners/creative/logo-ubisoft.png';
import logoVooban from '../../images/logoPartners/creative/logo-vooban.svg';
import logoFernandez from '../../images/logoPartners/creative/logo-fernandez-rp.svg';
import logoDeMarque from '../../images/logoPartners/creative/logo-demarque.svg';
import logoThirdbridge from '../../images/logoPartners/creative/logo-thirdbridge.svg';
import logoPetal from '../../images/logoPartners/creative/logo-petal.svg';
import logoRadioCanada from '../../images/logoPartners/creative/logo-radio-canada.svg';
import logoCiao from '../../images/logoPartners/festive/logo-ciao.png';
import logoMambomambo from '../../images/logoPartners/community/logo-mambo-mambo.svg';
import logoNooe from '../../images/logoPartners/community/logo-nooe.png';
import logoBeneva from '../../images/logoPartners/community/logo-beneva.svg';
import logoMirego from '../../images/logoPartners/community/logo-mirego.svg';
import logoPangram from '../../images/logoPartners/community/logo-pangram-pangram.svg';
import logoBarberie from '../../images/logoPartners/provider/logo-barberie.png';
import logoBobba from '../../images/logoPartners/provider/logo-bobba.svg';
import logoNovicom from '../../images/logoPartners/provider/logo-novicom.svg';
import logoFouGin from '../../images/logoPartners/provider/logo-fou-gin.svg';
import logoMCN from '../../images/logoPartners/festive/logo-quebec.svg';
import logoOnibi from '../../images/logoPartners/provider/logo-onibi.svg';
import logoConnecte from '../../images/logoPartners/provider/logo-connecte.png';
import logoGutsyKombucha from '../../images/logoPartners/provider/logo-gutsy-kombucha.png';
import logoAWS from '../../images/logoPartners/creative/logo-aws.svg';
import logoOffside from '../../images/logoPartners/provider/logo-offside.svg';
import logoBoreale from '../../images/logoPartners/provider/logo-boreale.svg';

// styles
import {
  Title,
  PresentingWrapper,
  PresentingText,
  Grid,
  GridItem,
  presentingContentStyle,
} from './PartnersGrids.styles';

const presentingPartner = {
  src: logoCossette,
  alt: 'Cossette',
  url: 'https://www.cossette.com/fr/accueil',
};

const expertPartners = [
  {
    src: logoAxeptio,
    alt: 'Axeptio',
    url: 'https://www.axept.io/fr-ca/',
  },
];

const creativePartners = [
  {
    src: logoPetal,
    alt: 'Petal',
    url: 'https://www.petal-health.com/fr-ca',
  },
  {
    src: logoDeMarque,
    alt: 'DeMarque',
    url: 'https://www.demarque.com',
  },
  {
    src: logoThirdbridge,
    alt: 'Thirdbridge',
    url: 'https://www.thirdbridge.ca',
    bigger: true,
  },
  {
    src: logoFernandez,
    alt: 'Fernandez',
    url: 'https://fernandezrp.ca',
  },
  {
    src: logoUbisoft,
    alt: 'Ubisoft Québec',
    url: 'https://quebec.ubisoft.com/fr',
  },
  {
    src: logoVooban,
    alt: 'Vooban',
    url: 'https://vooban.com',
  },
  {
    src: logoRadioCanada,
    alt: 'Radio-Canada',
    url: 'https://ici.radio-canada.ca/',
    bigger: true,
  },
  {
    src: logoMCN,
    alt: 'Ministère de la Cybersécurité et du Numérique',
    url: 'https://www.quebec.ca/gouvernement/ministere/cybersecurite-numerique',
    bigger: true,
  },
  {
    src: logoAWS,
    alt: 'AWS',
    url: 'https://aws.amazon.com/fr/',
    smaller: true,
  },
];

const festivePartners = [
  {
    src: logoCiao,
    alt: 'Ciao',
    url: 'https://www.ciao.ca',
  },
];

const communityPartners = [
  {
    src: logoNooe,
    alt: 'Nooé',
    url: 'https://www.nooe.org',
  },
  {
    src: logoPangram,
    alt: 'Pangram Pangram Foundry',
    url: 'https://pangrampangram.com/',
  },
  {
    src: logoMambomambo,
    alt: 'MamboMambo',
    url: 'https://mambomambo.ca/',
  },
  {
    src: logoBeneva,
    alt: 'Beneva',
    url: 'https://www.beneva.ca/fr',
  },
  {
    src: logoMirego,
    alt: 'Mirego',
    url: 'https://www.mirego.com/fr',
  },
];

const providerPartners = [
  {
    src: logoOffside,
    alt: 'Offside',
  },
  {
    src: logoBarberie,
    alt: 'Barberie',
    url: 'https://www.labarberie.com',
  },
  {
    src: logoNovicom,
    alt: 'Novicom - Groupe CLR',
    url: 'https://www.groupeclr.com/novicom',
  },
  {
    src: logoBobba,
    alt: 'Bobba',
    url: 'https://bobbadrink.com',
  },
  {
    src: logoFouGin,
    alt: 'Fou Gin',
    url: 'https://fougin.ca/',
  },
  {
    src: logoOnibi,
    alt: 'Onibi',
    url: 'https://onibi.ca/',
  },
  {
    src: logoConnecte,
    alt: 'Connecte',
    url: 'https://connecteofficiel.ca/',
  },
  {
    src: logoGutsyKombucha,
    alt: 'Gutsy Kombucha',
    url: 'https://gutsykombucha.com/fr',
    bigger: true,
  },
  {
    src: logoBoreale,
    alt: 'Boréale',
    url: 'https://www.boreale.com/',
    bigger: true,
  },
];

const PartnersGrids = ({ hasDetails }) => {
  const { t } = useTranslation();

  const partners = [
    {
      title: t('home.partners.expert'),
      images: expertPartners,
    },
    {
      title: t('home.partners.creative'),
      images: creativePartners,
    },
    {
      title: t('home.partners.festive'),
      images: festivePartners,
    },
    {
      title: t('home.partners.community'),
      images: communityPartners,
    },
    {
      title: t('home.partners.supplier'),
      images: providerPartners,
    },
  ];

  return (
    <>
      <Center
        as='section'
        maxWidth='1024px'
        gutters='var(--container-gutter)'
        intrinsic
        withText
      >
        <Title>{t('home.partners.hosting')}</Title>

        <Switcher
          threshold='768px'
          space='calc(var(--container-gutter) * 2)'
          limit={2}
        >
          <PresentingWrapper>
            <div>
              <LogoCard image={presentingPartner} isPresenting />
            </div>

            {hasDetails && (
              <div>
                <Center
                  maxWidth='625px'
                  gutters='0'
                  css={presentingContentStyle}
                >
                  <PresentingText>
                    Ubisoft est reconnu internationalement, mais la franchise de
                    la ville de Québec se démarque particulièrement. Ayant
                    acquis une solide expertise dans le développement de jeux
                    d’envergure AAA, le studio assume maintenant le leadership
                    sur plusieurs projets. Le WAQ est très fier d’être présenté
                    par Ubisoft!
                  </PresentingText>
                  <Button
                    to='https://www.ubisoft.com/fr-ca/'
                    tag='href'
                    rel='noopener noreferrer'
                    target='_blank'
                    small
                    animated
                  >
                    En savoir plus
                  </Button>
                </Center>
              </div>
            )}
          </PresentingWrapper>
        </Switcher>
      </Center>

      {partners.map((partner) => (
        <Center
          key={`partners-${partner.title}`}
          as='section'
          maxWidth='900px'
          gutters='var(--container-gutter)'
          intrinsic
          withText
        >
          <Title>{partner.title}</Title>

          <Grid>
            {partner.images.map((image) => (
              <GridItem key={image.url}>
                <LogoCard image={image} />
              </GridItem>
            ))}
          </Grid>
        </Center>
      ))}
    </>
  );
};

PartnersGrids.propTypes = {
  /**
   * Whether the grid has details or not.
   */
  hasDetails: PropTypes.bool,
};

PartnersGrids.defaultProps = {
  hasDetails: false,
};

export default PartnersGrids;
