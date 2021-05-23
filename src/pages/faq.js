// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Center from '../components/LayoutSections/Center';
import Accordion from '../components/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';
import SectionContainer from '../components/SectionContainer';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import { h1AltStyle, introStyle } from '../styles/global';
import colors from '../styles/colors';

const FaqTitle = styled.h1`
  margin-bottom: 0;

  color: ${colors.bleu80};
`;

const FaqIntro = styled.p`
  margin-bottom: 0;
`;

const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [98, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [148, 114], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [48, 68], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ::before,
  ::after {
    height: 30vh;
  }

  ::before {
    top: -30vh;
  }

  ::after {
    bottom: -30vh;
  }
`;

const faqItem = css`
  margin: 0;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [19, 19], bases: [16, 16] },
    ],
    breakpoints.spacings
  )};
`;

const FaqPage = ({ location }) => {
  const data = [
    {
      id: 1,
      question: 'Quelle sera la forme du WAQ21?',
      answer:
        'Du 15 au 17 juin prochains, le WAQ21 aura lieu virtuellement. On te convie à une édition « pas comme les autres »  sur la plateforme SwapCard. Les détenteurs de billets pour l’édition 2020 du Web à Québec recevront plus d’informations par courriel.',
    },
    {
      id: 2,
      question: 'Est-ce que mon billet pour le WAQ20 est remboursable?',
      answer:
        'Les billets sont non remboursables puisqu’il s’agit d’une vente finale. Ils peuvent cependant être transférés à une autre personne.',
    },
    {
      id: 3,
      question:
        'Est-il possible de transférer un billet du WAQ à une autre personne?',
      answer:
        'Les transferts de billet d’une personne à une autre sont possibles. Écris-nous à <a href="mailto:info@webaquebec.org">info@webaquebec.org</a> pour connaître la marche à suivre.',
    },
    {
      id: 4,
      question:
        'Si je possède un billet WAQ20, est-il encore valide? Qu’est-ce qu’il comprend?',
      answer:
        'Oui. Tous les détenteurs de billets pour l’édition prévue en 2020 du Web à Québec auront accès à l’édition de 2021 qui se tiendra du 15 au 17 juin prochains. L’édition 2021 sera virtuelle, tu n’as aucune action à prendre pour transférer ton billet, le tout se fait automatiquement. Tu recevras également un code qui te permet d’accéder à deux accès supplémentaires pour le Web à Québec. Deux accès que nous t’invitons à donner à des ami.es et/ou collègues de la communauté numérique. Finalement, nous t’offrons également un crédit applicable sur l’achat d’un billet pour l’édition 2022. Ne t’inquiète pas, tous les détails te seront envoyés par courriel.',
    },
    {
      id: 5,
      question:
        'Il me sera impossible d’assister à l’événement en juin. Est-ce que je peux me faire rembourser?',
      answer:
        'Les billets sont non remboursables puisqu’il s’agit d’une vente finale. Ils peuvent cependant être transférés à une autre personne. Dans le cas où un transfert n’est pas possible, un crédit sur l’achat d’un billet pour l’édition 2022 vous sera offert.',
    },
    {
      id: 6,
      question:
        'Est-ce possible de participer à la Semaine numériQC avec un billet du WAQ?',
      answer:
        'Non. Les seules personnes qui peuvent assister aux deux événements sont celles qui se sont procurées une passe all-access l’année dernière. Des billets seront cependant mis en vente pour la <a rel="noopener noreferrer" target="_blank" href="https://www.semainenumeriqc.com/" target="_blank" rel="noopener noreferrer">Semaine numériQC</a> dans les mois à venir.',
    },
    {
      id: 7,
      question:
        'Est-ce qu’il y a des chances que le WAQ21 soit annulé ou reporté de nouveau?',
      answer:
        'L’équipe du Web à Québec se donne comme mission de présenter une édition 2021 du WAQ en juin, peu importe la situation. Que l’événement soit 100% virtuel ou hybride, nous nous engageons à te livrer une expérience aux couleurs du WAQ, à moins qu’une situation hors de notre contrôle force l’annulation.',
    },
    {
      id: 8,
      question:
        'Est-ce que des billets supplémentaires seront mis en vente pour participer à l’édition 2021 du WAQ?',
      answer: 'Non, l’événement affiche complet depuis février 2020!',
    },
    {
      id: 9,
      question:
        'Puis-je me procurer des billets pour l’édition virtuelle de 2021?',
      answer:
        'Non, il n’y aura pas de nouveaux billets en vente. Si tu souhaites participer au WAQ21, nous offrons deux billets supplémentaires par billet acheté pour l’édition 2020. Dépêche-toi de solliciter ton réseau de contacts pour obtenir un laissez-passer pour 2021.',
    },
  ];

  return (
    <Layout location={location}>
      <SEO title='FAQ' description='Tout ce que tu dois savoir sur le WAQ21.' />

      <Center
        maxWidth='625px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <FaqTitle css={h1AltStyle}>FAQ</FaqTitle>
        <FaqIntro css={introStyle}>
          L’édition 2021 du Web à Québec (WAQ) est reportée aux 15, 16 et 17
          juin prochains. Si vous êtes l’un.e des fier.ères détenteur.trices de
          billet du WAQ ou si vous avez des questions sur l’événement et/ou sa
          forme, on tente d’y répondre ici. 👇
        </FaqIntro>
      </Center>

      <Container forwardedAs='div' faded>
        <Center maxWidth='850px' gutters='var(--container-gutter)'>
          <Accordion multiple collapsible>
            {data.map((item) => (
              <AccordionItem
                key={`faq-${item.id}`}
                titleAs='h2'
                title={item.question}
              >
                <p
                  css={faqItem}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </Center>
      </Container>
    </Layout>
  );
};

FaqPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default FaqPage;
