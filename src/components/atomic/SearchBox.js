import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/SearchBox.css';

import { debounce } from '../../utils';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    // Create reference to access the input box(search box)
    this.searchText = React.createRef();
  }

  componentDidMount = () => {
    // Define the focus and blur handler when component is mounted
    this.onFocusHandler = (e) => e.target.placeholder = "";
    this.onBlurHandler = (e) => e.target.placeholder = this.props.placeholder;
  }

  render() {
    let {
      searchTitle,
      placeholder,
      searchBoxClassName,
      searchTitleClassName,
      inputClassName
    } = this.props;

    return (
      <div className={`search-box ${searchBoxClassName}`}>
        <p className={`search-title ${searchTitleClassName}`}>{searchTitle}</p>
        {/* 
            Debounce is used here to make search request lighter.
            Here the handler gets called only once in 300ms on text change.
          */
        }
        <input
          type='text'
          placeholder={placeholder}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onChange={debounce(this.onChangeHandler, 300)}
          ref={this.searchText}
          className={inputClassName}
        />
      </div>
    )
  }

  /**
   * Function that gets called on every change occurring inside the input box.
   * If updateSearchKey method is passed as props to this component,
   * then it invokes it with the current value(search text) of the input box.
   * 
   * @memberOf SearchBox
   */
  onChangeHandler = () => {
    this.props.updateSearchKey && this.props.updateSearchKey(this.searchText.current.value);
  }
}

SearchBox.defaultProps = {
  searchTitle: '',
  placeholder: '',
  searchBoxClassName: '',
  searchTitleClassName: '',
  inputClassName: ''
}

SearchBox.propTypes = {
  searchTitle: PropTypes.string,
  placeholder: PropTypes.string,
  searchBoxClassName: PropTypes.string,
  searchTitleClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  updateSearchKey: PropTypes.func
}
