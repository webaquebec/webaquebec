// vendors
import styled from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import breakpoints from '../../../styles/breakpoints';

export const Container = styled.section`
  overflow-x: hidden;
`;

export const AboutIntro = styled.p`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 160], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

// export const VideoContainer = styled.div`
//   position: relative;

//   padding-top: 56.25%;
// `;

// export const Video = styled.iframe`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 2;

//   width: 100%;
//   height: 100%;
// `;

// export const VectorGrid = styled.img`
//   position: absolute;
//   right: 0;
//   bottom: -10%;
//   z-index: 1;

//   height: 90%;

//   ${lessThan(1280)} {
//     left: 20%;
//   }
// `;
