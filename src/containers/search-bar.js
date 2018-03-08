import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {updateTerm} from "../actions/index";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ""};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
		this.props.updateTerm(event.target.value);
	}

	render() {
		return (

			<input
				placeholder="Enter a Search Term"
				value={this.state.term}
				onChange={this.onInputChange}
				className="form-control search-bar"
			/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({updateTerm}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
