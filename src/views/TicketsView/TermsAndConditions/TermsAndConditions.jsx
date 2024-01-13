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
      <li>Les billets sont des ventes finales (aucun remboursement).</li>
      <li>
        Il est possible de transférer un billet à une autre personne jusqu’au 12
        mai 2024. Après cette date, il faudra communiquer avec quelqu’un de
        notre équipe.
      </li>
      <li>
        Si le billet NOMINATIF Accès complet ou Accès journalier a été acheté,
        il est impossible de le partager entre participant·es.
      </li>
      <li>
        Si un billet ENTREPRISE est acheté, il est possible qu’il soit partagé
        entre participant·es d’une même entreprise.
      </li>
      <li>
        En participant à l’événement, tu t’engages à respecter à la lettre le{' '}
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
        un·e participant·e unique.
      </li>
      <li>
        S’il y a lieu, le ou la participant·e s’engage à respecter les mesures
        sanitaires en place au moment de l’événement.
      </li>
      <li>
        En entrant sur les lieux du Terminal – Port de Québec, tu acceptes
        d’être photographié·e, filmé·e et enregistré·e. Le matériel produit
        pourra ensuite être utilisé par le WAQ à des fins promotionnelles.
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
