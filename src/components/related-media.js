import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class RelatedPictures extends Component {

	renderRelatedPictureList() {

		let relatedPicturesArray = this.props.pictures.filter(picture => {
			if (picture.id !== this.props.mediaId && (picture.year.includes(this.props.mediaYear) || picture.title.includes(this.props.mediaTitle))){
				return picture;
			}
		});

		return relatedPicturesArray.slice(0,5).map(picture => {
			return (
				<div 
					key={picture.id}
					className="search-result-item">
					<Link to={`/picture/${picture.id}`} >
						<img src={picture.filepath} />
						<p>{picture.title} - {picture.year}</p>
						<p>Picture</p>
					</Link>
				</div>
			);
		});
	}

	render() {
		return(
			<div className="related-pictures">
				{this.renderRelatedPictureList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pictures: state.pictures
	};
}

export default RelatedPictures;