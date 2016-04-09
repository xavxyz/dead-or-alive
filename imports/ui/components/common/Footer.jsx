import React from 'react';

export const Footer = () =>
  <button
    style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
    className="ui button"
    onClick={ () => window.location = 'http://hacklearnmake.com' }
  >
    { '{Hack, Learn} = Make' }
  </button>;

