import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Load previous search history from localStorage
const initialSearchTerm: string[] = JSON.parse(localStorage.getItem("searchHistory") || "[]");

// Async thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
  "search/fetchResults",
  async (query: string) => {
    const response = await axios.get(
      `https://api.example.com/search?q=${query}`
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: initialSearchTerm,
    results: [], 
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      const newHistory = [action.payload, ...state.searchTerm.filter(term => term !== action.payload)];

      if (newHistory.length > 10) newHistory.pop();

      state.searchTerm = newHistory;
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
