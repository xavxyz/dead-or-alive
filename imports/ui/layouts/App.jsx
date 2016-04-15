import React from 'react';

import { Header } from '../components/common/Header.jsx';

export default App = ({ content }) => {
	return (
		<div>
			<Header content="app" />
			<div className="main container">
				{ content() }
			</div>
		</div>
	);
};