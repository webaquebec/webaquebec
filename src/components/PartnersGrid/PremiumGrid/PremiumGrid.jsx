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
import logoFinaltaCapital from '../../../images/logoPartners/premium/logo-finalta-capital.svg';
import logoBeet from '../../../images/logoPartners/premium/logo-beet.svg';

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
      src: logoLibeo,
      alt: 'Libéo | Innover pour simplifier votre transformation numérique',
      url: 'https://libeo.com',
    },
    {
      src: logoFinaltaCapital,
      alt: 'Finalta Capital',
      url: 'https://finaltacapital.com/',
    },
    {
      src: logoEquisoft,
      alt: "Equisoft | Solutions logicielles d'assurance et d'investissement",
      url: 'https://www.equisoft.com/fr/',
    },
    {
      src: logoLevio,
      alt:
        'Levio affaires et technologies - Au coeur de la transformation numérique',
      url: 'https://levio.ca/',
    },
    {
      src: logoBeet,
      alt: 'Beet agence à Québec – Création de sites web et production vidéo',
      url: 'https://boitebeet.com/',
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
              grid-column: 3;
              grid-row: 1;
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
            align-items: center;

            grid-column: 2;
            grid-row: 1 / span 2;

            ${lessThan(selfBreakpoints[2])} {
              align-items: normal;

              grid-column: 1;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: normal;

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

            grid-column: 3;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 2;
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
            grid-row: 2;

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
            image={images[4]}
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
            align-items: center;

            grid-column: 4;
            grid-row: 1 / span 2;

            ${lessThan(selfBreakpoints[2])} {
              align-items: normal;

              grid-column: 1;
              grid-row: 3;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: flex-end;

              grid-column: 2;
              grid-row: 3;
            }
          `}
        >
          <LogoCard
            image={images[5]}
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

            grid-column: 5;
            grid-row: 1;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 2;
              grid-row: 3;
            }

            ${lessThan(selfBreakpoints[1])} {
              grid-column: 1;
              grid-row: 4;
            }
          `}
        >
          <LogoCard
            image={images[6]}
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
            grid-row: 2;

            ${lessThan(selfBreakpoints[2])} {
              grid-column: 3;
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
            image={images[7]}
            accentBgColor={colors.turquoise}
            primary
            css={`
              flex-grow: 1;
            `}
          />
        </div>
      </Wrapper>
    </Container>
  );
};

PremiumGrid.propTypes = {};

export default PremiumGrid;
