// vendors
import React from 'react';
import styled from 'styled-components';

// components
import Stack from '../../../components/LayoutSections/Stack';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import { unorderListStyle } from '../../../styles/global';

export const Wrapper = styled.div`
  color: ${colors.gris100};

  ${breakpointsRange(
    [
      { prop: 'marginLeft', sizes: [0, 82], bases: [16, 20] },
      { prop: 'paddingTop', sizes: [16, 32], bases: [16, 20] },
      { prop: 'paddingLeft', sizes: [16, 0], bases: [16, 20] },
      { prop: 'paddingRight', sizes: [16, 0], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const Highlight = styled.p`
  max-width: 442px;
  margin-top: 0;

  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 32], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 38], bases: [24, 32], unit: '' },
    ],
    breakpoints.spacings
  )};
`;

const NoResults = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <Wrapper>
      <Highlight>
        Oups ! Il n’y a aucun résultat pour les filtres sélectionnés.
      </Highlight>

      <p>Voici ce que vous pouvez faire :</p>

      <Stack as='ul' space='16px' css={unorderListStyle}>
        <li>Réinitialiser les filtres</li>
        <li>Réduire le nombre de filtres appliqués</li>
        <li>Tenter une nouvelle combinaison de filtres</li>
        <li>Changer de journée dans la programmation</li>
      </Stack>
    </Wrapper>
  );
};

export default NoResults;
