import React from 'react';

export const OptionItem = ({ title, state, action }) => (
  <div className="list-group-item">
    <i className="setting icon"></i>
    <div className="content">
      <span>{ title }</span>
      <a className="btn btn-success" onClick={ action }>{ state }</a>
    </div>
  </div>
);