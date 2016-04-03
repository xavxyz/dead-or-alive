import React from 'react';

import UpdateStatus from './UpdateStatus.jsx';
import StartingPoint from './StartingPoint.jsx';

export default class Timeline extends React.Component {
	/*
	componentDidMount() {
		var timelineBlocks = $('.cd-timeline-block'),
			offset = 0.8;

		//hide timeline blocks which are outside the viewport
		hideBlocks(timelineBlocks, offset);

		//on scolling, show/animate timeline blocks when enter the viewport
		$(window).on('scroll', function(){
			(!window.requestAnimationFrame)
				? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
				: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
		});

		function hideBlocks(blocks, offset) {
			blocks.each(function(){
				( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			});
		}

		function showBlocks(blocks, offset) {
			blocks.each(function(){
				( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			});
		}
	}
	*/

	render() {
		return (
			<div>
				<header>
					<h1>Is your startup Dead or Alive ?</h1>
					<UpdateStatus />
				</header>
				<section id="cd-timeline" className="cd-container">
					{ this.props.revenues.map(doc => <WeekCard key={ doc._id } { ...doc } />) }
					<StartingPoint />
				</section>
			</div>
		);
	}
};

Timeline.propTypes = {
	revenues: React.PropTypes.array
};