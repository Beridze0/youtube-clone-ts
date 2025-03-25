import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://www.googleapis.com/youtube/v3/search";

const initialState = {
  searchArray: [],
  searchValue: "",
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
          part: "snippet",
          maxResults: 10,
          key: "YOUR_YOUTUBE_API_KEY",
        },
      });
      return response.data.items
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch videos")
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
});
