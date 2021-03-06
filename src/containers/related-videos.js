import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class RelatedVideos extends Component {

	renderRelatedVideoList() {

		let relatedVideosArray = this.props.videos.filter(video => {
			if (video.id !== this.props.mediaId && (video.year.includes(this.props.mediaYear) || video.title.includes(this.props.mediaTitle))) {
				return video;
			}
		});

		return relatedVideosArray.slice(0,5).map(video => {
			return (
				<div 
					key={video.id}
					className="search-result-item">
					<Link to={`/video/${video.id}`} >
						<img src={video.filepath} />
						<p>{video.title} - {video.year}</p>
						<p>Video</p>
					</Link>
				</div>
			);
		});
	}

	render() {
		return(
			<div className="related-videos">
				{this.renderRelatedVideoList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		videos: state.videos
	};
}

export default connect(mapStateToProps)(RelatedVideos);