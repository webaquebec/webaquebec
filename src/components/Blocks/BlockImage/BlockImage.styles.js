// vendors
import styled from 'styled-components';

// styles
import { caption2Style } from '../../../styles/global';
import { contentStyle } from '../Blocks.styles';

export const Container = styled.div`
  --max-content-post-width: 1066px;

  figure {
    margin: 0;

    ${contentStyle}
  }

  figure > * {
    width: 100%;
    height: 100%;
  }

  figure img {
    border-radius: 12px;
  }

  figure figcaption {
    ${caption2Style};
  }
`;

export default { Container };
