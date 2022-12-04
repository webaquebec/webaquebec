// vendors
import React from 'react';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Center from '../../../components/LayoutSections/Center';
import Stack from '../../../components/LayoutSections/Stack';

// styles
import waqademyItem from './Questions.styles';

const questions = [
  {
    id: 1,
    question: 'La WAQadémie, c’est quoi?',
    answer: `<p>Une journée type à la WAQadémie débute par un déjeuner-conférence ouvert à tous, à un coût modique. Quand certains retourneront au travail, d’autres poursuivront avec une formation d’une durée de 3h ou 6h en plus petit groupe, avec un·e expert·e sur une des thématiques phares du WAQ (communication, marketing, design et développement).</p>
               <p>Une fois par mois, la communauté numérique de Québec pourra se réunir au 688 boul. Charest E., à Québec pour échanger, réseauter et apprendre, tout cela sans avoir à attendre le WAQ du mois de mai. Une excellente occasion pour recréer l’esprit festif du WAQ, sans prétention!</p>`,
  },
  {
    id: 2,
    question: 'Prochaine formation : TikTok',
    answer: `<p>Le 16 février prochain, Tony Aubé présentera la première formation de la WAQadémie et portera sur Tiktok et tous ses secrets.</p>
               <p>Durée de la formation : 3h</p>
               <p>Dépêche-toi, les billets sont disponibles en quantité limitée!</p>`,
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
