import React from 'react';
import { Link } from 'react-router';

export const Header = ({ content }) => {
  switch (content) {
    case 'app':
      return (
        <header>
          <ul>
            <li><Link to="/tree" activeClassName="active">TREE</Link></li>
            <li><Link to="/options" activeClassName="active">OPTIONS</Link></li>
          </ul>
        </header>
      );
    default:
      return <h1 className="ui huge header center aligned">Dead or Alive</h1>;
  }
};