import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  subscriptionsChannelReducer,
  channelVideosReducer,
  selectedVideoReducer,
} from "./reducer/video.reducer";

// If you have other reducers, import them here

const rootReducer = {
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
  // Add other reducers here
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
