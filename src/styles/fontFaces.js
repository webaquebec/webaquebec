import { css } from 'styled-components';

import RedactionRegularwoff2 from '../fonts/Redaction/webfonts/Redaction-Regular.woff2';
import RedactionBoldwoff2 from '../fonts/Redaction/webfonts/Redaction-Bold.woff2';
import Redaction10Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_10-Regular.woff2';
import Redaction10Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_10-Bold.woff2';
import Redaction20Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_20-Regular.woff2';
import Redaction20Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_20-Bold.woff2';
import Redaction35Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_35-Regular.woff2';
import Redaction35Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_35-Bold.woff2';
import Redaction50Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_50-Regular.woff2';
import Redaction50Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_50-Bold.woff2';
import Redaction70Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_70-Regular.woff2';
import Redaction70Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_70-Bold.woff2';
import Redaction100Regularwoff2 from '../fonts/Redaction/webfonts/Redaction_100-Regular.woff2';
import Redaction100Boldwoff2 from '../fonts/Redaction/webfonts/Redaction_100-Bold.woff2';

export const Redaction = css`
  @font-face {
    font-weight: 400;
    font-family: 'Redaction';
    font-style: normal;
    src: local('Redaction'), url(${RedactionRegularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction';
    font-style: normal;
    src: local('Redaction'), url(${RedactionBoldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 10';
    font-style: normal;
    src: local('Redaction 10'), local('Redaction10'),
      url(${Redaction10Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 10';
    font-style: normal;
    src: local('Redaction 10'), local('Redaction10'),
      url(${Redaction10Boldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 20';
    font-style: normal;
    src: local('Redaction 20'), local('Redaction20'),
      url(${Redaction20Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 20';
    font-style: normal;
    src: local('Redaction 20'), local('Redaction20'),
      url(${Redaction20Boldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 35';
    font-style: normal;
    src: local('Redaction 35'), local('Redaction35'),
      url(${Redaction35Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 35';
    font-style: normal;
    src: local('Redaction 35'), local('Redaction35'),
      url(${Redaction35Boldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 50';
    font-style: normal;
    src: local('Redaction 50'), local('Redaction50'),
      url(${Redaction50Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 50';
    font-style: normal;
    src: local('Redaction 50'), local('Redaction50'),
      url(${Redaction50Boldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 70';
    font-style: normal;
    src: local('Redaction 70'), local('Redaction70'),
      url(${Redaction70Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 70';
    font-style: normal;
    src: local('Redaction 70'), local('Redaction70'),
      url(${Redaction70Boldwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Redaction 100';
    font-style: normal;
    src: local('Redaction 100'), local('Redaction100'),
      url(${Redaction100Regularwoff2}) format('woff2');
  }

  @font-face {
    font-weight: 700;
    font-family: 'Redaction 100';
    font-style: normal;
    src: local('Redaction 100'), local('Redaction100'),
      url(${Redaction100Boldwoff2}) format('woff2');
  }
`;

export default Redaction;
