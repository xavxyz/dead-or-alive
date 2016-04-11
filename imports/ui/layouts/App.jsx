import React from 'react';

import { Header } from '../components/common/Header.jsx';
import { Footer } from '../components/common/Footer.jsx';

export const App = ({ children }) => {
	return (
		<div>
			<Header content="app" />
			<div>
				{ children }
			</div>
			<Footer />
		</div>
	);
};