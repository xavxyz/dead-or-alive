import React from 'react';

export const Quote = ({ avatar, content, author }) => {
  return (
    <div className="column row">
      <h3>
        <img className="quote-image img-circle" src={ avatar } />
        <div className="quote-content">
          { content }
          <span className="quote-author">— { author }</span>
        </div>
      </h3>
    </div>
  )
};