import { connect } from 'react-redux';
import People from './../People';
import { setSearchKey } from './../../actions/people.action';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchKey) => dispatch(setSearchKey(searchKey))
});


export default connect(mapStateToProps, mapDispatchToProps)(People);