import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/tree" activeClassName="active">TREE</Link></li>
        <li><Link to="/options" activeClassName="active">OPTIONS</Link></li>
      </ul>
    </header>
  );
};