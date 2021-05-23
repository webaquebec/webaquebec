// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Container, Header, Title, Button } from './Filters.styles';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';

const Filters = ({ rooms, themes, types }) => {
  return (
    <Container>
      <Header>
        <Title>Filtres</Title>
        <Button type='button'>Réinitialiser</Button>
      </Header>
      <Accordion grayStyle multiple collapsible space='0'>
        <AccordionItem titleAs='h3' title='Salle'>
          {rooms.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </AccordionItem>
        <AccordionItem titleAs='h3' title='Thématique'>
          {themes.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </AccordionItem>
        <AccordionItem titleAs='h3' title='Type'>
          {types.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </AccordionItem>
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
