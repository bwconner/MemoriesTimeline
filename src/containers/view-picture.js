import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MediaPage from "../components/media-page";
import RelatedList from "../components/related-list";

class ViewPicture extends Component {

	render() {
		const {props} = this.props;
		const imageId = this.props.match.params.id;
		const image = props.pictures.filter(image => image.id === imageId);

		return (
			<div>
				<Link to="/" className="pull-left btn btn-info">
					Return to Search
				</Link>
				<MediaPage media={image} />
				<RelatedList mediaYear={image[0].year} mediaTitle={image[0].title} mediaId={image[0].id} />
			</div>
		);
	}
}

function mapStateToProps(props) {
	return{props};
}

export default connect(mapStateToProps)(ViewPicture);