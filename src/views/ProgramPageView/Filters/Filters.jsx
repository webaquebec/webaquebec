// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { Container, Header, Title, Button } from './Filters.styles';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Checkbox from '../../../components/Checkbox';

const checkboxStyle = css`
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const Filters = ({ filters, onChange, onReset }) => (
  <Container>
    <Header>
      <Title>Filtres</Title>
      <Button type='button' onClick={onReset}>
        Réinitialiser
      </Button>
    </Header>

    <Accordion multiple collapsible divided space='0'>
      {Object.keys(filters)
        .filter((name) => filters[name].values.length > 0)
        .map((name) => (
          <AccordionItem
            key={`filter-${filters[name].title}`}
            title={filters[name].title}
            color={colors.gris80}
            big
          >
            {filters[name].values.map((item) => (
              <Checkbox
                key={item.value}
                name={name}
                value={item.value}
                checked={item.isChecked}
                onChange={onChange}
                css={checkboxStyle}
              >
                {item.name}
              </Checkbox>
            ))}
          </AccordionItem>
        ))}
    </Accordion>
  </Container>
);

Filters.propTypes = {
  filters: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
};

Filters.defaultProps = {
  onChange: () => {},
  onReset: () => {},
};

export default Filters;
