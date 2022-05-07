// vendors
import React, { useCallback, useContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '../utils/math/randomString';

export const ProgramFiltersContext = React.createContext();

export const useProgramFilters = () => useContext(ProgramFiltersContext);

const initialState = [];

const addFilter = (state, options = {}) => {
  const id = options.id || randomString();

  const newFilter = {
    id,
    ...options,
    values: options.values.map((value) => ({
      isChecked: false,
      ...value,
    })),
  };

  return [...state, newFilter];
};

const updateFilter = (state, options = {}) => {
  const index = state.findIndex((filter) => filter.name === options.name);

  if (index < 0)
    return console.error('No filter found with name `%s`', options.name);

  const values = options.values.map((current) => {
    const value = state[index].values.find((v) => v.value === current.value);

    return {
      ...value,
      ...current,
      isChecked: current.isChecked || value?.isChecked || false,
    };
  });

  const updatedFilter = {
    ...state[index],
    ...options,
    values,
  };

  return [...state.slice(0, index), updatedFilter, ...state.slice(index + 1)];
};

const updateFilterValue = (state, options = {}) => {
  const index = state.findIndex((filter) => filter.name === options.name);

  if (index < 0)
    return console.error('No filter found with name `%s`', options.name);

  const values = state[index].values.map((current) => {
    const choice = { ...current };
    if (current.value === options.value) {
      choice.isChecked = options.isChecked;
    }
    return choice;
  });

  const updatedFilter = { ...state[index], values };

  return [...state.slice(0, index), updatedFilter, ...state.slice(index + 1)];
};

const uncheckAllFilters = (state) => {
  const updatedFilters = state.map((filter) => {
    // Uncheck all
    const values = filter.values.map((value) => ({
      ...value,
      isChecked: false,
    }));

    return { ...filter, values };
  });

  return updatedFilters;
};

const resetFilters = () => [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return addFilter(state, action.options);
    case 'UPDATE':
      return updateFilter(state, action.options);
    case 'UPDATE_VALUE':
      return updateFilterValue(state, action.options);
    case 'UNCHECK_ALL':
      return uncheckAllFilters(state, action.options);
    case 'RESET':
      return resetFilters();
    default:
      throw new Error(
        `Invalid Program Filters Reducer Action: ${action.type} `
      );
  }
};

const initializer = () => initialState;

/**
 * Context used to keep up to date filters state across Program and Session pages
 */
export const ProgramFiltersProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(reducer, initialState, initializer);

  const applyFilter = useCallback(
    (name, value) => {
      const index = filters.findIndex((filter) => filter.name === name);
      const allUnchecked = filters[index].values.every((c) => !c.isChecked);

      const choiceFound = filters[index].values.some((choice) => {
        if (Array.isArray(value)) {
          return choice.isChecked && value.includes(choice.value);
        }
        return choice.isChecked && choice.value === value;
      });

      return allUnchecked || choiceFound;
    },
    [filters]
  );

  const getTotalAppliedFilters = useCallback(() => {
    let count = 0;

    filters.forEach((item) => {
      item.values.forEach((current) => {
        if (!current.isChecked) return;
        count += 1;
      });
    });

    return count;
  }, [filters]);

  const value = useMemo(
    () => ({
      filters,
      dispatch,
      applyFilter,
      getTotalAppliedFilters,
    }),
    [applyFilter, filters, getTotalAppliedFilters]
  );

  return (
    <ProgramFiltersContext.Provider value={value}>
      {children}
    </ProgramFiltersContext.Provider>
  );
};

ProgramFiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
