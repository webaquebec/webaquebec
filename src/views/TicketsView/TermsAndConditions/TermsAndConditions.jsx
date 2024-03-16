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
      <li>Tous les prix affichés sont avant taxes et en devise canadienne.</li>
      <li>Les billets sont des ventes finales (aucun remboursement).</li>
      <li>
        Les tarifs en prévente (accès complet à 695 $ et accès complet -
        entreprise à 905 $) sont valides jusqu’au 20 mars 2024 inclusivement.
        Ensuite, les tarifs passeront respectivement à 995 $ et 1205 $ jusqu’à
        l’événement.
      </li>
      <li>
        Il est possible de transférer un billet à une autre personne jusqu’au 12
        mai 2024. Après cette date, il faudra communiquer avec quelqu’un de
        notre équipe.
      </li>
      <li>
        Les tarifs journaliers sont valides à partir du 21 mars 2024, moment où
        la programmation sera rendue disponible.
      </li>
      <li>
        Si le billet NOMINATIF Accès complet ou Accès journalier a été acheté,
        il est impossible de le partager entre participant·es.
      </li>
      <li>
        Si un billet ENTREPRISE est acheté, il est possible qu’il soit partagé
        entre participant·es d’une même entreprise. Une seule personne à la fois
        peut être présente dans le Terminal de croisière - Port de Québec.
      </li>
      <li>
        En participant à l’événement, tu t’engages à respecter à la lettre
        le&nbsp;
        <GatsbyLink to='/code-de-conduite' css={linkStyle}>
          code de conduite
        </GatsbyLink>
        &nbsp;du WAQ.
      </li>
      <li>
        Il est de ta responsabilité d’attribuer chacun des billets réservés à
        un·e participant·e unique.
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
