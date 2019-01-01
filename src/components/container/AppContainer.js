import { connect } from 'react-redux';
import App from './../App';
import { fetchFilmsAndDispatch } from './../../actions/films.action';
import { fetchCharactersAndDispatch } from './../../actions/people.action';

const mapStateToProps = state => ({
  films: state.films.films
});

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilmsAndDispatch()),
  fetchCharacters: () => dispatch(fetchCharactersAndDispatch())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);