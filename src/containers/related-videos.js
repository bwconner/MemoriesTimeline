import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class RelatedVideos extends Component {

	renderRelatedVideoList() {

		let relatedVideosArray = this.props.videos.filter(video => {
			if (video.year.includes(this.props.mediaYear) || video.title.includes(this.props.mediaTitle)) {
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
	//Return as props to VideoList
	return {
		videos: state.videos
	};
}

//Promote BookList from a component to a container, it needs to know
//about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps)(RelatedVideos);