import React from 'react';

import './../css/Card.css';

const Card = ({
    title = '',
    content = '',
    cardClasses = '',
    cardTitleClasses = '',
    cardContentClasses = ''
  }) => (
    <div className={`card ${cardClasses}`}>
      <div className={`card-title ${cardTitleClasses}`}>{title}</div>
      <div className={`card-content ${cardContentClasses}`}>{content}</div>
    </div>
  );

export default Card;
