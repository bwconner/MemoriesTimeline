import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectImage} from "../actions/index";

class PictureList extends Component {

	renderPictureList() {
		return this.props.pictures.map(picture => {
			if (picture.year.includes(this.props.year)){
				return (
					<div 
						key={picture.caption} 
						onClick={() => this.props.selectImage(picture)}
						className="media-left">
						<img src={picture.filepath} />
						<p>{picture.caption} - {picture.year}</p>
					</div>
				);
			} else {
				return;
			}
		});
	}

	render() {
		return(
			<div className="media">
				{this.renderPictureList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	//Return as props to PictureList
	return {
		pictures: state.pictures,
		year: state.year
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