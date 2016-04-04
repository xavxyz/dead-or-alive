import React from 'react';

const LifeStatus = ({ color, label = 'without data yet', image = 'http://i.giphy.com/GhVTo53nhsGME.gif' }) => (
	<div>
		<div>
			<h1>Your startup is <span style={{ color }}>{ label }</span>!</h1>
			<img className="gif" src={ image } title={ label } />
		</div>
	</div>
);

export default LifeStatus;