// vendors
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// components
import { useTranslation } from 'react-i18next';
import Center from '../../../components/LayoutSections/Center';

// styles
import { TermsTitle } from './TermsAndConditions.styles';
import { linkStyle, unorderedListStyle } from '../../../styles/global';

const TermsAndConditions = () => {
  const { i18n } = useTranslation();

  return (
    <Center maxWidth='854px' gutters='var(--container-gutter)'>
      {i18n.language === 'fr-CA' ? (
        <>
          <TermsTitle>TERMES ET CONDITIONS</TermsTitle>

          <ul css={unorderedListStyle}>
            <li>
              Tous les prix affichés sont avant taxes et en devise canadienne.
            </li>
            <li>Les billets sont des ventes finales (aucun remboursement).</li>
            <li>
              Les tarifs en prévente (accès complet à 695 $ et accès complet -
              entreprise à 905 $) sont valides jusqu’au 20 mars 2024
              inclusivement. Ensuite, les tarifs passeront respectivement à 995
              $ et 1205 $ jusqu’à l’événement.
            </li>
            <li>
              Il est possible de transférer un billet à une autre personne
              jusqu’au 12 mai 2024. Après cette date, il faudra communiquer avec
              quelqu’un de notre équipe.
            </li>
            <li>
              Les tarifs journaliers sont valides à partir du 21 mars 2024,
              moment où la programmation sera rendue disponible.
            </li>
            <li>
              Si le billet NOMINATIF Accès complet ou Accès journalier a été
              acheté, il est impossible de le partager entre participant·es.
            </li>
            <li>
              Si un billet ENTREPRISE est acheté, il est possible qu’il soit
              partagé entre participant·es d’une même entreprise. Une seule
              personne à la fois peut être présente dans le Terminal de
              croisière - Port de Québec.
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
              Il est de ta responsabilité d’attribuer chacun des billets
              réservés à un·e participant·e unique.
            </li>
            <li>
              En entrant sur les lieux du Terminal – Port de Québec, tu acceptes
              d’être photographié·e, filmé·e et enregistré·e. Le matériel
              produit pourra ensuite être utilisé par le WAQ à des fins
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
        </>
      ) : (
        <>
          <TermsTitle>TERMS AND CONDITIONS</TermsTitle>

          <ul css={unorderedListStyle}>
            <li>All prices are before taxes and in Canadian currency.</li>
            <li>Tickets are final sales (no refunds).</li>
            <li>
              Pre-sale rates (Full access at $695 and Full access - Corporate at
              $905) are valid up to and including March 20, 2024. Thereafter,
              rates will increase to $995 and $1205 respectively until the
              event.
            </li>
            <li>
              It is possible to transfer a ticket to another person up to May
              12, 2024. After that date, you will need to contact one of our
              team.
            </li>
            <li>
              Daily rates are valid from March 21, 2024, when the program will
              be launched.
            </li>
            <li>
              If a NOMINATE Full Access or Daily Access ticket has been
              purchased, it cannot be shared between attendees.
            </li>
            <li>
              If a CORPOTATE ticket has been purchased, it may be shared between
              attendees from the same company. Only one person at a time may be
              present in the Cruise Terminal - Port of Quebec.
            </li>
            <li>
              By participating in the event, you agree to abide by the WAQ&nbsp;
              <GatsbyLink to='/code-de-conduite' css={linkStyle}>
                code of conduct
              </GatsbyLink>
              &nbsp;to the letter.
            </li>
            <li>
              It is your responsibility to assign each reserved ticket to a
              unique attendee.
            </li>
            <li>
              By entering the Cruise Terminal - Port of Québec, you agree to be
              photographed, filmed and recorded. The material produced may be
              used by WAQ for promotional purposes.
            </li>
          </ul>

          <p>
            If you have any questions about the conditions of sale, please
            contact us at{' '}
            <a href='mailto:info@webaquebec.org' css={linkStyle}>
              info@webaquebec.org
            </a>
            .
          </p>
        </>
      )}
    </Center>
  );
};

export default TermsAndConditions;
