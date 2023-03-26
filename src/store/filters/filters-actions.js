export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const REMOVE_ALL_FILTERS = 'REMOVE_ALL_FILTERS'

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
})

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
})
export const removeAllFilters = () => ({
  type: REMOVE_ALL_FILTERS,
})
