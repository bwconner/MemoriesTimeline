import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class RelatedPictures extends Component {

	renderRelatedPictureList() {
		return this.props.pictures.map(picture => {
			if (picture.year.includes(this.props.mediaYear)){
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
			} else {
				return;
			}
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
	//Return as props to VideoList
	return {
		pictures: state.pictures
	};
}

//Promote BookList from a component to a container, it needs to know
//about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps)(RelatedPictures);