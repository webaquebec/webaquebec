// vendors
import React from 'react';

// components
import LogoCard from './LogoCard';
import Center from '../LayoutSections/Center';

// images
import logoUbisoft from '../../images/logoPartners/premium/logo-ubisoft.png';
import logoVooban from '../../images/logoPartners/premium/logo-vooban.svg';
import logoFernandez from '../../images/logoPartners/associates/logo-fernandez-rp.svg';
import logoDeMarque from '../../images/logoPartners/associates/logo-demarque.svg';
import logoPetal from '../../images/logoPartners/associates/logo-petal.svg';
import logoThirdbridge from '../../images/logoPartners/associates/logo-thirdbridge.svg';
import logoNooe from '../../images/logoPartners/associates/logo-nooe.png';
import logoPangram from '../../images/logoPartners/associates/logo-pangram-pangram.svg';
import logoBarberie from '../../images/logoPartners/associates/logo-barberie.png';
import logoCiao from '../../images/logoPartners/associates/logo-ciao.png';
import logoBobba from '../../images/logoPartners/associates/logo-bobba.svg';
import logoEvive from '../../images/logoPartners/associates/logo-evive.png';
import logoNovicom from '../../images/logoPartners/associates/logo-novicom.svg';

// styles
import { Title, Grid, GridItem } from './PartnersGrids.styles';

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
];

const providerPartners = [
  {
    src: logoBarberie,
    alt: 'Barberie',
    url: 'https://www.labarberie.com',
  },
  {
    src: logoEvive,
    alt: 'Evive',
    url: 'https://evivenutrition.ca',
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
];

const partners = [
  {
    title: 'partenaires créatifs',
    images: creativePartners,
  },
  {
    title: 'partenaires festifs',
    images: festivePartners,
  },
  {
    title: 'partenaires communauté',
    images: communityPartners,
  },
  {
    title: 'partenaires fournisseurs',
    images: providerPartners,
  },
];

const PartnersGrids = () => (
  <>
    {partners.map((partner) => (
      <Center
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

export default PartnersGrids;
