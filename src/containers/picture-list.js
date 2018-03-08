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

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
	//Whenever selectBook is called, the result should be passed
	//to all of our reducers
	return bindActionCreators({selectImage: selectImage}, dispatch);
}

//Promote BookList from a component to a container, it needs to know
//about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(PictureList);