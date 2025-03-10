import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search";

interface VideoSnippet {
  channelTitle: string;
  title: string;
  thumbnails: {
    maxres: { url: string };
  };
}

interface VideoItem {
  id: { videoId: string };
  snippet: VideoSnippet;
}

interface VideoState {
  videos: VideoItem[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  searchQuery: localStorage.getItem("searchQuery") || "", 
  loading: false,
  error: null,
};

export const fetchVideosForSearch = createAsyncThunk(
  "videos/fetchVideos",
  async (query: string) => {
    localStorage.setItem("searchQuery", query);
    const response = await axios.get(BASE_URL, {
      params: {
        part: "snippet",
        maxResults: 20,
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      localStorage.setItem("searchQuery", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosForSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchVideosForSearch.fulfilled,
        (state, action: PayloadAction<VideoItem[]>) => {
          state.videos = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchVideosForSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch videos";
      });
  },
});

export const { setSearchQuery } = videoSlice.actions;
export default videoSlice.reducer;
