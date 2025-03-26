import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "@/components/custom/VideoList";
import { addSearchQuery } from "@/redux/searchSlice"; // Action to set query in state

const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the query is valid and not empty
    if (query) {
      // Retrieve existing search history from localStorage
      const existingSearchHistory = JSON.parse(localStorage.getItem('search-history') || '[]');

      // If the query isn't already in the history, add it
      if (!existingSearchHistory.includes(query)) {
        existingSearchHistory.push(query);

        // Save the updated search history to localStorage
        localStorage.setItem('search-history', JSON.stringify(existingSearchHistory));

        // Dispatch the action to update Redux state
        dispatch(addSearchQuery(query));
      }
    }
  }, [dispatch, query]);

  return (
    <div className="">
      <VideoList />
    </div>
  );
};

export default SearchPage;
