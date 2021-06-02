// vendors
import React from 'react';

// components
import LogoCard from './PremiumLogoCard';

// images
import logoKabane from '../../../images/logoPartners/premium/logo-kabane.svg';
import logoLibeo from '../../../images/logoPartners/premium/logo-libeo.svg';
import logoLevio from '../../../images/logoPartners/premium/logo-levio.svg';
import logoNventive from '../../../images/logoPartners/premium/logo-nventive.svg';
import logoEquisoft from '../../../images/logoPartners/premium/logo-equisoft.svg';
import logoIxmedia from '../../../images/logoPartners/premium/logo-ixmedia.svg';
import logoRobic from '../../../images/logoPartners/premium/logo-robic.svg';
import logoPwc from '../../../images/logoPartners/premium/logo-pwc.svg';
import logoBdc from '../../../images/logoPartners/premium/logo-bdc.svg';
import logoLeCamp from '../../../images/logoPartners/premium/logo-le-camp.svg';
import logoVideotronRGB from '../../../images/logoPartners/premium/logo-videotron-rgb.svg';
import logoVideotronWhite from '../../../images/logoPartners/premium/logo-videotron-white.svg';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// styles
import { selfBreakpoints, Container, Wrapper } from './PremiumGrid.styles';
import colors from '../../../styles/colors';

const PremiumGrid = () => {
  const images = [
    {
      src: logoKabane,
      alt: 'Kabane - Agence de Marques. Québec - Montréal',
      url: 'https://www.kabane.ca',
    },
    {
      src: logoIxmedia,
      alt: 'iXmédia | Agence numérique. Experts sympathiques',
      url: 'https://www.ixmedia.com/',
    },
    {
      src: logoNventive,
      alt:
        'nventive | Agence innovatrice en transformation numérique à Montréal et Québec',
      url: 'https://nventive.com/fr/',
    },
    {
      src: logoBdc,
      alt: 'BDC - Banque de développement du Canada | BDC.ca',
      url: 'https://www.bdc.ca/fr',
    },
    {
      src: logoLibeo,
      alt: 'Libéo | Innover pour simplifier votre transformation numérique',
      url: 'https://libeo.com',
    },
    {
      src: logoRobic,
      alt:
        'ROBIC | Spécialistes en propriété intellectuelle | Droit, brevets, marques',
      url: 'https://www.robic.ca/',
    },
    {
      src: logoEquisoft,
      alt: "Equisoft | Solutions logicielles d'assurance et d'investissement",
      url: 'https://www.equisoft.com/fr/',
    },
    {
      src: logoLeCamp,
      alt: 'LE CAMP | Incubateur d’entreprises technologiques à Québec',
      url: 'https://lecampquebec.com',
    },
    {
      src: logoLevio,
      alt:
        'Levio affaires et technologies - Au coeur de la transformation numérique',
      url: 'https://levio.ca/',
    },
    {
      src: logoPwc,
      alt: 'PwC Canada',
      url: 'https://www.pwc.com/ca/fr/',
    },
    {
      src: logoVideotronWhite,
      srcAlt: logoVideotronRGB,
      alt: 'Vidéotron | Services de Téléphonie, Internet, Télévision et Mobile',
      url: 'https://videotron.com/',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <div
          css={`
            display: flex;

            grid-column: 1;
            grid-row: 1;
          `}
        >
          <LogoCard
            image={images[0]}
            accentBgColor={colors.ciel}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 1;
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 1;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 1;
            }
          `}
        >
          <LogoCard
            image={images[1]}
            accentBgColor={colors.rose}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 2;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              grid-column: 1;
              grid-row: 2;
            }
          `}
        >
          <LogoCard
            image={images[2]}
            accentBgColor={colors.mauve}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 2;
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 3;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 4;
            }
          `}
        >
          <LogoCard
            image={images[3]}
            accentBgColor={colors.turquoise}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 3;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 1;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 3;
            }
          `}
        >
          <LogoCard
            image={images[4]}
            accentBgColor={colors.rose}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 3;
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 1;
              grid-row: 3;
            }

            ${lessThan(selfBreakpoints[1])} {
              grid-column: 1;
              grid-row: 5;
            }
          `}
        >
          <LogoCard
            image={images[5]}
            accentBgColor={colors.ciel}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 4;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 3;
              grid-row: 1;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 2;
            }
          `}
        >
          <LogoCard
            image={images[6]}
            accentBgColor={colors.turquoise}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 4;
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 3;
              grid-row: 3;
            }

            ${lessThan(selfBreakpoints[1])} {
              grid-column: 1;
              grid-row: 4;
            }
          `}
        >
          <LogoCard
            image={images[7]}
            accentBgColor={colors.mauve}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 5;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 3;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              grid-column: 1;
              grid-row: 3;
            }
          `}
        >
          <LogoCard
            image={images[8]}
            accentBgColor={colors.ciel}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>

        <div
          css={`
            display: flex;

            grid-column: 5;
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 4;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 5;
            }
          `}
        >
          <LogoCard
            image={images[9]}
            accentBgColor={colors.rose}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>
        <div
          css={`
            display: flex;

            grid-column: 3;
            grid-row: 3;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 4;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 5;
            }
          `}
        >
          <LogoCard
            image={images[10]}
            accentBgColor={colors.rose}
            primary
            css={`
              flex-grow: 1;

              > * > * {
                padding-right: 32px;
                padding-left: 32px;

                ${lessThan(selfBreakpoints[1])} {
                  padding-right: 16px;
                  padding-left: 16px;
                }
              }
            `}
          />
        </div>
      </Wrapper>
    </Container>
  );
};

PremiumGrid.propTypes = {};

export default PremiumGrid;
