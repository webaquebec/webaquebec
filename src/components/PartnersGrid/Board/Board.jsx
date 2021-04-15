// vendors
import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-use';

// components
import LogoCard from './LogoCard';

// images
import logoBdc from '../../../images/logoPartners/associates/logo-bdc.svg';
import logoLeCamp from '../../../images/logoPartners/associates/logo-le-camp.svg';
import logoMauvaisGarcons from '../../../images/logoPartners/associates/logo-mauvais-garcons.svg';
import logoPwc from '../../../images/logoPartners/associates/logo-pwc.svg';
import logoRobic from '../../../images/logoPartners/associates/logo-robic.svg';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import { selfBreakpoints, Container, Wrapper, Square } from './Board.styles';

const images = [
  {
    src: logoBdc,
    alt: 'BDC - Banque de développement du Canada | BDC.ca',
    url: 'https://www.bdc.ca/fr',
  },
  {
    src: logoLeCamp,
    alt: 'Incubateur d’entreprises technologiques à Québec | LE CAMP',
    url: 'https://lecampquebec.com',
  },
  {
    src: logoMauvaisGarcons,
    alt: 'Les Mauvais Garçons - Culture de marque',
    url: 'https://lesmauvaisgarcons.ca/',
  },
  {
    src: logoPwc,
    alt: 'PwC Canada',
    url: 'https://www.pwc.com/ca/fr/',
  },
  {
    src: logoRobic,
    alt:
      'ROBIC | Spécialistes en propriété intellectuelle | Droit, brevets, marques',
    url: 'https://www.robic.ca/',
  },
  {
    src: logoBdc,
    alt: 'BDC - Banque de développement du Canada | BDC.ca',
    url: 'https://www.bdc.ca/fr',
  },
  {
    src: logoLeCamp,
    alt: 'Incubateur d’entreprises technologiques à Québec | LE CAMP',
    url: 'https://lecampquebec.com',
  },
  {
    src: logoMauvaisGarcons,
    alt: 'Les Mauvais Garçons - Culture de marque',
    url: 'https://lesmauvaisgarcons.ca/',
  },
  {
    src: logoPwc,
    alt: 'PwC Canada',
    url: 'https://www.pwc.com/ca/fr/',
  },
  {
    src: logoRobic,
    alt:
      'ROBIC | Spécialistes en propriété intellectuelle | Droit, brevets, marques',
    url: 'https://www.robic.ca/',
  },
];

const Board = () => {
  const [squaresNbr, setSquaresNbr] = useState(null);
  const [logos, setLogos] = useState([]);

  const mobile = useMedia(lessThanCondition(selfBreakpoints[1]));
  const tablet = useMedia(lessThanCondition(selfBreakpoints[2]));

  useEffect(() => {
    setSquaresNbr(84);

    let positions = [
      [39, 'top', 'left', undefined, undefined],
      [56, 'top', 'left', undefined, undefined],
      [62, 'bottom', 'right', undefined, undefined],
      [63, 'bottom', 'left', undefined, undefined],
      [66, 'bottom', 'right', undefined, undefined],
      [74, 'top', 'right', undefined, undefined],
      [78, 'top', 'right', undefined, undefined],
      [80, 'bottom', 'left', undefined, undefined],
      [82, 'bottom', 'right', undefined, undefined],
      [82, 'bottom', 'right', undefined, '-164px'],
    ];

    if (tablet) {
      setSquaresNbr(78);

      positions = [
        [38, 'bottom', 'right', undefined, undefined],
        [39, 'bottom', 'left', undefined, undefined],
        [45, 'top', 'left', undefined, undefined],
        [46, 'top', 'left', '29px', undefined],
        [49, 'top', 'left', undefined, undefined],
        [55, 'top', 'left', undefined, '28px'],
        [64, 'bottom', 'left', undefined, undefined],
        [69, 'top', 'right', undefined, undefined],
        [70, 'top', 'left', undefined, undefined],
        [75, 'top', 'right', undefined, '28px'],
      ];
    }

    if (mobile) {
      setSquaresNbr(138);

      positions = [
        [67, 'top', 'left', undefined, undefined],
        [79, 'top', 'left', undefined, undefined],
        [81, 'top', 'left', undefined, undefined],
        [93, 'top', 'left', undefined, undefined],
        [96, 'top', 'left', undefined, undefined],
        [108, 'top', 'left', undefined, undefined],
        [112, 'top', 'left', undefined, undefined],
        [122, 'top', 'left', undefined, undefined],
        [124, 'top', 'left', undefined, undefined],
        [134, 'top', 'left', undefined, undefined],
      ];
    }

    setLogos(
      images.reduce((acc, curr, index) => {
        acc.push({
          id: positions[index] && positions[index][0] + index,
          index: positions[index] && positions[index][0],
          vertical: positions[index] && positions[index][1],
          horizontal: positions[index] && positions[index][2],
          offsetX: positions[index] && positions[index][3],
          offsetY: positions[index] && positions[index][4],
          image: curr,
        });

        return acc;
      }, [])
    );
  }, [mobile, tablet]);

  return (
    <Container>
      <Wrapper>
        {Array(squaresNbr)
          .fill()
          .map((_, index) => (
            <Square
              key={String(index + 1)}
              lightColor='transparent'
              darkColor={colors.bleu}
              padding='0'
              noBorder
            >
              {logos
                .filter((l) => l.index === index)
                .map((logo) => (
                  <LogoCard
                    key={logo.id}
                    image={logo.image}
                    verticalPosition={logo.vertical}
                    horizontalPosition={logo.horizontal}
                    offsetX={logo.offsetX}
                    offsetY={logo.offsetY}
                    borderWidth={mobile ? 2 : 4}
                  />
                ))}
            </Square>
          ))}
      </Wrapper>
    </Container>
  );
};

Board.propTypes = {};

export default Board;
