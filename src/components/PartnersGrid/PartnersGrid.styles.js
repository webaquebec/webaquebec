// vendors
import styled from 'styled-components';

// utils
import { lessThan } from '../../utils/mediaQuery';

// export const SectionContainer = styled.section`
//   ${lessThan(1280)} {
//     --max-container-width: 768px;
//   }
// `;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 55px;
  margin-bottom: 164px;

  ${lessThan(1280)} {
    margin-bottom: 64px;
  }

  ${lessThan(768)} {
    margin-top: 35px;
    margin-bottom: 54px;
  }
`;

export default Wrapper;
