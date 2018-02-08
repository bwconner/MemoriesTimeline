import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ViewPicture extends Component {
  render() {
	return (
		<div>
			<Link to="/" >
				Return to Search
			</Link>
			View Picture Page
		</div>
	);
  }
}
