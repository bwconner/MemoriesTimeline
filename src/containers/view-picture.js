import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ViewPicture extends Component {

	render() {
		const {props} = this.props;
		const imageId = this.props.match.params.id;
		const image = props.videos.filter(image => image.id === imageId);

		return (
			<div>
				<Link to="/" className="pull-left">
					Return to Search
				</Link>
				<div>
					<img src={image[0].filepath}/>
				</div>
				<div>
					<h3>{image[0].title}</h3>
					<h4 className="section-divider">{image[0].year}</h4>
					<p>{image[0].caption}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(props) {
	return{props};
}

export default connect(mapStateToProps)(ViewPicture);