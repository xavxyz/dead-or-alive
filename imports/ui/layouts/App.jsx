import React from 'react';

import { Header } from '../components/common/Header.jsx';
import { Footer } from '../components/common/Footer.jsx';

export const App = ({ content }) => {
	return (
		<div>
			<Header content="app" />
			<div>
				{ content }
			</div>
			<Footer />
		</div>
	);
};