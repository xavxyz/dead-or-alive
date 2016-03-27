import React from 'react';

export default LifeStatus = ({ color, label = "Any data yet", image = "http://i.giphy.com/BeUmNlLGC5xpS.gif"}) => {

	return (
		<div>
			<h1 style={{ color }}>{ label }</h1>
			<img className="gif-status" src={ image } title={ label } />
		</div>
	);
};