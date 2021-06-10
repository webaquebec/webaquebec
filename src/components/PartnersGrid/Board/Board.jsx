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
import logoJournalDeQuebec from '../../../images/logoPartners/associates/logo-journal-de-quebec.svg';
import logoTVA from '../../../images/logoPartners/associates/logo-tva.svg';
import logoQuebecor from '../../../images/logoPartners/associates/logo-quebecor.svg';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import { selfBreakpoints, Container, Wrapper, Square } from './Board.styles';

const images = [
  {
    src: logoTVA,
    alt: 'Groupe TVA',
    url: 'https://www.groupetva.ca/',
  },
  {
    src: logoQuebecor,
    alt: 'Québecor',
    url: 'https://www.quebecor.com/fr/',
  },
  {
    src: logoFernandezRp,
    alt: 'Fernandez relations publiques',
    url: 'https://fernandezrp.ca/',
  },
  {
    src: logoJournalDeQuebec,
    alt: 'Le Journal de Québec',
    url: 'https://www.journaldequebec.com/',
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
    src: logoBeet,
    alt: 'Beet agence à Québec – Création de sites web et production vidéo',
    url: 'https://boitebeet.com/',
  },
];

const Board = () => {
  const [squaresNbr, setSquaresNbr] = useState(null);
  const [logos, setLogos] = useState([]);

  const mobile = useMedia(lessThanCondition(selfBreakpoints[1]));
  const tablet = useMedia(lessThanCondition(selfBreakpoints[2]));

  useEffect(() => {
    setSquaresNbr(96);

    let positions = [
      [73, 'bottom', 'left', undefined, undefined],
      [75, 'bottom', 'right', undefined, undefined],
      [82, 'bottom', 'left', undefined, undefined],
      [85, 'top', 'left', undefined, undefined],
      [91, 'bottom', 'left', undefined, undefined],
      [90, 'top', 'right', undefined, '100%'],
      [94, 'top', 'left', undefined, undefined],
    ];

    if (tablet) {
      setSquaresNbr(78);

      positions = [
        [50, 'bottom', 'right', undefined, undefined],
        [51, 'bottom', 'left', undefined, undefined],
        [57, 'top', 'left', undefined, undefined],
        [58, 'top', 'left', '29px', undefined],
        [67, 'top', 'left', undefined, undefined],
        [68, 'top', 'left', '28px', undefined],
        [73, 'top', 'left', undefined, '28px'],
      ];
    }

    if (mobile) {
      setSquaresNbr(144);

      positions = [
        [85, 'top', 'left', undefined, undefined],
        [97, 'top', 'left', undefined, undefined],
        [99, 'top', 'left', undefined, undefined],
        [111, 'top', 'left', undefined, undefined],
        [127, 'top', 'left', undefined, undefined],
        [129, 'top', 'left', undefined, undefined],
        [133, 'top', 'left', undefined, '100%'],
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
