// vendors
import React from 'react';

// components
import LogoCard from './PremiumLogoCard';

// images
import logoLgs from '../../../images/LogoPartners/logo-lgs.svg';
import logoRobic from '../../../images/LogoPartners/logo-robic.svg';
import logoIneat from '../../../images/LogoPartners/logo-ineat.svg';
import logoIxmedia from '../../../images/LogoPartners/logo-ixmedia.svg';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// styles
import { selfBreakpoints, Container, Wrapper } from './PremiumGrid.styles';
import colors from '../../../styles/colors';

const PremiumGrid = () => {
  const images = [
    {
      src: logoLgs,
      alt: 'LGS, une société IBM',
      url: 'http://www.lgs.com',
    },
    {
      src: logoRobic,
      alt:
        'ROBIC, Spécialistes en propriété intellectuelle | Droit, brevets, marques',
      url: 'https://www.robic.ca/',
    },
    {
      src: logoIneat,
      alt:
        "Ineat Group | L'innovation au coeur de votre transformation digitale",
      url: 'https://www.lgs.com',
    },
    {
      src: logoIxmedia,
      alt: 'iXmédia | Agence numérique. Experts sympathiques',
      url: 'https://www.lgs.com',
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
              align-items: baseline;

              grid-column: 1;
              grid-row: 2;
            }

            ${lessThan(selfBreakpoints[1])} {
              align-items: baseline;

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
            align-items: center;

            grid-column: 4;
            grid-row: 1 / span 2;

            ${lessThan(selfBreakpoints[2])} {
              align-items: baseline;

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
            image={images[3]}
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
