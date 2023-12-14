// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import LogoCard from './LogoCard';
import Center from '../LayoutSections/Center';
// import Button from '../Button';
// import Switcher from '../LayoutSections/Switcher';
// import Stack from '../LayoutSections/Stack/Stack';

// images
import logoUbisoft from '../../images/logoPartners/premium/logo-ubisoft.png';
import logoVooban from '../../images/logoPartners/premium/logo-vooban.svg';
import logoFernandez from '../../images/logoPartners/associates/logo-fernandez-rp.svg';
import logoDeMarque from '../../images/logoPartners/associates/logo-demarque.svg';
import logoPetal from '../../images/logoPartners/associates/logo-petal.svg';
import logoThirdbridge from '../../images/logoPartners/associates/logo-thirdbridge.svg';
import logoNooe from '../../images/logoPartners/associates/logo-nooe.webp';
// import logoVideotronRGB from '../../images/logoPartners/premium/logo-videotron-rgb.svg';
// import logoVideotronWhite from '../../images/logoPartners/premium/logo-videotron-white.svg';
// import logoQuebecor from '../../images/logoPartners/premium/logo-quebecor.svg';
// import logoLevio from '../../images/logoPartners/premium/logo-levio.svg';
// import logoEquisoft from '../../images/logoPartners/premium/logo-equisoft.svg';
// import logoIxmedia from '../../images/logoPartners/premium/logo-ixmedia.svg';
// import logoOqlf from '../../images/logoPartners/premium/logo-oqlf.svg';
// import logoBeet from '../../images/logoPartners/associates/logo-beet.svg';
// import logoEmergensys from '../../images/logoPartners/associates/logo-emergensys.png';
// import logoFlots from '../../images/logoPartners/associates/logo-flots.svg';
// import logoMicrosoft from '../../images/logoPartners/associates/logo-microsoft.svg';
// import logoPwc from '../../images/logoPartners/associates/logo-pwc.svg';
// import logoRobic from '../../images/logoPartners/associates/logo-robic.svg';
// import logoTVA from '../../images/logoPartners/associates/logo-tva.svg';
// import logoJournalQuebec from '../../images/logoPartners/associates/logo-journal-de-quebec.svg';
// import logoGrenierAuxNouvelles from '../../images/logoPartners/associates/logo-grenier-aux-nouvelles.svg';
// import logoZenika from '../../images/logoPartners/supporters/logo-zenika.svg';
// import logoNventive from '../../images/logoPartners/associates/logo-nventive.svg';
// import logoEdgenda from '../../images/logoPartners/associates/logo-edgenda.svg';
// import logoProjetTeamForward from '../../images/logoPartners/supporters/logo-projet-team-forward.svg';
// import logoDashThis from '../../images/logoPartners/associates/logo-dashthis.svg';
// import logoRandstad from '../../images/logoPartners/supporters/logo-randstad.svg';
// import logoCrackmediaRGB from '../../images/logoPartners/supporters/logo-crackmedia-rgb.svg';
// import logoCrackmediaBlack from '../../images/logoPartners/supporters/logo-crackmedia-black.svg';
// import logoEvolvingWeb from '../../images/logoPartners/supporters/logo-evolving-web.svg';
// import logoLibeo from '../../images/logoPartners/supporters/logo-libeo.svg';
// import logoBotpress from '../../images/logoPartners/supporters/logo-botpress.svg';
// import logoApollo13 from '../../images/logoPartners/supporters/logo-apollo13.svg';

// styles
import {
  Title,
  // PresentingWrapper,
  // PresentingText,
  Grid,
  GridItem,
  // premiumGrid,
  // premiumGridItem,
  // presentingContentStyle,
} from './PartnersGrids.styles';

// const presentingImage = { };

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

const communityPartners = [
  {
    src: logoNooe,
    alt: 'Nooé',
    url: 'https://www.nooe.org',
  },
];

const partners = [
  {
    title: 'partenaires créatifs',
    images: creativePartners,
  },
  {
    title: 'partenaires communautés',
    images: communityPartners,
  },
];

// const PartnersGrids = ({ hasDetails }) => (
const PartnersGrids = ({ titled }) => (
  <>
    {/* <Center
      as='section'
      maxWidth='1024px'
      gutters='var(--container-gutter)'
      intrinsic
      withText
    >
      <Title>le WAQ 2023 est présenté par</Title>

      <Switcher
        threshold='768px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <PresentingWrapper>
          <div>
            <LogoCard image={presentingImage} isPresenting />
          </div>

          {hasDetails && (
            <div>
              <Center maxWidth='625px' gutters='0' css={presentingContentStyle}>
                <PresentingText>
                  Ubisoft est reconnu internationalement, mais la franchise de
                  la ville de Québec se démarque particulièrement. Ayant acquis
                  une solide expertise dans le développement de jeux d’envergure
                  AAA, le studio assume maintenant le leadership sur plusieurs
                  projets. Le WAQ est très fier d’être présenté par Ubisoft!
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
    </Center> */}

    {partners.map((partner) => (
      <Center
        as='section'
        maxWidth='900px'
        gutters='var(--container-gutter)'
        intrinsic
        withText
      >
        <Title
          style={{
            visibility: titled ? '' : 'hidden',
            marginTop: titled ? '' : '0',
          }}
        >
          {partner.title}
        </Title>

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

PartnersGrids.propTypes = {
  /**
   * Whether the grid has details or not.
   */
  // hasDetails: PropTypes.bool,
  /**
   * Whether the grid has a title or not.
   */
  titled: PropTypes.bool,
};

PartnersGrids.defaultProps = {
  // hasDetails: false,
  titled: false,
};

export default PartnersGrids;
