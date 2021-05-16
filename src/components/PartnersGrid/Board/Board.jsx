// vendors
import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-use';

// components
import LogoCard from './LogoCard';

// images
import logoBeet from '../../../images/logoPartners/associates/logo-beet.svg';
import logoFinaltaCapital from '../../../images/logoPartners/associates/logo-finalta-capital.svg';
import logoMauvaisGarcons from '../../../images/logoPartners/associates/logo-mauvais-garcons.svg';
import logoFernandezRp from '../../../images/logoPartners/associates/logo-fernandez-rp.svg';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import { selfBreakpoints, Container, Wrapper, Square } from './Board.styles';

const images = [
  {
    src: logoBeet,
    alt: 'Beet agence à Québec – Création de sites web et production vidéo',
    url: 'https://boitebeet.com/',
  },
  {
    src: logoFinaltaCapital,
    alt: 'Finalta Capital',
    url: 'https://finaltacapital.com/',
  },
  {
    src: logoMauvaisGarcons,
    alt: 'Les Mauvais Garçons - Culture de marque',
    url: 'https://lesmauvaisgarcons.ca/',
  },
  {
    src: logoFernandezRp,
    alt: 'Fernandez relations publiques',
    url: 'https://fernandezrp.ca/',
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
      [56, 'top', 'left', undefined, undefined],
      [63, 'bottom', 'left', undefined, undefined],
      [74, 'top', 'right', undefined, undefined],
      [78, 'top', 'right', undefined, undefined],
    ];

    if (tablet) {
      setSquaresNbr(60);

      positions = [
        [50, 'bottom', 'right', undefined, undefined],
        [51, 'bottom', 'left', undefined, undefined],
        [57, 'top', 'left', undefined, undefined],
        [58, 'top', 'left', '29px', undefined],
      ];
    }

    if (mobile) {
      setSquaresNbr(120);

      positions = [
        [91, 'top', 'left', undefined, undefined],
        [103, 'top', 'left', undefined, undefined],
        [105, 'top', 'left', undefined, undefined],
        [117, 'top', 'left', undefined, undefined],
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
