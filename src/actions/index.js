export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const IMAGE_SELECTED = "IMAGE_SELECTED";
export const VIDEO_SELECTED = "VIDEO_SELECTED";


export function updateYear(year) {	
	//A search has been completed, need to return list of pictures and videos
	return {
		type: UPDATE_SEARCH, //describes purpose of the action
		payload: year //clarifies conditons of action being triggered
	};
}

export function selectImage(image) {	
	//A search has been completed, need to return list of pictures and videos
	return {
		type: IMAGE_SELECTED, //describes purpose of the action
		payload: image //clarifies conditons of action being triggered
	};
}

export function selectVideo(video) {	
	//A search has been completed, need to return list of pictures and videos
	return {
		type: VIDEO_SELECTED, //describes purpose of the action
		payload: video //clarifies conditons of action being triggered
	};
}