import { connect } from 'react-redux';
import SearchResultHolder from './../SearchResultHolder';

const mapStateToProps = state => ({
  characters: state.people.characters,
  searchKey: state.people.searchKey
});

export default connect(mapStateToProps)(SearchResultHolder);