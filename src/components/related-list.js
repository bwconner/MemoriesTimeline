import React, { Component } from 'react';
import RelatedVideos from '../containers/related-videos';
import RelatedPictures from '../containers/related-pictures';

export default class RelatedList extends Component {

	render() {
		return (
			<div className="related-list">
				<RelatedVideos mediaYear={this.props.mediaYear} mediaTitle={this.props.mediaTitle} mediaId={this.props.mediaId}/>
				<RelatedPictures mediaYear={this.props.mediaYear} mediaTitle={this.props.mediaTitle} mediaId={this.props.mediaId}/>
			</div>
		);
	}
}