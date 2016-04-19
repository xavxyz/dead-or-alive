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
    <div className="btn-group-" style={ monkeyPatchStyle }>
      <button
        onClick={ () => FlowRouter.go('sign-in') }
        className="btn btn-lg btn-success"
      >
        YES
      </button>
      <button
        className="btn btn-lg btn-danger"
        onClick={() => window.location = 'https://medium.com/welcome-to-thefamily/stay-focus-b5de376b1359' }
      >
        NO
      </button>
    </div>
  );
};