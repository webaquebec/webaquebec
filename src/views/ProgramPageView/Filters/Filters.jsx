// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Checkbox from '../../../components/Checkbox';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// styles
import colors from '../../../styles/colors';
import { Container, Header, Title, Button } from './Filters.styles';

const checkboxStyle = css`
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const Filters = ({ filters, onChange, onReset }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const sortByNameAsc = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  return (
    <Container>
      <Header>
        <Title>Filtres</Title>
        <Button type='button' onClick={onReset}>
          Réinitialiser
        </Button>
      </Header>

      <Accordion multiple collapsible divided space='0'>
        {filters
          .filter((f) => f.values.length > 0)
          .map((filter) => (
            <AccordionItem
              id={filter.id}
              key={`filter-${filter.title}`}
              title={filter.title}
              color={colors.gris80}
              expanded={filter.values.some((v) => v.isChecked)}
              big
            >
              {filter.values.sort(sortByNameAsc).map((item) => (
                <Checkbox
                  key={item.value}
                  name={filter.name}
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
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
};

Filters.defaultProps = {
  onChange: () => {},
  onReset: () => {},
};

export default Filters;
