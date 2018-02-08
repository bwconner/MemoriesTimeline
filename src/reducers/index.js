import { combineReducers } from "redux";
import PicturesReducer from "./reducer_pictures";
import VideosReducer from "./reducer_videos";
import YearReducer from "./reducer_year";

const rootReducer = combineReducers({
  pictures: PicturesReducer,
  videos: VideosReducer,
  year: YearReducer
});

export default rootReducer;
