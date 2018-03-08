import { combineReducers } from "redux";
import PicturesReducer from "./reducer_pictures";
import VideosReducer from "./reducer_videos";
import TermReducer from "./reducer_term";

const rootReducer = combineReducers({
  pictures: PicturesReducer,
  videos: VideosReducer,
  term: TermReducer
});

export default rootReducer;
