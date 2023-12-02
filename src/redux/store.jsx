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
import { channelDetailsReducer } from "./reducer/channel.reducer";
import { commentListReducer } from "./reducer/comments.reducer";
import { authReducer } from "./reducer/auth.reducer";
// If you have other reducers, import them here

const rootReducer = {
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  relatedVideo: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  auth: authReducer,
  // Add other reducers here
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
