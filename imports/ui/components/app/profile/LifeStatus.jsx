import React from 'react';

export const LifeStatus = ({ username, status, gifDisplay }) => {

  const style = status.alive
    ? { color: 'green', gif: 'http://i.giphy.com/uvU9WUwlj4SIg.gif', text: 'ALIVE', alertClassName: 'alert-success' }
    : status.alive === null
      ? { color: 'grey', gif: 'http://i.giphy.com/GhVTo53nhsGME.gif', text: 'NO DATA', alertClassName: 'alert-warning' }
      : { color: 'red', gif: 'http://i.giphy.com/uhA0pldQaXUNW.gif', text: 'DEAD', alertClassName: 'alert-danger' };

  const displayStatus = `display-status alert ${ style.alertClassName }`;

  return (
    <div className="media panel-body profile-status">
      <span className="username">{ username }</span>

      <div className={ displayStatus }>
        { gifDisplay ? <img src={ style.gif } className="img-responsive img-rounded" /> : <h1 className="text-status">{ style.text }</h1> }
      </div>

      <div id="profile-stats">
        <span className="head">Relative Growth</span>
        <span className="numbers" style={ { color: style.color } }>{ status.growth }%</span>
      </div>
    </div>
  );
};
