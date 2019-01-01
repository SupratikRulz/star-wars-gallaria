import { combineReducers } from 'redux';
import filmsReducer from './films.reducer';


const rootReducer = combineReducers({
  filmsReducer
});

export { rootReducer };
