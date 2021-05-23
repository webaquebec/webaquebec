// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Container, Header, Title, Button } from './Filters.styles';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Checkbox from '../../../components/Checkbox';

const Filters = ({ rooms, themes, types }) => {
  const filters = [
    {
      id: 0,
      name: 'Salle',
      choices: rooms,
    },
    {
      id: 1,
      name: 'Thématique',
      choices: themes,
    },
    {
      id: 2,
      name: 'Type',
      choices: types,
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Filtres</Title>
        <Button type='button'>Réinitialiser</Button>
      </Header>
      <Accordion grayStyle multiple collapsible space='0'>
        {filters.map((filter) => (
          <AccordionItem
            key={`filter-${filter.id}`}
            titleAs='h3'
            title={filter.name}
          >
            {filter.choices.map((item) => (
              <Checkbox key={item}>{item}</Checkbox>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

Filters.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  themes: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Filters;
