import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ViewVideo extends Component {
  render() {
	return (
		<div>
			<Link to="/" >
				Return to Search
			</Link>
			View Image Page
		</div>
	);
  }
}
