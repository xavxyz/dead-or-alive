import React from 'react';
import { Link } from 'react-router';

export const YesOrNo = () => {
  const monkeyPatchStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '500px',
    margin: 'auto',
    paddingBottom: '1rem'
  };

  return (
    <div className="column row" style={ monkeyPatchStyle }>
      <Link to="/tree">
        <button
          className="ui positive button"
        >
          YES
        </button>
      </Link>
      <button
        className="ui negative button"
        onClick={() => {
                window.location = 'https://medium.com/welcome-to-thefamily/stay-focus-b5de376b1359';
              }}
      >
        NO
      </button>
    </div>
  );
};