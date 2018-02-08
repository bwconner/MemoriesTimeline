import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectVideo} from "../actions/index";
import {Link} from "react-router-dom";

class VideoList extends Component {

	renderVideoList() {
		return this.props.videos.map(video => {
			if (video.year.includes(this.props.year)){
				return (
					<div 
						key={video.id} 
						onClick={() => this.props.selectVideo(video)}
						className="search-result-item">
						<Link to={`/video/${video.id}`} >
							<img src={video.filepath} />
							<p>{video.caption} - {video.year}</p>
						</Link>
					</div>
				);
			} else {
				return;
			}
		});
	}

	render() {
		return(
			<div className="seatch-results">
				{this.renderVideoList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	//Return as props to VideoList
	return {
		videos: state.videos,
		year: state.year
	};
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({selectVideo: selectVideo}, dispatch);
}

//Promote BookList from a component to a container, it needs to know
//about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);