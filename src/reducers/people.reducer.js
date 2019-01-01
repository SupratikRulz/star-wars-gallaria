import { ADD_PEOPLE, UPDATE_SEARCH_KEY, peopleInitialState as initialState } from '../constants';

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return {
        ...state,
        characters: action.characters
      };
    case UPDATE_SEARCH_KEY:
      return {
        ...state,
        searchKey: action.searchKey
      };
    default:
      return state;
  }
}

export default peopleReducer;
