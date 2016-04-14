import React from 'react';

export const Option = ({ title, state, action }) => (
  <div className="item">
    <i className="setting icon"></i>
    <div className="content">
      <span className="header">{ title }</span>
      <a className="mini ui button" onClick={ action }>{ state }</a>
    </div>
  </div>
);