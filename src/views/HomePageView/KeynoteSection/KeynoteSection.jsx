// vendors
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// styles
import { useTranslation } from 'react-i18next';
import { wrapper, CardsWrapper, Title } from './KeynoteSection.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import KeynoteCard from '../../../components/KeynoteCard';

const speakersPictureQuery = graphql`
  fragment speakerPhotoFragment on File {
    childImageSharp {
      fluid(
        quality: 100
        maxWidth: 425
        duotone: { highlight: "#EBEBEB", shadow: "#262626" }
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    speakerEleniBeveratou: file(
      relativePath: { eq: "keynotes/speaker-eleni-beveratou.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerFredHebert: file(
      relativePath: { eq: "keynotes/speaker-fred-hebert.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerLouisPhilippeMathieu: file(
      relativePath: { eq: "keynotes/speaker-louis-philippe-mathieu.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerJayGrandmont: file(
      relativePath: { eq: "keynotes/speaker-jay-grandmont.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerZoeRaymond: file(
      relativePath: { eq: "keynotes/speaker-zoe-raymond.jpg" }
    ) {
      ...speakerPhotoFragment
    }
    speakerCharlotteRudelle: file(
      relativePath: { eq: "keynotes/speaker-charlotte-rudelle.jpg" }
    ) {
      ...speakerPhotoFragment
    }
  }
`;

const KeynoteSection = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(speakersPictureQuery);

  const {
    speakerEleniBeveratou: {
      childImageSharp: { fluid: speakerEleniBeveratou },
    },
    speakerFredHebert: {
      childImageSharp: { fluid: speakerFredHebert },
    },
    speakerLouisPhilippeMathieu: {
      childImageSharp: { fluid: speakerLouisPhilippeMathieu },
    },
    speakerJayGrandmont: {
      childImageSharp: { fluid: speakerJayGrandmont },
    },
    speakerZoeRaymond: {
      childImageSharp: { fluid: speakerZoeRaymond },
    },
    speakerCharlotteRudelle: {
      childImageSharp: { fluid: speakerCharlotteRudelle },
    },
  } = data;

  const speakers = [
    {
      firstName: 'Eleni',
      lastName: 'Beveratou',
      organization: 'Dalton Maag',
      detailPageUrl: '/programmation/conference-deleni-beveratou/',
      picture: speakerEleniBeveratou,
    },
    {
      firstName: 'Fred',
      lastName: 'Hebert',
      organization: 'Honeycomb.io',
      detailPageUrl:
        '/programmation/ca-sen-va-tout-chez-le-diable-anyway-on-peut-juste-influencer-combien-de-temps-ca-va-prendre/',
      picture: speakerFredHebert,
    },
    {
      firstName: 'Louis-Philippe',
      lastName: 'Mathieu',
      organization: 'Cossette',
      detailPageUrl:
        '/programmation/preparez-votre-organisation-a-ladoption-de-projets-dia/',
      picture: speakerLouisPhilippeMathieu,
    },
    {
      firstName: 'Jay',
      lastName: 'Grandmont',
      organization: '',
      detailPageUrl:
        '/programmation/le-contenu-authentique-grace-au-branding-personnel/',
      picture: speakerJayGrandmont,
    },
    {
      firstName: 'Zoé',
      lastName: 'Raymond',
      organization: 'Hydro-Québec',
      detailPageUrl: '/programmation/sauver-la-planete-un-contenu-a-la-fois-/',
      picture: speakerZoeRaymond,
    },
    {
      firstName: 'Charlotte',
      lastName: 'Rudelle',
      organization: 'Moment Factory',
      detailPageUrl:
        '/programmation/au-cur-de-la-creation-le-role-des-concept-artists-chez-moment-factory/',
      picture: speakerCharlotteRudelle,
    },
  ];

  return (
    <Center
      as='section'
      css={wrapper}
      maxWidth='var(--max-container-width)'
      gutters='16px'
      intrinsic
    >
      <Title>{t('home.keynotes.title')}</Title>

      <CardsWrapper>
        <KeynoteCard speaker={speakers[0]} mobileRotationAngle={-5} />
        <KeynoteCard speaker={speakers[1]} big mobileRotationAngle={5} />
        <KeynoteCard speaker={speakers[2]} />
        <KeynoteCard speaker={speakers[3]} mobileRotationAngle={-10} />
        <KeynoteCard speaker={speakers[4]} />
        <KeynoteCard speaker={speakers[5]} big mobileRotationAngle={5} />
      </CardsWrapper>

      <Button tag='link' to='/programmation/2024/'>
        {t('home.keynotes.cta')}
      </Button>
    </Center>
  );
};

export default KeynoteSection;
