// vendors
import React from 'react';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

// components
import { graphql, useStaticQuery } from 'gatsby';
import Stack from '../components/LayoutSections/Stack';
import Center from '../components/LayoutSections/Center';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import {
  h1AltStyle,
  h2Style,
  unorderedListStyle,
  orderedListStyle,
} from '../styles/global';
import colors from '../styles/colors';

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

const headingStyle = css`
  ${h2Style}
`;

const UnorderedList = styled.ul`
  ${unorderedListStyle}
`;

const AlphabeticalList = styled.ol`
  ${orderedListStyle};

  > li::before {
    content: counter(li, upper-alpha) ')';
  }
`;

const Link = styled.a`
  position: relative;

  color: inherit;
  text-decoration: none;

  border-bottom: 2px solid ${colors.blueberry};
`;

const ContactInformation = () => (
  <Stack>
    <div>
      Courrier :
      <br />
      Québec numérique,
      <br />
      330, rue Saint-Vallier Est, bureau 300,
      <br />
      Québec (QC) G1K 9C5
      <br />
    </div>
    <div>
      Courriel :{' '}
      <Link href='mailto:vieprivee@quebecnumerique.com'>
        vieprivee@quebecnumerique.com
      </Link>
    </div>
    <div>
      Téléphone : <Link href='tel:1-877-334-2547'>1 877-334-2547</Link>
    </div>
  </Stack>
);

