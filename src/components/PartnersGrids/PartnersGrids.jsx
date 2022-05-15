// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import LogoCard from './LogoCard';
import Center from '../LayoutSections/Center';
import Button from '../Button';
import Switcher from '../LayoutSections/Switcher';

// images
import logoUbisoft from '../../images/logoPartners/premium/logo-ubisoft.png';
import logoVooban from '../../images/logoPartners/premium/logo-vooban.svg';
import logoVideotronRGB from '../../images/logoPartners/premium/logo-videotron-rgb.svg';
import logoVideotronWhite from '../../images/logoPartners/premium/logo-videotron-white.svg';
import logoKabane from '../../images/logoPartners/premium/logo-kabane.svg';
import logoQuebecor from '../../images/logoPartners/premium/logo-quebecor.svg';
import logoLevio from '../../images/logoPartners/premium/logo-levio.svg';
import logoEquisoft from '../../images/logoPartners/premium/logo-equisoft.svg';
import logoIxmedia from '../../images/logoPartners/premium/logo-ixmedia.svg';
import logoFernandez from '../../images/logoPartners/associates/logo-fernandez-rp.svg';
import logoBeet from '../../images/logoPartners/associates/logo-beet.svg';
import logoLibeo from '../../images/logoPartners/associates/logo-libeo.svg';
import logoFlots from '../../images/logoPartners/associates/logo-flots.svg';
import logoMicrosoft from '../../images/logoPartners/associates/logo-microsoft.svg';
import logoPwc from '../../images/logoPartners/associates/logo-pwc.svg';
import logoLeCamp from '../../images/logoPartners/associates/logo-le-camp.svg';
import logoRobic from '../../images/logoPartners/associates/logo-robic.svg';
import logoBdc from '../../images/logoPartners/associates/logo-bdc.svg';
import logoTVA from '../../images/logoPartners/associates/logo-tva.svg';
import logoJournalQuebec from '../../images/logoPartners/associates/logo-journal-de-quebec.svg';
import logoGrenierAuxNouvelles from '../../images/logoPartners/associates/logo-grenier-aux-nouvelles.svg';
import logoZenika from '../../images/logoPartners/supporters/logo-zenika.svg';
import logoBotpress from '../../images/logoPartners/supporters/logo-botpress.svg';
import logoApollo13 from '../../images/logoPartners/supporters/logo-apollo13.svg';

// styles
import {
  Title,
  PresentingWrapper,
  PresentingText,
  Grid,
  GridItem,
  premiumGrid,
  premiumGridItem,
} from './PartnersGrids.styles';

const presentingImage = {
  src: logoUbisoft,
  alt: 'Ubisoft | Le plus grand studio de développement de jeu vidéo au monde',
  url: 'https://www.ubisoft.com/fr-ca/',
};

const premiumImages = [
  {
    src: logoVooban,
    alt: 'Vooban | Le leader de la transformation digitale',
    url: 'https://vooban.com/',
  },
  {
    src: logoVideotronWhite,
    srcAlt: logoVideotronRGB,
    alt: 'Vidéotron | Services de Téléphonie, Internet, Télévision et Mobile',
    url: 'https://videotron.com/',
  },
  {
    src: logoKabane,
    alt: 'Kabane | Agence de Marques. Québec - Montréal',
    url: 'https://www.kabane.ca',
  },
  {
    src: logoQuebecor,
    alt: 'Québecor',
    url: 'https://www.quebecor.com/fr/',
  },
  {
    src: logoLevio,
    alt: 'Levio affaires et technologies - Au coeur de la transformation numérique',
    url: 'https://levio.ca/',
  },
  {
    src: logoEquisoft,
    alt: "Equisoft | Solutions logicielles d'assurance et d'investissement",
    url: 'https://www.equisoft.com/fr/',
  },
  {
    src: logoIxmedia,
    alt: 'iXmédia | Agence numérique. Experts sympathiques',
    url: 'https://www.ixmedia.com/',
  },
  {
    src: logoLibeo,
    alt: 'Libéo | Innover pour simplifier votre transformation numérique',
    url: 'https://libeo.com',
  },
];

