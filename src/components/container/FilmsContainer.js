import { connect } from 'react-redux';
import Films from './../Films';
import { fetchFilmsAndStore } from './../../actions/films.action';

const mapStateToProps = state => ({
  films: state.filmsReducer.films
});

const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilmsAndStore())
});


export default connect(mapStateToProps, mapDispatchToProps)(Films);