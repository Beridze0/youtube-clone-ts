import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
console.log("API Key:", API_KEY);


interface StateValues {
  searchArray: string[];
  videos: any[];
  loading: boolean;
  error: string | null;
}

const initialState: StateValues = {
  searchArray: [],
  videos: [],
  loading: false,
  error: null,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          regionCode: "US",
          part: "snippet",
          maxResults: 30,
          key: API_KEY,
        },
      });
      return response.data.items;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch videos");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchArray.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
