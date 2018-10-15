import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_FAILED,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS
} from './action_types';

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: {}
};

export const fetchRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
