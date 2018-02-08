import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ViewVideo extends Component {

	render() {
		const {props} = this.props;
		const imageId = this.props.match.params.id;
		const imageSrc = props.pictures.filter(image => image.id === imageId);

		return (
			<div>
				<Link to="/" >
					Return to Search
				</Link>
				View Video Page
				<img src={imageSrc[0].filepath}/>
			</div>
		);
	}
}

function mapStateToProps(props, ownProps) {
	return{props};
}

export default connect(mapStateToProps)(ViewVideo);