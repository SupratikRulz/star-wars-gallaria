import { service } from './../services/api';
import config from '../config.json';

import { ADD_FILMS } from './../constants';

const addFilms = (films = []) => ({
  type: ADD_FILMS,
  films
});

export const fetchFilmsAndStore = () => dispatch => {
  service
    .get(config.FILM_URL)
    .then(_data => dispatch(addFilms(_data.results)));
}