import React, { Component } from 'react';
import PictureList from '../containers/picture-list';
import VideoList from '../containers/video-list';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
  render() {
	return (
	  <div>
		<SearchBar />
		<h3 className="results-header">Videos</h3>
		<VideoList />
		<h3 className="results-header">Pictures</h3>
		<PictureList />
	  </div>
	);
  }
}
