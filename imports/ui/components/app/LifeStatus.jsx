import React from 'react';

export const LifeStatus = ({ color, label = 'without data yet', image = 'http://i.giphy.com/GhVTo53nhsGME.gif' }) => (
	<div className="cd-timeline-block">
		<div className="cd-timeline-content">
			<h1>Your startup is <span style={{ color }}>{ label }</span>!</h1>
			<img className="gif" src={ image } title={ label } />
		</div>
	</div>
);