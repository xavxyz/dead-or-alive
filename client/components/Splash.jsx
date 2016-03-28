import React from 'react';
import { LogInButtonsDialog } from 'meteor/alt:react-accounts-ui';

export default Splash = () => {
	return (
		<div className="ui container" style={{ marginTop: '10%' }}>
			<div className="ui stackable two column centered grid">
				<div className="column row">
					<h1 className="ui huge header">Dead or Alive</h1>
				</div>
				<div className="column row">
					<img className="ui image rounded" src="http://i.giphy.com/iaUwUWwY99Tuo.gif" />
				</div>
				<div className="column row">
					<h2 className="ui center aligned header">Does your startup generates revenue?</h2>
				</div>
				<div className="column row">
					<LogInButtonsDialog />
					<div className="ui buttons">
						<button
							className="ui positive button"
							onClick={(event) => {
								event.preventDefault();
    						AltAccounts.currentState('logIn');
							}}
						>YES</button>
						<div className="or"></div>
						<button
							className="ui negative button"
							onClick={() => {
								window.location = 'https://medium.com/welcome-to-thefamily/stay-focus-b5de376b1359';
							}}
						>NO</button>
					</div>
				</div>
				<div className="ui stackable two column grid">
					<div className="column">
						<h3 className="ui header center aligned">
							<img className="ui mini circular image" src="https://cdn.ycombinator.com/images/people/paulg-3f2f4e41.jpg" />
							<div className="content">
								Few do it for the money. Fewer do it without the money.
								<div className="sub header">Paul Graham</div>
							</div>
						</h3>
					</div>
					<div className="column">
						<h3 className="ui header center aligned">
							<img className="ui mini circular image" src="https://cdn-images-1.medium.com/fit/c/60/60/0*SSaXMiDnoQL-MBt6.jpeg" />
							<div className="content">
								For 99% of companies, the life metrics come down to revenue.
								<div className="sub header">Oussama Ammar</div>
							</div>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};