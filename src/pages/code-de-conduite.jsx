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
  h1AltStyle,
  h2Style,
  introStyle,
  orderedListStyle,
  unorderedListStyle,
} from '../styles/global';
import colors from '../styles/colors';

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

  a {
    position: relative;

    color: inherit;
    text-decoration: none;

    border-bottom: 2px solid ${colors.bleu};
  }
`;

const headingStyle = css`
  ${h2Style}

  display: inline-block;
`;

const marginBetweenVersions = css`
  margin-top: 1rem;
  margin-bottom: 6rem;
  padding-top: 5rem;
`;

const OrderedList = styled.ol`
  ${orderedListStyle};

  > li::before {
    ${h2Style}
  }

  > li > h2 {
    ${breakpointsRange(
      [{ prop: 'marginBottom', sizes: [20, 30], bases: [16, 20] }],
      breakpoints.spacings
    )};
  }
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

const CodeConductPage = () => (
  <>
    <SEO title='Code de conduite' description='' />

    <Center
      maxWidth='625px'
      gutters='var(--container-gutter)'
      withText
      intrinsic
    >
      <h1 css={h1AltStyle}>Code de conduite</h1>

      <a css={introStyle} href='#english'>
        English version
      </a>
    </Center>

    <Container forwardedAs='div' faded padded>
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
                <a href='mailto:sos@webaquebec.org'>sos@webaquebec.org</a>.
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
                <a
                  href='https://confcodeofconduct.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  confcodeofconduct.com
                </a>
              </p>
            </Stack>
          </li>
        </OrderedList>

        <Center
          maxWidth='625px'
          gutters='var(--container-gutter)'
          withText
          intrinsic
          css={marginBetweenVersions}
        >
          <h2 id='english' css={h1AltStyle}>
            Code of conduct
          </h2>
        </Center>

        <OrderedList>
          <li>
            <h2 css={headingStyle}>EXPECTED BEHAVIOR</h2>

            <Stack space='var(--space)' css={stackStyle}>
              <p>
                We want all participants to have a pleasant and rewarding
                experience. With this in mind, we are expecting all participants
                to show respect and courtesy to other participants throughout
                the event (including during Happy Hour).
              </p>
              <p>
                By participating in the Web à Québec, you agree to behave
                impeccably during the event as well as on social media.
                Therefore, you agree to be objective, kind and professional.
              </p>

              <ul css={unorderedListStyle}>
                <li>
                  Be attentive to your environment as well as the other
                  participants.
                </li>
                <li>
                  Respect the location and the equipment at your disposal.
                </li>
                <li>Respect everyone’s opinions.</li>
                <li>
                  Maintain the confidentiality of information obtained during
                  your participation at the WAQ.
                </li>
              </ul>
            </Stack>
          </li>
          <li>
            <h2 css={headingStyle}>UNACCEPTABLE BEHAVIOR</h2>

            <Stack space='var(--space)' css={stackStyle}>
              <p>On the other hand, you must not:</p>

              <ul css={unorderedListStyle}>
                <li>smoke outside the provided areas,</li>
                <li>possess and consume illegal products,</li>
                <li>
                  damage the material belonging to the organization or the site
                  of the event,
                </li>
                <li>adopt a behavior that could disrupt the public order,</li>
                <li>intimidate,</li>
                <li>
                  make offensive comments on social media concerning
                  participants, the event or Quebec city’s Web community.
                </li>
              </ul>
              <p>
                The Web in Quebec City is an event dedicated to the sharing of
                knowledge. No misplaced behavior will be accepted. No matter
                your gender, your sexual orientation, your disability, your
                physical appearance, your nationality or your religion, we will
                not tolerate any discrimination or harassment. By harassment, we
                mean all conduct :
              </p>
              <p>
                Provoking behavior, words, actions that are hostile or unwanted,
                conduct based on of the discriminatory grounds prohibited by the
                Quebec Charter of Human Rights and Freedoms (nationality, color,
                sex, pregnancy, sexual orientation, marital status, age except
                as provided by law, religion, political beliefs, language,
                social condition, disability or use of a means to overcome this
                handicap); and which are of a nature to impair the dignity, the
                physical or psychological integrity of the person or to
                compromise his activity.
              </p>
              <p>
                Sexually explicit expressions and images are not also not
                appropriate at all times during the event. This includes
                conferences, workshops, parties, as well as social networks.
                Participants who are asked to stop discriminatory behavior or
                harassment must stop immediately under penalty of punishment, at
                the discretion of the organizers.
              </p>
            </Stack>
          </li>
          <li>
            <h2 css={headingStyle}>IMMEDIATE ASSISTANCE</h2>
            <Stack space='var(--space)' css={stackStyle}>
              <p>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                conference staff immediately at{' '}
                <a href='mailto:sos@webaquebec.org'>sos@webaquebec.org</a>
              </p>
              <p>
                Conference staff will be happy to help participants contact
                security or local law enforcement, provide escorts, or otherwise
                assist those experiencing harassment to feel safe for the
                duration of the conference. It is important to us that all
                participants taking part in the event feel secure at all time.
              </p>
              <p>The Web à Québec team</p>
              <p>
                Adapted from:{' '}
                <a
                  href='https://confcodeofconduct.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  confcodeofconduct.com
                </a>
              </p>
            </Stack>
          </li>
        </OrderedList>
      </Center>
    </Container>
  </>
);

export default CodeConductPage;
