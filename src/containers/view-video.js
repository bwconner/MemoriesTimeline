import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MediaPage from "../components/media-page";
import RelatedList from "../components/related-list";

class ViewVideo extends Component {

	render() {
		const {props} = this.props;
		const videoId = this.props.match.params.id;
		const video = props.videos.filter(video => video.id === videoId);

		return (
			<div>
				<Link to="/" className="pull-left">
					Return to Search
				</Link>
				<MediaPage media={video} />
				<RelatedList mediaYear={video[0].year} mediaTitle={video[0].title} />
			</div>
		);
	}
}

function mapStateToProps(props) {
	return{props};
}

export default connect(mapStateToProps)(ViewVideo);