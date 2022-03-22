// vendors
import React from 'react';

// components
import LogoCard from './LogoCard';
import Center from '../LayoutSections/Center';

// images
import logoUbisoft from '../../images/logoPartners/premium/logo-ubisoft.png';
import logoVooban from '../../images/logoPartners/premium/logo-vooban.svg';
import logoVideotronRGB from '../../images/logoPartners/premium/logo-videotron-rgb.svg';
import logoVideotronWhite from '../../images/logoPartners/premium/logo-videotron-white.svg';
import logoKabane from '../../images/logoPartners/premium/logo-kabane.svg';
import logoQuebecor from '../../images/logoPartners/premium/logo-quebecor.svg';
import logoLevio from '../../images/logoPartners/premium/logo-levio.svg';
import logoNventive from '../../images/logoPartners/premium/logo-nventive.svg';
import logoEquisoft from '../../images/logoPartners/premium/logo-equisoft.svg';
import logoIxmedia from '../../images/logoPartners/premium/logo-ixmedia.svg';
import logoFernandez from '../../images/logoPartners/associates/logo-fernandez-rp.svg';
import logoBeet from '../../images/logoPartners/associates/logo-beet.svg';
import logoLibeo from '../../images/logoPartners/associates/logo-libeo.svg';
import logoNovarium from '../../images/logoPartners/associates/logo-novarium.svg';
import logoPwc from '../../images/logoPartners/associates/logo-pwc.svg';
import logoLeCamp from '../../images/logoPartners/associates/logo-le-camp.svg';
import logoRobic from '../../images/logoPartners/associates/logo-robic.svg';
import logoBdc from '../../images/logoPartners/associates/logo-bdc.svg';
import logoZenika from '../../images/logoPartners/associates/logo-zenika.svg';
import logoTVA from '../../images/logoPartners/associates/logo-tva.svg';
import logoJournalQuebec from '../../images/logoPartners/associates/logo-journal-de-quebec.svg';

// styles
import {
  GridTitle,
  Grid,
  GridItem,
  premiumGrid,
  premiumGridItem,
} from './PartnersGrids.styles';

const PartnersGrid = () => {
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
      src: logoNventive,
      alt: 'nventive | Agence innovatrice en transformation numérique à Montréal et Québec',
      url: 'https://nventive.com/fr/',
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
      src: logoLibeo,
      alt: 'Libéo | Innover pour simplifier votre transformation numérique',
      url: 'https://libeo.com',
    },
    {
      src: logoNovarium,
      alt: 'Novarium | Campus d’innovation du Saint-Laurent',
      url: 'https://soper-rimouski.ca/novarium-campus-dinnovation-du-st-laurent/',
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
      src: logoZenika,
      alt: 'Zenika | Cabinet d’innovation technologique',
      url: 'https://zenika.com/fr-CA',
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
  ];

  return (
    <div>
      <Center maxWidth='1024px' gutters='32px' intrinsic>
        <GridTitle>le WAQ 2022 est présenté par</GridTitle>
        <LogoCard image={presentingImage} isPresenting />
        <GridTitle>nos partenaires principaux</GridTitle>
        <Grid css={premiumGrid}>
          {premiumImages.map((image) => (
            <GridItem css={premiumGridItem}>
              <LogoCard image={image} isPremium />
            </GridItem>
          ))}
        </Grid>
      </Center>

      <Center maxWidth='900px' gutters='32px' intrinsic>
        <GridTitle>nos partenaires associés</GridTitle>
        <Grid>
          {associatesImages.map((image) => (
            <GridItem>
              <LogoCard image={image} />
            </GridItem>
          ))}
        </Grid>
      </Center>
    </div>
  );
};

PartnersGrid.propTypes = {};

export default PartnersGrid;
