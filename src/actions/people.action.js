import { service } from './../services/api';
import config from '../config.json';

import { ADD_PEOPLE } from './../constants';

const addCharacters = (characters = []) => ({
  type: ADD_PEOPLE,
  characters
});

export const fetchCharactersAndStore = () => dispatch => {
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