// vendors
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '../utils/math/randomString';

export const ProgramFiltersContext = React.createContext();

export const useProgramFiltersContext = () => useContext(ProgramFiltersContext);

/**
 * Context used to keep up to date filters state across Program and session pages
 */
export const ProgramFiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);

  const addFilter = (options = {}) => {
    const id = options.id || randomString();

    setFilters((state) => {
      const newFilter = {
        id,
        ...options,
        values: options.values.map((value) => ({
          isChecked: false,
          ...value,
        })),
      };

      return [...state, newFilter];
    });

    return id;
  };

  const updateFilter = (name, options = {}) => {
    setFilters((state) => {
      const index = state.findIndex((filter) => filter.name === name);

      if (index < 0)
        return console.error('No filter found with name `%s`', name);

      const values = options.values.map((current) => {
        const value = state[index].values.find(
          (v) => v.value === current.value
        );

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

      return [
        ...state.slice(0, index),
        updatedFilter,
        ...state.slice(index + 1),
      ];
    });
  };

  const updateFilterValue = (name, options = {}) => {
    setFilters((state) => {
      const index = state.findIndex((filter) => filter.name === name);

      if (index < 0)
        return console.error('No filter found with name `%s`', name);

      const values = state[index].values.map((current) => {
        const choice = { ...current };
        if (current.value === options.value) {
          choice.isChecked = options.isChecked;
        }
        return choice;
      });

      const updatedFilter = { ...state[index], values };

      return [
        ...state.slice(0, index),
        updatedFilter,
        ...state.slice(index + 1),
      ];
    });
  };

  const uncheckAllFilters = () => {
    setFilters((state) => {
      const updatedFilters = state.map((filter) => {
        // Uncheck all
        const values = filter.values.map((value) => ({
          ...value,
          isChecked: false,
        }));

        return { ...filter, values };
      });

      return updatedFilters;
    });
  };

  const applyFilter = (name, value) => {
    const index = filters.findIndex((filter) => filter.name === name);
    const allUnchecked = filters[index].values.every((c) => !c.isChecked);

    const choiceFound = filters[index].values.some((choice) => {
      if (Array.isArray(value)) {
        return choice.isChecked && value.includes(choice.value);
      }
      return choice.isChecked && choice.value === value;
    });

    return allUnchecked || choiceFound;
  };

  const getFilters = () => {
    return filters;
  };

  const removeFilters = () => {
    setFilters([]);
  };

  return (
    <ProgramFiltersContext.Provider
      value={{
        addFilter,
        updateFilter,
        updateFilterValue,
        uncheckAllFilters,
        applyFilter,
        getFilters,
        removeFilters,
      }}
    >
      {children}
    </ProgramFiltersContext.Provider>
  );
};

ProgramFiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
