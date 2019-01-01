import React from 'react';
import PropTypes from 'prop-types';
import './../css/Card.css';

const Card = ({
    title,
    content,
    cardClasses,
    cardTitleClasses,
    cardContentClasses
  }) => (
  <div className={`card ${cardClasses}`}>
    <div className={`card-title ${cardTitleClasses}`}>{title}</div>
    <div className={`card-content ${cardContentClasses}`}>{content}</div>
  </div>
);

Card.defaultProps = {
  title: '',
  content: '',
  cardClasses: '',
  cardTitleClasses: '',
  cardContentClasses: ''
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ]),
  cardClasses: PropTypes.string,
  cardTitleClasses: PropTypes.string,
  cardContentClasses: PropTypes.string
}

export default Card;
