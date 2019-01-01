import { ADD_FILMS, filmInitialState as initialState } from '../constants';

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILMS:
      return {
        ...state,
        films: action.films
      }
    default:
      return state;
  }
}

export default filmsReducer;
