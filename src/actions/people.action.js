import { service } from './../services/api';
import config from '../config.json';

import { ADD_PEOPLE, UPDATE_SEARCH_KEY } from './../constants';

const addCharacters = (characters = []) => ({
  type: ADD_PEOPLE,
  characters
});

export const fetchCharactersAndDispatch = () => dispatch => {
  service
    .get(config.CHARACTER_URL)
    .then(async _data => {
      let infoObj = _data;
      if (infoObj) {
        let characters = [...infoObj.results];
        while (infoObj.next) {
          infoObj = await service.get(infoObj.next);
          infoObj && (characters = [...characters, ...infoObj.results]);
          dispatch(addCharacters(characters))
        }
      }
    });
}

export const setSearchKey = searchKey => ({
  type: UPDATE_SEARCH_KEY,
  searchKey: searchKey.toLowerCase()
});
