// vendors
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import { TermsTitle } from './TermsAndConditions.styles';
import { linkStyle, unorderedListStyle } from '../../../styles/global';

const TermsAndConditions = () => (
  <Center maxWidth='854px' gutters='var(--container-gutter)'>
    <TermsTitle>TERMES ET CONDITIONS</TermsTitle>

    <ul css={unorderedListStyle}>
      <li>
        Tous les billets vendus sont nominatifs et ne pourront pas être échangés
        entre participant·es une fois l’événement débuté.
      </li>
      <li>
        Les billets sont des ventes finales (aucun remboursement), mais peuvent
        être transférés à une autre personne une fois la transaction complétée.
      </li>
      <li>
        En participant à l’événement, tu t’engages à respecter le{' '}
        <GatsbyLink to='/code-de-conduite' css={linkStyle}>
          code de conduite
        </GatsbyLink>{' '}
        du WAQ.
      </li>
      <li>
        À moins qu’il en soit autrement, tous les prix indiqués sont en devise
        canadienne.
      </li>
      <li>
        Il est de ta responsabilité d’attribuer chacun des billets réservés à
        un·e participant·e unique. Si tes billets ne sont pas attribués à un·e
        participant·e unique, il sera impossible d’accéder à la plateforme
        événementielle pour écouter les rediffusions.
      </li>
      <li>
        S’il y a lieu, le ou la participant·e s’engage à respecter les mesures
        sanitaires en place au moment de l’événement.
      </li>
      <li>
        En entrant sur les lieux du Terminal – Port de Québec, les
        participant·es acceptent d’être photographié·e, filmé·e et enregistré·e.
        Le matériel produit pourra ensuite être utilisé par le WAQ à des fins
        promotionnelles.
      </li>
    </ul>

    <p>
      Pour toute question concernant les conditions de vente, tu peux
      communiquer avec nous à l’adresse :{' '}
      <a href='mailto:info@webaquebec.org' css={linkStyle}>
        info@webaquebec.org
      </a>
      .
    </p>
  </Center>
);

export default TermsAndConditions;
