import React from 'react';

import { YesOrNo } from '../components/splash/YesOrNo.jsx';
import { Quote } from '../components/splash/Quote.jsx';

export default IntroPage = () => {
	return (
		<div className="ui stackable columns">
			<YesOrNo />
			<Quote avatar="https://cdn.ycombinator.com/images/people/paulg-3f2f4e41.jpg" content="Few do it for the money. Fewer do it without the money." author="Paul Graham" />
		</div>
	);
};