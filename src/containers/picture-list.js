import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectImage} from "../actions/index";
import {Link} from "react-router-dom";

class PictureList extends Component {

	renderPictureList() {
		return this.props.pictures.map(picture => {
			var searchTerm = this.props.term.toLowerCase();

			if (picture.year.includes(searchTerm) || picture.title.toLowerCase().includes(searchTerm)){
				return (
					<div 
						key={picture.id} 
						onClick={() => this.props.selectImage(picture)}
						className="search-result-item">
						<Link to={`/picture/${picture.id}`} >
							<img src={picture.filepath} />
							<p>{picture.title} - {picture.year}</p>
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
			<div className="search-results">
				{this.renderPictureList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	//Return as props to PictureList
	return {
		pictures: state.pictures,
		term: state.term
	};
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectImage: selectImage}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PictureList);