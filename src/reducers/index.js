import { combineReducers } from 'redux';
import filmsReducer from './films.reducer';
import peopleReducer from './people.reducer';


const rootReducer = combineReducers({
  filmsReducer,
  peopleReducer
});

export { rootReducer };
