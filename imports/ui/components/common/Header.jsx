import React from 'react';

export const Header = ({ content }) => {
  switch (content) {
    case 'app':
      return (
        <header>
          <ul>
            <li><a href="/tree">TREE</a></li>
            <li><a href="/options">OPTIONS</a></li>
          </ul>
        </header>
      );
    default:
      return <h1 className="ui huge header center aligned">Dead or Alive</h1>;
  }
};