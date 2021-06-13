// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { useMedia } from 'react-use';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Checkbox from '../../../components/Checkbox';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';
import Modal from '../../../components/Modal';
import { useModal } from '../../../contexts/ModalContext';
import randomString from '../../../utils/math/randomString';

// styles
import colors from '../../../styles/colors';
import {
  selfBreakpoints,
  Container,
  CTAWrapper,
  CTAButton,
  Header,
  ResetButton,
  Title,
  Wrapper,
} from './Filters.styles';

const checkboxStyle = css`
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const customId = randomString();

const Filters = ({ filters, onChange, onReset }) => {
  const hasMounted = useHasMounted();
  // 832px
  const mobile = useMedia(lessThanCondition(selfBreakpoints[0]));

  const { isOpen, close } = useModal();

  if (!hasMounted) {
    return null;
  }

  const sortByNameAsc = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const FiltersContent = (
    <>
      <Header>
        <Title id={customId}>Filtres</Title>
        <ResetButton type='button' onClick={onReset}>
          Réinitialiser
        </ResetButton>
      </Header>

      <Wrapper>
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
      </Wrapper>
    </>
  );

  const handleClick = () => {
    close();

    if (typeof window === 'undefined') return;

    const anchor = document.querySelector(`#program-section`);

    if (anchor === null) return;

    const top = anchor.getBoundingClientRect().top + window.scrollY - 167;

    window.scrollTo({ top, behavior: `smooth` });
  };

  return (
    <>
      {mobile ? (
        <Modal
          isOpen={isOpen}
          aria={{ labelledby: customId }}
          closeTimeoutMS={200}
          color={colors.gris80}
          fullScreen
          noBorder
          noClose
        >
          {FiltersContent}

          <CTAWrapper>
            <CTAButton onClick={handleClick}>Voir les résultats</CTAButton>
          </CTAWrapper>
        </Modal>
      ) : (
        <Container>{FiltersContent}</Container>
      )}
    </>
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
