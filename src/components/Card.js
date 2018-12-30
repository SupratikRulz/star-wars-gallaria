import React, { Component } from 'react';

import './css/Card.css';

export default class Card extends Component {
  render() {
    let {
      title,
      content,
      cardClasses = '',
      cardTitleClasses = '',
      cardContentClasses = ''
    } = this.props;
    return (
      <div className={`card ${cardClasses}`}>
        <div className={`card-title ${cardTitleClasses}`}>{title}</div>
        <div className={`card-content ${cardContentClasses}`}>{content}</div>
      </div>
    )
  }
}
