import React from 'react';

export default Loading = () => {
	return (
		<div className="ui container" style={{ marginTop: '10%' }}>
			<h1 className="ui center aligned header">Loading...</h1>
			<img src="http://i.giphy.com/u4th4weIsJfuE.gif" className="ui centered medium image gif" title="Loading" />
		</div>
	);
};