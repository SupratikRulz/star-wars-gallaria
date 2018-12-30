import React, { Component } from 'react';

import './css/SearchBox.css';

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.searchText = React.createRef();
  }

  render() {
    return (
      <div className='search-box'>
        <p className='search-title'>Hey fellas! You can search your favorite characters here!</p>
        <input
          type='text'
          placeholder='Search here...'
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Search here..."}
          onChange={debounce(this.onChangeHandler, 300)}
          ref={this.searchText}
        />
      </div>
    )
  }

  onChangeHandler = () => {
    console.log('debounced')
    this.props.updateSearchKey(this.searchText.current.value);
  }
}
