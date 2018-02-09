import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
				<div>
					<img src={video[0].filepath}/>
				</div>
				<div>
					<h3>{video[0].title}</h3>
					<h4 className="section-divider">{video[0].year}</h4>
					<p>{video[0].caption}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(props) {
	return{props};
}

export default connect(mapStateToProps)(ViewVideo);