const associatesImages = [
  {
    src: logoFernandez,
    alt: 'Fernandez relations publiques',
    url: 'https://fernandezrp.ca/',
  },
  {
    src: logoBeet,
    alt: 'Beet agence à Québec – Création de sites web et production vidéo',
    url: 'https://boitebeet.com/',
  },
  {
    src: logoFlots,
    alt: 'Novarium | Campus d’innovation du Saint-Laurent',
    url: 'https://novarium.co',
  },
  {
    src: logoMicrosoft,
    alt: 'Microsoft | Nuage, ordinateurs, Applications et jeux',
    url: 'https://www.microsoft.com/fr-ca',
  },
  {
    src: logoPwc,
    alt: 'PwC Canada',
    url: 'https://www.pwc.com/ca/fr/',
  },
  {
    src: logoLeCamp,
    alt: 'LE CAMP | Incubateur d’entreprises technologiques à Québec',
    url: 'https://lecampquebec.com',
  },
  {
    src: logoRobic,
    alt: 'ROBIC | Spécialistes en propriété intellectuelle | Droit, brevets, marques',
    url: 'https://www.robic.ca/',
  },
  {
    src: logoBdc,
    alt: 'BDC - Banque de développement du Canada | BDC.ca',
    url: 'https://www.bdc.ca/fr',
  },
  {
    src: logoTVA,
    alt: 'Groupe TVA',
    url: 'https://www.groupetva.ca/',
  },
  {
    src: logoJournalQuebec,
    alt: 'Le Journal de Québec',
    url: 'https://www.journaldequebec.com/',
  },
  {
    src: logoGrenierAuxNouvelles,
    alt: 'Grenier aux nouvelles',
    url: 'https://www.grenier.qc.ca/',
  },
];

const supportersImages = [
  {
    src: logoZenika,
    alt: 'Zenika | Cabinet d’innovation technologique',
    url: 'https://zenika.com/fr-CA',
  },
  {
    src: logoBotpress,
    alt: 'Build Chatbots | Chatbot for Developers',
    url: 'https://botpress.com/',
  },
  {
    src: logoApollo13,
    alt: 'Accompagnement de startups | Apollo13',
    url: 'https://apollo13.co/',
  },
];

const PartnersGrids = ({ hasDetails }) => (
  <>
    <Center
      as='section'
      maxWidth='1024px'
      gutters='var(--container-gutter)'
      intrinsic
      withText
    >
      <Title>le WAQ 2022 est présenté par</Title>

      <Switcher threshold='768px' space='2rem' limit={2}>
        <PresentingWrapper>
          <div>
            <LogoCard image={presentingImage} isPresenting />
          </div>

          {hasDetails && (
            <div>
              <PresentingText>
                Ubisoft est reconnu internationalement, mais la franchise de la
                ville de Québec se démarque particulièrement. Ayant acquis une
                solide expertise dans le développement de jeux d’envergure AAA,
                le studio assume maintenant le leadership sur plusieurs projets.
                Le WAQ est très fier d’être présenté par Ubisoft!
              </PresentingText>
              <Button
                to='https://www.ubisoft.com/fr-ca/'
                tag='href'
                rel='noopener noreferrer'
                target='_blank'
                primary
                small
                animated
              >
                En savoir plus
              </Button>
            </div>
          )}
        </PresentingWrapper>
      </Switcher>
    </Center>

    <Center
      as='section'
      maxWidth='1024px'
      gutters='var(--container-gutter)'
      intrinsic
      withText
    >
      <Title>nos partenaires principaux</Title>

      <Grid css={premiumGrid}>
        {premiumImages.map((image) => (
          <GridItem key={image.url} css={premiumGridItem}>
            <LogoCard image={image} isPremium />
          </GridItem>
        ))}
      </Grid>
    </Center>

    <Center
      as='section'
      maxWidth='900px'
      gutters='var(--container-gutter)'
      intrinsic
      withText
    >
      <Title>nos partenaires associés</Title>

      <Grid>
        {associatesImages.map((image) => (
          <GridItem key={image.url}>
            <LogoCard image={image} />
          </GridItem>
        ))}
      </Grid>
    </Center>

    <Center
      as='section'
      maxWidth='900px'
      gutters='var(--container-gutter)'
      intrinsic
      withText
    >
      <Title>nos partenaires supporteurs</Title>

      <Grid>
        {supportersImages.map((image) => (
          <GridItem key={image.url}>
            <LogoCard image={image} />
          </GridItem>
        ))}
      </Grid>
    </Center>
  </>
);

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
