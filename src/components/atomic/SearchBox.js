import React, { Component } from 'react';

import './../css/SearchBox.css';

import { debounce } from '../../utils';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.searchText = React.createRef();
  }

  componentDidMount = () => {
    this.onFocusHandler = (e) => e.target.placeholder = "";
    this.onBlurHandler = (e) => e.target.placeholder = this.props.placeholder;
  }

  render() {
    let {
      searchTitle,
      searchBoxClassName,
      searchTitleClassName,
      inputClassName
    } = this.props;
    return (
      <div className={`search-box ${searchBoxClassName}`}>
        <p className={`search-title ${searchTitleClassName}`}>{searchTitle}</p>
        <input
          type='text'
          placeholder={this.props.placeholder}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onChange={debounce(this.onChangeHandler, 300)}
          ref={this.searchText}
          className={inputClassName}
        />
      </div>
    )
  }

  onChangeHandler = () => {
    this.props.updateSearchKey(this.searchText.current.value);
  }
}
