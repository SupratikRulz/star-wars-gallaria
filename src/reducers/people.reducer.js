import { ADD_PEOPLE, initialState } from '../constants';

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PEOPLE:
      return {
        ...state,
        characters: action.characters
      }
    default:
      return state;
  }
}

export default peopleReducer;
