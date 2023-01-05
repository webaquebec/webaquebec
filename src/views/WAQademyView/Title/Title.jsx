// vendors
import React from 'react';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { WAQademyIntro, WAQademyTitle } from './Title.styles';

const title = 'Le WAQ présente la WAQadémie';
const subtitle =
  'Des formations pour les créateur·trices du Web, guidées par les principes fondateurs du WAQ.';

const Title = () => (
  <Center maxWidth='825px' gutters='var(--container-gutter)' withText intrinsic>
    <WAQademyTitle>{title}</WAQademyTitle>
    <WAQademyIntro>{subtitle}</WAQademyIntro>
  </Center>
);

export default Title;
