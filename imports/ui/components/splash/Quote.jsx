import React from 'react';

export const Quote = ({ avatar, content, author }) => {
  return (
    <div className="column row">
      <h3 className="ui center aligned header">
        <img className="ui mini circular image" src={ avatar } />
        <div className="content">
          { content }
          <div className="sub header">{ author }</div>
        </div>
      </h3>
    </div>
  )
};