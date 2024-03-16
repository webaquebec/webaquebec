// vendors
import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Stack from '../components/LayoutSections/Stack';
import SEO from '../components/SEO';
import Center from '../components/LayoutSections/Center';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import {
  h1AltStyle,
  h2Style,
  orderedListStyle,
  unorderedListStyle,
  linkStyle,
} from '../styles/global';

const TextureWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  transform: rotate(180deg);
`;

const PageTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [60, 110], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [60, 110], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const stackStyle = css`
  margin-bottom: 4rem;

  ${breakpointsRange(
    [{ prop: '--space', sizes: [20, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};

  p {
    ${breakpointsRange(
      [{ prop: '--space', sizes: [10, 20], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }

  > *:not(p, ul, ol),
  > *:not(p, ul, ol, h2, h3, h4, h5, h6) + * {
    ${breakpointsRange(
      [{ prop: '--space', sizes: [56, 80], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
`;

const headingStyle = css`
  ${h2Style}

  display: inline;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [20, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const OrderedList = styled.ol`
  ${orderedListStyle};

  > li::before {
    ${h2Style}
  }
`;

const Link = styled.a`
  ${linkStyle}
`;

const CodeConductPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        plasticTexture: file(relativePath: { eq: "textures/plasticBag.png" }) {
          childImageSharp {
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title='Code de conduite' description='' />

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center
        maxWidth='854px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <PageTitle css={h1AltStyle}>code de conduite</PageTitle>
      </Center>

      <Center maxWidth='854px' gutters='var(--container-gutter)'>
        <OrderedList>
          <li>
            <h2 css={headingStyle}>COMPORTEMENT ATTENDU</h2>

            <Stack space='var(--space)' css={stackStyle}>
              <p>
                Nous souhaitons que tous les participants aient une expérience
                agréable et enrichissante. Dans cette optique, nous attendons de
                tous les participants qu’ils fassent preuve de respect et de
                courtoisie envers les autres participants pendant toute la durée
                de l’événement (y compris durant les 5 à 7).
              </p>
              <p>
                En participant au Web à Québec, vous vous engagez à avoir un
                comportement irréprochable durant l’événement ainsi que sur les
                médias sociaux. Ainsi, vous vous engagez à faire preuve
                d’objectivité, de bienveillance et de professionnalisme,
                c’est-à-dire:
              </p>

              <ul css={unorderedListStyle}>
                <li>
                  être attentif à votre environnement et à celui des autres
                  participants;
                </li>
                <li>
                  respecter les lieux et le matériel mis à votre disposition;
                </li>
                <li>respecter les opinions de chacun;</li>
                <li>
                  rester à la maison si vous êtes malade ou si vous avez des
                  symptômes de la COVID-19;
                </li>
                <li>
                  maintenir la confidentialité des informations obtenues au
                  cours de votre participation au WAQ.
                </li>
              </ul>
            </Stack>
          </li>
          <li>
            <h2 css={headingStyle}>COMPORTEMENT INACCEPTABLE</h2>

            <Stack space='var(--space)' css={stackStyle}>
              <p>En revanche, vous ne pouvez pas :</p>

              <ul css={unorderedListStyle}>
                <li>fumer en dehors des zones prévues à cet effet;</li>
                <li>posséder et consommer des produits illicites;</li>
                <li>
                  dégrader les biens appartenant à l’organisation ou au site de
                  l’événement;
                </li>
                <li>adopter un comportement troublant l’ordre public;</li>
                <li>
                  faire preuve d’intimidation auprès d’une tierce personne;
                </li>
                <li>
                  participer à l’événement si vous avez un résultat positif à la
                  COVID-19;
                </li>
                <li>
                  émettre des commentaires offensants sur les comptes de médias
                  sociaux des participants concernant l’événement et la
                  communauté du Web à Québec.
                </li>
              </ul>

              <p>
                Le Web à Québec est un événement consacré aux échanges. Aucun
                comportement déplacé ne sera accepté. Nous ne tolérons aucune
                discrimination ou harcèlement. Par harcèlement, nous entendons
                toutes conduites vexatoires se manifestant par des
                comportements, des paroles, des actes ou des gestes répétés, qui
                sont hostiles ou non désirés, conduite fondée ou non sur un des
                motifs discriminatoires interdits par la Charte des droits et
                libertés de la personne du Québec (nationalité, couleur, sexe,
                grossesse, orientation sexuelle, état civil, âge sauf dans la
                mesure prévue par la loi, religion, convictions politiques,
                langue, condition sociale, handicap ou utilisation d’un moyen
                pour pallier ce handicap); et qui sont de nature à porter
                atteinte à la dignité, à l’intégrité physique ou psychologique
                de la personne ou de nature à compromettre son activité.
              </p>
              <p>
                Les expressions et les images à connotation sexuelle ne sont pas
                non plus appropriées dans l’enceinte de l’événement, ce qui
                inclut les conférences, les ateliers, les soirées, ainsi que les
                réseaux sociaux. Les participants à qui il sera demandé
                d’arrêter tout comportement discriminatoire ou de harcèlement
                doivent arrêter immédiatement sous peine de sanction, à la
                discrétion des organisateurs.
              </p>
            </Stack>
          </li>
          <li>
            <h2 css={headingStyle}>ASSISTANTE IMMÉDIATE</h2>

            <Stack space='var(--space)' css={stackStyle}>
              <p>
                Si vous vous sentez harcelé, si vous êtes témoin qu’une personne
                se fait harceler, ou si vous avez besoin d’assistance, merci de
                contacter immédiatement un membre de l’organisation de
                l’événement au{' '}
                <Link href='mailto:sos@webaquebec.org'>sos@webaquebec.org</Link>
                .
              </p>
              <p>
                Nous sommes à la disposition des participants pour interpeller
                l’équipe de sécurité du lieu de l’événement ou les forces de
                l’ordre locales pour assister sans délai ceux qui sont en
                situation de harcèlement, afin de leur permettre de se sentir en
                sécurité. Il est important pour nous que tous les participants
                prennent part à l’événement en toute sérénité.
              </p>
              <p>L’équipe du Web à Québec</p>
              <p>
                Adapté de :{' '}
                <Link
                  href='https://confcodeofconduct.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  confcodeofconduct.com
                </Link>
              </p>
            </Stack>
          </li>
        </OrderedList>
      </Center>
    </>
  );
};

export default CodeConductPage;
