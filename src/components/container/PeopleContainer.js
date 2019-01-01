import { connect } from 'react-redux';
import People from './../People';
import { setSearchKey } from './../../actions/people.action';

const mapStateToProps = state => ({
  characters: state.peopleReducer.characters,
  searchKey: state.peopleReducer.searchKey
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchKey) => dispatch(setSearchKey(searchKey))
});


export default connect(mapStateToProps, mapDispatchToProps)(People);