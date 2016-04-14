import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';


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
      <button
        onClick={ () => FlowRouter.go('sign-in') }
        className="ui positive button"
      >
        YES
      </button>
      <button
        className="ui negative button"
        onClick={() => window.location = 'https://medium.com/welcome-to-thefamily/stay-focus-b5de376b1359' }
      >
        NO
      </button>
    </div>
  );
};