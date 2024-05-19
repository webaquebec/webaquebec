// vendors
import React from 'react';

// components
import { useTranslation } from 'react-i18next';
import Center from '../../../components/LayoutSections/Center';

// styles
import { Container, Title, Paragraph } from './WhoWeAreSection.styles';

const WhoWeAreSection = () => {
  const { t } = useTranslation();
  return (
    <Center maxWidth='840px' gutters='var(--container-gutter)'>
      <Container>
        <Title>{t('about.qn.whoAreWe.title')}</Title>
        <Paragraph>{t('about.qn.whoAreWe.text1')}</Paragraph>
        <Paragraph>{t('about.qn.whoAreWe.text2')}</Paragraph>
      </Container>
    </Center>
  );
};

export default WhoWeAreSection;
