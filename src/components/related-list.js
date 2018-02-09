import React, { Component } from 'react';
import RelatedVideos from '../containers/related-videos';
import RelatedPictures from '../containers/related-pictures';

export default class RelatedList extends Component {

	render() {
		return (
			<div className="related-list">
				<RelatedVideos mediaYear="2" />
				<RelatedPictures mediaYear="2" />
			</div>
		);
	}
}