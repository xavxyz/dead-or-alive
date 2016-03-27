import React from 'react';

export default LifeStatus = ({ color, label }) => {
	return color && label ? <h1 style={{ color }}>{ label }</h1> : <h1>Any data yet.</h1>;
};