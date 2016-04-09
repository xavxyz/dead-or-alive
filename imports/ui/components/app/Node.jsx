import React from 'react';

export const Node = ({ className = "alive", icon = "heartbeat" }) => {

  const nodeClass = `cd-timeline-img cd-${className}`;
  const nodeIcon = `${icon} icon`;

  return (
    <div className={ nodeClass }>
      <i className={ nodeIcon }></i>
    </div>
  );
};