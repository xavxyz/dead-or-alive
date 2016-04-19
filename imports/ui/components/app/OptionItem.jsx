import React from 'react';

export const OptionItem = ({ title, state, action }) => {
  let buttonClassName = `btn btn-xs btn-${ state ? 'success' : 'danger' }`;
  return (
    <div className="list-group-item">
      <div className="row option-content">
        <div className="col-xs-1">
          <i className="fa fa-cog"></i>
        </div>
        <div className="col-xs-8">
          { title }
        </div>
        <div className="col-xs-3">
          <a className={ buttonClassName } onClick={ action }>{ state ? 'ON' : 'OFF' }</a>
        </div>
      </div>
    </div>
  );
};