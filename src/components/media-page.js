import React, { Component } from 'react';

export default class MediaPage extends Component {

	render() {
		const media = this.props.media[0];

		return (
			<div>
				<div className="media-page-image">
					<img src={media.filepath}/>
				</div>
				<div>
					<h3>{media.title}</h3>
					<h4 className="section-divider">{media.year}</h4>
					<p>{media.caption}</p>
				</div>
			</div>
		);
	}
}