// vendors
import React from 'react';
import styled, { css } from 'styled-components';

// components
import Stack from '../components/LayoutSections/Stack';
import SectionContainer from '../components/SectionContainer';
import SEO from '../components/SEO';

// utils
import breakpointsRange from '../utils/breakpointsRange';

// styles
import breakpoints from '../styles/breakpoints';
import Center from '../components/LayoutSections/Center';
import {
  titleStyle,
  h2Style,
  unorderedListStyle,
  orderedListStyle,
} from '../styles/global';
import colors from '../styles/colors';

const PageTitle = styled.h1`
  margin-bottom: 0;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 150], bases: [16, 20] }],
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

  border-bottom: 2px solid ${colors.bleu};
`;

const Container = styled(SectionContainer)`
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

const ContactInformation = () => (
  <p>
    Courrier : Québec numérique, 330, rue Saint-Vallier Est, bureau 300,
    <br />
    Québec (QC) G1K 9C5
    <br />
    Courriel :{' '}
    <Link href='mailto:vieprivee@quebecnumerique.com'>
      vieprivee@quebecnumerique.com
    </Link>
    <br />
    Téléphone : <Link href='tel:1-877-334-2547'>1 877-334-2547</Link>
  </p>
);

const PolicyPrivacyPage = () => (
  <>
    <SEO title='Politique et confidentialité' description='' />

    <Center
      maxWidth='854px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <PageTitle css={titleStyle}>
        politique <span>et</span> confidentialité
      </PageTitle>
    </Center>

    <Container forwardedAs='div' faded padded>
      <Center maxWidth='854px' gutters='var(--container-gutter)'>
        <Stack space='4rem'>
          <Stack>
            <h2 css={headingStyle}>Introduction</h2>

            <p>
              Devant le développement des nouveaux outils de communication, il
              est nécessaire de porter une attention particulière à la
              protection de la vie privée. C’est pourquoi le Web Québec (WAQ)
              s’engage à respecter la confidentialité des renseignements
              personnels collectés.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>À propos du site web</h2>

            <p>
              Le site Web du Web à Québec (WAQ) est opéré par Québec numérique
              (QN) (opérateur)
            </p>

            <p>
              L’utilisateur(trice) qui consulte le site Web est lié par les
              présentes conditions.
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
            <h2 css={headingStyle}>Collecte de renseignements personnels</h2>

            <p>Nous collectons les renseignements suivants:</p>

            <UnorderedList>
              <li>Nom</li>
              <li>Prénom</li>
              <li>Adresse électronique</li>
              <li>Adresse IP</li>
            </UnorderedList>

            <p>
              Les renseignements personnels sont recueillis au travers de
              formulaires et de l’interactivité établie entre notre site Web et
              l’utilisateur. Le WAQ utilise également des fichiers témoins
              (cookies) et/ou journaux pour réunir des informations qui te
              concernent.
            </p>

            <p>
              Il est à noter que les renseignements utilisateurs ne sont jamais
              divulgués à des tiers ni utilisés à des fins commerciales, à moins
              que ton consentement ait été donné.
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
              <li>Formulaire d’achat de billets</li>
              <li>Fiche participant(e) dans l’application de l’événement</li>
            </UnorderedList>

            <p>
              Le WAQ collecte les renseignements des utilisateurs(trices) qui
              s’inscrivent à notre liste de diffusion (nom, prénom, adresse
              électronique). Les renseignements ainsi collectés le sont pour les
              finalités suivantes :
            </p>

            <UnorderedList>
              <li>Informations</li>
              <li>Offres promotionnelles</li>
              <li>Statistiques</li>
              <li>Contact</li>
            </UnorderedList>

            <p>
              Ces données ne sont jamais vendues à des tiers et les abonnés
              peuvent se désabonner à tout moment. Elles peuvent cependant être
              partagées aux partenaires du WAQ si le consentement de
              l’utilisateur(trice) a été donné au moment de l’abonnement ou de
              l’achat d’un billet.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Commentaires</h2>

            <p>
              Quand un commentaire est laissé sur notre site Web, les données
              inscrites dans le formulaire de commentaire, mais aussi ton
              adresse IP et l’agent utilisateur de ton navigateur sont collectés
              pour nous aider à la détection des commentaires indésirables.
            </p>

            <p>
              Une chaîne anonymisée créée à partir de ton adresse de messagerie
              (également appelée <i>hash</i>) peut être envoyée au service
              Gravatar pour vérifier si tu utilises ce dernier. Les clauses de
              confidentialité du service Gravatar sont disponibles ici :{' '}
              <Link href='https://automattic.com/privacy/'>
                https://automattic.com/privacy/
              </Link>
              .
            </p>

            <p>
              Après validation de ton commentaire, ta photo de profil sera
              visible publiquement à côté de ton commentaire. Les commentaires
              des visiteurs peuvent être vérifiés à l’aide d’un service
              automatisé de détection des commentaires indésirables.
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
            <h2 css={headingStyle}>Fichiers témoins (cookies)</h2>

            <p>
              Si tu déposes un commentaire sur notre site Web, il te sera
              proposé d’enregistrer ton nom, adresse de messagerie et site Web
              dans des cookies. C’est uniquement pour ton confort afin de ne pas
              avoir à saisir ces informations si tu déposes un autre commentaire
              plus tard. Ces cookies expirent au bout d’un an.
            </p>

            <p>
              Si tu as un compte et que tu te connectes sur ce site, un cookie
              temporaire sera créé afin de déterminer si ton navigateur accepte
              les cookies. Il ne contient pas de données personnelles et sera
              supprimé automatiquement à la fermeture de ton navigateur.
            </p>

            <p>
              Lorsque tu te connectes, nous mettons en place un certain nombre
              de cookies pour enregistrer tes informations de connexion et tes
              préférences d’écran. La durée de vie d’un cookie de connexion est
              de deux jours, celle d’un cookie d’option d’écran est d’un an. Si
              tu coches « Se souvenir de moi », le cookie de connexion sera
              conservé pendant deux semaines. Si tu te déconnectes de ton
              compte, le cookie de connexion sera effacé.
            </p>

            <p>
              En modifiant ou en publiant un article, un cookie supplémentaire
              sera enregistré dans ton navigateur. Ce cookie ne comprend aucune
              donnée personnelle. Il indique simplement l’identifiant de
              l’article que tu dois modifier. Il expire au bout d’un jour.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Contenus embarqués depuis d’autres site</h2>

            <p>
              Les pages de ce site peuvent inclure des contenus intégrés (par
              exemple, des vidéos, images, des widgets, etc.). Le contenu
              intégré depuis d’autres sites se comporte de la même manière que
              si le(la) visiteur(euse) se rendait sur cet autre site.
            </p>

            <p>
              Ces sites Web pourraient collecter des données sur toi, utiliser
              des cookies, embarquer des outils de suivis tiers, suivre tes
              interactions avec ce contenus embarqués si tu disposes d’un compte
              connecté sur leur site Web.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>
              Opérations de marketing automatisé et/ou de profilage réalisées à
              l’aide des données personnelles
            </h2>

            <p>
              Si tu visites certaines pages de ce site, il est possible que ton
              navigateur enregistre un cookie pour une durée maximale d’un an
              pour que nous puissions diffuser de la publicité pertinente via le
              réseau Google AdWords et le pixel Facebook.
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
              Si tu laisses un commentaire, le commentaire et ses métadonnées
              sont conservés indéfiniment. Cela permet de reconnaître et
              d’approuver automatiquement les commentaires suivants au lieu de
              les laisser dans la file de modération.
            </p>

            <p>
              Pour les utilisateurs(trices) qui s’enregistrent sur notre site
              (seulement si cela est possible), nous stockons également les
              données personnelles indiquées dans leur profil. Tous les
              utilisateurs(trices) peuvent voir, modifier ou supprimer leurs
              informations personnelles à tout moment (à l’exception de leur nom
              d’utilisateur). Les gestionnaires du site peuvent aussi voir et
              modifier ces informations. Les mots de passe, pour leur part, sont
              encryptés dans les bases de données.
            </p>

            <p>
              Les données récoltées via les formulaires, le cas échéant, sont
              conservées indéfiniment sur nos serveurs internes et/ou dans un
              CRM. L’accès à nos serveurs physiques est restreint aux seules
              personnes qui disposent de l’autorisation d’y accéder. Nous nous
              engageons à reconnaître un droit d’accès et de rectification aux
              personnes concernées et désireuses de consulter, modifier, voire
              radier les informations les concernant. Il est à noter que les
              abonné(e)s à notre liste de diffusion peuvent se désabonner à tout
              moment.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>
              Droit d’accès, droit d’opposition et droit de retrait
            </h2>

            <p>
              Nous nous engageons ainsi à t’offrir un droit d’opposition et de
              retrait quant à tes renseignements personnels. Le droit
              d’opposition s’entend comme étant la possibilité offerte aux
              internautes de refuser que leurs renseignements personnels soient
              utilisés à certaines fins mentionnées lors de la collecte (voir la
              section « Collecte des renseignements personnels »). Le droit de
              retrait s’entend comme étant la possibilité offerte aux
              internautes de demander à ce que leurs renseignements personnels
              ne figurent plus, par exemple, dans une liste de diffusion.
            </p>

            <p>
              Pour pouvoir exercer ces droits, tu dois communiquer directement
              avec notre équipe par :
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
              Pour ce faire, tu peux communiquer directement avec notre équipe
              par:
            </p>

            <ContactInformation />
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Quels sont vos droits sur vos données?</h2>

            <p>
              Si tu as un compte ou si tu as laissé des commentaires sur ce
              site, tu peux demander à recevoir un fichier contenant toutes les
              données personnelles que nous possédons à ton sujet, incluant
              celles que tu nous as fournies. Tu peux également demander la
              suppression des données personnelles te concernant, de même que la
              rectification si les renseignements sont inexacts, incomplets ou
              équivoques. Ceci ne prend pas en compte les données conservées à
              des fins administratives, légales ou pour des raisons de sécurité.
            </p>
          </Stack>

          <Stack>
            <h2 css={headingStyle}>Législation</h2>

            <p>
              Nous nous engageons à respecter les dispositions législatives
              énoncées dans la législation provinciale et fédérale canadienne.
            </p>

            <p>Nous nous engageons aussi à :</p>

            <AlphabeticalList>
              <li>
                Prendre les mesures raisonnables pour diminuer le risques qu’un
                préjudice soit causé et éviter que de nouveaux incidents de même
                nature se produire si nous avons des motifs de croire qu’un
                incident de confidentialité impliquant un renseignement
                personnel s’est produit;
              </li>
              <li>
                Aviser la Commission d’accès à l’information et toute personne
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
              <Link href='mailto:info@webaquebec.org'>info@webaquebec.org</Link>
              .
            </p>
          </Stack>
        </Stack>
      </Center>
    </Container>
  </>
);

export default PolicyPrivacyPage;
