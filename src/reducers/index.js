import { combineReducers } from 'redux';
import films from './films.reducer';
import people from './people.reducer';


const rootReducer = combineReducers({
  films,
  people
});

export { rootReducer };
