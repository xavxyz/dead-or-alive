import React from 'react';

export const LifeStatus = ({ username, status, gifDisplay }) => {

  const style = status.alive
    ? { color: 'green', gif: 'http://i.giphy.com/uvU9WUwlj4SIg.gif', text: 'ALIVE' }
    : status.alive === null
      ? { color: 'grey', gif: 'http://i.giphy.com/GhVTo53nhsGME.gif', text: 'NO DATA YET' }
      : { color: 'red', gif: 'http://i.giphy.com/uhA0pldQaXUNW.gif', text: 'DEAD' };

  return (
    <div className="media panel-body profile-status">
      <div className="media-body">
        <span className="username"><strong>{ username }</strong></span>
      </div>

      <div className="display-status">
        { gifDisplay ? <img src={ style.gif } className="gif-status img-responsive img-rounded" /> : <span className="text-status">{ style.text }</span> }
      </div>

      <div id="profile-stats">
        <span className="head">Relative Growth</span>
        <span className="numbers" style={ { color: style.color } }>{ status.growth }%</span>
      </div>
    </div>
  );
};
