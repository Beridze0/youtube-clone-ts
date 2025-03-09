import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos";

interface VideoSnippet {
  channelTitle: string;
  title: string;
  description: string;
  publishedAt: string
  thumbnails: {
    maxres: { url: string };
  };
}

interface VideoItem {
  id: string;
  snippet: VideoSnippet;
}

interface VideoState {
  videos: VideoItem[];
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 35,
      regionCode: "US",
      videoCategoryId: 0,
      key: API_KEY,
    },
  });
  return response.data.items;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchVideos.fulfilled,
        (state, action: PayloadAction<VideoItem[]>) => {
          state.videos = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch videos";
      });
  },
});

export default videoSlice.reducer;
