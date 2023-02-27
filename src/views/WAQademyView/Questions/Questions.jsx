// vendors
import React from 'react';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Center from '../../../components/LayoutSections/Center';
import Stack from '../../../components/LayoutSections/Stack';

// images
import logoNovatize from '../../../images/logoPartners/logo-novatize.png';

// styles
import waqademyItem from './Questions.styles';

const questions = [
  {
    id: 1,
    question: 'La WAQadémie, c’est quoi?',
    answer: `<p>Une journée type à la WAQadémie débute par un déjeuner-conférence ouvert à tous, à un coût modique. Quand certains retourneront au travail, d’autres poursuivront avec une formation d’une durée de 3h ou 6h en plus petit groupe, avec un·e expert·e sur une des thématiques phares du WAQ (communication, marketing, design et développement).</p>
              <p>Plusieurs fois dans l’année, la communauté numérique de Québec pourra se réunir au <a href='https://goo.gl/maps/pxooaARXBvNzbpJT6' ref='noopener noreferrer' target='_blank'>688&nbsp;boul.&nbsp;Charest&nbsp;E.</a>, à Québec pour échanger, réseauter et apprendre, tout cela sans avoir à attendre le WAQ au printemps. Une excellente occasion pour recréer l’esprit festif du WAQ, sans prétention! </p>`,
  },
  {
    id: 2,
    question: 'Prochaine formation : Get started with GA4 — 20 mars 2023',
    answer: `<p>Tu travailles dans l'analyse de données et le marketing? Tu as tout intérêt à ne pas manquer la prochaine formation de la WAQadémie, parce que dès le 1er juillet 2023, les nouvelles données récoltées seront uniquement traitées avec GA4. Le 20 mars prochain en avant-midi, commence la saison printanière avec Tarek Riman qui viendra démystifier la nouvelle génération de Google Analytics : GA4.</p>
               <p>Notre partenaire présentateur de cette formation de la WAQadémie, Novatize, nous accueillera dans ses tout nouveaux bureaux!</p>
               <p>Durée de la formation : <strong>3h</strong></p>
               <p>Attention! La formation est donnée en anglais<br>
                Dépêche-toi, les billets sont disponibles en quantité limitée!</p>
               <p>Présenté par</p>
               <a href='https://novatize.com/fr/' target='_blank' rel='noopener noreferrer'><img class='partner-logo' src='${logoNovatize}' alt='Novatize' /></a>`,
  },
  {
    id: 3,
    question: 'Formation passée : TikTok — 16 février 2023',
    answer: `<p>Le 16 février dernier, Tony Aubé a présenté la première formation de la WAQadémie qui portait sur Tiktok et tous ses secrets.</p>`,
  },
];

const Questions = () => (
  <Center maxWidth='850px' gutters='var(--container-gutter)'>
    <Accordion multiple collapsible>
      {questions.map((item) => (
        <AccordionItem
          key={`waqademy-${item.id}`}
          titleAs='h2'
          title={item.question}
          bordered
          rounded
          expanded={item.id === 2}
        >
          <Stack
            css={waqademyItem}
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </AccordionItem>
      ))}
    </Accordion>
  </Center>
);

export default Questions;
