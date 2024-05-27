/* eslint-disable react/jsx-no-useless-fragment */
// vendors
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';
import { hideVisually } from 'polished';

// components
import Accordion from '../../../components/Accordion';
import AccordionItem from '../../../components/Accordion/AccordionItem';
import Checkbox from '../../../components/Checkbox';
import Paper from '../../../components/Paper';
import Popover from '../../../components/Popover';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';

// contexts
import { useProgramFilters } from '../../../contexts/ProgramFiltersContext';
import { useModal } from '../../../contexts/ModalContext';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';
import randomString from '../../../utils/math/randomString';

// styles
import colors from '../../../styles/colors';
import elevation from '../../../styles/elevation';
import {
  selfBreakpoints,
  CTAWrapper,
  CTAButton,
  Header,
  ResetButton,
  Title,
  Wrapper,
  Content,
  checkboxStyle,
} from './Filters.styles';

const customId = randomString();

const Filters = ({ onChange, onReset }) => {
  const { filters, getTotalAppliedFilters } = useProgramFilters();
  const totalAppliedFilters = getTotalAppliedFilters();
  const previousAppliedFilters = useRef(totalAppliedFilters);

  const { t } = useTranslation();

  const hasMounted = useHasMounted();
  // 832px
  const mobile = useMedia(lessThanCondition(selfBreakpoints[0]));

  const { isOpen, close } = useModal();

  const sortByNameAsc = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const renderContent = (
    <>
      <Header>
        <Title id={customId}>
          {t('filters.title')}{' '}
          {totalAppliedFilters > 0 && <span>{`(${totalAppliedFilters})`}</span>}
        </Title>
        <ResetButton type='button' onClick={onReset}>
          {t('button.reset')}
        </ResetButton>
      </Header>

      <Wrapper>
        {filters.filter((f) => f.values.length > 0).length > 1 ? (
          <Accordion multiple collapsible divided space='0'>
            {filters.map((filter) => (
              <AccordionItem
                id={filter.id}
                key={`filter-${filter.title}`}
                title={filter.title}
                titleAs='h3'
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
        ) : (
          <>
            <h3 css={hideVisually}>{filters[0]?.title}</h3>
            <Content>
              {filters[0]?.values.sort(sortByNameAsc).map((item) => (
                <Checkbox
                  key={item.value}
                  name={filters[0].name}
                  value={item.value}
                  checked={item.isChecked}
                  onChange={onChange}
                  css={checkboxStyle}
                >
                  {item.name}
                </Checkbox>
              ))}
            </Content>
          </>
        )}
      </Wrapper>
    </>
  );

  if (!hasMounted) {
    return null;
  }

  const handleClick = () => {
    close();

    if (
      typeof window === 'undefined' ||
      previousAppliedFilters.current === totalAppliedFilters
    ) {
      return;
    }
    previousAppliedFilters.current = totalAppliedFilters;

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
          bgColor={colors.white}
          color={colors.gris80}
          fullScreen
          noBorder
          noClose
        >
          {renderContent}

          <CTAWrapper>
            <CTAButton onClick={handleClick}>
              {t('button.seeResults')}
            </CTAButton>
          </CTAWrapper>
        </Modal>
      ) : (
        <Popover
          renderTarget={
            <Button small>
              <span>{t('filters.title')}</span>

              {totalAppliedFilters > 0 && (
                <span>&nbsp;&nbsp;{`(${totalAppliedFilters})`}</span>
              )}
            </Button>
          }
        >
          <Paper
            lightColor={colors.white}
            darkColor={colors.blueberry}
            elevation={elevation.large}
            outlined
            rounded
          >
            {renderContent}
          </Paper>
        </Popover>
      )}
    </>
  );
};

Filters.propTypes = {
  onChange: PropTypes.func,
  onReset: PropTypes.func,
};

Filters.defaultProps = {
  onChange: () => {},
  onReset: () => {},
};

export default Filters;
