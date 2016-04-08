import React from 'react';
import { IndexLink, Link } from 'react-router';

import { Footer } from '../components/common/Footer.jsx';

export const App = ({ children }) => {
	return (
		<div>
			<header>
				<ul>
					<li><Link to="/update" activeClassName="active">UPDATE STATUS</Link></li>
					<li><Link to="/tree" activeClassName="active">TREE</Link></li>
					<li><Link to="/options" activeClassName="active">OPTIONS</Link></li>
				</ul>
			</header>
			<div>
				{ children }
			</div>
			<Footer />
		</div>
	);
};