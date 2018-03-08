import {UPDATE_SEARCH} from "../actions/index"

export default function(state = "", action) {
	switch(action.type) {
		case UPDATE_SEARCH:
			return action.payload;
	}
	return state;
}