const PolicyPrivacyPage = () => {
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
      <SEO title='Politique et confidentialité' description='' />

      <TextureWrapper>
        <GatsbyImage
          fixed={data.plasticTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Center
        maxWidth='1100px'
        gutters='var(--container-gutter)'
        withText
        intrinsic
      >
        <PageTitle css={h1AltStyle}>politique et confidentialité</PageTitle>
      </Center>

      <Center maxWidth='854px' gutters='var(--container-gutter)'>
        <Stack space='4rem'>
          <Stack>
            <h2 css={headingStyle}>Introduction</h2>

            <p>
              Devant le développement des nouveaux outils de communication, il
              est nécessaire de porter une attention particulière à la
              protection de la vie privée. C’est pourquoi nous nous engageons à
              respecter la confidentialité des renseignements personnels que
              nous collectons.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Site Web du Web à Québec</h2>

            <p>
              Le site{' '}
              <Link href='https://webaquebec.org/'>Web à Québec (WAQ)</Link> est
              opéré par{' '}
              <Link
                href='https://quebecnumerique.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Québec numérique
              </Link>{' '}
              (opérateur). L’utilisateur qui consulte le site Web est lié par
              les présentes conditions.
            </p>

            <p>
              Site Web :{' '}
              <Link href='https://www.webaquebec.org'>
                https://www.webaquebec.org
              </Link>
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Propriété intellectuelle</h2>

            <p>
              Il est à noter que le site Web et son contenu demeurent la
              propriété de l’opérateur.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Collecte des renseignements personnels</h2>

            <p>Nous collectons les renseignements suivants:</p>

            <UnorderedList>
              <li>Nom</li>
              <li>Prénom</li>
              <li>Adresse électronique</li>
              <li>Adresse IP</li>
            </UnorderedList>

            <p>
              Les renseignements personnels que nous collectons sont recueillis
              au travers de formulaires et l’interactivité établie entre vous et
              notre site Web. Nous utilisons également des fichiers témoins
              (cookies) et/ou journaux pour réunir des informations vous
              concernant.
            </p>

            <p>
              Il est à noter que les renseignements utilisateurs ne sont jamais
              divulgués à des tiers ni utilisés à des fins commerciales, à moins
              que votre consentement ait été donné. Les renseignements récoltés
              pour un projet donné serviront seulement pour ce projet et ne
              seront en aucun temps transférés aux autres projets de
              l’organisation.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Formulaires et interactivité</h2>

            <p>
              Vos renseignements personnels sont collectés par le biais de
              formulaires, à savoir :
            </p>

            <UnorderedList>
              <li>Formulaire d’inscription à l’infolettre</li>
              <li>Formulaire de contact</li>
            </UnorderedList>

            <p>
              Nous collectons les renseignements des utilisateurs qui
              s’inscrivent à notre liste de diffusion (nom, prénom, adresse
              électronique). Nous utilisons les renseignements ainsi collectés
              pour les finalités suivantes:
            </p>

            <UnorderedList>
              <li>Informations/Offres promotionnelles</li>
              <li>Statistiques</li>
              <li>Contact</li>
            </UnorderedList>

            <p>
              Ces données ne sont jamais vendues à des tiers et les abonnés
              peuvent se désabonner à tout moment.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Médias</h2>

            <p>
              Si tu es un(e) utilisateur(trice) enregistré(e) et que tu
              téléverses des images sur le site Web, nous te conseillons
              d’éviter de téléverser des images contenant des données EXIF de
              coordonnées GPS. Les visiteurs de notre site Web peuvent
              télécharger et extraire des données de localisation depuis ces
              images.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>
              Opérations de marketing automatisé et/ou de profilage réalisées à
              l’aide des données personnelles
            </h2>

            <p>
              Si vous visitez certaines pages de ce site, il est possible que
              votre navigateur enregistre un cookie pour une durée maximale d’un
              an pour que nous puissions diffuser de la publicité pertinente via
              le réseau Google AdWords et le pixel Facebook.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Statistiques et mesures d’audience</h2>

            <p>
              Ce site collecte des données anonymes sur l’audience pour mesurer
              la portée du site Web.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Durée de stockage des données</h2>

            <p>
              Les données récoltées via les formulaires, le cas échéant, sont
              conservées indéfiniment sur nos serveurs internes et/ou dans un
              CRM. L’accès à nos serveurs physiques est restreint aux seules
              personnes qui disposent de l’autorisation d’y accéder.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>
              Droit d’accès, droit d’opposition et droit de retrait
            </h2>

            <p>
              Nous nous engageons à reconnaître un droit d’accès et de
              rectification aux personnes concernées et désireuses de consulter,
              modifier, voire radier les informations les concernant.
            </p>

            <p>
              Il est à noter que les abonnés à notre liste de diffusion peuvent
              se désabonner à tout moment.
            </p>

            <p>
              Nous nous engageons ainsi à vous offrir un droit d’opposition et
              de retrait quant à vos renseignements personnels. Le droit
              d’opposition s’entend comme étant la possibilité offerte aux
              internautes de refuser que leurs renseignements personnels soient
              utilisés à certaines fins mentionnées lors de la collecte (voir la
              section « Collecte des renseignements personnels »).
            </p>

            <p>
              Le droit de retrait s’entend comme étant la possibilité offerte
              aux internautes de demander à ce que leurs renseignements
              personnels ne figurent plus, par exemple, dans une liste de
              diffusion.
            </p>

            <p>
              Pour pouvoir exercer ces droits, vous pouvez communiquer
              directement avec notre équipe par :
            </p>

            <ContactInformation />
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Signaler un incident de confidentialité</h2>

            <p>
              Il est possible de signaler un incident de confidentialité, soit
              tout accès non autorisé à un renseignement personnel, à son
              utilisation ou à sa communication, de même que sa perte ou toute
              autre forme d’atteinte à sa protection.
            </p>

            <p>
              Pour ce faire, vous pouvez communiquer directement avec notre
              équipe par:
            </p>

            <ContactInformation />
          </Stack>

          <Stack>
            <h2 css={headingStyle}>
              Quels sont vos droits d’accès sur vos données?
            </h2>

            <p>
              Vous pouvez demander à recevoir un fichier contenant toutes les
              données personnelles que nous possédons à votre sujet, incluant
              celles que vous nous avez fournies. Vous pouvez également demander
              la suppression des données personnelles vous concernant, de même
              que la rectification si les renseignements sont inexacts,
              incomplets ou équivoques. Ceci ne prend pas en compte les données
              conservées à des fins administratives, légales ou pour des raisons
              de sécurité.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Législation</h2>

            <p>
              Nous nous engageons à respecter les dispositions législatives
              énoncées dans la législation provinciale et fédérale canadienne.
            </p>

            <p>Québec numérique s’engage aussi à:</p>

            <AlphabeticalList>
              <li>
                prendre les mesures raisonnables pour diminuer le risques qu’un
                préjudice soit causé et éviter que de nouveaux incidents de même
                nature se produire si nous avons des motifs de croire qu’un
                incident de confidentialité impliquant un renseignement
                personnel s’est produit;
              </li>
              <li>
                aviser la Commission d’accès à l’information et toute personne
                dont un renseignement personnel est concerné par l’incident si
                l’incident présente un préjudice sérieux pour les personnes
                concernées.
              </li>
            </AlphabeticalList>

            <p>
              De plus, les incidents de confidentialité sont consignés dans un
              registre.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Changements sans préavis</h2>

            <p>
              Il est à noter que les conditions d’utilisation sont dynamiques et
              sujettes à changement à tout moment et sans préavis. La cueillette
              et l’utilisation des renseignements personnels seront assujetties
              à la version de la politique alors affichée et en vigueur.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Langue de traduction</h2>

            <p>
              La version française prévaut sur toute autre traduction des
              conditions d’utilisation, et ce, afin d’éviter toute
              interprétation disparate entre les deux versions.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Contact</h2>

            <p>
              Pour toute question, veuillez communiquer avec nous à{' '}
              <Link href='mailto:info@quebecnumerique.com'>
                info@quebecnumerique.com
              </Link>
            </p>

            <p>
              <em>
                Veuillez noter que le genre masculin est utilisé dans ce
                document dans le seul but d’alléger le texte.
              </em>
            </p>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default PolicyPrivacyPage;
